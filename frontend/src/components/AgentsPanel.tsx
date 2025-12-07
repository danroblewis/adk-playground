import { useState } from 'react';
import { Plus, Bot, Workflow, Repeat, GitBranch, Trash2, ChevronRight, ChevronDown, GripVertical, Wand2, Loader } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { AgentConfig, LlmAgentConfig, SequentialAgentConfig, LoopAgentConfig, ParallelAgentConfig, ToolConfig, AppModelConfig, ModelConfig, MCPServerConfig } from '../utils/types';
import AgentEditor from './AgentEditor';
import { generateAgentConfig, GeneratedAgentConfig } from '../utils/api';

const AGENT_TYPES = [
  { type: 'LlmAgent', label: 'LLM Agent', icon: Bot, color: '#00f5d4', description: 'AI-powered agent with model reasoning' },
  { type: 'SequentialAgent', label: 'Sequential', icon: Workflow, color: '#7b2cbf', description: 'Run sub-agents in order' },
  { type: 'LoopAgent', label: 'Loop', icon: Repeat, color: '#ffd93d', description: 'Repeat sub-agents until exit' },
  { type: 'ParallelAgent', label: 'Parallel', icon: GitBranch, color: '#ff6b6b', description: 'Run sub-agents simultaneously' },
];

function generateId() {
  return `agent_${Date.now().toString(36)}`;
}

function appModelToModelConfig(appModel: AppModelConfig): ModelConfig {
  return {
    provider: appModel.provider,
    model_name: appModel.model_name,
    api_base: appModel.api_base,
    temperature: appModel.temperature,
    max_output_tokens: appModel.max_output_tokens,
    top_p: appModel.top_p,
    top_k: appModel.top_k,
    fallbacks: []
  };
}

function createDefaultAgent(type: string, defaultModel?: AppModelConfig): AgentConfig {
  const id = generateId();
  const base = { id, name: `New ${type}`, description: '' };
  
  // Use default model from app config, or fall back to gemini
  const modelConfig: ModelConfig = defaultModel 
    ? appModelToModelConfig(defaultModel)
    : { provider: 'gemini', model_name: 'gemini-2.0-flash', fallbacks: [] };
  
  switch (type) {
    case 'LlmAgent':
      return {
        ...base,
        type: 'LlmAgent',
        model: modelConfig,
        instruction: '',
        include_contents: 'default',
        disallow_transfer_to_parent: false,
        disallow_transfer_to_peers: false,
        tools: [],
        sub_agents: [],
        before_agent_callbacks: [],
        after_agent_callbacks: [],
        before_model_callbacks: [],
        after_model_callbacks: [],
        before_tool_callbacks: [],
        after_tool_callbacks: [],
      } as LlmAgentConfig;
    case 'SequentialAgent':
      return { ...base, type: 'SequentialAgent', sub_agents: [] } as SequentialAgentConfig;
    case 'LoopAgent':
      return { ...base, type: 'LoopAgent', sub_agents: [], max_iterations: 10 } as LoopAgentConfig;
    case 'ParallelAgent':
      return { ...base, type: 'ParallelAgent', sub_agents: [] } as ParallelAgentConfig;
    default:
      throw new Error(`Unknown agent type: ${type}`);
  }
}

interface AgentsPanelProps {
  onSelectAgent?: (id: string | null) => void;
}

export default function AgentsPanel({ onSelectAgent }: AgentsPanelProps) {
  const { project, addAgent, removeAgent, updateAgent, selectedAgentId, setSelectedAgentId, mcpServers } = useStore();
  const [showTypeSelector, setShowTypeSelector] = useState(false);
  const [expandedAgents, setExpandedAgents] = useState<Set<string>>(new Set());
  const [showQuickSetup, setShowQuickSetup] = useState(false);
  const [quickSetupDescription, setQuickSetupDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  if (!project) return null;
  
  async function handleQuickSetup() {
    if (!quickSetupDescription.trim() || !project) return;
    
    setIsGenerating(true);
    try {
      const result = await generateAgentConfig(project.id, quickSetupDescription);
      
      if (result.success && result.config) {
        const config = result.config;
        
        // Build tools array from the generated config
        const tools: ToolConfig[] = [];
        
        // Add builtin tools
        if (config.tools?.builtin) {
          for (const toolName of config.tools.builtin) {
            tools.push({ type: 'builtin', name: toolName });
          }
        }
        
        // Add MCP server tools
        if (config.tools?.mcp) {
          for (const mcpConfig of config.tools.mcp) {
            // Find the matching MCP server config
            const serverConfig = mcpServers.find(s => s.name === mcpConfig.server);
            if (serverConfig) {
              tools.push({
                type: 'mcp',
                server: {
                  ...serverConfig,
                  tool_filter: mcpConfig.tools
                }
              });
            }
          }
        }
        
        // Add custom tools
        if (config.tools?.custom) {
          for (const toolName of config.tools.custom) {
            const customTool = project.custom_tools.find(t => t.name === toolName);
            if (customTool) {
              tools.push({ type: 'function', name: toolName, module_path: customTool.module_path });
            }
          }
        }
        
        // Add agent tools
        if (config.tools?.agents) {
          for (const agentId of config.tools.agents) {
            const targetAgent = project.agents.find(a => a.id === agentId);
            if (targetAgent) {
              tools.push({ type: 'agent', agent_id: agentId, name: targetAgent.name });
            }
          }
        }
        
        // Get default model
        const models = project.app.models || [];
        const defaultModel = models.find(m => m.id === project.app.default_model_id) || models[0];
        
        // Create the new agent
        const newAgent: LlmAgentConfig = {
          id: `agent_${Date.now().toString(36)}`,
          type: 'LlmAgent',
          name: config.name || 'new_agent',
          description: config.description || '',
          instruction: config.instruction || '',
          model: defaultModel ? {
            provider: defaultModel.provider,
            model_name: defaultModel.model_name,
            api_base: defaultModel.api_base,
            temperature: defaultModel.temperature,
            max_output_tokens: defaultModel.max_output_tokens,
            top_p: defaultModel.top_p,
            top_k: defaultModel.top_k,
            fallbacks: []
          } : { provider: 'gemini', model_name: 'gemini-2.0-flash', fallbacks: [] },
          include_contents: 'default',
          disallow_transfer_to_parent: false,
          disallow_transfer_to_peers: false,
          tools,
          sub_agents: config.sub_agents || [],
          before_agent_callbacks: [],
          after_agent_callbacks: [],
          before_model_callbacks: [],
          after_model_callbacks: [],
          before_tool_callbacks: [],
          after_tool_callbacks: [],
        };
        
        addAgent(newAgent);
        setSelectedAgentId(newAgent.id);
        onSelectAgent?.(newAgent.id);
        setShowQuickSetup(false);
        setQuickSetupDescription('');
      } else {
        alert('Failed to generate agent: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error generating agent: ' + (e as Error).message);
    } finally {
      setIsGenerating(false);
    }
  }
  
  const selectedAgent = project.agents.find(a => a.id === selectedAgentId);
  
  function selectAgent(id: string) {
    setSelectedAgentId(id);
    onSelectAgent?.(id);
  }
  
  function handleAddAgent(type: string) {
    // Find default model from app config
    const models = project.app.models || [];
    const defaultModel = models.find(m => m.id === project.app.default_model_id) || models[0];
    
    const agent = createDefaultAgent(type, defaultModel);
    addAgent(agent);
    selectAgent(agent.id);
    setShowTypeSelector(false);
  }
  
  function handleDeleteAgent(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirm('Delete this agent?')) return;
    removeAgent(id);
    if (selectedAgentId === id) {
      onSelectAgent?.(null);
    }
  }
  
  function toggleExpand(id: string) {
    const next = new Set(expandedAgents);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedAgents(next);
  }
  
  function getAgentIcon(type: string) {
    const config = AGENT_TYPES.find(t => t.type === type);
    return config ? config.icon : Bot;
  }
  
  function getAgentColor(type: string) {
    const config = AGENT_TYPES.find(t => t.type === type);
    return config ? config.color : '#888';
  }
  
  // Build a tree structure for agents with sub_agents
  function renderAgentTree(agents: AgentConfig[], depth = 0): React.ReactNode {
    return agents.map(agent => {
      const Icon = getAgentIcon(agent.type);
      const color = getAgentColor(agent.type);
      const hasSubAgents = 'sub_agents' in agent && agent.sub_agents.length > 0;
      const isExpanded = expandedAgents.has(agent.id);
      const subAgents = hasSubAgents 
        ? project.agents.filter(a => agent.sub_agents.includes(a.id))
        : [];
      
      return (
        <div key={agent.id} className="agent-tree-item">
          <div 
            className={`agent-item ${selectedAgentId === agent.id ? 'selected' : ''}`}
            onClick={() => selectAgent(agent.id)}
            style={{ paddingLeft: 12 + depth * 20 }}
          >
            {hasSubAgents ? (
              <button 
                className="expand-btn"
                onClick={(e) => { e.stopPropagation(); toggleExpand(agent.id); }}
              >
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            ) : (
              <span style={{ width: 20 }} />
            )}
            <div className="agent-icon" style={{ background: color }}>
              <Icon size={14} />
            </div>
            <span className="agent-name">{agent.name}</span>
            <span className="agent-type">{agent.type}</span>
            <button className="delete-btn" onClick={(e) => handleDeleteAgent(agent.id, e)}>
              <Trash2 size={14} />
            </button>
          </div>
          {hasSubAgents && isExpanded && (
            <div className="sub-agents">
              {renderAgentTree(subAgents, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  }
  
  // Get root-level agents (not sub-agents of any other agent)
  const subAgentIds = new Set(project.agents.flatMap(a => 'sub_agents' in a ? a.sub_agents : []));
  const rootAgents = project.agents.filter(a => !subAgentIds.has(a.id));
  
  return (
    <div className="agents-panel">
      <style>{`
        .agents-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .agents-sidebar {
          width: 320px;
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
        
        .agents-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .agent-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .agent-item:hover {
          background: var(--bg-tertiary);
        }
        
        .agent-item.selected {
          background: var(--bg-hover);
          border: 1px solid var(--accent-primary);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .agent-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          color: white;
        }
        
        .agent-name {
          flex: 1;
          font-weight: 500;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .agent-type {
          font-size: 11px;
          color: var(--text-muted);
          padding: 2px 6px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
        }
        
        .delete-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .agent-item:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          color: var(--error);
        }
        
        .agent-editor-area {
          flex: 1;
          min-width: 0;
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
        
        .type-selector {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        
        .type-selector-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 500px;
          width: 100%;
        }
        
        .type-selector h2 {
          margin-bottom: 20px;
        }
        
        .header-buttons {
          display: flex;
          gap: 8px;
        }
        
        .quick-setup-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 600px;
          width: 100%;
        }
        
        .quick-setup-content h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        
        .quick-setup-content h2 svg {
          color: var(--accent-primary);
        }
        
        .quick-setup-desc {
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .quick-setup-form textarea {
          width: 100%;
          min-height: 100px;
          margin-bottom: 16px;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .quick-setup-info {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-bottom: 16px;
          font-size: 13px;
        }
        
        .quick-setup-info strong {
          display: block;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .quick-setup-info ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
        }
        
        .quick-setup-info li {
          margin-bottom: 4px;
        }
        
        .quick-setup-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .type-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .type-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
        }
        
        .type-option:hover {
          border-color: var(--accent-primary);
          background: var(--bg-hover);
        }
        
        .type-option-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          color: white;
          flex-shrink: 0;
        }
        
        .type-option-info h4 {
          margin-bottom: 4px;
        }
        
        .type-option-info p {
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
      
      <aside className="agents-sidebar">
        <div className="sidebar-header">
          <h3>Agents ({project.agents.length})</h3>
          <div className="header-buttons">
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={() => setShowQuickSetup(true)}
              title="AI-powered agent setup"
            >
              <Wand2 size={14} />
              Quick
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => setShowTypeSelector(true)}>
              <Plus size={14} />
              Add
            </button>
          </div>
        </div>
        <div className="agents-list">
          {project.agents.length === 0 ? (
            <div className="empty-state">
              <Bot size={32} />
              <p>No agents yet</p>
            </div>
          ) : (
            renderAgentTree(rootAgents)
          )}
        </div>
      </aside>
      
      <div className="agent-editor-area">
        {selectedAgent ? (
          <AgentEditor agent={selectedAgent} />
        ) : (
          <div className="empty-state card">
            <Bot size={48} />
            <p>Select an agent to edit<br />or create a new one</p>
          </div>
        )}
      </div>
      
      {showTypeSelector && (
        <div className="type-selector" onClick={() => setShowTypeSelector(false)}>
          <div className="type-selector-content" onClick={e => e.stopPropagation()}>
            <h2>Add Agent</h2>
            <div className="type-options">
              {AGENT_TYPES.map(({ type, label, icon: Icon, color, description }) => (
                <button 
                  key={type}
                  className="type-option"
                  onClick={() => handleAddAgent(type)}
                >
                  <div className="type-option-icon" style={{ background: color }}>
                    <Icon size={20} />
                  </div>
                  <div className="type-option-info">
                    <h4>{label}</h4>
                    <p>{description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {showQuickSetup && (
        <div className="type-selector" onClick={() => !isGenerating && setShowQuickSetup(false)}>
          <div className="quick-setup-content" onClick={e => e.stopPropagation()}>
            <h2><Wand2 size={20} /> Quick Agent Setup</h2>
            <p className="quick-setup-desc">
              Describe what you want this agent to do, and AI will configure everything:
              name, description, instruction, tools, and sub-agents.
            </p>
            
            <div className="quick-setup-form">
              <textarea
                value={quickSetupDescription}
                onChange={(e) => setQuickSetupDescription(e.target.value)}
                placeholder="Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel."
                rows={5}
                disabled={isGenerating}
                autoFocus
              />
              
              <div className="quick-setup-info">
                <strong>Available resources:</strong>
                <ul>
                  <li>{project.app.state_keys.length} state keys</li>
                  <li>{mcpServers.length} MCP servers</li>
                  <li>{project.custom_tools.length} custom tools</li>
                  <li>{project.agents.length} existing agents</li>
                </ul>
              </div>
              
              <div className="quick-setup-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowQuickSetup(false)}
                  disabled={isGenerating}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={handleQuickSetup}
                  disabled={isGenerating || !quickSetupDescription.trim()}
                >
                  {isGenerating ? (
                    <>
                      <Loader size={14} className="spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 size={14} />
                      Create Agent
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

