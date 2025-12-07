import { useState } from 'react';
import { Plus, Trash2, Database, Key, Settings2, Zap, Clock, RefreshCw } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { StateKeyConfig, PluginConfig, ArtifactConfig } from '../utils/types';

export default function AppConfigPanel() {
  const { project, updateProject } = useStore();
  
  if (!project) return null;
  
  const { app } = project;
  
  function updateApp(updates: Partial<typeof app>) {
    updateProject({
      app: { ...app, ...updates }
    });
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
            <label>Session Service URI</label>
            <select
              value={app.session_service_uri.split('://')[0] + '://'}
              onChange={(e) => updateApp({ session_service_uri: e.target.value })}
            >
              <option value="memory://">In-Memory</option>
              <option value="sqlite://">SQLite</option>
              <option value="postgresql://">PostgreSQL</option>
            </select>
          </div>
          <div className="form-group">
            <label>Memory Service URI</label>
            <select
              value={app.memory_service_uri.split('://')[0] + '://'}
              onChange={(e) => updateApp({ memory_service_uri: e.target.value })}
            >
              <option value="memory://">In-Memory</option>
            </select>
          </div>
          <div className="form-group">
            <label>Artifact Service URI</label>
            <select
              value={app.artifact_service_uri.split('://')[0] + '://'}
              onChange={(e) => updateApp({ artifact_service_uri: e.target.value })}
            >
              <option value="memory://">In-Memory</option>
            </select>
          </div>
        </div>
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

