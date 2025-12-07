import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, Square, Clock, Cpu, Wrench, GitBranch, MessageSquare, Database, 
  ChevronDown, ChevronRight, Zap, Save, Download, Filter, Search, 
  CheckCircle, XCircle, AlertTriangle, Copy, Eye, EyeOff, Pause,
  SkipForward, Rewind, BookmarkPlus, Bookmark, X, Loader
} from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { RunEvent } from '../utils/types';
import { createRunWebSocket, updateProject as apiUpdateProject } from '../utils/api';

// Event type configurations
const EVENT_CONFIG: Record<string, { icon: React.FC<{ size: number }>, color: string, label: string }> = {
  agent_start: { icon: GitBranch, color: '#7b2cbf', label: 'Agent Start' },
  agent_end: { icon: GitBranch, color: '#7b2cbf', label: 'Agent End' },
  tool_call: { icon: Wrench, color: '#00f5d4', label: 'Tool Call' },
  tool_result: { icon: Wrench, color: '#00f5d4', label: 'Tool Result' },
  model_call: { icon: Cpu, color: '#ffd93d', label: 'Model Call' },
  model_response: { icon: MessageSquare, color: '#ffd93d', label: 'Model Response' },
  state_change: { icon: Database, color: '#ff6b6b', label: 'State Change' },
  transfer: { icon: Zap, color: '#00d4ff', label: 'Transfer' },
};

// Agent colors for timeline
const AGENT_COLORS = [
  '#00f5d4', '#7b2cbf', '#ffd93d', '#ff6b6b', '#00d4ff', 
  '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'
];

export default function RunPanel() {
  const { project, isRunning, setIsRunning, runEvents, addRunEvent, clearRunEvents, hasUnsavedChanges, setHasUnsavedChanges } = useStore();
  
  // Input state
  const [userInput, setUserInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  
  // UI state
  const [expandedEvents, setExpandedEvents] = useState<Set<number>>(new Set());
  const [collapsedAgents, setCollapsedAgents] = useState<Set<string>>(new Set());
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showStateSidebar, setShowStateSidebar] = useState(true);
  
  // Filtering state
  const [eventFilters, setEventFilters] = useState<Set<string>>(new Set(['tool_call', 'tool_result', 'model_call', 'model_response', 'state_change', 'agent_start', 'agent_end']));
  const [agentFilter, setAgentFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<number>>(new Set());
  
  // Timeline state
  const [timelineRange, setTimelineRange] = useState<[number, number]>([0, 100]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playbackIndex, setPlaybackIndex] = useState(0);
  
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const eventsAreaRef = useRef<HTMLDivElement>(null);
  
  if (!project) return null;
  
  // Calculate session state from state_change events
  const sessionState = useMemo(() => {
    const state: Record<string, any> = {};
    runEvents.forEach(event => {
      if (event.event_type === 'state_change' && event.data?.state_delta) {
        Object.assign(state, event.data.state_delta);
      }
    });
    return state;
  }, [runEvents]);
  
  // Get unique agent names for filtering
  const agentNames = useMemo(() => {
    const names = new Set<string>();
    runEvents.forEach(event => {
      if (event.agent_name) names.add(event.agent_name);
    });
    return Array.from(names);
  }, [runEvents]);
  
  // Assign colors to agents
  const agentColorMap = useMemo(() => {
    const map: Record<string, string> = {};
    agentNames.forEach((name, i) => {
      map[name] = AGENT_COLORS[i % AGENT_COLORS.length];
    });
    return map;
  }, [agentNames]);
  
  // Timeline calculations
  const minTime = runEvents.length > 0 ? runEvents[0].timestamp : 0;
  const maxTime = runEvents.length > 0 ? runEvents[runEvents.length - 1].timestamp : 0;
  const duration = maxTime - minTime || 1;
  
  // Filter events
  const filteredEvents = useMemo(() => {
    return runEvents.filter((event, i) => {
      // Timeline range filter
      const percent = ((event.timestamp - minTime) / duration) * 100;
      if (percent < timelineRange[0] || percent > timelineRange[1]) return false;
      
      // Event type filter
      if (!eventFilters.has(event.event_type)) return false;
      
      // Agent filter
      if (agentFilter !== 'all' && event.agent_name !== agentFilter) return false;
      
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const eventStr = JSON.stringify(event).toLowerCase();
        if (!eventStr.includes(searchLower)) return false;
      }
      
      return true;
    });
  }, [runEvents, timelineRange, eventFilters, agentFilter, searchQuery, minTime, duration]);
  
  // Token totals
  const tokenTotals = useMemo(() => {
    return filteredEvents.reduce(
      (acc, event) => {
        if (event.event_type === 'model_response' && event.data?.token_counts) {
          acc.input += event.data.token_counts.input || 0;
          acc.output += event.data.token_counts.output || 0;
        }
        return acc;
      },
      { input: 0, output: 0 }
    );
  }, [filteredEvents]);
  
  // Timeline segments for visual timeline
  const timelineSegments = useMemo(() => {
    const segments: { agent: string; start: number; end: number; eventType: string; eventIndex: number }[] = [];
    let currentAgent: string | null = null;
    let segmentStart = 0;
    
    runEvents.forEach((event, i) => {
      const percent = ((event.timestamp - minTime) / duration) * 100;
      
      if (event.agent_name !== currentAgent) {
        if (currentAgent !== null) {
          segments.push({
            agent: currentAgent,
            start: segmentStart,
            end: percent,
            eventType: 'agent_activity',
            eventIndex: i - 1
          });
        }
        currentAgent = event.agent_name;
        segmentStart = percent;
      }
      
      // Add markers for important events
      if (event.event_type === 'tool_call' || event.event_type === 'state_change') {
        segments.push({
          agent: event.agent_name,
          start: percent,
          end: percent + 0.5,
          eventType: event.event_type,
          eventIndex: i
        });
      }
    });
    
    // Close last segment
    if (currentAgent !== null) {
      segments.push({
        agent: currentAgent,
        start: segmentStart,
        end: 100,
        eventType: 'agent_activity',
        eventIndex: runEvents.length - 1
      });
    }
    
    return segments;
  }, [runEvents, minTime, duration]);
  
  // Auto-scroll effect
  useEffect(() => {
    if (!isPlaying) {
      eventsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [runEvents.length, isPlaying]);
  
  // Playback effect
  useEffect(() => {
    if (!isPlaying || runEvents.length === 0) return;
    
    const interval = setInterval(() => {
      setPlaybackIndex(prev => {
        const next = prev + 1;
        if (next >= runEvents.length) {
          setIsPlaying(false);
          return prev;
        }
        return next;
      });
    }, 500 / playbackSpeed);
    
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, runEvents.length]);
  
  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userInput, hasUnsavedChanges]);
  
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
    setPlaybackIndex(0);
    
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
    
    websocket.onclose = () => setIsRunning(false);
  }
  
  async function handleSaveAndRun() {
    if (!userInput.trim()) return;
    setIsSaving(true);
    try {
      await apiUpdateProject(project.id, project);
      setHasUnsavedChanges(false);
      setShowUnsavedWarning(false);
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
  
  function toggleAgentCollapse(key: string) {
    const next = new Set(collapsedAgents);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setCollapsedAgents(next);
  }
  
  function toggleEventFilter(type: string) {
    const next = new Set(eventFilters);
    if (next.has(type)) next.delete(type);
    else next.add(type);
    setEventFilters(next);
  }
  
  function toggleBookmark(index: number) {
    const next = new Set(bookmarkedEvents);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setBookmarkedEvents(next);
  }
  
  function scrollToEvent(index: number) {
    const element = document.getElementById(`event-${index}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setExpandedEvents(prev => new Set([...prev, index]));
  }
  
  function exportAsJson() {
    const data = {
      project: project.name,
      timestamp: new Date().toISOString(),
      events: runEvents,
      sessionState,
      tokenTotals,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `run-${project.name}-${Date.now()}.json`;
    a.click();
  }
  
  function exportAsMarkdown() {
    let md = `# Agent Run Report\n\n`;
    md += `**Project:** ${project.name}\n`;
    md += `**Timestamp:** ${new Date().toISOString()}\n`;
    md += `**Duration:** ${(duration * 1000).toFixed(0)}ms\n`;
    md += `**Tokens:** ${tokenTotals.input} input, ${tokenTotals.output} output\n\n`;
    md += `## Events\n\n`;
    
    runEvents.forEach((event, i) => {
      md += `### ${i + 1}. ${event.event_type} (${event.agent_name})\n\n`;
      md += `\`\`\`json\n${JSON.stringify(event.data, null, 2)}\n\`\`\`\n\n`;
    });
    
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `run-${project.name}-${Date.now()}.md`;
    a.click();
  }
  
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  
  // Render events grouped by agent
  function renderEvents() {
    let currentAgent: string | null = null;
    let agentEvents: { event: RunEvent; index: number }[] = [];
    const elements: React.ReactNode[] = [];
    
    function flushAgent() {
      if (currentAgent && agentEvents.length > 0) {
        const agentName = currentAgent;
        const events = [...agentEvents];
        const groupKey = `${agentName}-${events[0].index}`;
        const isCollapsed = collapsedAgents.has(groupKey);
        const agentColor = agentColorMap[agentName] || '#888';
        
        // Calculate agent stats
        const toolCalls = events.filter(e => e.event.event_type === 'tool_call').length;
        const stateChanges = events.filter(e => e.event.event_type === 'state_change').length;
        const hasError = events.some(e => e.event.data?.error);
        const agentDuration = events.length > 1 
          ? ((events[events.length - 1].event.timestamp - events[0].event.timestamp) * 1000).toFixed(0)
          : '0';
        
        // Determine current status
        const lastEvent = events[events.length - 1].event;
        let status = 'complete';
        if (isRunning && lastEvent.agent_name === agentName) {
          if (lastEvent.event_type === 'model_call') status = 'thinking';
          else if (lastEvent.event_type === 'tool_call') status = 'tool';
          else status = 'running';
        }
        if (hasError) status = 'error';
        
        elements.push(
          <div key={`agent-${groupKey}`} className="agent-group">
            <div 
              className={`agent-group-header ${status}`}
              onClick={() => toggleAgentCollapse(groupKey)}
              style={{ borderLeftColor: agentColor }}
            >
              <div className="agent-header-left">
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
                <span className="agent-color-dot" style={{ background: agentColor }} />
                <span className="agent-name">{agentName}</span>
                <AgentStatusBadge status={status} />
              </div>
              <div className="agent-header-right">
                {toolCalls > 0 && (
                  <span className="agent-stat tool-stat">
                    <Wrench size={12} /> {toolCalls}
                  </span>
                )}
                {stateChanges > 0 && (
                  <span className="agent-stat state-stat">
                    <Database size={12} /> {stateChanges}
                  </span>
                )}
                <span className="agent-stat time-stat">{agentDuration}ms</span>
                <span className="event-count">{events.length} events</span>
              </div>
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
                    isBookmarked={bookmarkedEvents.has(index)}
                    onBookmark={() => toggleBookmark(index)}
                    onCopy={copyToClipboard}
                  />
                ))}
              </div>
            )}
          </div>
        );
        agentEvents = [];
      }
    }
    
    filteredEvents.forEach((event) => {
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
          gap: 12px;
        }
        
        /* Input Area */
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
        
        /* Timeline Area */
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
          margin-bottom: 12px;
        }
        
        .timeline-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
        }
        
        .timeline-title svg {
          color: var(--accent-primary);
        }
        
        .timeline-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .token-stats {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }
        
        .token-input { color: #4ecdc4; }
        .token-output { color: #ff6b6b; }
        .token-total { color: var(--text-secondary); font-weight: 600; }
        
        .running-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-primary);
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
          50% { opacity: 0.4; }
        }
        
        /* Visual Timeline */
        .visual-timeline {
          position: relative;
          height: 40px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-bottom: 8px;
        }
        
        .timeline-segment {
          position: absolute;
          top: 0;
          height: 100%;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        
        .timeline-segment:hover {
          opacity: 0.8;
        }
        
        .timeline-segment.activity {
          opacity: 0.6;
        }
        
        .timeline-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--bg-secondary);
          z-index: 1;
        }
        
        .timeline-marker.tool_call { background: #00f5d4; }
        .timeline-marker.state_change { background: #ff6b6b; }
        
        .timeline-playhead {
          position: absolute;
          top: 0;
          width: 2px;
          height: 100%;
          background: white;
          z-index: 2;
          pointer-events: none;
        }
        
        .timeline-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .timeline-controls button {
          padding: 4px 8px;
          background: var(--bg-tertiary);
          border: none;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
        }
        
        .timeline-controls button:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        .timeline-controls button.active {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .speed-selector {
          font-size: 11px;
          padding: 4px 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }
        
        /* Filters Area */
        .filters-area {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .filter-label {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        
        .filter-chip {
          padding: 4px 8px;
          font-size: 11px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .filter-chip:hover {
          border-color: var(--text-muted);
        }
        
        .filter-chip.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .search-input {
          flex: 1;
          max-width: 200px;
          padding: 4px 8px;
          font-size: 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }
        
        .agent-filter {
          padding: 4px 8px;
          font-size: 11px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }
        
        .export-buttons {
          margin-left: auto;
          display: flex;
          gap: 4px;
        }
        
        .export-btn {
          padding: 4px 8px;
          font-size: 11px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .export-btn:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        /* Main Content Area */
        .main-content {
          flex: 1;
          display: flex;
          gap: 12px;
          min-height: 0;
        }
        
        /* Events Area */
        .events-area {
          flex: 1;
          overflow-y: auto;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          padding: 12px;
        }
        
        /* State Sidebar */
        .state-sidebar {
          width: 300px;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .state-sidebar.collapsed {
          width: auto;
        }
        
        .state-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .state-header h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          margin: 0;
        }
        
        .state-header h4 svg {
          color: var(--accent-primary);
        }
        
        .state-toggle {
          padding: 4px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        
        .state-content {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }
        
        .state-empty {
          color: var(--text-muted);
          font-size: 12px;
          text-align: center;
          padding: 20px;
        }
        
        .state-item {
          margin-bottom: 12px;
          padding: 10px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .state-key {
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-primary);
          font-family: var(--font-mono);
          margin-bottom: 6px;
        }
        
        .state-value {
          font-size: 12px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          max-height: 150px;
          overflow-y: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        
        .state-item.new {
          animation: stateFlash 1s ease-out;
        }
        
        @keyframes stateFlash {
          0% { background: rgba(0, 245, 212, 0.3); }
          100% { background: var(--bg-tertiary); }
        }
        
        /* Agent Group */
        .agent-group {
          margin-bottom: 12px;
        }
        
        .agent-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border-left: 3px solid;
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .agent-group-header:hover {
          background: var(--bg-hover);
        }
        
        .agent-group-header.error {
          background: rgba(255, 107, 107, 0.1);
        }
        
        .agent-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .agent-color-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .agent-name {
          font-weight: 600;
        }
        
        .agent-header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .agent-stat {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .tool-stat svg { color: #00f5d4; }
        .state-stat svg { color: #ff6b6b; }
        
        .event-count {
          font-size: 11px;
          color: var(--text-muted);
          padding: 2px 8px;
          background: var(--bg-secondary);
          border-radius: 999px;
        }
        
        .agent-events {
          padding-left: 24px;
          margin-top: 8px;
        }
        
        /* Event Item */
        .event-item {
          position: relative;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          margin-bottom: 6px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          transition: all 0.15s;
        }
        
        .event-item:hover {
          border-color: var(--text-muted);
        }
        
        .event-item.bookmarked {
          border-color: var(--accent-secondary);
        }
        
        .event-item.error {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.05);
        }
        
        .event-header {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
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
        
        .event-main {
          flex: 1;
          min-width: 0;
        }
        
        .event-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        
        .event-type-badge {
          font-size: 10px;
          padding: 2px 6px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
        }
        
        .event-preview {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .event-actions {
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.15s;
        }
        
        .event-item:hover .event-actions {
          opacity: 1;
        }
        
        .event-action-btn {
          padding: 4px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          border-radius: var(--radius-sm);
        }
        
        .event-action-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        
        .event-action-btn.bookmarked {
          color: var(--accent-secondary);
        }
        
        /* Event Details */
        .event-details {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }
        
        /* Tool Call Card */
        .tool-call-card {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        
        .tool-call-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: rgba(0, 245, 212, 0.1);
          border-bottom: 1px solid var(--border-color);
        }
        
        .tool-name {
          font-weight: 600;
          color: var(--accent-primary);
          font-family: var(--font-mono);
        }
        
        .tool-status {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
        }
        
        .tool-status.success { color: #10b981; }
        .tool-status.error { color: #ff6b6b; }
        .tool-status.pending { color: var(--accent-secondary); }
        
        .tool-params {
          padding: 12px;
        }
        
        .param-row {
          display: flex;
          margin-bottom: 8px;
          font-size: 12px;
        }
        
        .param-key {
          font-weight: 500;
          color: var(--text-muted);
          min-width: 120px;
          font-family: var(--font-mono);
        }
        
        .param-value {
          color: var(--text-secondary);
          font-family: var(--font-mono);
          word-break: break-all;
        }
        
        .param-value.string { color: #10b981; }
        .param-value.number { color: #f59e0b; }
        .param-value.boolean { color: #8b5cf6; }
        
        .tool-response-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          cursor: pointer;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .tool-response-toggle:hover {
          color: var(--text-primary);
        }
        
        .tool-response {
          padding: 12px;
          background: var(--bg-secondary);
          font-family: var(--font-mono);
          font-size: 12px;
          max-height: 200px;
          overflow-y: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        
        /* State Change Card */
        .state-change-card {
          background: rgba(255, 107, 107, 0.05);
          border: 1px solid rgba(255, 107, 107, 0.2);
          border-radius: var(--radius-md);
          padding: 12px;
        }
        
        .state-change-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .state-change-item:last-child {
          margin-bottom: 0;
        }
        
        .state-change-key {
          font-weight: 600;
          color: #ff6b6b;
          font-family: var(--font-mono);
          font-size: 12px;
          min-width: 100px;
        }
        
        .state-change-value {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          flex: 1;
          word-break: break-all;
        }
        
        /* Model Call Details */
        .model-call-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .detail-section {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        
        .detail-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--bg-secondary);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
        }
        
        .detail-section-content {
          padding: 12px;
          font-size: 12px;
        }
        
        .system-instruction {
          color: var(--accent-secondary);
          line-height: 1.6;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .tool-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .tool-badge {
          padding: 4px 10px;
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
          max-height: 300px;
          overflow-y: auto;
        }
        
        .message {
          padding: 10px 12px;
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
          margin-bottom: 6px;
        }
        
        .message-content {
          font-size: 12px;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        
        .function-call-part {
          background: rgba(0, 245, 212, 0.1);
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 12px;
          margin-top: 6px;
        }
        
        .function-response-part {
          background: var(--bg-secondary);
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 11px;
          margin-top: 6px;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .thought-part {
          background: rgba(123, 44, 191, 0.1);
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          margin-top: 6px;
        }
        
        .thought-label {
          font-size: 10px;
          color: #7b2cbf;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        /* Status Badge */
        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 500;
        }
        
        .status-badge.thinking {
          background: rgba(255, 217, 61, 0.2);
          color: #ffd93d;
        }
        
        .status-badge.tool {
          background: rgba(0, 245, 212, 0.2);
          color: #00f5d4;
        }
        
        .status-badge.running {
          background: rgba(0, 212, 255, 0.2);
          color: #00d4ff;
        }
        
        .status-badge.complete {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }
        
        .status-badge.error {
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
        }
        
        .status-badge .spinner {
          width: 10px;
          height: 10px;
          border: 2px solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Empty State */
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
        
        /* Warning Dialog */
        .warning-dialog {
          position: fixed;
          inset: 0;
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
      
      {/* Warning Dialog */}
      {showUnsavedWarning && (
        <div className="warning-dialog">
          <div className="warning-content">
            <h3>⚠️ Unsaved Changes</h3>
            <p>You have unsaved changes. The agent will run with the last saved configuration.</p>
            <div className="warning-actions">
              <button className="btn btn-secondary" onClick={handleSaveAndRun} disabled={isSaving}>
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
      
      {/* Input Area */}
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
      
      {/* Timeline Area */}
      {runEvents.length > 0 && (
        <div className="timeline-area">
          <div className="timeline-header">
            <div className="timeline-title">
              <Clock size={14} />
              Timeline
            </div>
            <div className="timeline-stats">
              <span>{filteredEvents.length} / {runEvents.length} events</span>
              <span>{(duration * 1000).toFixed(0)}ms</span>
              {tokenTotals.input + tokenTotals.output > 0 && (
                <span className="token-stats">
                  <span className="token-input">{tokenTotals.input}↓</span>
                  <span className="token-output">{tokenTotals.output}↑</span>
                  <span className="token-total">= {tokenTotals.input + tokenTotals.output}</span>
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
          
          {/* Visual Timeline */}
          <div className="visual-timeline">
            {timelineSegments.map((segment, i) => (
              segment.eventType === 'agent_activity' ? (
                <div
                  key={i}
                  className="timeline-segment activity"
                  style={{
                    left: `${segment.start}%`,
                    width: `${segment.end - segment.start}%`,
                    background: agentColorMap[segment.agent] || '#888'
                  }}
                  onClick={() => scrollToEvent(segment.eventIndex)}
                  title={`${segment.agent}`}
                />
              ) : (
                <div
                  key={i}
                  className={`timeline-marker ${segment.eventType}`}
                  style={{ left: `${segment.start}%` }}
                  onClick={() => scrollToEvent(segment.eventIndex)}
                  title={`${segment.eventType} - ${segment.agent}`}
                />
              )
            ))}
            {isPlaying && (
              <div 
                className="timeline-playhead" 
                style={{ left: `${(playbackIndex / runEvents.length) * 100}%` }} 
              />
            )}
          </div>
          
          {/* Timeline Controls */}
          <div className="timeline-controls">
            <button onClick={() => setPlaybackIndex(0)} title="Rewind">
              <Rewind size={12} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className={isPlaying ? 'active' : ''}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            </button>
            <button onClick={() => setPlaybackIndex(Math.min(playbackIndex + 1, runEvents.length - 1))} title="Step Forward">
              <SkipForward size={12} />
            </button>
            <select 
              className="speed-selector"
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="2">2x</option>
              <option value="4">4x</option>
            </select>
          </div>
        </div>
      )}
      
      {/* Filters Area */}
      {runEvents.length > 0 && (
        <div className="filters-area">
          <div className="filter-group">
            <span className="filter-label"><Filter size={12} /></span>
            {['tool_call', 'model_call', 'state_change'].map(type => (
              <button
                key={type}
                className={`filter-chip ${eventFilters.has(type) ? 'active' : ''}`}
                onClick={() => toggleEventFilter(type)}
              >
                {EVENT_CONFIG[type]?.label || type}
              </button>
            ))}
          </div>
          
          <select 
            className="agent-filter"
            value={agentFilter}
            onChange={(e) => setAgentFilter(e.target.value)}
          >
            <option value="all">All Agents</option>
            {agentNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          
          <input
            type="text"
            className="search-input"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          {searchQuery && (
            <button className="filter-chip" onClick={() => setSearchQuery('')}>
              <X size={12} /> Clear
            </button>
          )}
          
          <div className="export-buttons">
            <button className="export-btn" onClick={exportAsJson} title="Export as JSON">
              <Download size={12} /> JSON
            </button>
            <button className="export-btn" onClick={exportAsMarkdown} title="Export as Markdown">
              <Download size={12} /> MD
            </button>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="main-content">
        {/* Events Area */}
        <div className="events-area" ref={eventsAreaRef}>
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
        
        {/* State Sidebar */}
        {showStateSidebar && runEvents.length > 0 && (
          <div className={`state-sidebar ${!showStateSidebar ? 'collapsed' : ''}`}>
            <div className="state-header">
              <h4>
                <Database size={14} />
                Session State
              </h4>
              <button className="state-toggle" onClick={() => setShowStateSidebar(!showStateSidebar)}>
                {showStateSidebar ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            <div className="state-content">
              {Object.keys(sessionState).length === 0 ? (
                <div className="state-empty">No state changes yet</div>
              ) : (
                Object.entries(sessionState).map(([key, value]) => (
                  <div key={key} className="state-item">
                    <div className="state-key">{key}</div>
                    <div className="state-value">
                      {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Agent Status Badge Component
function AgentStatusBadge({ status }: { status: string }) {
  const configs: Record<string, { label: string, icon?: React.ReactNode }> = {
    thinking: { label: 'Thinking', icon: <span className="spinner" /> },
    tool: { label: 'Tool', icon: <Wrench size={10} /> },
    running: { label: 'Running', icon: <span className="spinner" /> },
    complete: { label: 'Complete', icon: <CheckCircle size={10} /> },
    error: { label: 'Error', icon: <XCircle size={10} /> },
  };
  
  const config = configs[status];
  if (!config) return null;
  
  return (
    <span className={`status-badge ${status}`}>
      {config.icon}
      {config.label}
    </span>
  );
}

// Event Item Component
function EventItem({ 
  event, 
  index, 
  expanded, 
  onToggle,
  isBookmarked,
  onBookmark,
  onCopy
}: { 
  event: RunEvent; 
  index: number;
  expanded: boolean; 
  onToggle: () => void;
  isBookmarked: boolean;
  onBookmark: () => void;
  onCopy: (text: string) => void;
}) {
  const config = EVENT_CONFIG[event.event_type] || { icon: MessageSquare, color: '#888', label: event.event_type };
  const Icon = config.icon;
  const hasError = event.data?.error;
  
  function getPreview() {
    switch (event.event_type) {
      case 'tool_call':
        return `${event.data.tool_name}(${Object.keys(event.data.args || {}).join(', ')})`;
      case 'tool_result':
        const preview = event.data.result_preview?.slice(0, 80);
        return preview ? `${preview}...` : 'No response';
      case 'model_call':
        return `${event.data.contents?.length || 0} messages, ${event.data.tool_count || 0} tools`;
      case 'model_response':
        const parts = event.data.parts || [];
        const fnCall = parts.find((p: any) => p.type === 'function_call');
        if (fnCall) return `→ ${fnCall.name}()`;
        const textPart = parts.find((p: any) => p.type === 'text');
        if (textPart) return textPart.text?.slice(0, 80) + '...';
        return '';
      case 'state_change':
        const keys = Object.keys(event.data.state_delta || {});
        return keys.length > 0 ? `Updated: ${keys.join(', ')}` : '';
      default:
        return '';
    }
  }
  
  return (
    <div 
      id={`event-${index}`}
      className={`event-item ${isBookmarked ? 'bookmarked' : ''} ${hasError ? 'error' : ''}`}
    >
      <div className="event-header" onClick={onToggle}>
        <div className="event-icon" style={{ background: `${config.color}20` }}>
          <Icon size={14} style={{ color: config.color }} />
        </div>
        <div className="event-main">
          <div className="event-title">
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span className="event-type-badge">{config.label}</span>
            {event.event_type === 'model_response' && event.data?.token_counts && (
              <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {event.data.token_counts.input}↓ {event.data.token_counts.output}↑
              </span>
            )}
          </div>
          {!expanded && (
            <div className="event-preview">{getPreview()}</div>
          )}
        </div>
        <div className="event-actions">
          <button 
            className={`event-action-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={(e) => { e.stopPropagation(); onBookmark(); }}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            {isBookmarked ? <Bookmark size={14} /> : <BookmarkPlus size={14} />}
          </button>
          <button 
            className="event-action-btn"
            onClick={(e) => { e.stopPropagation(); onCopy(JSON.stringify(event.data, null, 2)); }}
            title="Copy data"
          >
            <Copy size={14} />
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="event-details">
          <EventDetails event={event} onCopy={onCopy} />
        </div>
      )}
    </div>
  );
}

// Event Details Component
function EventDetails({ event, onCopy }: { event: RunEvent; onCopy: (text: string) => void }) {
  const [showResponse, setShowResponse] = useState(false);
  
  if (event.event_type === 'tool_call') {
    return (
      <div className="tool-call-card">
        <div className="tool-call-header">
          <Wrench size={16} style={{ color: '#00f5d4' }} />
          <span className="tool-name">{event.data.tool_name}</span>
          <span className="tool-status pending">
            <Loader size={10} /> Calling...
          </span>
        </div>
        <div className="tool-params">
          {Object.entries(event.data.args || {}).map(([key, value]) => (
            <div key={key} className="param-row">
              <span className="param-key">{key}:</span>
              <span className={`param-value ${typeof value}`}>
                {typeof value === 'string' ? `"${value}"` : JSON.stringify(value)}
              </span>
            </div>
          ))}
          {Object.keys(event.data.args || {}).length === 0 && (
            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>No parameters</div>
          )}
        </div>
      </div>
    );
  }
  
  if (event.event_type === 'tool_result') {
    const hasResult = event.data.result_preview;
    return (
      <div className="tool-call-card">
        <div className="tool-call-header">
          <Wrench size={16} style={{ color: '#00f5d4' }} />
          <span className="tool-name">{event.data.tool_name}</span>
          <span className="tool-status success">
            <CheckCircle size={10} /> Complete
          </span>
        </div>
        {hasResult && (
          <>
            <div 
              className="tool-response-toggle"
              onClick={() => setShowResponse(!showResponse)}
            >
              {showResponse ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              {showResponse ? 'Hide Response' : 'Show Response'}
            </div>
            {showResponse && (
              <div className="tool-response">{event.data.result_preview}</div>
            )}
          </>
        )}
      </div>
    );
  }
  
  if (event.event_type === 'state_change') {
    return (
      <div className="state-change-card">
        {Object.entries(event.data.state_delta || {}).map(([key, value]) => (
          <div key={key} className="state-change-item">
            <span className="state-change-key">{key}</span>
            <span className="state-change-value">
              {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  
  if (event.event_type === 'model_call') {
    return <ModelCallDetails data={event.data} />;
  }
  
  if (event.event_type === 'model_response') {
    return <ModelResponseDetails data={event.data} />;
  }
  
  // Fallback
  return <pre style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>{JSON.stringify(event.data, null, 2)}</pre>;
}

function ModelCallDetails({ data }: { data: any }) {
  const [showSystem, setShowSystem] = useState(false);
  const [showConversation, setShowConversation] = useState(true);
  
  return (
    <div className="model-call-details">
      {data.system_instruction && (
        <div className="detail-section">
          <div className="detail-section-header" onClick={() => setShowSystem(!showSystem)}>
            <span>System Instruction</span>
            {showSystem ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
          {showSystem && (
            <div className="detail-section-content">
              <div className="system-instruction">{data.system_instruction}</div>
            </div>
          )}
        </div>
      )}
      
      {data.tool_names?.length > 0 && (
        <div className="detail-section">
          <div className="detail-section-header">
            <span>Tools ({data.tool_names.length})</span>
          </div>
          <div className="detail-section-content">
            <div className="tool-badges">
              {data.tool_names.map((name: string) => (
                <span key={name} className="tool-badge">{name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="detail-section">
        <div className="detail-section-header" onClick={() => setShowConversation(!showConversation)}>
          <span>Conversation ({data.contents?.length || 0} messages)</span>
          {showConversation ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </div>
        {showConversation && (
          <div className="detail-section-content">
            <div className="messages-list">
              {(data.contents || []).map((content: any, i: number) => (
                <div key={i} className={`message message-${content.role}`}>
                  <div className="message-role">{content.role}</div>
                  <div className="message-content">
                    {content.parts?.map((part: any, j: number) => (
                      <MessagePart key={j} part={part} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, paddingTop: 8, borderTop: '1px solid var(--border-color)' }}>
          Finish reason: {data.finish_reason}
        </div>
      )}
      
      {data.token_counts && (
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
          Tokens: {data.token_counts.input} input, {data.token_counts.output} output
        </div>
      )}
    </div>
  );
}

function MessagePart({ part }: { part: any }) {
  if (part.type === 'text') {
    if (part.thought) {
      return (
        <div className="thought-part">
          <div className="thought-label">💭 Thought</div>
          <div style={{ fontSize: 12, lineHeight: 1.5 }}>{part.text}</div>
        </div>
      );
    }
    return <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{part.text}</div>;
  }
  
  if (part.type === 'function_call') {
    return (
      <div className="function-call-part">
        <span style={{ color: '#00f5d4', fontWeight: 600 }}>{part.name}</span>
        <span style={{ color: 'var(--text-muted)' }}>({JSON.stringify(part.args)})</span>
      </div>
    );
  }
  
  if (part.type === 'function_response') {
    return (
      <div className="function-response-part">
        <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>{part.name} response:</div>
        <div>{typeof part.response === 'string' ? part.response : JSON.stringify(part.response, null, 2)}</div>
      </div>
    );
  }
  
  return null;
}
