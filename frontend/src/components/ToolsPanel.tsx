import { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, Wrench, Trash2, Folder, FolderOpen, Code, Key, Save, Lock, Package, Server, Globe, Sparkles, Loader } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { CustomToolDefinition, BuiltinTool, MCPServerConfig } from '../utils/types';
import Editor, { Monaco } from '@monaco-editor/react';
import { generateToolCode } from '../utils/api';
import { registerCompletion } from 'monacopilot';

function generateId() {
  return `tool_${Date.now().toString(36)}`;
}

const DEFAULT_TOOL_CODE = `def my_tool(tool_context: ToolContext, param1: str) -> dict:
    """Description of what this tool does.
    
    Args:
        param1: Description of this parameter
    
    Returns:
        A dictionary with the result
    """
    # Access state: tool_context.state['key']
    # Set state: tool_context.state['key'] = value
    
    return {"result": "success"}
`;

interface ToolsPanelProps {
  onSelectTool?: (id: string | null) => void;
}

export default function ToolsPanel({ onSelectTool }: ToolsPanelProps) {
  const { project, updateProject, addCustomTool, updateCustomTool, removeCustomTool, selectedToolId, setSelectedToolId, builtinTools, mcpServers: knownMcpServers } = useStore();
  const [editingCode, setEditingCode] = useState('');
  const [selectedBuiltinTool, setSelectedBuiltinTool] = useState<BuiltinTool | null>(null);
  const [activeTab, setActiveTab] = useState<'tools' | 'mcp'>('tools');
  const [selectedMcpServer, setSelectedMcpServer] = useState<string | null>(null);
  const [mcpJsonCode, setMcpJsonCode] = useState('');
  const [hasMcpChanges, setHasMcpChanges] = useState(false);
  const [selectedKnownMcp, setSelectedKnownMcp] = useState<MCPServerConfig | null>(null);
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  
  if (!project) return null;
  
  const projectMcpServers = project.mcp_servers || [];
  const selectedTool = project.custom_tools.find(t => t.id === selectedToolId);
  const selectedMcp = projectMcpServers.find(s => s.name === selectedMcpServer);
  
  // Filter out known servers that are already added to project
  const addedServerNames = new Set(projectMcpServers.map(s => s.name));
  const availableKnownServers = knownMcpServers.filter(s => !addedServerNames.has(s.name));
  
  function selectTool(id: string | null) {
    setSelectedToolId(id);
    onSelectTool?.(id);
  }
  
  useEffect(() => {
    if (selectedTool) {
      setEditingCode(selectedTool.code);
    }
  }, [selectedToolId]);
  
  useEffect(() => {
    if (selectedMcp) {
      setMcpJsonCode(JSON.stringify(selectedMcp, null, 2));
      setHasMcpChanges(false);
    }
  }, [selectedMcpServer]);
  
  function handleAddTool() {
    const id = generateId();
    const tool: CustomToolDefinition = {
      id,
      name: 'new_tool',
      description: '',
      module_path: 'tools.custom',
      code: DEFAULT_TOOL_CODE,
      state_keys_used: []
    };
    addCustomTool(tool);
    selectTool(id);
  }
  
  function handleDeleteTool(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirm('Delete this tool?')) return;
    removeCustomTool(id);
    if (selectedToolId === id) {
      onSelectTool?.(null);
    }
  }
  
  function handleUpdateTool(updates: Partial<CustomToolDefinition>) {
    if (!selectedTool) return;
    updateCustomTool(selectedTool.id, updates);
  }
  
  function handleCodeChange(value: string | undefined) {
    if (value !== undefined && selectedTool) {
      setEditingCode(value);
      // Auto-save code changes like other fields
      handleUpdateTool({ code: value });
    }
  }
  
  async function handleWriteTool() {
    if (!selectedTool) return;
    
    setIsGeneratingCode(true);
    try {
      const result = await generateToolCode(
        project.id,
        selectedTool.name,
        selectedTool.description,
        selectedTool.state_keys_used
      );
      
      if (result.success && result.code) {
        setEditingCode(result.code);
        handleUpdateTool({ code: result.code });
      } else {
        console.error('Failed to generate tool code:', result.error);
        alert('Failed to generate tool code: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error generating tool code:', error);
      alert('Error generating tool code: ' + (error as Error).message);
    } finally {
      setIsGeneratingCode(false);
    }
  }
  
  // Monaco editor mount handler for Monacopilot
  const completionCleanupRef = useRef<(() => void) | null>(null);
  
  const handleEditorMount = useCallback((editor: any, monaco: Monaco) => {
    // Clean up previous completion registration
    if (completionCleanupRef.current) {
      completionCleanupRef.current();
    }
    
    // Register Monacopilot completion
    const cleanup = registerCompletion(monaco, editor, {
      language: 'python',
      endpoint: '/api/code-completion',
      trigger: 'onTyping', // Also supports 'onIdle' or 'onDemand'
    });
    
    completionCleanupRef.current = cleanup;
  }, []);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (completionCleanupRef.current) {
        completionCleanupRef.current();
      }
    };
  }, []);
  
  // MCP Server management
  function handleAddMcpServer() {
    const newServer: MCPServerConfig = {
      name: `mcp_server_${Date.now().toString(36)}`,
      description: 'New MCP Server',
      connection_type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-example'],
      env: {},
      headers: {},
      timeout: 10,
      tool_filter: [],
    };
    updateProject({
      mcp_servers: [...projectMcpServers, newServer]
    });
    setSelectedMcpServer(newServer.name);
    setSelectedKnownMcp(null);
  }
  
  function handleAddKnownMcpServer(server: MCPServerConfig) {
    // Clone the server config
    const newServer = { ...server };
    updateProject({
      mcp_servers: [...projectMcpServers, newServer]
    });
    setSelectedMcpServer(newServer.name);
    setSelectedKnownMcp(null);
  }
  
  function handleDeleteMcpServer(name: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirm('Delete this MCP server?')) return;
    updateProject({
      mcp_servers: projectMcpServers.filter(s => s.name !== name)
    });
    if (selectedMcpServer === name) {
      setSelectedMcpServer(null);
    }
  }
  
  function handleMcpJsonChange(value: string | undefined) {
    if (value !== undefined) {
      setMcpJsonCode(value);
      setHasMcpChanges(value !== JSON.stringify(selectedMcp, null, 2));
    }
  }
  
  function handleSaveMcpServer() {
    if (!selectedMcp) return;
    try {
      const parsed = JSON.parse(mcpJsonCode) as MCPServerConfig;
      // Ensure name is preserved or updated
      const oldName = selectedMcp.name;
      const newServers = projectMcpServers.map(s => 
        s.name === oldName ? parsed : s
      );
      updateProject({ mcp_servers: newServers });
      setSelectedMcpServer(parsed.name);
      setHasMcpChanges(false);
    } catch (e) {
      alert('Invalid JSON: ' + (e as Error).message);
    }
  }
  
  // Group tools by module path
  const toolsByModule: Record<string, CustomToolDefinition[]> = {};
  project.custom_tools.forEach(tool => {
    const module = tool.module_path || 'tools';
    if (!toolsByModule[module]) toolsByModule[module] = [];
    toolsByModule[module].push(tool);
  });
  
  return (
    <div className="tools-panel">
      <style>{`
        .tools-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .tools-sidebar {
          width: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .tools-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .module-group {
          margin-bottom: 8px;
        }
        
        .module-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .module-header svg {
          color: var(--accent-secondary);
        }
        
        .tool-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          margin-left: 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover {
          background: var(--bg-tertiary);
        }
        
        .tool-item.selected {
          background: var(--bg-hover);
          border: 1px solid var(--accent-primary);
        }
        
        .tool-item svg {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .tool-name {
          flex: 1;
          font-size: 13px;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .delete-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          color: var(--error);
        }
        
        .tool-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .editor-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .editor-header input {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-meta {
          display: flex;
          gap: 16px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .meta-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .meta-field label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        
        .meta-field input, .meta-field textarea {
          padding: 6px 10px;
          font-size: 13px;
        }
        
        .meta-field.grow {
          flex: 1;
        }
        
        .code-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .code-actions .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        
        .code-actions .action-hint {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .code-editor {
          flex: 1;
          min-height: 0;
        }
        
        .state-keys-panel {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .state-keys-panel h4 {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .state-keys-panel h4 svg {
          color: var(--accent-primary);
        }
        
        .state-key-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .state-key-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .state-key-chip:hover {
          background: var(--bg-hover);
        }
        
        .state-key-chip.selected {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .state-key-chip input {
          width: 12px;
          height: 12px;
          margin: 0;
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
        
        .unsaved-badge {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(255, 217, 61, 0.15);
          color: var(--warning);
          border-radius: 999px;
        }
        
        .tool-item.builtin svg {
          color: var(--accent-secondary);
        }
        
        .tool-item.builtin .tool-name {
          color: var(--text-secondary);
        }
        
        .builtin-tool-info {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }
        
        .info-section {
          margin-bottom: 24px;
        }
        
        .info-section h4 {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .info-section p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        
        .info-section code {
          display: block;
          padding: 12px 16px;
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-primary);
        }
        
        .badge-muted {
          background: var(--bg-tertiary);
          color: var(--text-muted);
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 999px;
        }
        
        .sidebar-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .sidebar-tab:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        
        .sidebar-tab.active {
          color: var(--accent-primary);
          background: var(--bg-tertiary);
          border-bottom: 2px solid var(--accent-primary);
        }
        
        .tool-type-badge {
          font-size: 10px;
          padding: 2px 6px;
          background: var(--bg-primary);
          color: var(--text-muted);
          border-radius: 4px;
          text-transform: uppercase;
        }
        
        .mcp-info {
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .mcp-help {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .mcp-help h4 {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .schema-fields {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .schema-field {
          display: flex;
          align-items: baseline;
          gap: 12px;
          font-size: 12px;
        }
        
        .schema-field code {
          font-family: var(--font-mono);
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          min-width: 120px;
        }
        
        .schema-field span {
          color: var(--text-muted);
        }
        
        .tool-item.known-server svg {
          color: var(--accent-secondary);
        }
        
        .known-server-preview {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }
        
        .preview-section {
          margin-bottom: 20px;
        }
        
        .preview-section h4 {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .preview-section p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .preview-section > code {
          display: block;
          padding: 12px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-primary);
          word-break: break-all;
        }
        
        .env-vars {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .env-var {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .env-var code {
          font-family: var(--font-mono);
          color: var(--accent-primary);
          font-size: 12px;
        }
        
        .env-value {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        
        .env-required {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(255, 107, 107, 0.15);
          color: var(--error);
          border-radius: 999px;
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
          font-size: 12px;
          font-family: var(--font-mono);
        }
        
        .config-preview {
          padding: 12px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 12px;
          overflow-x: auto;
          max-height: 200px;
          overflow-y: auto;
        }
      `}</style>
      
      <aside className="tools-sidebar">
        <div className="sidebar-tabs">
          <button 
            className={`sidebar-tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <Wrench size={14} />
            Tools
          </button>
          <button 
            className={`sidebar-tab ${activeTab === 'mcp' ? 'active' : ''}`}
            onClick={() => setActiveTab('mcp')}
          >
            <Server size={14} />
            MCP
          </button>
        </div>
        
        {activeTab === 'tools' ? (
          <>
            <div className="sidebar-header">
              <h3>Custom Tools ({project.custom_tools.length})</h3>
              <button className="btn btn-primary btn-sm" onClick={handleAddTool}>
                <Plus size={14} />
                New
              </button>
            </div>
            <div className="tools-tree">
              {/* Built-in Tools Section */}
              {builtinTools.length > 0 && (
                <div className="module-group">
                  <div className="module-header">
                    <Package size={14} />
                    Built-in Tools
                  </div>
                  {builtinTools.map(tool => (
                    <div
                      key={tool.name}
                      className={`tool-item builtin ${selectedBuiltinTool?.name === tool.name ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedBuiltinTool(tool);
                        selectTool(null);
                        setSelectedMcpServer(null);
                      }}
                    >
                      <Lock size={14} />
                      <span className="tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Custom Tools Section */}
              {project.custom_tools.length === 0 && builtinTools.length === 0 ? (
                <div className="empty-state">
                  <Code size={32} />
                  <p>No tools defined yet</p>
                </div>
              ) : project.custom_tools.length > 0 && (
                Object.entries(toolsByModule).map(([module, tools]) => (
                  <div key={module} className="module-group">
                    <div className="module-header">
                      <FolderOpen size={14} />
                      {module}
                    </div>
                    {tools.map(tool => (
                      <div
                        key={tool.id}
                        className={`tool-item ${selectedToolId === tool.id ? 'selected' : ''}`}
                        onClick={() => {
                          selectTool(tool.id);
                          setSelectedBuiltinTool(null);
                          setSelectedMcpServer(null);
                        }}
                      >
                        <Wrench size={14} />
                        <span className="tool-name">{tool.name}</span>
                        <button className="delete-btn" onClick={(e) => handleDeleteTool(tool.id, e)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <>
            <div className="sidebar-header">
              <h3>MCP Servers ({projectMcpServers.length})</h3>
              <button className="btn btn-primary btn-sm" onClick={handleAddMcpServer}>
                <Plus size={14} />
                Custom
              </button>
            </div>
            <div className="tools-tree">
              {/* Configured Servers */}
              {projectMcpServers.length > 0 && (
                <div className="module-group">
                  <div className="module-header">
                    <Globe size={14} />
                    Configured ({projectMcpServers.length})
                  </div>
                  {projectMcpServers.map(server => (
                    <div
                      key={server.name}
                      className={`tool-item ${selectedMcpServer === server.name ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedMcpServer(server.name);
                        setSelectedKnownMcp(null);
                        selectTool(null);
                        setSelectedBuiltinTool(null);
                      }}
                    >
                      <Server size={14} />
                      <span className="tool-name">{server.name}</span>
                      <span className="tool-type-badge">{server.connection_type}</span>
                      <button className="delete-btn" onClick={(e) => handleDeleteMcpServer(server.name, e)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Available Known Servers */}
              {availableKnownServers.length > 0 && (
                <div className="module-group">
                  <div className="module-header">
                    <Package size={14} />
                    Available Templates ({availableKnownServers.length})
                  </div>
                  {availableKnownServers.map(server => (
                    <div
                      key={server.name}
                      className={`tool-item known-server ${selectedKnownMcp?.name === server.name ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedKnownMcp(server);
                        setSelectedMcpServer(null);
                        selectTool(null);
                        setSelectedBuiltinTool(null);
                      }}
                    >
                      <Server size={14} />
                      <span className="tool-name">{server.name}</span>
                      <span className="tool-type-badge">{server.connection_type}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {projectMcpServers.length === 0 && availableKnownServers.length === 0 && (
                <div className="empty-state">
                  <Server size={32} />
                  <p>No MCP servers available</p>
                </div>
              )}
            </div>
          </>
        )}
      </aside>
      
      <div className="tool-editor">
        {selectedBuiltinTool ? (
          <>
            <div className="editor-header">
              <Lock size={20} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{selectedBuiltinTool.name}</span>
              <span className="badge badge-muted">Built-in</span>
            </div>
            
            <div className="builtin-tool-info">
              <div className="info-section">
                <h4>Description</h4>
                <p>{selectedBuiltinTool.description || 'No description available.'}</p>
              </div>
              
              <div className="info-section">
                <h4>Usage</h4>
                <p>This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it.</p>
                <code>tools: ["{selectedBuiltinTool.name}"]</code>
              </div>
              
              <div className="info-section">
                <h4>Note</h4>
                <p>Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior.</p>
              </div>
            </div>
          </>
        ) : selectedTool ? (
          <>
            <div className="editor-header">
              <Wrench size={20} style={{ color: 'var(--accent-primary)' }} />
              <input
                type="text"
                value={selectedTool.name}
                onChange={(e) => handleUpdateTool({ name: e.target.value })}
                placeholder="Tool name"
              />
            </div>
            
            <div className="editor-meta">
              <div className="meta-field grow">
                <label>Description</label>
                <input
                  type="text"
                  value={selectedTool.description}
                  onChange={(e) => handleUpdateTool({ description: e.target.value })}
                  placeholder="What does this tool do?"
                />
              </div>
              <div className="meta-field">
                <label>Module Path</label>
                <input
                  type="text"
                  value={selectedTool.module_path}
                  onChange={(e) => handleUpdateTool({ module_path: e.target.value })}
                  placeholder="tools.custom"
                  style={{ width: 180 }}
                />
              </div>
            </div>
            
            <div className="code-actions">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleWriteTool}
                disabled={isGeneratingCode || !selectedTool.name || !selectedTool.description}
                title={!selectedTool.name || !selectedTool.description ? 'Add a name and description first' : 'Generate code using AI'}
              >
                {isGeneratingCode ? (
                  <>
                    <Loader size={14} className="spinning" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={14} />
                    Write Tool
                  </>
                )}
              </button>
              <span className="action-hint">
                AI will generate code based on the tool name, description, and selected state keys
              </span>
            </div>
            
            <div className="code-editor">
              <Editor
                height="100%"
                language="python"
                theme="vs-dark"
                value={editingCode}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', monospace",
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  insertSpaces: true,
                  padding: { top: 12 },
                }}
              />
            </div>
            
            <div className="state-keys-panel">
              <h4><Key size={14} /> State Keys Used</h4>
              <div className="state-key-chips">
                {project.app.state_keys.length === 0 ? (
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    No state keys defined. Add them in App Config.
                  </span>
                ) : (
                  project.app.state_keys.map(key => {
                    const isUsed = selectedTool.state_keys_used.includes(key.name);
                    return (
                      <label
                        key={key.name}
                        className={`state-key-chip ${isUsed ? 'selected' : ''}`}
                        title={key.description}
                      >
                        <input
                          type="checkbox"
                          checked={isUsed}
                          onChange={(e) => {
                            const newKeys = e.target.checked
                              ? [...selectedTool.state_keys_used, key.name]
                              : selectedTool.state_keys_used.filter(k => k !== key.name);
                            handleUpdateTool({ state_keys_used: newKeys });
                          }}
                        />
                        {key.name}
                        <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>
                          ({key.type})
                        </span>
                      </label>
                    );
                  })
                )}
              </div>
            </div>
          </>
        ) : selectedKnownMcp ? (
          <>
            <div className="editor-header">
              <Server size={20} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{selectedKnownMcp.name}</span>
              <span className="badge badge-info">{selectedKnownMcp.connection_type}</span>
              <span className="badge badge-muted">Template</span>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => handleAddKnownMcpServer(selectedKnownMcp)}
              >
                <Plus size={14} />
                Add to Project
              </button>
            </div>
            
            <div className="known-server-preview">
              <div className="preview-section">
                <h4>Description</h4>
                <p>{selectedKnownMcp.description}</p>
              </div>
              
              <div className="preview-section">
                <h4>Command</h4>
                <code>{selectedKnownMcp.command} {selectedKnownMcp.args?.join(' ')}</code>
              </div>
              
              {selectedKnownMcp.env && Object.keys(selectedKnownMcp.env).length > 0 && (
                <div className="preview-section">
                  <h4>Required Environment Variables</h4>
                  <div className="env-vars">
                    {Object.entries(selectedKnownMcp.env).map(([key, value]) => (
                      <div key={key} className="env-var">
                        <code>{key}</code>
                        {value ? <span className="env-value">{value}</span> : <span className="env-required">Required</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedKnownMcp.tool_filter && selectedKnownMcp.tool_filter.length > 0 && (
                <div className="preview-section">
                  <h4>Available Tools ({selectedKnownMcp.tool_filter.length})</h4>
                  <div className="tool-badges">
                    {selectedKnownMcp.tool_filter.map(tool => (
                      <span key={tool} className="tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="preview-section">
                <h4>Configuration Preview</h4>
                <pre className="config-preview">{JSON.stringify(selectedKnownMcp, null, 2)}</pre>
              </div>
            </div>
          </>
        ) : selectedMcp ? (
          <>
            <div className="editor-header">
              <Server size={20} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{selectedMcp.name}</span>
              <span className="badge badge-info">{selectedMcp.connection_type}</span>
              {hasMcpChanges && <span className="unsaved-badge">Unsaved</span>}
              <button 
                className="btn btn-primary btn-sm"
                onClick={handleSaveMcpServer}
                disabled={!hasMcpChanges}
              >
                <Save size={14} />
                Save
              </button>
            </div>
            
            <div className="mcp-info">
              <p>Configure your MCP server using JSON. The format follows the mcpServers.json schema.</p>
            </div>
            
            <div className="code-editor">
              <Editor
                height="100%"
                language="json"
                theme="vs-dark"
                value={mcpJsonCode}
                onChange={handleMcpJsonChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', monospace",
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  insertSpaces: true,
                  padding: { top: 12 },
                  formatOnPaste: true,
                }}
              />
            </div>
            
            <div className="mcp-help">
              <h4>Schema Reference</h4>
              <div className="schema-fields">
                <div className="schema-field">
                  <code>name</code>
                  <span>Unique identifier for this server</span>
                </div>
                <div className="schema-field">
                  <code>description</code>
                  <span>Human-readable description</span>
                </div>
                <div className="schema-field">
                  <code>connection_type</code>
                  <span>"stdio" | "sse" | "http"</span>
                </div>
                <div className="schema-field">
                  <code>command</code>
                  <span>Command to run (for stdio)</span>
                </div>
                <div className="schema-field">
                  <code>args</code>
                  <span>Array of command arguments</span>
                </div>
                <div className="schema-field">
                  <code>env</code>
                  <span>Environment variables object</span>
                </div>
                <div className="schema-field">
                  <code>url</code>
                  <span>Server URL (for sse/http)</span>
                </div>
                <div className="schema-field">
                  <code>tool_filter</code>
                  <span>Array of tool names to include (empty = all)</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <Code size={48} />
            <p>Select a tool to view<br />or create a new custom tool</p>
          </div>
        )}
      </div>
    </div>
  );
}

