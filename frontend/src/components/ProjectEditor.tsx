import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Bot, Wrench, Play, TestTube, FileCode, Code, Save } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { getProject, updateProject as apiUpdateProject } from '../utils/api';
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
  { id: 'run' as const, label: 'Run', icon: Play },
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
  
  // Track changes by comparing to last saved state
  useEffect(() => {
    if (project && !initialLoadRef.current && lastSavedProjectRef.current) {
      const currentState = JSON.stringify(project);
      if (currentState !== lastSavedProjectRef.current) {
        setHasUnsavedChanges(true);
      }
    }
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
          justify-content: space-between;
          padding: 12px 20px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 16px;
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
        }
        
        .save-indicator {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .tabs-bar {
          display: flex;
          gap: 4px;
          padding: 8px 20px;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          transition: all 0.2s ease;
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
            Projects
          </button>
          <h1 className="project-name">{project.name}</h1>
        </div>
        <div className="top-bar-right">
          {hasUnsavedChanges && <span className="save-indicator">Unsaved changes</span>}
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
      
      <nav className="tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </nav>
      
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

