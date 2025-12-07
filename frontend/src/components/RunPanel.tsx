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
          padding: 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 12px;
          white-space: pre-wrap;
          word-break: break-all;
          max-height: 200px;
          overflow-y: auto;
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
              <span>{runEvents.length} events</span>
              <span>{(duration * 1000).toFixed(0)}ms</span>
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
      case 'model_response':
        return event.data.response_preview?.slice(0, 100) || event.data.text?.slice(0, 100);
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
        </div>
        {preview && !expanded && (
          <div className="event-preview">{preview}</div>
        )}
        {expanded && (
          <div className="event-details">
            {JSON.stringify(event.data, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
}

