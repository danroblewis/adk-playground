import { useState, useEffect, useRef } from 'react';
import { Play, Square, Send, Clock, Cpu, Wrench, GitBranch, MessageSquare, Database, ChevronDown, ChevronRight, Zap, Save } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { RunEvent } from '../utils/types';
import { createRunWebSocket, updateProject as apiUpdateProject } from '../utils/api';

const EVENT_ICONS: Record<string, React.FC<{ size: number }>> = {
  agent_start: GitBranch,
  agent_end: GitBranch,
  tool_call: Wrench,
  tool_result: Wrench,
  model_call: Cpu,
  model_response: MessageSquare,
  state_change: Database,
  transfer: Zap,
};

const EVENT_COLORS: Record<string, string> = {
  agent_start: '#7b2cbf',
  agent_end: '#7b2cbf',
  tool_call: '#00f5d4',
  tool_result: '#00f5d4',
  model_call: '#ffd93d',
  model_response: '#ffd93d',
  state_change: '#ff6b6b',
  transfer: '#00d4ff',
};

export default function RunPanel() {
  const { project, isRunning, setIsRunning, runEvents, addRunEvent, clearRunEvents, hasUnsavedChanges, setHasUnsavedChanges } = useStore();
  const [userInput, setUserInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [expandedEvents, setExpandedEvents] = useState<Set<number>>(new Set());
  const [timelineRange, setTimelineRange] = useState<[number, number]>([0, 100]);
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const [collapsedAgents, setCollapsedAgents] = useState<Set<string>>(new Set());
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  if (!project) return null;
  
  useEffect(() => {
    // Auto-scroll to bottom
    eventsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [runEvents.length]);
  
  function handleRunClick() {
    if (!userInput.trim()) return;
    
    if (hasUnsavedChanges) {
      setShowUnsavedWarning(true);
      return;
    }
    
    handleRun();
  }
  
  function handleRun() {
    if (!userInput.trim()) return;
    setShowUnsavedWarning(false);
    
    clearRunEvents();
    setIsRunning(true);
    setExpandedEvents(new Set());
    
    const websocket = createRunWebSocket(project.id);
    setWs(websocket);
    
    websocket.onopen = () => {
      websocket.send(JSON.stringify({ message: userInput }));
    };
    
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'completed') {
        setIsRunning(false);
        websocket.close();
      } else if (data.type === 'error') {
        setIsRunning(false);
        addRunEvent({
          timestamp: Date.now() / 1000,
          event_type: 'agent_end',
          agent_name: 'system',
          data: { error: data.error }
        });
      } else {
        addRunEvent(data);
      }
    };
    
    websocket.onerror = () => {
      setIsRunning(false);
      addRunEvent({
        timestamp: Date.now() / 1000,
        event_type: 'agent_end',
        agent_name: 'system',
        data: { error: 'WebSocket error' }
      });
    };
    
    websocket.onclose = () => {
      setIsRunning(false);
    };
  }
  
  async function handleSaveAndRun() {
    if (!userInput.trim()) return;
    
    setIsSaving(true);
    try {
      await apiUpdateProject(project.id, project);
      setHasUnsavedChanges(false);
      setShowUnsavedWarning(false);
      // Now run with the saved config
      handleRun();
    } catch (error) {
      console.error('Failed to save project:', error);
      addRunEvent({
        timestamp: Date.now() / 1000,
        event_type: 'agent_end',
        agent_name: 'system',
        data: { error: 'Failed to save project before running' }
      });
    } finally {
      setIsSaving(false);
    }
  }
  
  function handleStop() {
    ws?.close();
    setIsRunning(false);
  }
  
  function toggleEventExpand(index: number) {
    const next = new Set(expandedEvents);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setExpandedEvents(next);
  }
  
  function toggleAgentCollapse(name: string) {
    const next = new Set(collapsedAgents);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setCollapsedAgents(next);
  }
  
  // Filter events by timeline range
  const minTime = runEvents.length > 0 ? runEvents[0].timestamp : 0;
  const maxTime = runEvents.length > 0 ? runEvents[runEvents.length - 1].timestamp : 0;
  const duration = maxTime - minTime || 1;
  
  const filteredEvents = runEvents.filter((event, i) => {
    const percent = ((event.timestamp - minTime) / duration) * 100;
    return percent >= timelineRange[0] && percent <= timelineRange[1];
  });
  
  // Calculate token totals for the filtered time range
  const tokenTotals = filteredEvents.reduce(
    (acc, event) => {
      if (event.event_type === 'model_response' && event.data?.token_counts) {
        acc.input += event.data.token_counts.input || 0;
        acc.output += event.data.token_counts.output || 0;
      }
      return acc;
    },
    { input: 0, output: 0 }
  );
  const totalTokens = tokenTotals.input + tokenTotals.output;
  
  // Group events by agent for collapsing
  function renderEvents() {
    let currentAgent: string | null = null;
    let agentEvents: { event: RunEvent; index: number }[] = [];
    const elements: React.ReactNode[] = [];
    
    function flushAgent() {
      if (currentAgent && agentEvents.length > 0) {
        // Capture values in local variables to avoid closure issues
        const agentName = currentAgent;
        const events = [...agentEvents];
        // Use unique key combining agent name and start index to handle multiple groups with same agent
        const groupKey = `${agentName}-${events[0].index}`;
        const isCollapsed = collapsedAgents.has(groupKey);
        
        elements.push(
          <div key={`agent-${groupKey}`} className="agent-group">
            <div 
              className="agent-group-header"
              onClick={() => toggleAgentCollapse(groupKey)}
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
              <span className="agent-name">{agentName}</span>
              <span className="event-count">{events.length} events</span>
            </div>
            {!isCollapsed && (
              <div className="agent-events">
                {events.map(({ event, index }) => (
                  <EventItem 
                    key={index}
                    event={event}
                    index={index}
                    expanded={expandedEvents.has(index)}
                    onToggle={() => toggleEventExpand(index)}
                  />
                ))}
              </div>
            )}
          </div>
        );
        agentEvents = [];
      }
    }
    
    filteredEvents.forEach((event, i) => {
      const globalIndex = runEvents.indexOf(event);
      if (event.agent_name !== currentAgent) {
        flushAgent();
        currentAgent = event.agent_name;
      }
      agentEvents.push({ event, index: globalIndex });
    });
    flushAgent();
    
    return elements;
  }
  
  return (
    <div className="run-panel">
      <style>{`
        .run-panel {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 180px);
          gap: 16px;
        }
        
        .input-area {
          display: flex;
          gap: 12px;
          background: var(--bg-secondary);
          padding: 16px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }
        
        .input-area textarea {
          flex: 1;
          min-height: 60px;
          resize: none;
        }
        
        .input-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .timeline-area {
          background: var(--bg-secondary);
          padding: 12px 16px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }
        
        .timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .timeline-header h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        
        .timeline-header h4 svg {
          color: var(--accent-primary);
        }
        
        .timeline-stats {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .token-stats {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 2px 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          cursor: help;
        }
        
        .token-input {
          color: #4ecdc4;
        }
        
        .token-output {
          color: #ff6b6b;
        }
        
        .token-total {
          color: var(--text-secondary);
          font-weight: 600;
        }
        
        .timeline-slider {
          width: 100%;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          position: relative;
        }
        
        .timeline-slider input[type="range"] {
          position: absolute;
          width: 100%;
          height: 100%;
          background: transparent;
          -webkit-appearance: none;
          pointer-events: none;
        }
        
        .timeline-slider input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: var(--accent-primary);
          border-radius: 50%;
          cursor: pointer;
          pointer-events: all;
        }
        
        .events-area {
          flex: 1;
          overflow-y: auto;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          padding: 12px;
        }
        
        .agent-group {
          margin-bottom: 8px;
        }
        
        .agent-group-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .agent-group-header:hover {
          background: var(--bg-hover);
        }
        
        .agent-group-header .agent-name {
          font-weight: 600;
          flex: 1;
        }
        
        .agent-group-header .event-count {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .agent-events {
          padding-left: 20px;
          margin-top: 4px;
        }
        
        .event-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 12px;
          border-radius: var(--radius-md);
          margin-bottom: 4px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .event-item:hover {
          background: var(--bg-tertiary);
        }
        
        .event-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }
        
        .event-content {
          flex: 1;
          min-width: 0;
        }
        
        .event-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        
        .event-type {
          font-size: 11px;
          padding: 2px 6px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
        }
        
        .event-time {
          font-size: 11px;
          color: var(--text-muted);
          margin-left: auto;
        }
        
        .event-preview {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .event-details {
          margin-top: 8px;
          padding: 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: 12px;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .event-details pre {
          font-family: var(--font-mono);
          white-space: pre-wrap;
          word-break: break-all;
          margin: 0;
        }
        
        .token-count {
          font-size: 10px;
          color: var(--text-muted);
          margin-left: auto;
          font-family: var(--font-mono);
        }
        
        .detail-section {
          margin-bottom: 12px;
        }
        
        .detail-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        
        .detail-text {
          padding: 8px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 12px;
          line-height: 1.5;
        }
        
        .system-instruction {
          color: var(--accent-secondary);
          max-height: 100px;
          overflow-y: auto;
        }
        
        .tool-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        
        .tool-badge {
          padding: 2px 8px;
          background: rgba(0, 245, 212, 0.1);
          color: var(--accent-primary);
          border-radius: 999px;
          font-size: 11px;
          font-family: var(--font-mono);
        }
        
        .messages-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .message {
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border-left: 3px solid;
        }
        
        .message-user {
          background: rgba(0, 245, 212, 0.05);
          border-color: var(--accent-primary);
        }
        
        .message-model {
          background: rgba(255, 217, 61, 0.05);
          border-color: var(--accent-secondary);
        }
        
        .message-role {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 4px;
        }
        
        .message-parts {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .part {
          font-size: 12px;
          line-height: 1.5;
        }
        
        .part-text .part-content {
          white-space: pre-wrap;
        }
        
        .part-thought {
          background: rgba(123, 44, 191, 0.1);
          padding: 8px;
          border-radius: var(--radius-sm);
        }
        
        .thought-badge {
          font-size: 10px;
          margin-bottom: 4px;
          display: block;
          color: #7b2cbf;
        }
        
        .part-function-call {
          background: rgba(0, 245, 212, 0.1);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }
        
        .fn-name {
          color: var(--accent-primary);
          font-weight: 600;
        }
        
        .fn-args {
          color: var(--text-muted);
          margin-left: 4px;
        }
        
        .part-function-response {
          background: var(--bg-primary);
          padding: 8px;
          border-radius: var(--radius-sm);
        }
        
        .fn-response {
          margin-top: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .detail-meta {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }
        
        .model-response-details .part {
          margin-bottom: 8px;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          text-align: center;
          padding: 40px;
        }
        
        .empty-state svg {
          margin-bottom: 16px;
          opacity: 0.3;
        }
        
        .running-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-primary);
          font-size: 13px;
        }
        
        .running-indicator .dot {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .warning-dialog {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .warning-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 400px;
          text-align: center;
        }
        
        .warning-content h3 {
          margin-bottom: 12px;
          color: #ffd93d;
        }
        
        .warning-content p {
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .warning-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
      `}</style>
      
      {showUnsavedWarning && (
        <div className="warning-dialog">
          <div className="warning-content">
            <h3>⚠️ Unsaved Changes</h3>
            <p>You have unsaved changes. The agent will run with the last saved configuration.</p>
            <div className="warning-actions">
              <button 
                className="btn btn-secondary" 
                onClick={handleSaveAndRun}
                disabled={isSaving}
              >
                <Save size={14} />
                {isSaving ? 'Saving...' : 'Save & Run'}
              </button>
              <button className="btn btn-primary" onClick={handleRun}>
                Run Anyway
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="input-area">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              handleRunClick();
            }
          }}
          placeholder="Enter a message to test your agent... (⌘+Enter to run)"
          disabled={isRunning}
        />
        <div className="input-actions">
          {isRunning ? (
            <button className="btn btn-danger" onClick={handleStop}>
              <Square size={16} />
              Stop
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleRunClick} disabled={!userInput.trim()}>
              <Play size={16} />
              Run
            </button>
          )}
        </div>
      </div>
      
      {runEvents.length > 0 && (
        <div className="timeline-area">
          <div className="timeline-header">
            <h4><Clock size={14} /> Timeline</h4>
            <div className="timeline-stats">
              <span>{filteredEvents.length} events</span>
              <span>{(duration * 1000).toFixed(0)}ms</span>
              {totalTokens > 0 && (
                <span className="token-stats" title={`Input: ${tokenTotals.input} | Output: ${tokenTotals.output}`}>
                  <span className="token-input">{tokenTotals.input}↓</span>
                  <span className="token-output">{tokenTotals.output}↑</span>
                  <span className="token-total">= {totalTokens}</span>
                </span>
              )}
              {isRunning && (
                <span className="running-indicator">
                  <span className="dot" />
                  Running...
                </span>
              )}
            </div>
          </div>
          <div className="timeline-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={timelineRange[0]}
              onChange={(e) => setTimelineRange([parseInt(e.target.value), timelineRange[1]])}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={timelineRange[1]}
              onChange={(e) => setTimelineRange([timelineRange[0], parseInt(e.target.value)])}
            />
          </div>
        </div>
      )}
      
      <div className="events-area">
        {runEvents.length === 0 ? (
          <div className="empty-state">
            <Play size={48} />
            <p>No events yet. Enter a message and click Run to test your agent.</p>
          </div>
        ) : (
          <>
            {renderEvents()}
            <div ref={eventsEndRef} />
          </>
        )}
      </div>
    </div>
  );
}

function EventItem({ 
  event, 
  index, 
  expanded, 
  onToggle 
}: { 
  event: RunEvent; 
  index: number;
  expanded: boolean; 
  onToggle: () => void;
}) {
  const Icon = EVENT_ICONS[event.event_type] || MessageSquare;
  const color = EVENT_COLORS[event.event_type] || '#888';
  
  function getPreview() {
    switch (event.event_type) {
      case 'tool_call':
        return `${event.data.tool_name}(${Object.keys(event.data.args || {}).join(', ')})`;
      case 'tool_result':
        return event.data.result_preview?.slice(0, 100);
      case 'model_call':
        const msgCount = event.data.contents?.length || 0;
        const toolCount = event.data.tool_count || 0;
        return `${msgCount} messages, ${toolCount} tools available`;
      case 'model_response':
        // Get preview from parts
        const parts = event.data.parts || [];
        const textPart = parts.find((p: any) => p.type === 'text');
        const fnCallPart = parts.find((p: any) => p.type === 'function_call');
        if (fnCallPart) return `→ ${fnCallPart.name}()`;
        if (textPart) return textPart.text?.slice(0, 100);
        return event.data.response_preview?.slice(0, 100);
      case 'state_change':
        return Object.keys(event.data.state_delta || {}).join(', ');
      case 'agent_start':
        return event.data.instruction?.slice(0, 100);
      default:
        return '';
    }
  }
  
  const preview = getPreview();
  
  return (
    <div className="event-item" onClick={onToggle}>
      <div className="event-icon" style={{ background: `${color}20` }}>
        <Icon size={14} style={{ color }} />
      </div>
      <div className="event-content">
        <div className="event-header">
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span className="event-type">{event.event_type.replace('_', ' ')}</span>
          {event.event_type === 'model_response' && event.data.token_counts && (
            <span className="token-count">
              {event.data.token_counts.input || 0}↓ {event.data.token_counts.output || 0}↑
            </span>
          )}
        </div>
        {preview && !expanded && (
          <div className="event-preview">{preview}</div>
        )}
        {expanded && (
          <div className="event-details">
            <EventDetails event={event} />
          </div>
        )}
      </div>
    </div>
  );
}

// Render rich event details
function EventDetails({ event }: { event: RunEvent }) {
  if (event.event_type === 'model_call') {
    return <ModelCallDetails data={event.data} />;
  }
  if (event.event_type === 'model_response') {
    return <ModelResponseDetails data={event.data} />;
  }
  // Fallback to JSON for other event types
  return <pre>{JSON.stringify(event.data, null, 2)}</pre>;
}

function ModelCallDetails({ data }: { data: any }) {
  const contents = data.contents || [];
  const toolNames = data.tool_names || [];
  
  return (
    <div className="model-call-details">
      {data.system_instruction && (
        <div className="detail-section">
          <div className="detail-label">System Instruction</div>
          <div className="detail-text system-instruction">{data.system_instruction}</div>
        </div>
      )}
      
      {toolNames.length > 0 && (
        <div className="detail-section">
          <div className="detail-label">Available Tools ({toolNames.length})</div>
          <div className="tool-badges">
            {toolNames.map((name: string) => (
              <span key={name} className="tool-badge">{name}</span>
            ))}
          </div>
        </div>
      )}
      
      <div className="detail-section">
        <div className="detail-label">Conversation ({contents.length} messages)</div>
        <div className="messages-list">
          {contents.map((content: any, i: number) => (
            <div key={i} className={`message message-${content.role}`}>
              <div className="message-role">{content.role}</div>
              <div className="message-parts">
                {content.parts?.map((part: any, j: number) => (
                  <MessagePart key={j} part={part} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModelResponseDetails({ data }: { data: any }) {
  const parts = data.parts || [];
  
  return (
    <div className="model-response-details">
      {parts.map((part: any, i: number) => (
        <MessagePart key={i} part={part} />
      ))}
      
      {data.finish_reason && (
        <div className="detail-meta">
          Finish reason: {data.finish_reason}
        </div>
      )}
      
      {data.token_counts && (
        <div className="detail-meta">
          Tokens: {data.token_counts.input || 0} input, {data.token_counts.output || 0} output
        </div>
      )}
    </div>
  );
}

function MessagePart({ part }: { part: any }) {
  if (part.type === 'text') {
    return (
      <div className={`part part-text ${part.thought ? 'part-thought' : ''}`}>
        {part.thought && <span className="thought-badge">💭 Thought</span>}
        <div className="part-content">{part.text}</div>
      </div>
    );
  }
  
  if (part.type === 'function_call') {
    return (
      <div className="part part-function-call">
        <span className="fn-name">{part.name}</span>
        <span className="fn-args">({JSON.stringify(part.args)})</span>
      </div>
    );
  }
  
  if (part.type === 'function_response') {
    return (
      <div className="part part-function-response">
        <span className="fn-name">{part.name}</span>
        <pre className="fn-response">{typeof part.response === 'string' ? part.response : JSON.stringify(part.response, null, 2)}</pre>
      </div>
    );
  }
  
  return <pre>{JSON.stringify(part, null, 2)}</pre>;
}

