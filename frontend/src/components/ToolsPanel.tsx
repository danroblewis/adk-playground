import { useState, useEffect, useRef } from 'react';
import { Plus, Wrench, Trash2, Folder, FolderOpen, Code, Key, Save, Lock, Package } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { CustomToolDefinition, BuiltinTool } from '../utils/types';
import Editor from '@monaco-editor/react';

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
  const { project, addCustomTool, updateCustomTool, removeCustomTool, selectedToolId, setSelectedToolId, builtinTools } = useStore();
  const [editingCode, setEditingCode] = useState('');
  const [hasCodeChanges, setHasCodeChanges] = useState(false);
  const [selectedBuiltinTool, setSelectedBuiltinTool] = useState<BuiltinTool | null>(null);
  
  if (!project) return null;
  
  const selectedTool = project.custom_tools.find(t => t.id === selectedToolId);
  
  function selectTool(id: string | null) {
    setSelectedToolId(id);
    onSelectTool?.(id);
  }
  
  useEffect(() => {
    if (selectedTool) {
      setEditingCode(selectedTool.code);
      setHasCodeChanges(false);
    }
  }, [selectedToolId]);
  
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
    if (value !== undefined) {
      setEditingCode(value);
      setHasCodeChanges(value !== selectedTool?.code);
    }
  }
  
  function handleSaveCode() {
    if (!selectedTool) return;
    handleUpdateTool({ code: editingCode });
    setHasCodeChanges(false);
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
      `}</style>
      
      <aside className="tools-sidebar">
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
              {hasCodeChanges && <span className="unsaved-badge">Unsaved</span>}
              <button 
                className="btn btn-primary btn-sm"
                onClick={handleSaveCode}
                disabled={!hasCodeChanges}
              >
                <Save size={14} />
                Save
              </button>
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
            
            <div className="code-editor">
              <Editor
                height="100%"
                language="python"
                theme="vs-dark"
                value={editingCode}
                onChange={handleCodeChange}
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

