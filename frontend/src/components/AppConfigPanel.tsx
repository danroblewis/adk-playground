import { useState } from 'react';
import { Plus, Trash2, Database, Key, Settings2, Zap, Clock, RefreshCw, Cpu, Star, Lock, Eye, EyeOff } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { StateKeyConfig, PluginConfig, ArtifactConfig, AppModelConfig } from '../utils/types';

// Common environment variables with descriptions
const COMMON_ENV_VARS = [
  { key: 'GOOGLE_API_KEY', description: 'API key for Gemini models' },
  { key: 'OPENAI_API_KEY', description: 'API key for OpenAI models (via LiteLLM)' },
  { key: 'ANTHROPIC_API_KEY', description: 'API key for Anthropic Claude models' },
  { key: 'GOOGLE_GENAI_USE_VERTEXAI', description: 'Set to "1" to use Vertex AI instead of API key' },
  { key: 'GOOGLE_CLOUD_PROJECT', description: 'Google Cloud project ID for Vertex AI' },
  { key: 'GOOGLE_CLOUD_REGION', description: 'Google Cloud region for Vertex AI (e.g., us-central1)' },
];

// Validation function for names (alphanumeric and underscore only)
function isValidName(name: string): boolean {
  return /^[a-zA-Z0-9_]+$/.test(name);
}

export default function AppConfigPanel() {
  const { project, updateProject } = useStore();
  const [appNameError, setAppNameError] = useState<string | null>(null);
  
  if (!project) return null;
  
  const { app } = project;
  
  function updateApp(updates: Partial<typeof app>) {
    updateProject({
      app: { ...app, ...updates }
    });
  }
  
  function handleAppNameChange(value: string) {
    if (value === '') {
      setAppNameError(null);
      updateApp({ name: value });
      return;
    }
    
    if (!isValidName(value)) {
      setAppNameError('Name can only contain letters, numbers, and underscores');
    } else {
      setAppNameError(null);
    }
    
    updateApp({ name: value });
  }
  
  function addStateKey() {
    const newKey: StateKeyConfig = {
      name: `state_key_${app.state_keys.length + 1}`,
      description: '',
      type: 'string',
      scope: 'session'
    };
    updateApp({ state_keys: [...app.state_keys, newKey] });
  }
  
  function updateStateKey(index: number, updates: Partial<StateKeyConfig>) {
    const keys = [...app.state_keys];
    keys[index] = { ...keys[index], ...updates };
    updateApp({ state_keys: keys });
  }
  
  function removeStateKey(index: number) {
    updateApp({ state_keys: app.state_keys.filter((_, i) => i !== index) });
  }
  
  function addPlugin() {
    const newPlugin: PluginConfig = {
      type: 'ReflectAndRetryToolPlugin',
      name: 'reflect_retry',
      max_retries: 3,
      throw_exception_if_retry_exceeded: false
    };
    updateApp({ plugins: [...app.plugins, newPlugin] });
  }
  
  function updatePlugin(index: number, updates: Partial<PluginConfig>) {
    const plugins = [...app.plugins];
    plugins[index] = { ...plugins[index], ...updates };
    updateApp({ plugins });
  }
  
  function removePlugin(index: number) {
    updateApp({ plugins: app.plugins.filter((_, i) => i !== index) });
  }
  
  // Model management
  const models = app.models || [];
  
  function addModel() {
    const id = `model_${Date.now().toString(36)}`;
    const newModel: AppModelConfig = {
      id,
      name: 'New Model',
      provider: 'gemini',
      model_name: 'gemini-2.0-flash',
      is_default: models.length === 0
    };
    updateApp({ 
      models: [...models, newModel],
      default_model_id: models.length === 0 ? id : app.default_model_id
    });
  }
  
  function updateModel(id: string, updates: Partial<AppModelConfig>) {
    const newModels = models.map(m => m.id === id ? { ...m, ...updates } : m);
    updateApp({ models: newModels });
  }
  
  function removeModel(id: string) {
    const newModels = models.filter(m => m.id !== id);
    const newDefault = app.default_model_id === id 
      ? (newModels[0]?.id || undefined)
      : app.default_model_id;
    updateApp({ models: newModels, default_model_id: newDefault });
  }
  
  function setDefaultModel(id: string) {
    updateApp({ default_model_id: id });
  }
  
  // Environment variables management
  const envVars = app.env_vars || {};
  const [showEnvValues, setShowEnvValues] = useState<Record<string, boolean>>({});
  const [newEnvKey, setNewEnvKey] = useState('');
  
  function addEnvVar(key: string = '') {
    const envKey = key || newEnvKey.trim();
    if (!envKey || envVars[envKey] !== undefined) return;
    updateApp({ env_vars: { ...envVars, [envKey]: '' } });
    setNewEnvKey('');
  }
  
  function updateEnvVar(key: string, value: string) {
    updateApp({ env_vars: { ...envVars, [key]: value } });
  }
  
  function removeEnvVar(key: string) {
    const newEnvVars = { ...envVars };
    delete newEnvVars[key];
    updateApp({ env_vars: newEnvVars });
  }
  
  function toggleShowEnvValue(key: string) {
    setShowEnvValues(prev => ({ ...prev, [key]: !prev[key] }));
  }
  
  return (
    <div className="app-config">
      <style>{`
        .app-config {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1000px;
        }
        
        .section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        
        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .section-title svg {
          color: var(--accent-primary);
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        .toggle-group {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          background: var(--bg-hover);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .toggle.active {
          background: var(--accent-primary);
        }
        
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
        
        .toggle.active::after {
          transform: translateX(20px);
        }
        
        .toggle-label {
          flex: 1;
        }
        
        .toggle-label strong {
          display: block;
          margin-bottom: 2px;
        }
        
        .toggle-label span {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 8px;
        }
        
        .list-item-content {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        
        .list-item input, .list-item select {
          padding: 6px 10px;
          font-size: 13px;
        }
        
        .delete-item {
          padding: 6px;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        
        .delete-item:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .empty-message {
          text-align: center;
          padding: 20px;
          color: var(--text-muted);
          font-size: 13px;
        }
        
        .default-model-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 12px;
          color: var(--text-muted);
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          transition: all 0.15s ease;
        }
        
        .default-model-btn:hover {
          color: var(--accent-secondary);
          background: var(--bg-hover);
        }
        
        .default-model-btn.is-default {
          color: var(--accent-secondary);
          background: rgba(255, 217, 61, 0.15);
        }
        
        .model-card {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          overflow: hidden;
        }
        
        .model-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .model-name-input {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .model-name-input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .model-card-body {
          padding: 16px;
        }
        
        .model-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .model-row:last-child {
          margin-bottom: 0;
        }
        
        .model-row .form-group {
          flex: 1;
        }
        
        .model-row input, .model-row select {
          padding: 8px 10px;
          font-size: 13px;
        }
      `}</style>
      
      {/* Basic Info */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Settings2 size={20} />
            Basic Information
          </h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>App Name</label>
            <input
              type="text"
              value={app.name}
              onChange={(e) => updateApp({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Root Agent</label>
            <select
              value={app.root_agent_id || ''}
              onChange={(e) => updateApp({ root_agent_id: e.target.value || undefined })}
            >
              <option value="">Select an agent...</option>
              {project.agents.map((agent) => (
                <option key={agent.id} value={agent.id}>{agent.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              value={app.description}
              onChange={(e) => updateApp({ description: e.target.value })}
              rows={2}
            />
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Database size={20} />
            Services
          </h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Session Service</label>
            <select
              value={app.session_service_uri.split('://')[0]}
              onChange={(e) => {
                const type = e.target.value;
                if (type === 'memory') {
                  updateApp({ session_service_uri: 'memory://' });
                } else if (type === 'file') {
                  updateApp({ session_service_uri: 'file://./sessions' });
                } else if (type === 'sqlite') {
                  updateApp({ session_service_uri: 'sqlite://./sessions.db' });
                } else {
                  updateApp({ session_service_uri: type + '://' });
                }
              }}
            >
              <option value="memory">In-Memory</option>
              <option value="file">File System (JSON)</option>
              <option value="sqlite">SQLite</option>
              <option value="postgresql">PostgreSQL</option>
            </select>
            {app.session_service_uri.startsWith('file://') && (
              <input
                type="text"
                value={app.session_service_uri.replace('file://', '')}
                onChange={(e) => updateApp({ session_service_uri: 'file://' + e.target.value })}
                placeholder="./sessions"
                style={{ marginTop: 8 }}
              />
            )}
            {app.session_service_uri.startsWith('sqlite://') && (
              <input
                type="text"
                value={app.session_service_uri.replace('sqlite://', '')}
                onChange={(e) => updateApp({ session_service_uri: 'sqlite://' + e.target.value })}
                placeholder="./sessions.db"
                style={{ marginTop: 8 }}
              />
            )}
          </div>
          <div className="form-group">
            <label>Memory Service</label>
            <select
              value={app.memory_service_uri.split('://')[0]}
              onChange={(e) => {
                const type = e.target.value;
                if (type === 'memory') {
                  updateApp({ memory_service_uri: 'memory://' });
                } else if (type === 'file') {
                  updateApp({ memory_service_uri: 'file://./memory' });
                } else {
                  updateApp({ memory_service_uri: type + '://' });
                }
              }}
            >
              <option value="memory">In-Memory</option>
              <option value="file">File System (JSON)</option>
            </select>
            {app.memory_service_uri.startsWith('file://') && (
              <input
                type="text"
                value={app.memory_service_uri.replace('file://', '')}
                onChange={(e) => updateApp({ memory_service_uri: 'file://' + e.target.value })}
                placeholder="./memory"
                style={{ marginTop: 8 }}
              />
            )}
          </div>
          <div className="form-group">
            <label>Artifact Service</label>
            <select
              value={app.artifact_service_uri.split('://')[0]}
              onChange={(e) => {
                const type = e.target.value;
                if (type === 'memory') {
                  updateApp({ artifact_service_uri: 'memory://' });
                } else if (type === 'file') {
                  updateApp({ artifact_service_uri: 'file://./artifacts' });
                } else if (type === 'gcs') {
                  updateApp({ artifact_service_uri: 'gcs://your-bucket-name' });
                } else {
                  updateApp({ artifact_service_uri: type + '://' });
                }
              }}
            >
              <option value="memory">In-Memory</option>
              <option value="file">File System</option>
              <option value="gcs">Google Cloud Storage</option>
            </select>
            {app.artifact_service_uri.startsWith('file://') && (
              <input
                type="text"
                value={app.artifact_service_uri.replace('file://', '')}
                onChange={(e) => updateApp({ artifact_service_uri: 'file://' + e.target.value })}
                placeholder="./artifacts"
                style={{ marginTop: 8 }}
              />
            )}
            {app.artifact_service_uri.startsWith('gcs://') && (
              <input
                type="text"
                value={app.artifact_service_uri.replace('gcs://', '')}
                onChange={(e) => updateApp({ artifact_service_uri: 'gcs://' + e.target.value })}
                placeholder="your-bucket-name"
                style={{ marginTop: 8 }}
              />
            )}
          </div>
        </div>
      </section>
      
      {/* Environment Variables */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Lock size={20} />
            Environment Variables
          </h2>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
          Set API keys and other environment variables. These are passed to the agent runtime.
        </p>
        
        {/* Quick add common env vars */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {COMMON_ENV_VARS.filter(ev => envVars[ev.key] === undefined).map(ev => (
            <button
              key={ev.key}
              className="btn btn-secondary btn-sm"
              onClick={() => addEnvVar(ev.key)}
              title={ev.description}
            >
              <Plus size={12} />
              {ev.key}
            </button>
          ))}
        </div>
        
        {/* Env var list */}
        {Object.keys(envVars).length === 0 ? (
          <p className="empty-message">
            No environment variables set. Click a button above to add common variables, or add a custom one below.
          </p>
        ) : (
          Object.entries(envVars).map(([key, value]) => (
            <div key={key} className="list-item" style={{ alignItems: 'center' }}>
              <div style={{ flex: 1, display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, minWidth: 200 }}>
                  {key}
                </span>
                <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    type={showEnvValues[key] ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => updateEnvVar(key, e.target.value)}
                    placeholder="Enter value..."
                    style={{ flex: 1 }}
                  />
                  <button
                    className="delete-item"
                    onClick={() => toggleShowEnvValue(key)}
                    title={showEnvValues[key] ? 'Hide value' : 'Show value'}
                  >
                    {showEnvValues[key] ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button className="delete-item" onClick={() => removeEnvVar(key)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
        
        {/* Add custom env var */}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <input
            type="text"
            value={newEnvKey}
            onChange={(e) => setNewEnvKey(e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, ''))}
            placeholder="CUSTOM_VAR_NAME"
            style={{ flex: 1, fontFamily: 'var(--font-mono)' }}
            onKeyDown={(e) => e.key === 'Enter' && addEnvVar()}
          />
          <button 
            className="btn btn-secondary btn-sm" 
            onClick={() => addEnvVar()}
            disabled={!newEnvKey.trim()}
          >
            <Plus size={14} />
            Add Variable
          </button>
        </div>
      </section>
      
      {/* Models */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Cpu size={20} />
            Models
          </h2>
          <button className="btn btn-secondary btn-sm" onClick={addModel}>
            <Plus size={14} />
            Add Model
          </button>
        </div>
        
        {models.length === 0 ? (
          <p className="empty-message">
            No models configured. Add models that agents can use.
          </p>
        ) : (
          models.map((model) => (
            <div key={model.id} className="model-card">
              <div className="model-card-header">
                <input
                  type="text"
                  value={model.name}
                  onChange={(e) => updateModel(model.id, { name: e.target.value })}
                  placeholder="Model name"
                  className="model-name-input"
                />
                <button
                  className={`default-model-btn ${app.default_model_id === model.id ? 'is-default' : ''}`}
                  onClick={() => setDefaultModel(model.id)}
                  title={app.default_model_id === model.id ? 'Default model' : 'Set as default'}
                >
                  <Star size={14} fill={app.default_model_id === model.id ? 'currentColor' : 'none'} />
                </button>
                <button className="delete-item" onClick={() => removeModel(model.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="model-card-body">
                <div className="model-row">
                  <div className="form-group">
                    <label>Provider</label>
                    <select
                      value={model.provider}
                      onChange={(e) => updateModel(model.id, { provider: e.target.value as any })}
                    >
                      <option value="gemini">Gemini</option>
                      <option value="litellm">LiteLLM</option>
                      <option value="anthropic">Anthropic</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ flex: 2 }}>
                    <label>Model Name</label>
                    <input
                      type="text"
                      value={model.model_name}
                      onChange={(e) => updateModel(model.id, { model_name: e.target.value })}
                      placeholder="e.g., gemini-2.0-flash"
                    />
                  </div>
                  {model.provider === 'litellm' && (
                    <div className="form-group" style={{ flex: 2 }}>
                      <label>API Base URL</label>
                      <input
                        type="text"
                        value={model.api_base || ''}
                        onChange={(e) => updateModel(model.id, { api_base: e.target.value || undefined })}
                        placeholder="http://localhost:11434"
                      />
                    </div>
                  )}
                </div>
                <div className="model-row">
                  <div className="form-group">
                    <label>Temperature</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="2"
                      value={model.temperature ?? ''}
                      onChange={(e) => updateModel(model.id, { temperature: e.target.value ? parseFloat(e.target.value) : undefined })}
                      placeholder="Default"
                    />
                  </div>
                  <div className="form-group">
                    <label>Max Tokens</label>
                    <input
                      type="number"
                      min="1"
                      value={model.max_output_tokens ?? ''}
                      onChange={(e) => updateModel(model.id, { max_output_tokens: e.target.value ? parseInt(e.target.value) : undefined })}
                      placeholder="Default"
                    />
                  </div>
                  <div className="form-group">
                    <label>Top P</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="1"
                      value={model.top_p ?? ''}
                      onChange={(e) => updateModel(model.id, { top_p: e.target.value ? parseFloat(e.target.value) : undefined })}
                      placeholder="Default"
                    />
                  </div>
                  <div className="form-group">
                    <label>Top K</label>
                    <input
                      type="number"
                      min="1"
                      value={model.top_k ?? ''}
                      onChange={(e) => updateModel(model.id, { top_k: e.target.value ? parseInt(e.target.value) : undefined })}
                      placeholder="Default"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
      
      {/* Configuration Options */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Zap size={20} />
            Advanced Options
          </h2>
        </div>
        
        <div className="toggle-group">
          <div 
            className={`toggle ${app.compaction.enabled ? 'active' : ''}`}
            onClick={() => updateApp({ 
              compaction: { ...app.compaction, enabled: !app.compaction.enabled } 
            })}
          />
          <div className="toggle-label">
            <strong>Event Compaction</strong>
            <span>Automatically summarize old events to reduce context size</span>
          </div>
          {app.compaction.enabled && (
            <input
              type="number"
              value={app.compaction.max_events}
              onChange={(e) => updateApp({
                compaction: { ...app.compaction, max_events: parseInt(e.target.value) || 100 }
              })}
              style={{ width: 80 }}
              placeholder="Max events"
            />
          )}
        </div>
        
        <div className="toggle-group" style={{ marginTop: 12 }}>
          <div 
            className={`toggle ${app.context_cache.enabled ? 'active' : ''}`}
            onClick={() => updateApp({ 
              context_cache: { ...app.context_cache, enabled: !app.context_cache.enabled } 
            })}
          />
          <div className="toggle-label">
            <strong>Context Caching</strong>
            <span>Cache static instructions for better performance</span>
          </div>
          {app.context_cache.enabled && (
            <input
              type="number"
              value={app.context_cache.ttl_seconds}
              onChange={(e) => updateApp({
                context_cache: { ...app.context_cache, ttl_seconds: parseInt(e.target.value) || 3600 }
              })}
              style={{ width: 100 }}
              placeholder="TTL (seconds)"
            />
          )}
        </div>
        
        <div className="toggle-group" style={{ marginTop: 12 }}>
          <div 
            className={`toggle ${app.resumability.enabled ? 'active' : ''}`}
            onClick={() => updateApp({ 
              resumability: { ...app.resumability, enabled: !app.resumability.enabled } 
            })}
          />
          <div className="toggle-label">
            <strong>Resumability</strong>
            <span>Allow pausing and resuming agent execution</span>
          </div>
        </div>
      </section>
      
      {/* State Keys */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Key size={20} />
            Session State Keys
          </h2>
          <button className="btn btn-secondary btn-sm" onClick={addStateKey}>
            <Plus size={14} />
            Add Key
          </button>
        </div>
        
        {app.state_keys.length === 0 ? (
          <p className="empty-message">
            No state keys defined. Add keys to declare what data agents can share.
          </p>
        ) : (
          app.state_keys.map((key, index) => (
            <div key={index} className="list-item">
              <div className="list-item-content">
                <input
                  type="text"
                  value={key.name}
                  onChange={(e) => updateStateKey(index, { name: e.target.value })}
                  placeholder="Key name"
                />
                <select
                  value={key.type}
                  onChange={(e) => updateStateKey(index, { type: e.target.value as any })}
                >
                  <option value="string">String</option>
                  <option value="number">Number</option>
                  <option value="boolean">Boolean</option>
                  <option value="object">Object</option>
                  <option value="array">Array</option>
                </select>
                <select
                  value={key.scope}
                  onChange={(e) => updateStateKey(index, { scope: e.target.value as any })}
                >
                  <option value="session">Session</option>
                  <option value="user">User</option>
                  <option value="app">App</option>
                  <option value="temp">Temporary</option>
                </select>
                <input
                  type="text"
                  value={key.description}
                  onChange={(e) => updateStateKey(index, { description: e.target.value })}
                  placeholder="Description"
                  style={{ gridColumn: 'span 2' }}
                />
              </div>
              <button className="delete-item" onClick={() => removeStateKey(index)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </section>
      
      {/* Plugins */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <RefreshCw size={20} />
            Plugins
          </h2>
          <button className="btn btn-secondary btn-sm" onClick={addPlugin}>
            <Plus size={14} />
            Add Plugin
          </button>
        </div>
        
        {app.plugins.length === 0 ? (
          <p className="empty-message">
            No plugins configured. Add plugins like ReflectAndRetryToolPlugin for error handling.
          </p>
        ) : (
          app.plugins.map((plugin, index) => (
            <div key={index} className="list-item">
              <div className="list-item-content">
                <select
                  value={plugin.type}
                  onChange={(e) => updatePlugin(index, { type: e.target.value })}
                >
                  <option value="ReflectAndRetryToolPlugin">Reflect & Retry Tool</option>
                </select>
                {plugin.type === 'ReflectAndRetryToolPlugin' && (
                  <>
                    <input
                      type="number"
                      value={plugin.max_retries || 3}
                      onChange={(e) => updatePlugin(index, { max_retries: parseInt(e.target.value) })}
                      placeholder="Max retries"
                    />
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input
                        type="checkbox"
                        checked={plugin.throw_exception_if_retry_exceeded || false}
                        onChange={(e) => updatePlugin(index, { throw_exception_if_retry_exceeded: e.target.checked })}
                      />
                      Throw on exceed
                    </label>
                  </>
                )}
              </div>
              <button className="delete-item" onClick={() => removePlugin(index)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

