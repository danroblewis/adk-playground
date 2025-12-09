import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Play, Square, Clock, Cpu, Wrench, GitBranch, MessageSquare, Database, 
  ChevronDown, ChevronRight, Zap, Filter, Search, Terminal, Eye,
  CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Layers
} from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { RunEvent, Project, MCPServerConfig } from '../utils/types';
import { createRunWebSocket, fetchJSON } from '../utils/api';

// Wireshark-inspired color scheme for event types
const EVENT_COLORS: Record<string, { bg: string; fg: string; border: string }> = {
  agent_start: { bg: '#2d1f4e', fg: '#c4b5fd', border: '#7c3aed' },
  agent_end: { bg: '#2d1f4e', fg: '#c4b5fd', border: '#7c3aed' },
  tool_call: { bg: '#0d3331', fg: '#5eead4', border: '#14b8a6' },
  tool_result: { bg: '#0d3331', fg: '#5eead4', border: '#14b8a6' },
  model_call: { bg: '#3d2f0d', fg: '#fde047', border: '#eab308' },
  model_response: { bg: '#3d2f0d', fg: '#fde047', border: '#eab308' },
  state_change: { bg: '#3d0d1f', fg: '#fda4af', border: '#f43f5e' },
  transfer: { bg: '#0d2d3d', fg: '#7dd3fc', border: '#0ea5e9' },
  error: { bg: '#450a0a', fg: '#fca5a5', border: '#dc2626' },
};

// Event type icons
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

// Single-line event summary renderer
function getEventSummary(event: RunEvent): string {
  switch (event.event_type) {
    case 'agent_start':
      return `START ${event.agent_name}`;
    case 'agent_end':
      return event.data?.error ? `END ${event.agent_name} [ERROR]` : `END ${event.agent_name}`;
    case 'tool_call':
      const args = Object.entries(event.data?.args || {})
        .map(([k, v]) => `${k}=${JSON.stringify(v).slice(0, 20)}`)
        .join(', ');
      return `CALL ${event.data?.tool_name}(${args.slice(0, 60)}${args.length > 60 ? '...' : ''})`;
    case 'tool_result':
      const result = event.data?.result;
      let resultPreview = '';
      if (result?.content?.[0]?.text) {
        resultPreview = result.content[0].text.slice(0, 60);
      } else if (typeof result === 'string') {
        resultPreview = result.slice(0, 60);
      } else {
        resultPreview = JSON.stringify(result).slice(0, 60);
      }
      return `RESULT ${event.data?.tool_name} → ${resultPreview}${resultPreview.length >= 60 ? '...' : ''}`;
    case 'model_call':
      return `LLM_REQ ${event.data?.contents?.length || 0} msgs, ${event.data?.tool_count || 0} tools`;
    case 'model_response':
      const parts = event.data?.response_content?.parts || event.data?.parts || [];
      const fnCall = parts.find((p: any) => p.type === 'function_call');
      if (fnCall) return `LLM_RSP → ${fnCall.name}()`;
      const textPart = parts.find((p: any) => p.type === 'text');
      if (textPart) return `LLM_RSP "${textPart.text?.slice(0, 50)}..."`;
      return `LLM_RSP (${event.data?.finish_reason || 'complete'})`;
    case 'state_change':
      const keys = Object.keys(event.data?.state_delta || {});
      return `STATE ${keys.join(', ')}`;
    case 'transfer':
      return `TRANSFER → ${event.data?.target || 'unknown'}`;
    default:
      return event.event_type.toUpperCase();
  }
}

// Format timestamp as relative time
function formatTimestamp(timestamp: number, baseTime: number): string {
  const delta = timestamp - baseTime;
  if (delta < 1) return `+${(delta * 1000).toFixed(0)}ms`;
  if (delta < 60) return `+${delta.toFixed(2)}s`;
  return `+${Math.floor(delta / 60)}m${(delta % 60).toFixed(0)}s`;
}

// Full event detail renderer
function EventDetail({ event }: { event: RunEvent }) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['data']));
  
  const toggleSection = (section: string) => {
    const next = new Set(expandedSections);
    if (next.has(section)) next.delete(section);
    else next.add(section);
    setExpandedSections(next);
  };
  
  const renderValue = (value: any, depth = 0): React.ReactNode => {
    if (value === null) return <span className="json-null">null</span>;
    if (value === undefined) return <span className="json-undefined">undefined</span>;
    if (typeof value === 'boolean') return <span className="json-boolean">{value.toString()}</span>;
    if (typeof value === 'number') return <span className="json-number">{value}</span>;
    if (typeof value === 'string') {
      if (value.length > 200 && depth > 0) {
        return <span className="json-string">"{value.slice(0, 200)}..." <span className="json-truncated">({value.length} chars)</span></span>;
      }
      return <span className="json-string">"{value}"</span>;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="json-array">[]</span>;
      return (
        <div className="json-array" style={{ marginLeft: depth * 12 }}>
          {'['}
          {value.map((item, i) => (
            <div key={i} style={{ marginLeft: 12 }}>
              {renderValue(item, depth + 1)}
              {i < value.length - 1 && ','}
            </div>
          ))}
          {']'}
        </div>
      );
    }
    if (typeof value === 'object') {
      const entries = Object.entries(value);
      if (entries.length === 0) return <span className="json-object">{'{}'}</span>;
      return (
        <div className="json-object" style={{ marginLeft: depth * 12 }}>
          {'{'}
          {entries.map(([k, v], i) => (
            <div key={k} style={{ marginLeft: 12 }}>
              <span className="json-key">"{k}"</span>: {renderValue(v, depth + 1)}
              {i < entries.length - 1 && ','}
            </div>
          ))}
          {'}'}
        </div>
      );
    }
    return String(value);
  };
  
  return (
    <div className="event-detail">
      {/* Header */}
      <div className="detail-header">
        <span className="detail-type">{event.event_type}</span>
        <span className="detail-agent">{event.agent_name}</span>
        <span className="detail-time">{new Date(event.timestamp * 1000).toISOString()}</span>
      </div>
      
      {/* Data Section */}
      <div className="detail-section">
        <div className="section-header" onClick={() => toggleSection('data')}>
          {expandedSections.has('data') ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          <span>Event Data</span>
        </div>
        {expandedSections.has('data') && (
          <div className="section-content json-viewer">
            {renderValue(event.data)}
          </div>
        )}
      </div>
      
      {/* Type-specific rendering */}
      {event.event_type === 'model_call' && event.data?.contents && (
        <div className="detail-section">
          <div className="section-header" onClick={() => toggleSection('messages')}>
            {expandedSections.has('messages') ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            <span>Messages ({event.data.contents.length})</span>
          </div>
          {expandedSections.has('messages') && (
            <div className="section-content">
              {event.data.contents.map((content: any, i: number) => (
                <div key={i} className="message-item">
                  <span className={`message-role ${content.role}`}>{content.role}</span>
                  <div className="message-parts">
                    {content.parts?.map((part: any, j: number) => (
                      <div key={j} className="message-part">
                        {part.text && <pre>{part.text}</pre>}
                        {part.function_call && (
                          <div className="function-call">
                            <strong>{part.function_call.name}</strong>
                            <pre>{JSON.stringify(part.function_call.args, null, 2)}</pre>
                          </div>
                        )}
                        {part.function_response && (
                          <div className="function-response">
                            <strong>{part.function_response.name}</strong>
                            <pre>{JSON.stringify(part.function_response.response, null, 2)}</pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {event.event_type === 'tool_result' && (
        <div className="detail-section">
          <div className="section-header" onClick={() => toggleSection('result')}>
            {expandedSections.has('result') ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            <span>Tool Result</span>
          </div>
          {expandedSections.has('result') && (
            <div className="section-content">
              <pre className="result-content">
                {event.data?.result?.content?.[0]?.text || 
                 (typeof event.data?.result === 'string' ? event.data.result : JSON.stringify(event.data?.result, null, 2))}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// State snapshot component
function StateSnapshot({ events, endTime }: { events: RunEvent[]; endTime: number }) {
  const state = useMemo(() => {
    const snapshot: Record<string, { value: any; timestamp: number }> = {};
    
    events
      .filter(e => e.event_type === 'state_change' && e.timestamp <= endTime)
      .forEach(e => {
        if (e.data?.state_delta) {
          Object.entries(e.data.state_delta).forEach(([key, value]) => {
            snapshot[key] = { value, timestamp: e.timestamp };
          });
        }
      });
    
    return snapshot;
  }, [events, endTime]);
  
  const entries = Object.entries(state);
  
  if (entries.length === 0) {
    return <div className="state-empty">No state changes recorded</div>;
  }
  
  return (
    <div className="state-snapshot">
      {entries.map(([key, { value, timestamp }]) => (
        <div key={key} className="state-entry">
          <div className="state-key">{key}</div>
          <div className="state-value">
            {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
          </div>
          <div className="state-time">{new Date(timestamp * 1000).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
}

// MCP Tool Runner component
function MCPToolRunner({ project, onResult }: { project: Project; onResult: (result: any) => void }) {
  const [selectedServer, setSelectedServer] = useState<string>('');
  const [selectedTool, setSelectedTool] = useState<string>('');
  const [toolParams, setToolParams] = useState<Record<string, any>>({});
  const [availableTools, setAvailableTools] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  
  // Get all MCP servers (project + known)
  const mcpServers = useMemo(() => {
    const servers: MCPServerConfig[] = [...(project.mcp_servers || [])];
    return servers;
  }, [project.mcp_servers]);
  
  // Load tools when server changes
  useEffect(() => {
    if (!selectedServer) {
      setAvailableTools([]);
      return;
    }
    
    setIsLoading(true);
    const server = mcpServers.find(s => s.id === selectedServer);
    if (!server) {
      setIsLoading(false);
      return;
    }
    
    // Test connection to get tools
    fetchJSON<{ success: boolean; tools: any[] }>(`/projects/${project.id}/mcp-servers/${server.id}/test-connection`, {
      method: 'POST',
    })
      .then(result => {
        if (result.success) {
          setAvailableTools(result.tools);
        }
      })
      .catch(err => console.error('Failed to load tools:', err))
      .finally(() => setIsLoading(false));
  }, [selectedServer, mcpServers, project.id]);
  
  // Generate placeholder params when tool changes
  useEffect(() => {
    if (!selectedTool) {
      setToolParams({});
      return;
    }
    
    const tool = availableTools.find(t => t.name === selectedTool);
    if (!tool?.parameters?.properties) {
      setToolParams({});
      return;
    }
    
    const placeholders: Record<string, any> = {};
    Object.entries(tool.parameters.properties).forEach(([key, schema]: [string, any]) => {
      if (schema.type === 'string') placeholders[key] = schema.default || '';
      else if (schema.type === 'number' || schema.type === 'integer') placeholders[key] = schema.default || 0;
      else if (schema.type === 'boolean') placeholders[key] = schema.default || false;
      else if (schema.type === 'array') placeholders[key] = schema.default || [];
      else placeholders[key] = schema.default || null;
    });
    setToolParams(placeholders);
  }, [selectedTool, availableTools]);
  
  const selectedToolSchema = availableTools.find(t => t.name === selectedTool);
  
  const runTool = async () => {
    if (!selectedServer || !selectedTool) return;
    
    setIsRunning(true);
    try {
      // This would need a backend endpoint to run MCP tools
      const result = await fetchJSON(`/projects/${project.id}/run-mcp-tool`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          server_id: selectedServer,
          tool_name: selectedTool,
          arguments: toolParams,
        }),
      });
      onResult(result);
    } catch (err) {
      onResult({ error: String(err) });
    } finally {
      setIsRunning(false);
    }
  };
  
  return (
    <div className="mcp-runner">
      <div className="runner-header">
        <Terminal size={14} />
        <span>MCP Tool Runner</span>
      </div>
      
      <div className="runner-form">
        <div className="form-row">
          <label>Server</label>
          <select 
            value={selectedServer} 
            onChange={e => setSelectedServer(e.target.value)}
          >
            <option value="">Select MCP Server...</option>
            {mcpServers.map(server => (
              <option key={server.id} value={server.id}>{server.name}</option>
            ))}
          </select>
        </div>
        
        <div className="form-row">
          <label>Tool</label>
          <select 
            value={selectedTool} 
            onChange={e => setSelectedTool(e.target.value)}
            disabled={!selectedServer || isLoading}
          >
            <option value="">{isLoading ? 'Loading...' : 'Select Tool...'}</option>
            {availableTools.map(tool => (
              <option key={tool.name} value={tool.name}>{tool.name}</option>
            ))}
          </select>
        </div>
        
        {selectedToolSchema && (
          <div className="tool-description">
            {selectedToolSchema.description}
          </div>
        )}
        
        {selectedTool && selectedToolSchema?.parameters?.properties && (
          <div className="tool-params">
            <div className="params-header">Parameters</div>
            {Object.entries(selectedToolSchema.parameters.properties).map(([key, schema]: [string, any]) => (
              <div key={key} className="param-row">
                <label>
                  {key}
                  {selectedToolSchema.parameters.required?.includes(key) && <span className="required">*</span>}
                </label>
                <input
                  type={schema.type === 'number' || schema.type === 'integer' ? 'number' : 'text'}
                  value={typeof toolParams[key] === 'object' ? JSON.stringify(toolParams[key]) : toolParams[key] ?? ''}
                  onChange={e => setToolParams(p => ({ ...p, [key]: e.target.value }))}
                  placeholder={schema.description?.slice(0, 50) || key}
                />
              </div>
            ))}
          </div>
        )}
        
        <button 
          className="run-btn"
          onClick={runTool}
          disabled={!selectedServer || !selectedTool || isRunning}
        >
          {isRunning ? <RefreshCw size={14} className="spin" /> : <Play size={14} />}
          {isRunning ? 'Running...' : 'Run Tool'}
        </button>
      </div>
    </div>
  );
}

export default function Run2Panel() {
  const { project, isRunning, setIsRunning, runEvents, addRunEvent, clearRunEvents } = useStore();
  
  // UI state
  const [userInput, setUserInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState<[number, number] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState<Set<string>>(new Set());
  const [showStatePanel, setShowStatePanel] = useState(true);
  const [showToolRunner, setShowToolRunner] = useState(false);
  const [toolRunnerResults, setToolRunnerResults] = useState<any[]>([]);
  const [sidebarWidth, setSidebarWidth] = useState(360);
  const [isResizing, setIsResizing] = useState(false);
  
  const eventListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle sidebar resize
  useEffect(() => {
    if (!isResizing) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      // Clamp between 200 and 600 pixels
      setSidebarWidth(Math.min(600, Math.max(200, newWidth)));
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);
  
  // Calculate time bounds
  const timeBounds = useMemo(() => {
    if (runEvents.length === 0) return { min: 0, max: 0 };
    return {
      min: runEvents[0].timestamp,
      max: runEvents[runEvents.length - 1].timestamp,
    };
  }, [runEvents]);
  
  // Filter events
  const filteredEvents = useMemo(() => {
    return runEvents.filter((event, i) => {
      // Time range filter
      if (timeRange) {
        if (event.timestamp < timeRange[0] || event.timestamp > timeRange[1]) return false;
      }
      
      // Event type filter
      if (eventTypeFilter.size > 0 && !eventTypeFilter.has(event.event_type)) return false;
      
      // Search filter
      if (searchQuery) {
        const str = JSON.stringify(event).toLowerCase();
        if (!str.includes(searchQuery.toLowerCase())) return false;
      }
      
      return true;
    });
  }, [runEvents, timeRange, eventTypeFilter, searchQuery]);
  
  const selectedEvent = selectedEventIndex !== null ? runEvents[selectedEventIndex] : null;
  
  // Auto-scroll to new events
  useEffect(() => {
    if (isRunning && eventListRef.current) {
      eventListRef.current.scrollTop = eventListRef.current.scrollHeight;
    }
  }, [runEvents.length, isRunning]);
  
  // Handle run
  const handleRun = useCallback(() => {
    if (!project || !userInput.trim() || isRunning) return;
    
    // Close existing connection
    if (ws) {
      ws.close();
      setWs(null);
    }
    
    clearRunEvents();
    setIsRunning(true);
    setSelectedEventIndex(null);
    setTimeRange(null);
    
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
        data: { error: 'WebSocket connection error' }
      });
    };
    
    websocket.onclose = () => {
      setIsRunning(false);
    };
  }, [project, userInput, isRunning, ws, clearRunEvents, setIsRunning, addRunEvent]);
  
  // Handle stop
  const handleStop = useCallback(() => {
    ws?.close();
    setIsRunning(false);
  }, [ws, setIsRunning]);
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun]);
  
  if (!project) {
    return <div className="run2-panel empty">No project loaded</div>;
  }
  
  return (
    <div className={`run2-panel ${isResizing ? 'resizing' : ''}`}>
      <style>{`
        .run2-panel {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: #0a0a0f;
          color: #e4e4e7;
          font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
          font-size: 12px;
        }
        
        .run2-panel.resizing {
          cursor: col-resize;
          user-select: none;
        }
        
        .run2-panel.resizing * {
          cursor: col-resize;
        }
        
        .run2-panel.empty {
          align-items: center;
          justify-content: center;
          color: #71717a;
        }
        
        /* Input Area */
        .input-area {
          display: flex;
          gap: 8px;
          padding: 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .input-area input {
          flex: 1;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 12px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 12px;
        }
        
        .input-area input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .input-area button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 4px;
          color: white;
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
        }
        
        .input-area button:hover {
          background: #2563eb;
        }
        
        .input-area button.stop {
          background: #ef4444;
        }
        
        .input-area button.stop:hover {
          background: #dc2626;
        }
        
        .input-area button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Toolbar */
        .toolbar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .toolbar-divider {
          width: 1px;
          height: 20px;
          background: #27272a;
          margin: 0 8px;
        }
        
        .toolbar input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 4px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
          width: 200px;
        }
        
        .toolbar input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .filter-chip {
          padding: 3px 8px;
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .filter-chip:hover {
          background: #3f3f46;
        }
        
        .filter-chip.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }
        
        .toolbar-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: transparent;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .toolbar-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .toolbar-btn.active {
          background: #27272a;
          border-color: #3b82f6;
          color: #3b82f6;
        }
        
        /* Main Content */
        .main-content {
          display: flex;
          flex: 1;
          min-height: 0;
        }
        
        /* Event List (Packet List) */
        .event-list-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #27272a;
        }
        
        .event-list-header {
          display: grid;
          grid-template-columns: 60px 80px 100px 80px 1fr;
          gap: 1px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
          font-size: 10px;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .event-list-header > div {
          padding: 6px 8px;
          background: #18181b;
        }
        
        .event-list {
          flex: 1;
          overflow-y: auto;
          background: #09090b;
        }
        
        .event-row {
          display: grid;
          grid-template-columns: 60px 80px 100px 80px 1fr;
          gap: 1px;
          border-bottom: 1px solid #18181b;
          cursor: pointer;
          transition: background 0.1s;
        }
        
        .event-row:hover {
          filter: brightness(1.2);
        }
        
        .event-row.selected {
          outline: 1px solid #3b82f6;
          outline-offset: -1px;
        }
        
        .event-row > div {
          padding: 3px 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .event-row .index { color: #71717a; font-size: 10px; }
        .event-row .time { font-size: 10px; }
        .event-row .agent { font-weight: 500; }
        .event-row .type { 
          font-size: 10px; 
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .event-row .summary { font-size: 11px; }
        
        /* Time Range Selector */
        .time-range {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .time-range label {
          font-size: 10px;
          color: #71717a;
        }
        
        .time-range input[type="datetime-local"] {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 2px 6px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 10px;
        }
        
        .time-range button {
          padding: 2px 8px;
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .time-range button:hover {
          background: #3f3f46;
        }
        
        /* Side Panel */
        .side-panel-container {
          display: flex;
          flex-shrink: 0;
        }
        
        .resize-handle {
          width: 4px;
          background: #27272a;
          cursor: col-resize;
          transition: background 0.15s;
        }
        
        .resize-handle:hover,
        .resize-handle.active {
          background: #3b82f6;
        }
        
        .side-panel {
          display: flex;
          flex-direction: column;
          background: #0f0f14;
          min-width: 0;
        }
        
        .side-panel-tabs {
          display: flex;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .side-panel-tab {
          flex: 1;
          padding: 8px;
          background: transparent;
          border: none;
          color: #71717a;
          font-size: 11px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        
        .side-panel-tab:hover {
          color: #a1a1aa;
        }
        
        .side-panel-tab.active {
          color: #e4e4e7;
          border-bottom-color: #3b82f6;
        }
        
        .side-panel-content {
          flex: 1;
          overflow-y: auto;
        }
        
        /* Event Detail */
        .event-detail {
          padding: 8px;
        }
        
        .detail-header {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        
        .detail-type {
          padding: 2px 8px;
          background: #3b82f6;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .detail-agent {
          color: #a1a1aa;
          font-size: 11px;
        }
        
        .detail-time {
          color: #71717a;
          font-size: 10px;
          margin-left: auto;
        }
        
        .detail-section {
          margin-bottom: 8px;
          background: #18181b;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          background: #27272a;
          cursor: pointer;
          font-size: 11px;
          font-weight: 500;
        }
        
        .section-header:hover {
          background: #3f3f46;
        }
        
        .section-content {
          padding: 8px;
          font-size: 11px;
          line-height: 1.5;
        }
        
        /* JSON Viewer */
        .json-viewer {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          line-height: 1.6;
        }
        
        .json-key { color: #93c5fd; }
        .json-string { color: #86efac; }
        .json-number { color: #fde047; }
        .json-boolean { color: #f472b6; }
        .json-null { color: #71717a; }
        .json-undefined { color: #71717a; font-style: italic; }
        .json-truncated { color: #71717a; font-size: 10px; }
        
        /* Message Items */
        .message-item {
          margin-bottom: 8px;
          padding: 8px;
          background: #09090b;
          border-radius: 4px;
        }
        
        .message-role {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        
        .message-role.user { background: #3b82f6; }
        .message-role.model { background: #22c55e; }
        .message-role.assistant { background: #22c55e; }
        .message-role.system { background: #a855f7; }
        
        .message-parts pre {
          margin: 4px 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          white-space: pre-wrap;
          word-break: break-all;
          font-size: 11px;
        }
        
        .function-call, .function-response {
          margin: 4px 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          border-left: 3px solid #3b82f6;
        }
        
        .function-response {
          border-left-color: #22c55e;
        }
        
        .result-content {
          white-space: pre-wrap;
          word-break: break-all;
          background: #18181b;
          padding: 8px;
          border-radius: 4px;
          max-height: 300px;
          overflow-y: auto;
        }
        
        /* State Snapshot */
        .state-snapshot {
          padding: 8px;
        }
        
        .state-empty {
          padding: 16px;
          text-align: center;
          color: #71717a;
        }
        
        .state-entry {
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        
        .state-key {
          font-weight: 600;
          color: #93c5fd;
          font-size: 11px;
          margin-bottom: 4px;
        }
        
        .state-value {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          color: #86efac;
          white-space: pre-wrap;
          word-break: break-all;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .state-time {
          font-size: 10px;
          color: #71717a;
          margin-top: 4px;
        }
        
        /* MCP Runner */
        .mcp-runner {
          padding: 8px;
        }
        
        .runner-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .runner-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .form-row label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .form-row select, .form-row input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 6px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
        }
        
        .form-row select:focus, .form-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .tool-description {
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
        }
        
        .tool-params {
          background: #18181b;
          border-radius: 4px;
          padding: 8px;
        }
        
        .params-header {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        .param-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }
        
        .param-row label {
          font-size: 10px;
          color: #a1a1aa;
        }
        
        .param-row .required {
          color: #ef4444;
          margin-left: 2px;
        }
        
        .run-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          background: #22c55e;
          border: none;
          border-radius: 4px;
          color: white;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
        }
        
        .run-btn:hover {
          background: #16a34a;
        }
        
        .run-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Empty State */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #71717a;
          gap: 8px;
        }
        
        /* Stats Bar */
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 4px 8px;
          background: #18181b;
          border-top: 1px solid #27272a;
          font-size: 10px;
          color: #71717a;
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .stat-value {
          color: #e4e4e7;
          font-weight: 600;
        }
      `}</style>
      
      {/* Input Area */}
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter your query..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleRun()}
          disabled={isRunning}
        />
        {isRunning ? (
          <button className="stop" onClick={handleStop}>
            <Square size={14} />
            Stop
          </button>
        ) : (
          <button onClick={handleRun} disabled={!userInput.trim()}>
            <Play size={14} />
            Run
          </button>
        )}
      </div>
      
      {/* Toolbar */}
      <div className="toolbar">
        <div className="toolbar-section">
          <Search size={12} style={{ color: '#71717a' }} />
          <input
            type="text"
            placeholder="Filter events..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="toolbar-divider" />
        
        <div className="toolbar-section">
          {['tool_call', 'tool_result', 'model_call', 'model_response', 'state_change'].map(type => (
            <button
              key={type}
              className={`filter-chip ${eventTypeFilter.has(type) ? 'active' : ''}`}
              onClick={() => {
                const next = new Set(eventTypeFilter);
                if (next.has(type)) next.delete(type);
                else next.add(type);
                setEventTypeFilter(next);
              }}
            >
              {type.replace('_', ' ')}
            </button>
          ))}
        </div>
        
        <div className="toolbar-divider" />
        
        <div className="toolbar-section">
          <button
            className={`toolbar-btn ${showStatePanel ? 'active' : ''}`}
            onClick={() => setShowStatePanel(!showStatePanel)}
          >
            <Database size={12} />
            State
          </button>
          <button
            className={`toolbar-btn ${showToolRunner ? 'active' : ''}`}
            onClick={() => setShowToolRunner(!showToolRunner)}
          >
            <Terminal size={12} />
            Tools
          </button>
        </div>
        
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, color: '#71717a' }}>{filteredEvents.length} / {runEvents.length} events</span>
          {timeRange && (
            <button 
              className="toolbar-btn"
              onClick={() => setTimeRange(null)}
            >
              Clear Range
            </button>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content" ref={containerRef}>
        {/* Event List */}
        <div className="event-list-container">
          <div className="event-list-header">
            <div>#</div>
            <div>Time</div>
            <div>Agent</div>
            <div>Type</div>
            <div>Info</div>
          </div>
          
          <div className="event-list" ref={eventListRef}>
            {filteredEvents.length === 0 ? (
              <div className="empty-state">
                <Layers size={24} />
                <span>{runEvents.length === 0 ? 'No events yet' : 'No matching events'}</span>
              </div>
            ) : (
              filteredEvents.map((event, i) => {
                const globalIndex = runEvents.indexOf(event);
                const colors = EVENT_COLORS[event.event_type] || EVENT_COLORS.error;
                const Icon = EVENT_ICONS[event.event_type] || MessageSquare;
                
                return (
                  <div
                    key={globalIndex}
                    className={`event-row ${selectedEventIndex === globalIndex ? 'selected' : ''}`}
                    style={{ background: colors.bg }}
                    onClick={() => setSelectedEventIndex(globalIndex)}
                    onDoubleClick={() => {
                      // Set time range to this event and next few seconds
                      setTimeRange([event.timestamp, event.timestamp + 5]);
                    }}
                  >
                    <div className="index">{globalIndex}</div>
                    <div className="time" style={{ color: colors.fg }}>
                      {formatTimestamp(event.timestamp, timeBounds.min)}
                    </div>
                    <div className="agent" style={{ color: colors.fg }}>
                      {event.agent_name}
                    </div>
                    <div className="type" style={{ color: colors.fg }}>
                      <Icon size={10} />
                      {event.event_type.split('_')[0]}
                    </div>
                    <div className="summary">{getEventSummary(event)}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
        {/* Side Panel with Resize Handle */}
        <div className="side-panel-container" style={{ width: sidebarWidth }}>
          <div 
            className={`resize-handle ${isResizing ? 'active' : ''}`}
            onMouseDown={() => setIsResizing(true)}
          />
          <div className="side-panel" style={{ width: sidebarWidth - 4 }}>
          <div className="side-panel-tabs">
            <button 
              className={`side-panel-tab ${!showStatePanel && !showToolRunner ? 'active' : ''}`}
              onClick={() => { setShowStatePanel(false); setShowToolRunner(false); }}
            >
              <Eye size={12} style={{ marginRight: 4 }} />
              Details
            </button>
            <button 
              className={`side-panel-tab ${showStatePanel ? 'active' : ''}`}
              onClick={() => { setShowStatePanel(true); setShowToolRunner(false); }}
            >
              <Database size={12} style={{ marginRight: 4 }} />
              State
            </button>
            <button 
              className={`side-panel-tab ${showToolRunner ? 'active' : ''}`}
              onClick={() => { setShowToolRunner(true); setShowStatePanel(false); }}
            >
              <Terminal size={12} style={{ marginRight: 4 }} />
              Tools
            </button>
          </div>
          
          <div className="side-panel-content">
            {showToolRunner ? (
              <MCPToolRunner 
                project={project} 
                onResult={(result) => setToolRunnerResults(prev => [...prev, result])}
              />
            ) : showStatePanel ? (
              <StateSnapshot 
                events={runEvents} 
                endTime={timeRange ? timeRange[1] : (runEvents.length > 0 ? runEvents[runEvents.length - 1].timestamp : Date.now() / 1000)}
              />
            ) : selectedEvent ? (
              <EventDetail event={selectedEvent} />
            ) : (
              <div className="empty-state">
                <Eye size={24} />
                <span>Select an event to view details</span>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <span>Events:</span>
          <span className="stat-value">{runEvents.length}</span>
        </div>
        <div className="stat-item">
          <span>Tool Calls:</span>
          <span className="stat-value">{runEvents.filter(e => e.event_type === 'tool_call').length}</span>
        </div>
        <div className="stat-item">
          <span>Model Calls:</span>
          <span className="stat-value">{runEvents.filter(e => e.event_type === 'model_call').length}</span>
        </div>
        <div className="stat-item">
          <span>State Changes:</span>
          <span className="stat-value">{runEvents.filter(e => e.event_type === 'state_change').length}</span>
        </div>
        {runEvents.length > 0 && (
          <div className="stat-item">
            <span>Duration:</span>
            <span className="stat-value">
              {((runEvents[runEvents.length - 1].timestamp - runEvents[0].timestamp) * 1000).toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

