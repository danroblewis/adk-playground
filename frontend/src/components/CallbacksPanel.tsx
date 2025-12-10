import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Code, Key, Save, Loader } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { CustomCallbackDefinition } from '../utils/types';
import Editor, { Monaco } from '@monaco-editor/react';
import { registerCompletion } from 'monacopilot';

function generateId() {
  return `callback_${Date.now().toString(36)}`;
}

// Validation function for names (alphanumeric and underscore only)
function isValidName(name: string): boolean {
  return /^[a-zA-Z0-9_]+$/.test(name);
}

const DEFAULT_CALLBACK_CODE = `def my_callback(context: CallbackContext) -> None:
    """Description of what this callback does.
    
    Args:
        context: The callback context containing agent, model, tool, and state information
    """
    # Access state: context.state['key']
    # Set state: context.state['key'] = value
    # Access agent info: context.agent_name, context.agent_id
    # Access model info: context.model_name (if model callback)
    # Access tool info: context.tool_name, context.tool_args (if tool callback)
    
    pass
`;

interface CallbacksPanelProps {
  onSelectCallback?: (id: string | null) => void;
}

export default function CallbacksPanel({ onSelectCallback }: CallbacksPanelProps) {
  const { project, updateProject, addCustomCallback, updateCustomCallback, removeCustomCallback } = useStore();
  const [editingCode, setEditingCode] = useState('');
  const [selectedCallbackId, setSelectedCallbackId] = useState<string | null>(null);
  const [callbackNameError, setCallbackNameError] = useState<string | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  
  if (!project) return null;
  
  const callbacks = project.custom_callbacks || [];
  const selectedCallback = callbacks.find(c => c.id === selectedCallbackId);
  
  function selectCallback(id: string | null) {
    setSelectedCallbackId(id);
    onSelectCallback?.(id);
  }
  
  useEffect(() => {
    if (selectedCallback) {
      setEditingCode(selectedCallback.code);
      setCallbackNameError(null);
    }
  }, [selectedCallbackId]);
  
  function handleAddCallback() {
    const id = generateId();
    const callback: CustomCallbackDefinition = {
      id,
      name: 'new_callback',
      description: '',
      module_path: 'callbacks.custom',
      code: DEFAULT_CALLBACK_CODE,
      state_keys_used: []
    };
    addCustomCallback(callback);
    selectCallback(id);
  }
  
  function handleDeleteCallback(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirm('Delete this callback?')) return;
    removeCustomCallback(id);
    if (selectedCallbackId === id) {
      onSelectCallback?.(null);
      setSelectedCallbackId(null);
      setEditingCode('');
    }
  }
  
  function handleSaveCallback() {
    if (!selectedCallback) return;
    
    const name = selectedCallback.name.trim();
    if (!name) {
      alert('Please enter a name');
      return;
    }
    
    if (!isValidName(name)) {
      setCallbackNameError('Name must contain only alphanumeric characters and underscores');
      return;
    }
    
    // Check for duplicate names (excluding current)
    const duplicate = callbacks.find(c => c.name === name && c.id !== selectedCallback.id);
    if (duplicate) {
      setCallbackNameError('A callback with this name already exists');
      return;
    }
    
    updateCustomCallback(selectedCallback.id, {
      code: editingCode,
      name,
      description: selectedCallback.description,
      module_path: selectedCallback.module_path,
      state_keys_used: selectedCallback.state_keys_used
    });
    setCallbackNameError(null);
  }
  
  function handleMonacoMount(editor: any, monaco: Monaco) {
    monacoRef.current = monaco;
    try {
      registerCompletion(monaco, {
        endpoint: '/api/code-completion',
        language: 'python',
      });
    } catch (e) {
      // Ignore registration errors
      console.warn('Failed to register Monacopilot completion:', e);
    }
  }
  
  const availableStateKeys = project.app?.state_keys?.map(k => k.name) || [];
  
  return (
    <div className="tools-panel">
      <style>{`
        .tools-panel {
          display: flex;
          height: 100%;
          background: var(--bg-primary);
        }
        
        .tools-sidebar {
          width: 250px;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }
        
        .tools-sidebar-header {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .tools-list {
          flex: 1;
          overflow-y: auto;
        }
        
        .tool-item {
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.15s;
        }
        
        .tool-item:hover {
          background: var(--bg-hover);
        }
        
        .tool-item.selected {
          background: var(--bg-active);
        }
        
        .tool-item-name {
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .tool-item-type {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        
        .tool-item-actions {
          display: flex;
          gap: 4px;
        }
        
        .tools-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .tools-editor-header {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .tools-editor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
        }
        
        .form-group input.error {
          border-color: #ef4444;
        }
        
        .error-message {
          color: #ef4444;
          font-size: 12px;
          margin-top: 4px;
        }
        
        .code-editor-container {
          flex: 1;
          min-height: 0;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
      `}</style>
      
      <div className="tools-sidebar">
        <div className="tools-sidebar-header">
          <h3>Callbacks</h3>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAddCallback}
            title="Add Callback"
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="tools-list">
          {callbacks.length === 0 ? (
            <div style={{ padding: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              No callbacks yet. Click + to add one.
            </div>
          ) : (
            callbacks.map(callback => (
              <div
                key={callback.id}
                className={`tool-item ${selectedCallbackId === callback.id ? 'selected' : ''}`}
                onClick={() => selectCallback(callback.id)}
              >
                <div style={{ flex: 1 }}>
                  <div className="tool-item-name">{callback.name}</div>
                  <div className="tool-item-type">
                    {CALLBACK_TYPES.find(t => t.value === callback.callback_type)?.label || callback.callback_type}
                  </div>
                </div>
                <div className="tool-item-actions">
                  <button
                    className="btn btn-icon btn-sm"
                    onClick={(e) => handleDeleteCallback(callback.id, e)}
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="tools-editor">
        {selectedCallback ? (
          <>
            <div className="tools-editor-header">
              <h3>Edit Callback</h3>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleSaveCallback}
              >
                <Save size={16} style={{ marginRight: '6px' }} />
                Save
              </button>
            </div>
            <div className="tools-editor-content" style={{ padding: '16px', overflowY: 'auto' }}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={selectedCallback.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    updateCustomCallback(selectedCallback.id, { name });
                    if (callbackNameError && isValidName(name)) {
                      setCallbackNameError(null);
                    }
                  }}
                  className={callbackNameError ? 'error' : ''}
                />
                {callbackNameError && (
                  <div className="error-message">{callbackNameError}</div>
                )}
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={selectedCallback.description}
                  onChange={(e) => updateCustomCallback(selectedCallback.id, { description: e.target.value })}
                  rows={2}
                  placeholder="Describe what this callback does..."
                />
              </div>
              
              <div className="form-group">
                <label>Module Path</label>
                <input
                  type="text"
                  value={selectedCallback.module_path}
                  onChange={(e) => updateCustomCallback(selectedCallback.id, { module_path: e.target.value })}
                  placeholder="callbacks.custom"
                />
              </div>
              
              <div className="form-group">
                <label>State Keys Used</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {availableStateKeys.map(key => {
                    const isUsed = selectedCallback.state_keys_used.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        className={`btn btn-sm ${isUsed ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => {
                          const newKeys = isUsed
                            ? selectedCallback.state_keys_used.filter(k => k !== key)
                            : [...selectedCallback.state_keys_used, key];
                          updateCustomCallback(selectedCallback.id, { state_keys_used: newKeys });
                        }}
                      >
                        <Key size={12} style={{ marginRight: '4px' }} />
                        {key}
                      </button>
                    );
                  })}
                </div>
                {availableStateKeys.length === 0 && (
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px' }}>
                    No state keys defined in App Config
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label>Code</label>
                <div className="code-editor-container">
                  <Editor
                    height="100%"
                    defaultLanguage="python"
                    value={editingCode}
                    onChange={(value) => setEditingCode(value || '')}
                    onMount={handleMonacoMount}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 13,
                      lineNumbers: 'on',
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--text-secondary)'
          }}>
            Select a callback to edit, or create a new one
          </div>
        )}
      </div>
    </div>
  );
}

