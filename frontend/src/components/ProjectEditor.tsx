import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Bot, Wrench, TestTube, FileCode, Code, Save, Layers } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { getProject, updateProject as apiUpdateProject } from '../utils/api';
import type { AppModelConfig } from '../utils/types';
import AppConfigPanel from './AppConfigPanel';
import AgentsPanel from './AgentsPanel';
import ToolsPanel from './ToolsPanel';
import RunPanel from './RunPanel';
import EvalPanel from './EvalPanel';
import YamlPanel from './YamlPanel';
import CodePanel from './CodePanel';

const tabs = [
  { id: 'app' as const, label: 'App Config', icon: Settings },
  { id: 'agents' as const, label: 'Agents', icon: Bot },
  { id: 'tools' as const, label: 'Tools', icon: Wrench },
  { id: 'run' as const, label: 'Run', icon: Layers },
  { id: 'eval' as const, label: 'Evaluate', icon: TestTube },
  { id: 'yaml' as const, label: 'YAML', icon: FileCode },
  { id: 'code' as const, label: 'Code', icon: Code },
];

type TabId = 'app' | 'agents' | 'tools' | 'run' | 'eval' | 'yaml' | 'code';
const validTabs: TabId[] = ['app', 'agents', 'tools', 'run', 'eval', 'yaml', 'code'];

export default function ProjectEditor() {
  const { projectId, tab, itemId } = useParams<{ projectId: string; tab?: string; itemId?: string }>();
  const navigate = useNavigate();
  const { project, setProject, activeTab, setActiveTab, hasUnsavedChanges, setHasUnsavedChanges, selectedAgentId, setSelectedAgentId, selectedToolId, setSelectedToolId } = useStore();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const initialLoadRef = useRef(true);
  const lastSavedProjectRef = useRef<string | null>(null);
  
  // Sync tab from URL to store
  useEffect(() => {
    if (tab && validTabs.includes(tab as TabId)) {
      setActiveTab(tab as TabId);
    } else if (!tab && projectId) {
      // No tab in URL, redirect to current active tab
      navigate(`/project/${projectId}/${activeTab}`, { replace: true });
    }
  }, [tab, projectId]);
  
  // Sync itemId from URL to store (for agents/tools)
  useEffect(() => {
    if (tab === 'agents' && itemId) {
      setSelectedAgentId(itemId);
    } else if (tab === 'tools' && itemId) {
      setSelectedToolId(itemId);
    }
  }, [tab, itemId]);
  
  // Update URL when tab changes
  function handleTabChange(newTab: TabId) {
    setActiveTab(newTab);
    // Include item ID if switching to agents/tools and one is selected
    if (newTab === 'agents' && selectedAgentId) {
      navigate(`/project/${projectId}/${newTab}/${selectedAgentId}`, { replace: true });
    } else if (newTab === 'tools' && selectedToolId) {
      navigate(`/project/${projectId}/${newTab}/${selectedToolId}`, { replace: true });
    } else {
      navigate(`/project/${projectId}/${newTab}`, { replace: true });
    }
  }
  
  // Helper to update URL with item ID
  function updateItemInUrl(newItemId: string | null) {
    if (newItemId) {
      navigate(`/project/${projectId}/${activeTab}/${newItemId}`, { replace: true });
    } else {
      navigate(`/project/${projectId}/${activeTab}`, { replace: true });
    }
  }
  
  useEffect(() => {
    if (projectId) {
      loadProject(projectId);
    }
    return () => {
      setProject(null);
      setHasUnsavedChanges(false);
    };
  }, [projectId]);
  
  async function loadProject(id: string) {
    initialLoadRef.current = true;
    try {
      const data = await getProject(id);
      setProject(data);
      lastSavedProjectRef.current = JSON.stringify(data);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Failed to load project:', error);
      navigate('/');
    } finally {
      setLoading(false);
      // Reset initial load flag after a small delay to allow the project useEffect to run
      setTimeout(() => {
        initialLoadRef.current = false;
      }, 100);
    }
  }
  
  async function handleSave() {
    if (!project) return;
    
    setSaving(true);
    try {
      await apiUpdateProject(project.id, project);
      lastSavedProjectRef.current = JSON.stringify(project);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Failed to save project:', error);
    } finally {
      setSaving(false);
    }
  }
  
  // Sync agents when app models change
  const prevAppModelsRef = useRef<AppModelConfig[] | null>(null);
  useEffect(() => {
    if (project && !initialLoadRef.current && prevAppModelsRef.current) {
      const currentModels = project.app.models || [];
      const prevModels = prevAppModelsRef.current || [];
      
      // Check if any app models changed
      const modelsChanged = currentModels.some((model, idx) => {
        const prevModel = prevModels.find(m => m.id === model.id);
        if (!prevModel) return false;
        return (
          prevModel.provider !== model.provider ||
          prevModel.model_name !== model.model_name ||
          prevModel.api_base !== model.api_base ||
          prevModel.temperature !== model.temperature ||
          prevModel.max_output_tokens !== model.max_output_tokens ||
          prevModel.top_p !== model.top_p ||
          prevModel.top_k !== model.top_k
        );
      });
      
      // If models changed, update all agents that reference them
      if (modelsChanged) {
        const defaultModelId = project.app.default_model_id;
        const updatedAgents = project.agents.map(agent => {
          if (agent.type === 'LlmAgent' && agent.model) {
            // Check if agent uses an app model via _appModelId marker
            const appModelId = agent.model._appModelId;
            if (appModelId) {
              const appModel = currentModels.find(m => m.id === appModelId);
              if (appModel) {
                // Update agent's model config to match the app model
                return {
                  ...agent,
                  model: {
                    provider: appModel.provider,
                    model_name: appModel.model_name,
                    api_base: appModel.api_base,
                    temperature: appModel.temperature,
                    max_output_tokens: appModel.max_output_tokens,
                    top_p: appModel.top_p,
                    top_k: appModel.top_k,
                    fallbacks: [],
                    _appModelId: appModelId,
                  },
                };
              }
            } else if (defaultModelId) {
              // Check if agent is using the default model (legacy - no marker)
              // Match by comparing config values
              const defaultModel = currentModels.find(m => m.id === defaultModelId);
              if (defaultModel && 
                  agent.model.provider === defaultModel.provider &&
                  agent.model.model_name === defaultModel.model_name &&
                  agent.model.api_base === defaultModel.api_base) {
                // This agent appears to be using the default model, update it
                return {
                  ...agent,
                  model: {
                    provider: defaultModel.provider,
                    model_name: defaultModel.model_name,
                    api_base: defaultModel.api_base,
                    temperature: defaultModel.temperature,
                    max_output_tokens: defaultModel.max_output_tokens,
                    top_p: defaultModel.top_p,
                    top_k: defaultModel.top_k,
                    fallbacks: [],
                    _appModelId: defaultModelId, // Add marker for future syncs
                  },
                };
              }
            }
          }
          return agent;
        });
        
        // Only update if any agents actually changed
        const agentsChanged = updatedAgents.some((agent, idx) => 
          JSON.stringify(agent) !== JSON.stringify(project.agents[idx])
        );
        
        if (agentsChanged) {
          setProject({
            ...project,
            agents: updatedAgents,
          });
        }
      }
    }
    
    // Update ref for next comparison
    if (project) {
      prevAppModelsRef.current = project.app.models || [];
    }
  }, [project?.app.models, project, setProject]);
  
  // Auto-save on changes (debounced)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (project && !initialLoadRef.current && lastSavedProjectRef.current) {
      const currentState = JSON.stringify(project);
      if (currentState !== lastSavedProjectRef.current) {
        setHasUnsavedChanges(true);
        
        // Clear existing timeout
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }
        
        // Auto-save after 500ms of no changes (debounce)
        saveTimeoutRef.current = setTimeout(async () => {
          try {
            await apiUpdateProject(project.id, project);
            lastSavedProjectRef.current = JSON.stringify(project);
            setHasUnsavedChanges(false);
          } catch (error) {
            console.error('Auto-save failed:', error);
            // Don't clear hasUnsavedChanges on error - user can manually save
          }
        }, 500);
      }
    }
    
    // Cleanup timeout on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [project]);
  
  if (loading) {
    return (
      <div className="loading-screen">
        <style>{`
          .loading-screen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
          }
        `}</style>
        Loading project...
      </div>
    );
  }
  
  if (!project) {
    return null;
  }
  
  return (
    <div className="project-editor">
      <style>{`
        .project-editor {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .top-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .back-btn:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        
        .project-name {
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          margin-left: auto;
        }
        
        .save-indicator {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .tabs-bar {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 13px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .tab-btn svg {
          width: 14px;
          height: 14px;
        }
        
        .tab-btn:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
        
        .tab-btn.active {
          color: var(--bg-primary);
          background: var(--accent-primary);
        }
        
        .tab-btn.active svg {
          color: var(--bg-primary);
        }
        
        .main-content {
          flex: 1;
          overflow: auto;
          padding: 20px;
        }
      `}</style>
      
      <header className="top-bar">
        <div className="top-bar-left">
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={18} />
            Project
          </button>
          <h1 className="project-name">{project.name}</h1>
        </div>
        <nav className="tabs-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="top-bar-right">
          <button 
            className="btn btn-primary" 
            onClick={handleSave}
            disabled={saving}
          >
            <Save size={16} />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </header>
      
      <main className="main-content">
        {activeTab === 'app' && <AppConfigPanel />}
        {activeTab === 'agents' && <AgentsPanel onSelectAgent={updateItemInUrl} />}
        {activeTab === 'tools' && <ToolsPanel onSelectTool={updateItemInUrl} />}
        {activeTab === 'run' && <RunPanel />}
        {activeTab === 'eval' && <EvalPanel />}
        {activeTab === 'yaml' && <YamlPanel />}
        {activeTab === 'code' && <CodePanel />}
      </main>
    </div>
  );
}

