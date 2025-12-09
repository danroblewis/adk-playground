import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Play, Square, Clock, Cpu, Wrench, GitBranch, MessageSquare, Database, 
  ChevronDown, ChevronRight, Zap, Filter, Search, Terminal, Eye,
  CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Layers, Plus, Trash2, X
} from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { RunEvent, Project, MCPServerConfig } from '../utils/types';
import { createRunWebSocket, fetchJSON, getMcpServers } from '../utils/api';

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
  
  const renderValue = (value: any, depth = 0, inline = false): React.ReactNode => {
    const indent = '  '.repeat(depth);
    const childIndent = '  '.repeat(depth + 1);
    
    if (value === null) return <span className="json-null">null</span>;
    if (value === undefined) return <span className="json-undefined">undefined</span>;
    if (typeof value === 'boolean') return <span className="json-boolean">{value.toString()}</span>;
    if (typeof value === 'number') return <span className="json-number">{value}</span>;
    if (typeof value === 'string') {
      // Escape special characters for display
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
      if (escaped.length > 300 && depth > 0) {
        return <span className="json-string">"{escaped.slice(0, 300)}..." <span className="json-truncated">({value.length} chars)</span></span>;
      }
      return <span className="json-string">"{escaped}"</span>;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="json-bracket">[]</span>;
      // Check if array contains only primitives and is short
      const isSimple = value.every(v => v === null || typeof v !== 'object') && value.length <= 3;
      if (isSimple) {
        return (
          <span className="json-inline">
            <span className="json-bracket">[</span>
            {value.map((item, i) => (
              <span key={i}>
                {renderValue(item, depth + 1, true)}
                {i < value.length - 1 && <span className="json-comma">, </span>}
              </span>
            ))}
            <span className="json-bracket">]</span>
          </span>
        );
      }
      return (
        <span className="json-block">
          <span className="json-bracket">[</span>
          {value.map((item, i) => (
            <span key={i}>
              {'\n' + childIndent}
              {renderValue(item, depth + 1)}
              {i < value.length - 1 && <span className="json-comma">,</span>}
            </span>
          ))}
          {'\n' + indent}<span className="json-bracket">]</span>
        </span>
      );
    }
    if (typeof value === 'object') {
      const entries = Object.entries(value);
      if (entries.length === 0) return <span className="json-bracket">{'{}'}</span>;
      // Check if object is simple (few keys, primitive values)
      const isSimple = entries.length <= 2 && entries.every(([, v]) => v === null || typeof v !== 'object');
      if (isSimple && inline) {
        return (
          <span className="json-inline">
            <span className="json-bracket">{'{'}</span>
            {entries.map(([k, v], i) => (
              <span key={k}>
                <span className="json-key">"{k}"</span>
                <span className="json-colon">: </span>
                {renderValue(v, depth + 1, true)}
                {i < entries.length - 1 && <span className="json-comma">, </span>}
              </span>
            ))}
            <span className="json-bracket">{'}'}</span>
          </span>
        );
      }
      return (
        <span className="json-block">
          <span className="json-bracket">{'{'}</span>
          {entries.map(([k, v], i) => (
            <span key={k}>
              {'\n' + childIndent}
              <span className="json-key">"{k}"</span>
              <span className="json-colon">: </span>
              {renderValue(v, depth + 1)}
              {i < entries.length - 1 && <span className="json-comma">,</span>}
            </span>
          ))}
          {'\n' + indent}<span className="json-bracket">{'}'}</span>
        </span>
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

// State snapshot component - shows state after selected event
function StateSnapshot({ events, selectedEventIndex }: { events: RunEvent[]; selectedEventIndex: number | null }) {
  const state = useMemo(() => {
    const snapshot: Record<string, { value: any; timestamp: number }> = {};
    
    // If an event is selected, show state up to and including that event
    // Otherwise show state at end of all events
    const relevantEvents = selectedEventIndex !== null
      ? events.slice(0, selectedEventIndex + 1)
      : events;
    
    relevantEvents
      .filter(e => e.event_type === 'state_change')
      .forEach(e => {
        if (e.data?.state_delta) {
          Object.entries(e.data.state_delta).forEach(([key, value]) => {
            snapshot[key] = { value, timestamp: e.timestamp };
          });
        }
      });
    
    return snapshot;
  }, [events, selectedEventIndex]);
  
  const entries = Object.entries(state);
  
  return (
    <div className="state-snapshot">
      <div className="state-header">
        {selectedEventIndex !== null 
          ? `State after event #${selectedEventIndex}` 
          : 'State at end of run'}
      </div>
      {entries.length === 0 ? (
        <div className="state-empty">No state changes at this point</div>
      ) : (
        entries.map(([key, { value, timestamp }]) => (
          <div key={key} className="state-entry">
            <div className="state-key">{key}</div>
            <div className="state-value">
              {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
            </div>
            <div className="state-time">{new Date(timestamp * 1000).toLocaleTimeString()}</div>
          </div>
        ))
      )}
    </div>
  );
}

// Import WatchExpression type from store
import type { WatchExpression } from '../hooks/useStore';

// jq-web for JSON transforms - loaded lazily to handle WASM loading
let jq: any = null;
let jqLoadError: string | null = null;

// Try to load jq-web asynchronously
(async () => {
  try {
    // @ts-ignore - jq-web doesn't have types
    const jqModule = await import('jq-web');
    jq = jqModule.default;
  } catch (e: any) {
    console.warn('jq-web failed to load:', e.message);
    jqLoadError = e.message;
  }
})();

// Extract clean result text from MCP response
function extractResultText(result: any): { text: string; isError: boolean } {
  if (!result) return { text: '', isError: false };
  
  // Handle API response wrapper
  if (result.success === false) {
    return { text: result.error || 'Unknown error', isError: true };
  }
  
  let data = result.result || result;
  
  // If it's a string that looks like a Python dict, try to parse it
  if (typeof data === 'string') {
    // Try to convert Python-style dict to JSON
    try {
      const jsonStr = data
        .replace(/'/g, '"')
        .replace(/True/g, 'true')
        .replace(/False/g, 'false')
        .replace(/None/g, 'null');
      data = JSON.parse(jsonStr);
    } catch {
      // Not parseable, return as-is
      return { text: data, isError: false };
    }
  }
  
  // Handle MCP content format
  if (data.content && Array.isArray(data.content)) {
    const texts = data.content
      .filter((p: any) => p.type === 'text')
      .map((p: any) => p.text);
    return { 
      text: texts.join('\n'), 
      isError: data.isError === true 
    };
  }
  
  // Fallback
  return { 
    text: typeof data === 'string' ? data : JSON.stringify(data, null, 2),
    isError: false 
  };
}

// Apply transform to result - supports both jq queries and JavaScript expressions
// jq: default syntax (e.g., ".items[0].name", ".content[].text")
// JavaScript: starts with "js:" (e.g., "js:value.split('\n')[0]")
function applyTransform(text: string, transform: string | undefined): string {
  if (!transform || !transform.trim()) return text;
  
  const trimmed = transform.trim();
  
  // Try to parse the text as JSON first
  let data: any = text;
  try {
    data = JSON.parse(text);
  } catch {
    // Keep as string if not valid JSON
  }
  
  // JavaScript transform (explicit prefix)
  if (trimmed.startsWith('js:')) {
    const jsExpr = trimmed.slice(3).trim();
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function('value', 'data', `return ${jsExpr}`);
      const result = fn(text, data);
      return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
    } catch (e) {
      return `[JS error: ${e}]`;
    }
  }
  
  // jq query (default) - but fallback if jq isn't loaded
  if (jq) {
    try {
      const result = jq.json(data, trimmed);
      if (result === null || result === undefined) {
        return '[No match]';
      }
      return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
    } catch (e: any) {
      // If jq fails and doesn't start with ".", try as JS expression
      if (!trimmed.startsWith('.')) {
        try {
          // eslint-disable-next-line no-new-func
          const fn = new Function('value', 'data', `return ${trimmed}`);
          const result = fn(text, data);
          return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
        } catch {
          // Return jq error
        }
      }
      return `[jq error: ${e.message || e}]`;
    }
  } else {
    // jq not loaded, try as JS expression or return error
    if (jqLoadError) {
      // Try simple property access for dot notation
      if (trimmed.startsWith('.') && !trimmed.includes('|')) {
        try {
          const path = trimmed.slice(1).split('.').filter(Boolean);
          let result: any = data;
          for (const key of path) {
            // Handle array index like [0]
            const match = key.match(/^(\w+)?\[(\d+)\]$/);
            if (match) {
              if (match[1]) result = result[match[1]];
              result = result[parseInt(match[2])];
            } else {
              result = result[key];
            }
          }
          return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
        } catch {
          // Fall through to JS
        }
      }
      // Try as JS expression
      try {
        // eslint-disable-next-line no-new-func
        const fn = new Function('value', 'data', `return ${trimmed}`);
        const result = fn(text, data);
        return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
      } catch (e: any) {
        return `[jq not loaded: ${jqLoadError}. JS fallback failed: ${e.message}]`;
      }
    }
    return '[jq loading...]';
  }
}

// Tool Watch Panel component
function ToolWatchPanel({ project, selectedEventIndex }: { project: Project; selectedEventIndex: number | null }) {
  // Use global store for watches so they persist across tab switches
  const { watches, updateWatch, addWatch: storeAddWatch, removeWatch: storeRemoveWatch, runEvents } = useStore();
  
  // Track last event count to detect new events
  const lastEventCountRef = useRef(0);
  const [autoRefresh, setAutoRefresh] = useState(true);
  
  const [showDialog, setShowDialog] = useState(false);
  const [editingWatchId, setEditingWatchId] = useState<string | null>(null);  // null = adding new
  const [availableTools, setAvailableTools] = useState<Record<string, any[]>>({});
  const [loadingServers, setLoadingServers] = useState<Set<string>>(new Set());
  
  // Form state (used for both add and edit)
  const [formServerName, setFormServerName] = useState('');
  const [formToolName, setFormToolName] = useState('');
  const [formArgs, setFormArgs] = useState<Record<string, any>>({});
  const [formTransform, setFormTransform] = useState('');
  const [knownServers, setKnownServers] = useState<MCPServerConfig[]>([]);
  
  // Test run state for dialog
  const [testResult, setTestResult] = useState<string | null>(null);
  const [testError, setTestError] = useState<string | null>(null);
  const [isTestRunning, setIsTestRunning] = useState(false);
  
  // Fetch known MCP servers on mount
  useEffect(() => {
    getMcpServers().then(setKnownServers).catch(console.error);
  }, []);
  
  // Auto-refresh watches when new events are added
  useEffect(() => {
    if (!autoRefresh) return;
    if (runEvents.length > lastEventCountRef.current && watches.length > 0) {
      const newEventIndex = runEvents.length - 1;
      // New event(s) added, refresh all watches
      watches.forEach(watch => {
        // Don't re-run if already loading
        if (!watch.isLoading) {
          runWatchRef.current?.(watch, newEventIndex);
        }
      });
    }
    lastEventCountRef.current = runEvents.length;
  }, [runEvents.length, autoRefresh, watches]);
  
  // Keep a ref to runWatch so the effect doesn't need it as dependency
  const runWatchRef = useRef<typeof runWatch | null>(null);
  
  // Combine project servers with known servers
  const mcpServers = useMemo(() => {
    const projectServers = project.mcp_servers || [];
    const projectServerNames = new Set(projectServers.map(s => s.name));
    // Add known servers that aren't already in project
    const additionalServers = knownServers.filter(s => !projectServerNames.has(s.name));
    return [...projectServers, ...additionalServers];
  }, [project.mcp_servers, knownServers]);
  
  // Load tools for a server by name
  const loadServerTools = useCallback(async (serverName: string) => {
    if (availableTools[serverName] || loadingServers.has(serverName)) return;
    
    setLoadingServers(prev => new Set([...prev, serverName]));
    try {
      const result = await fetchJSON<{ success: boolean; tools: any[] }>(
        `/projects/${project.id}/mcp-servers/${encodeURIComponent(serverName)}/test-connection`,
        { method: 'POST' }
      );
      if (result.success) {
        setAvailableTools(prev => ({ ...prev, [serverName]: result.tools }));
      }
    } catch (err) {
      console.error('Failed to load tools:', err);
    } finally {
      setLoadingServers(prev => {
        const next = new Set(prev);
        next.delete(serverName);
        return next;
      });
    }
  }, [project.id, availableTools, loadingServers]);
  
  // Update args when tool changes (only when adding new, not editing)
  useEffect(() => {
    if (editingWatchId) return;  // Don't auto-update args when editing
    if (!formServerName || !formToolName) {
      setFormArgs({});
      return;
    }
    const tools = availableTools[formServerName] || [];
    const tool = tools.find(t => t.name === formToolName);
    if (!tool?.parameters?.properties) {
      setFormArgs({});
      return;
    }
    const placeholders: Record<string, any> = {};
    Object.entries(tool.parameters.properties).forEach(([key, schema]: [string, any]) => {
      if (schema.type === 'string') placeholders[key] = schema.default || '';
      else if (schema.type === 'number' || schema.type === 'integer') placeholders[key] = schema.default || 0;
      else if (schema.type === 'boolean') placeholders[key] = schema.default || false;
      else placeholders[key] = schema.default || null;
    });
    setFormArgs(placeholders);
  }, [formServerName, formToolName, availableTools, editingWatchId]);
  
  // Open dialog for adding new watch
  const openAddDialog = () => {
    setEditingWatchId(null);
    setFormServerName('');
    setFormToolName('');
    setFormArgs({});
    setFormTransform('');
    setTestResult(null);
    setTestError(null);
    setShowDialog(true);
  };
  
  // Open dialog for editing existing watch
  const openEditDialog = (watch: WatchExpression) => {
    setEditingWatchId(watch.id);
    setFormServerName(watch.serverName);
    setFormToolName(watch.toolName);
    setFormArgs({ ...watch.args });
    setFormTransform(watch.transform || '');
    // Pre-populate test result with existing result if available
    if (watch.result) {
      const { text } = extractResultText(watch.result);
      setTestResult(text);
      setTestError(null);
    } else {
      setTestResult(null);
      setTestError(null);
    }
    // Load tools for the server if not already loaded
    if (!availableTools[watch.serverName]) {
      loadServerTools(watch.serverName);
    }
    setShowDialog(true);
  };
  
  // Test run tool in dialog
  const testRunTool = async () => {
    if (!formServerName || !formToolName) return;
    
    setIsTestRunning(true);
    setTestError(null);
    
    try {
      const result = await fetchJSON(`/projects/${project.id}/run-mcp-tool`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          server_name: formServerName,
          tool_name: formToolName,
          arguments: formArgs,
        }),
      });
      
      const { text, isError } = extractResultText(result);
      if (isError) {
        setTestError(text);
        setTestResult(null);
      } else {
        setTestResult(text);
        setTestError(null);
      }
    } catch (err) {
      setTestError(String(err));
      setTestResult(null);
    } finally {
      setIsTestRunning(false);
    }
  };
  
  // Live preview of transform applied to test result
  const transformPreview = useMemo(() => {
    if (!testResult) return null;
    if (!formTransform || !formTransform.trim()) return testResult;
    return applyTransform(testResult, formTransform);
  }, [testResult, formTransform]);
  
  // Save (add or update) watch
  const saveWatch = () => {
    if (!formServerName || !formToolName) return;
    
    if (editingWatchId) {
      // Update existing watch
      updateWatch(editingWatchId, {
        serverName: formServerName,
        toolName: formToolName,
        args: { ...formArgs },
        transform: formTransform || undefined,
      });
      // Re-run the watch with new config
      const updatedWatch = watches.find(w => w.id === editingWatchId);
      if (updatedWatch) {
        runWatch({ ...updatedWatch, serverName: formServerName, toolName: formToolName, args: formArgs, transform: formTransform || undefined, history: updatedWatch.history || [] });
      }
    } else {
      // Add new watch
      const watch: WatchExpression = {
        id: `watch-${Date.now()}`,
        serverName: formServerName,
        toolName: formToolName,
        args: { ...formArgs },
        transform: formTransform || undefined,
        history: [],
      };
      storeAddWatch(watch);
      // Run immediately
      runWatch(watch);
    }
    
    setShowDialog(false);
  };
  
  const removeWatch = (id: string) => {
    storeRemoveWatch(id);
  };
  
  const runWatch = useCallback(async (watch: WatchExpression, eventIndex?: number) => {
    updateWatch(watch.id, { isLoading: true, error: undefined });
    
    const currentEventIndex = eventIndex ?? runEvents.length - 1;
    const timestamp = Date.now();
    
    try {
      const result = await fetchJSON(`/projects/${project.id}/run-mcp-tool`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          server_name: watch.serverName,
          tool_name: watch.toolName,
          arguments: watch.args,
        }),
      });
      
      // Add to history
      const newSnapshot = { eventIndex: currentEventIndex, timestamp, result };
      const history = [...(watch.history || []), newSnapshot];
      
      updateWatch(watch.id, { result, isLoading: false, lastRun: timestamp, history });
    } catch (err) {
      // Add error to history
      const newSnapshot = { eventIndex: currentEventIndex, timestamp, error: String(err) };
      const history = [...(watch.history || []), newSnapshot];
      
      updateWatch(watch.id, { error: String(err), isLoading: false, lastRun: timestamp, history });
    }
  }, [project.id, updateWatch, runEvents.length]);
  
  // Keep ref updated for the auto-refresh effect
  useEffect(() => {
    runWatchRef.current = runWatch;
  }, [runWatch]);
  
  const runAllWatches = () => {
    watches.forEach(watch => runWatch(watch));
  };
  
  const selectedToolSchema = useMemo(() => {
    if (!formServerName || !formToolName) return null;
    const tools = availableTools[formServerName] || [];
    return tools.find(t => t.name === formToolName);
  }, [formServerName, formToolName, availableTools]);
  
  return (
    <div className="tool-watch-panel">
      <div className="watch-header">
        <Eye size={14} />
        <span>Tool Watch</span>
        <div className="watch-actions">
          <button 
            className={`watch-btn ${autoRefresh ? 'active' : ''}`} 
            onClick={() => setAutoRefresh(!autoRefresh)} 
            title={autoRefresh ? 'Auto-refresh ON (after every event)' : 'Auto-refresh OFF'}
          >
            <Zap size={12} />
          </button>
          <button className="watch-btn" onClick={runAllWatches} title="Refresh all">
            <RefreshCw size={12} />
          </button>
          <button className="watch-btn" onClick={openAddDialog} title="Add watch">
            <Plus size={12} />
          </button>
        </div>
      </div>
      
      {watches.length === 0 ? (
        <div className="watch-empty">
          <Eye size={20} style={{ opacity: 0.3 }} />
          <span>No watch expressions</span>
          <button className="add-watch-btn" onClick={openAddDialog}>
            <Plus size={12} /> Add Tool Watch
          </button>
        </div>
      ) : (
        <div className="watch-list">
          {watches.map(watch => {
            // Find the result at or before the selected event index
            let resultToShow = watch.result;
            let errorToShow = watch.error;
            
            if (selectedEventIndex !== null && watch.history && watch.history.length > 0) {
              // Find the most recent snapshot at or before selectedEventIndex
              const relevantSnapshots = watch.history.filter(s => s.eventIndex <= selectedEventIndex);
              if (relevantSnapshots.length > 0) {
                const latestSnapshot = relevantSnapshots[relevantSnapshots.length - 1];
                resultToShow = latestSnapshot.result;
                errorToShow = latestSnapshot.error;
              } else {
                // No snapshots at or before this event
                resultToShow = undefined;
                errorToShow = undefined;
              }
            }
            
            const { text, isError } = resultToShow 
              ? extractResultText(resultToShow)
              : { text: '', isError: false };
            const displayText = resultToShow ? applyTransform(text, watch.transform) : '';
            const hasError = errorToShow || isError;
            
            return (
              <div key={watch.id} className={`watch-item ${hasError ? 'error' : ''}`}>
                <div className="watch-item-header">
                  <span className="watch-expr">
                    <span className="watch-server">{watch.serverName}</span>
                    <span className="watch-tool">{watch.toolName}</span>
                    {Object.keys(watch.args).length > 0 && (
                      <span className="watch-args">
                        ({Object.entries(watch.args).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(', ')})
                      </span>
                    )}
                    {selectedEventIndex !== null && (
                      <span className="watch-time-indicator">@{selectedEventIndex}</span>
                    )}
                  </span>
                  <div className="watch-item-actions">
                    <button onClick={() => openEditDialog(watch)} title="Edit watch">
                      <Wrench size={10} />
                    </button>
                    <button onClick={() => runWatch(watch)} title="Refresh">
                      {watch.isLoading ? <RefreshCw size={10} className="spin" /> : <RefreshCw size={10} />}
                    </button>
                    <button onClick={() => removeWatch(watch.id)} title="Remove">
                      <Trash2 size={10} />
                    </button>
                  </div>
                </div>
                <div className="watch-result">
                  {watch.isLoading ? (
                    <span className="loading">Loading...</span>
                  ) : errorToShow ? (
                    <span className="error">{errorToShow}</span>
                  ) : resultToShow ? (
                    <pre className={isError ? 'error-text' : ''}>{displayText}</pre>
                  ) : (
                    <span className="no-result">{selectedEventIndex !== null ? 'No data at this event' : 'Not yet run'}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Add/Edit Watch Dialog */}
      {showDialog && (
        <div className="watch-dialog-overlay" onClick={() => setShowDialog(false)}>
          <div className="watch-dialog" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <span>{editingWatchId ? 'Edit Watch' : 'Add Tool Watch'}</span>
              <button onClick={() => setShowDialog(false)}><X size={14} /></button>
            </div>
            
            <div className="dialog-body">
              <div className="form-row">
                <label>MCP Server</label>
                <select 
                  value={formServerName} 
                  onChange={e => {
                    setFormServerName(e.target.value);
                    if (!editingWatchId) setFormToolName('');  // Only clear tool when adding new
                    if (e.target.value) loadServerTools(e.target.value);
                  }}
                >
                  <option value="">Select server...</option>
                  {mcpServers.map(server => (
                    <option key={server.name} value={server.name}>{server.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-row">
                <label>Tool</label>
                <select 
                  value={formToolName} 
                  onChange={e => setFormToolName(e.target.value)}
                  disabled={!formServerName || loadingServers.has(formServerName)}
                >
                  <option value="">
                    {loadingServers.has(formServerName) ? 'Loading tools...' : 'Select tool...'}
                  </option>
                  {(availableTools[formServerName] || []).map(tool => (
                    <option key={tool.name} value={tool.name}>{tool.name}</option>
                  ))}
                </select>
              </div>
              
              {selectedToolSchema?.description && (
                <div className="tool-desc">{selectedToolSchema.description}</div>
              )}
              
              {selectedToolSchema?.parameters?.properties && Object.keys(selectedToolSchema.parameters.properties).length > 0 && (
                <div className="tool-args">
                  <label>Arguments</label>
                  {Object.entries(selectedToolSchema.parameters.properties).map(([key, schema]: [string, any]) => (
                    <div key={key} className="arg-row">
                      <span className="arg-name">
                        {key}
                        {selectedToolSchema.parameters.required?.includes(key) && <span className="required">*</span>}
                      </span>
                      <input
                        type={schema.type === 'number' || schema.type === 'integer' ? 'number' : 'text'}
                        value={typeof formArgs[key] === 'object' ? JSON.stringify(formArgs[key]) : formArgs[key] ?? ''}
                        onChange={e => setFormArgs(prev => ({ ...prev, [key]: e.target.value }))}
                        placeholder={schema.description?.slice(0, 40) || key}
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Test Section */}
              {formServerName && formToolName && (
                <div className="test-section">
                  <div className="test-header">
                    <label>Test & Preview</label>
                    <button 
                      className="test-btn"
                      onClick={testRunTool}
                      disabled={isTestRunning}
                    >
                      {isTestRunning ? <RefreshCw size={12} className="spin" /> : <Play size={12} />}
                      {isTestRunning ? 'Running...' : 'Test Run'}
                    </button>
                  </div>
                  
                  {testError && (
                    <div className="test-result error">
                      <span className="test-label">Error:</span>
                      <pre>{testError}</pre>
                    </div>
                  )}
                  
                  {testResult && (
                    <div className="test-result">
                      <span className="test-label">Raw Result:</span>
                      <pre>{testResult}</pre>
                    </div>
                  )}
                </div>
              )}
              
              <div className="form-row transform-row">
                <label>Transform (optional)</label>
                <input
                  type="text"
                  value={formTransform}
                  onChange={e => setFormTransform(e.target.value)}
                  placeholder="e.g., .items[0].name or .content[].text"
                />
                <div className="transform-hints">
                  <span className="hint-title">jq:</span>
                  <code onClick={() => setFormTransform('.items[0].name')}>.items[0].name</code>
                  <code onClick={() => setFormTransform('.content[].text')}>.content[].text</code>
                  <code onClick={() => setFormTransform('.result.content[0].text')}>.result.content[0].text</code>
                  <code onClick={() => setFormTransform('.[] | select(.status == "active")')}>.[] | select()</code>
                  <span className="hint-title">JS:</span>
                  <code onClick={() => setFormTransform("js:value.split('\\n')[0]")}>js:value.split('\n')[0]</code>
                  <code onClick={() => setFormTransform('js:data.length')}>js:data.length</code>
                </div>
              </div>
              
              {/* Live Transform Preview */}
              {testResult && formTransform && (
                <div className="transform-preview">
                  <span className="test-label">Transform Preview:</span>
                  <pre className={transformPreview?.startsWith('[Transform error') ? 'error' : ''}>
                    {transformPreview}
                  </pre>
                </div>
              )}
            </div>
            
            <div className="dialog-footer">
              <button className="cancel-btn" onClick={() => setShowDialog(false)}>Cancel</button>
              <button className="add-btn" onClick={saveWatch} disabled={!formServerName || !formToolName}>
                {editingWatchId ? 'Save Changes' : 'Add Watch'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Legacy MCP Tool Runner removed - replaced by ToolWatchPanel
/*
function MCPToolRunnerLegacy({ project, onResult }: { project: Project; onResult: (result: any) => void }) {
  // ... legacy code removed ...
}
*/

// Placeholder to keep structure, not actually used
const _MCPToolRunnerRemovedPlaceholder = () => (
  <div className="mcp-runner">
    <div className="runner-header">
      <Terminal size={14} />
      <span>Deprecated - use Tool Watch instead</span>
    </div>
  </div>
);
void _MCPToolRunnerRemovedPlaceholder; // silence unused warning

// Legacy MCPToolRunner removed - functionality replaced by ToolWatchPanel

export default function RunPanel() {
  const { project, isRunning, setIsRunning, runEvents, addRunEvent, clearRunEvents, clearWatchHistories, runAgentId, setRunAgentId } = useStore();
  
  // UI state
  const [userInput, setUserInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState<[number, number] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState<Set<string>>(new Set());
  const [showStatePanel, setShowStatePanel] = useState(true);
  const [showToolRunner, setShowToolRunner] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(360);
  const [isResizing, setIsResizing] = useState(false);
  
  // Initialize selectedAgentId from store (allows opening Run with specific agent)
  useEffect(() => {
    if (runAgentId !== null) {
      setSelectedAgentIdLocal(runAgentId);
      setRunAgentId(null); // Clear after using
    }
  }, [runAgentId, setRunAgentId]);
  
  const [selectedAgentIdLocal, setSelectedAgentIdLocal] = useState<string | null>(null); // null = root agent
  
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
    clearWatchHistories();  // Clear watch histories when starting a new run
    setIsRunning(true);
    setSelectedEventIndex(null);
    setTimeRange(null);
    
    const websocket = createRunWebSocket(project.id);
    setWs(websocket);
    
    websocket.onopen = () => {
      websocket.send(JSON.stringify({ 
        message: userInput,
        agent_id: selectedAgentIdLocal || undefined,  // null means use root agent
      }));
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
  }, [project, userInput, isRunning, ws, clearRunEvents, setIsRunning, addRunEvent, selectedAgentIdLocal]);
  
  // Handle stop
  const handleStop = useCallback(() => {
    ws?.close();
    setIsRunning(false);
  }, [ws, setIsRunning]);
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + Enter to run
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
        return;
      }
      
      // Arrow keys to navigate event list
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        // Don't intercept if user is typing in an input
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return;
        }
        
        e.preventDefault();
        
        if (filteredEvents.length === 0) return;
        
        if (e.key === 'ArrowDown') {
          if (selectedEventIndex === null) {
            // Select first event
            const firstIndex = runEvents.indexOf(filteredEvents[0]);
            setSelectedEventIndex(firstIndex);
          } else {
            // Find current position in filtered list and move down
            const currentFilteredIndex = filteredEvents.findIndex(
              ev => runEvents.indexOf(ev) === selectedEventIndex
            );
            if (currentFilteredIndex < filteredEvents.length - 1) {
              const nextIndex = runEvents.indexOf(filteredEvents[currentFilteredIndex + 1]);
              setSelectedEventIndex(nextIndex);
            }
          }
        } else if (e.key === 'ArrowUp') {
          if (selectedEventIndex === null) {
            // Select last event
            const lastIndex = runEvents.indexOf(filteredEvents[filteredEvents.length - 1]);
            setSelectedEventIndex(lastIndex);
          } else {
            // Find current position in filtered list and move up
            const currentFilteredIndex = filteredEvents.findIndex(
              ev => runEvents.indexOf(ev) === selectedEventIndex
            );
            if (currentFilteredIndex > 0) {
              const prevIndex = runEvents.indexOf(filteredEvents[currentFilteredIndex - 1]);
              setSelectedEventIndex(prevIndex);
            }
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun, filteredEvents, selectedEventIndex, runEvents]);
  
  // Scroll selected event into view
  useEffect(() => {
    if (selectedEventIndex !== null) {
      const element = document.querySelector(`.event-row.selected`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedEventIndex]);
  
  if (!project) {
    return <div className="run-panel empty">No project loaded</div>;
  }
  
  return (
    <div className={`run-panel ${isResizing ? 'resizing' : ''}`}>
      <style>{`
        .run-panel {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: #0a0a0f;
          color: #e4e4e7;
          font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
          font-size: 12px;
        }
        
        .run-panel.resizing {
          cursor: col-resize;
          user-select: none;
        }
        
        .run-panel.resizing * {
          cursor: col-resize;
        }
        
        .run-panel.empty {
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
        
        .input-area .agent-selector {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 12px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
          min-width: 140px;
          max-width: 200px;
          cursor: pointer;
        }
        
        .input-area .agent-selector:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .input-area .agent-selector:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
          line-height: 1.4;
          white-space: pre;
          overflow-x: auto;
        }

        .json-key { color: #93c5fd; }
        .json-string { color: #86efac; }
        .json-number { color: #fde047; }
        .json-boolean { color: #f472b6; }
        .json-null { color: #71717a; }
        .json-undefined { color: #71717a; font-style: italic; }
        .json-truncated { color: #71717a; font-size: 10px; }
        .json-bracket { color: #a1a1aa; }
        .json-colon { color: #a1a1aa; }
        .json-comma { color: #a1a1aa; }
        .json-block { display: inline; }
        .json-inline { display: inline; }
        
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
        
        .state-header {
          padding: 8px;
          margin-bottom: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
          text-align: center;
        }
        
        .state-header {
          padding: 6px 8px;
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #27272a;
          margin-bottom: 8px;
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
        
        /* Tool Watch Panel */
        .tool-watch-panel {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .watch-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
        }
        
        .watch-header .watch-actions {
          margin-left: auto;
          display: flex;
          gap: 4px;
        }
        
        .watch-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          border-radius: 3px;
          color: #a1a1aa;
          cursor: pointer;
        }
        
        .watch-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .watch-btn.active {
          background: #22c55e30;
          color: #22c55e;
        }
        
        .watch-btn.active:hover {
          background: #22c55e50;
        }
        
        .watch-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
          color: #71717a;
          font-size: 11px;
        }
        
        .add-watch-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: #27272a;
          border: none;
          border-radius: 4px;
          color: #e4e4e7;
          font-size: 11px;
          cursor: pointer;
        }
        
        .add-watch-btn:hover {
          background: #3f3f46;
        }
        
        .watch-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .watch-item {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        
        .watch-item.error {
          border-color: #7f1d1d;
        }
        
        .watch-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px;
          background: #0c0c0d;
          border-radius: 4px 4px 0 0;
          border-bottom: 1px solid #27272a;
        }
        
        .watch-expr {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          overflow: hidden;
        }
        
        .watch-server {
          color: #71717a;
        }
        
        .watch-server::after {
          content: '/';
          margin: 0 2px;
          color: #3f3f46;
        }
        
        .watch-tool {
          color: #fbbf24;
        }
        
        .watch-args {
          color: #71717a;
          font-size: 9px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .watch-time-indicator {
          color: #3b82f6;
          font-size: 9px;
          font-weight: 500;
          margin-left: 4px;
          background: #3b82f620;
          padding: 1px 4px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        
        .watch-item-actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        
        .watch-item-actions button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
          background: transparent;
          border: none;
          border-radius: 3px;
          color: #71717a;
          cursor: pointer;
        }
        
        .watch-item-actions button:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .watch-result {
          padding: 8px 10px;
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          max-height: 200px;
          overflow-y: auto;
          background: #0c0c0d;
          border-radius: 0 0 4px 4px;
        }
        
        .watch-result .loading {
          color: #71717a;
          font-style: italic;
        }
        
        .watch-result .error {
          color: #ef4444;
        }
        
        .watch-result .no-result {
          color: #52525b;
          font-style: italic;
        }
        
        .watch-result pre {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
          color: #86efac;
          line-height: 1.4;
        }
        
        .watch-result pre.error-text {
          color: #fca5a5;
        }
        
        .form-hint {
          font-size: 10px;
          color: #71717a;
          margin-top: 4px;
        }
        
        .transform-hints {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 8px;
          margin-top: 6px;
          font-size: 10px;
          align-items: center;
        }
        
        .transform-hints .hint-title {
          color: #71717a;
          font-weight: 500;
        }
        
        .transform-hints code {
          background: #27272a;
          color: #a1a1aa;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 9px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .transform-hints code:hover {
          background: #3f3f46;
          color: #e4e4e7;
        }
        
        /* Test Section in Dialog */
        .test-section {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 12px;
        }
        
        .test-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .test-header label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .test-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #27272a;
          border: none;
          border-radius: 4px;
          color: #e4e4e7;
          font-size: 11px;
          cursor: pointer;
        }
        
        .test-btn:hover:not(:disabled) {
          background: #3f3f46;
        }
        
        .test-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .test-result {
          margin-bottom: 8px;
        }
        
        .test-result.error pre {
          color: #fca5a5;
        }
        
        .test-label {
          display: block;
          font-size: 10px;
          color: #71717a;
          margin-bottom: 4px;
        }
        
        .test-result pre {
          margin: 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 10px;
          color: #86efac;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 120px;
          overflow-y: auto;
        }
        
        .transform-preview {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
          margin-top: 8px;
        }
        
        .transform-preview pre {
          margin: 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 10px;
          color: #93c5fd;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .transform-preview pre.error {
          color: #fca5a5;
        }
        
        /* Watch Dialog */
        .watch-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        
        .watch-dialog {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 8px;
          width: 500px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
        }
        
        .dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid #27272a;
          font-weight: 600;
        }
        
        .dialog-header button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          border-radius: 4px;
          color: #71717a;
          cursor: pointer;
        }
        
        .dialog-header button:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .dialog-body {
          padding: 16px;
          overflow-y: auto;
        }
        
        .dialog-body .form-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }
        
        .dialog-body .form-row label {
          font-size: 11px;
          color: #a1a1aa;
          font-weight: 500;
        }
        
        .dialog-body .form-row select,
        .dialog-body .form-row input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 10px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 12px;
        }
        
        .dialog-body .form-row select:focus,
        .dialog-body .form-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .tool-desc {
          padding: 8px 10px;
          background: #0c0c0d;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
          margin-bottom: 12px;
        }
        
        .tool-args {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
        }
        
        .tool-args > label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }
        
        .arg-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        
        .arg-row .arg-name {
          font-size: 11px;
          color: #a1a1aa;
          min-width: 80px;
        }
        
        .arg-row .required {
          color: #ef4444;
          margin-left: 2px;
        }
        
        .arg-row input {
          flex: 1;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 6px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
        }
        
        .arg-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .dialog-footer {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid #27272a;
        }
        
        .cancel-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid #27272a;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 12px;
          cursor: pointer;
        }
        
        .cancel-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .add-btn {
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }
        
        .add-btn:hover:not(:disabled) {
          background: #2563eb;
        }
        
        .add-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
        <select
          className="agent-selector"
          value={selectedAgentIdLocal || ''}
          onChange={e => setSelectedAgentIdLocal(e.target.value || null)}
          disabled={isRunning}
          title="Select which agent to run"
        >
          <option value="">
            {project.app.root_agent_id 
              ? `Root: ${project.agents.find(a => a.id === project.app.root_agent_id)?.name || project.app.root_agent_id}`
              : 'No root agent'}
          </option>
          {project.agents.filter(a => a.id !== project.app.root_agent_id).map(agent => (
            <option key={agent.id} value={agent.id}>
              {agent.name} ({agent.type.replace('Agent', '')})
            </option>
          ))}
        </select>
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
              <ToolWatchPanel project={project} selectedEventIndex={selectedEventIndex} />
            ) : showStatePanel ? (
              <StateSnapshot 
                events={runEvents} 
                selectedEventIndex={selectedEventIndex}
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

