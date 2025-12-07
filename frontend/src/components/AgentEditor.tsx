import React, { useState } from 'react';
import { Bot, Cpu, Wrench, Users, Plus, Trash2, ChevronDown, ChevronRight, Star, Sparkles, Loader } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { AgentConfig, LlmAgentConfig, ToolConfig, ModelConfig, AppModelConfig } from '../utils/types';
import { generatePrompt } from '../utils/api';

interface Props {
  agent: AgentConfig;
}

export default function AgentEditor({ agent }: Props) {
  const { project, updateAgent, mcpServers, builtinTools } = useStore();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basic', 'model']));
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
  const [promptHint, setPromptHint] = useState('');
  const [showPromptDialog, setShowPromptDialog] = useState(false);
  
  if (!project) return null;
  
  function update(updates: Partial<AgentConfig>) {
    updateAgent(agent.id, updates);
  }
  
  function toggleSection(section: string) {
    const next = new Set(expandedSections);
    if (next.has(section)) next.delete(section);
    else next.add(section);
    setExpandedSections(next);
  }
  
  const isLlmAgent = agent.type === 'LlmAgent';
  const llmAgent = agent as LlmAgentConfig;
  
  function updateModel(updates: Partial<ModelConfig>) {
    if (!isLlmAgent) return;
    update({ 
      model: { ...llmAgent.model!, ...updates } 
    } as Partial<LlmAgentConfig>);
  }
  
  function addTool(tool: ToolConfig) {
    if (!isLlmAgent) return;
    update({ tools: [...llmAgent.tools, tool] } as Partial<LlmAgentConfig>);
  }
  
  function removeTool(index: number) {
    if (!isLlmAgent) return;
    update({ tools: llmAgent.tools.filter((_, i) => i !== index) } as Partial<LlmAgentConfig>);
  }
  
  function addSubAgent(agentId: string) {
    if (!('sub_agents' in agent)) return;
    update({ sub_agents: [...agent.sub_agents, agentId] });
  }
  
  function removeSubAgent(agentId: string) {
    if (!('sub_agents' in agent)) return;
    update({ sub_agents: agent.sub_agents.filter(id => id !== agentId) });
  }
  
  // Get available agents for sub-agent selection (excluding self and preventing cycles)
  const availableAgents = project.agents.filter(a => a.id !== agent.id);
  
  async function handleGeneratePrompt() {
    if (!project) return;
    setIsGeneratingPrompt(true);
    try {
      const result = await generatePrompt(project.id, agent.id, promptHint || undefined);
      if (result.success && result.prompt) {
        update({ instruction: result.prompt } as Partial<LlmAgentConfig>);
        setShowPromptDialog(false);
        setPromptHint('');
      } else {
        alert('Failed to generate prompt: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error generating prompt: ' + (e as Error).message);
    } finally {
      setIsGeneratingPrompt(false);
    }
  }
  
  return (
    <div className="agent-editor">
      <style>{`
        .agent-editor {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .editor-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .editor-header input {
          font-size: 1.25rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px;
          flex: 1;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        
        .section {
          margin-bottom: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          cursor: pointer;
          user-select: none;
        }
        
        .section-header:hover {
          background: var(--bg-hover);
        }
        
        .section-header h4 {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .section-header h4 svg {
          color: var(--accent-primary);
        }
        
        .section-content {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          overflow: visible;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .form-row:last-child {
          margin-bottom: 0;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        .form-group textarea {
          min-height: 120px;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.5;
        }
        
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .checkbox-group label {
          margin: 0;
          cursor: pointer;
        }
        
        .tool-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .tool-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .tool-item-info {
          flex: 1;
        }
        
        .tool-item-name {
          font-weight: 500;
          font-size: 13px;
        }
        
        .tool-item-type {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .tool-item .delete-btn {
          padding: 6px;
          color: var(--text-muted);
          background: transparent;
          border-radius: var(--radius-sm);
          opacity: 0.6;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover .delete-btn {
          opacity: 1;
        }
        
        .tool-item .delete-btn:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .add-tool-dropdown {
          position: relative;
        }
        
        .dropdown-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
        }
        
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 280px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 8px;
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }
        
        .dropdown-content.dropdown-fixed {
          position: fixed;
        }
        
        .dropdown-section {
          margin-bottom: 12px;
        }
        
        .dropdown-section:last-child {
          margin-bottom: 0;
        }
        
        .dropdown-section h5 {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 4px 8px;
          margin-bottom: 4px;
        }
        
        .dropdown-item {
          display: block;
          width: 100%;
          padding: 8px 12px;
          text-align: left;
          border-radius: var(--radius-sm);
          transition: background 0.15s ease;
        }
        
        .dropdown-item:hover {
          background: var(--bg-hover);
        }
        
        .dropdown-item-name {
          font-weight: 500;
          font-size: 13px;
        }
        
        .dropdown-item-desc {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .sub-agent-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .sub-agent-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: 13px;
        }
        
        .sub-agent-chip button {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .sub-agent-chip button:hover {
          color: var(--error);
        }
        
        .label-with-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .label-with-action label {
          margin-bottom: 0;
        }
        
        .generate-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          font-size: 12px;
        }
        
        .generate-btn svg {
          color: #fbbf24;
        }
        
        .prompt-dialog-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .prompt-dialog {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 500px;
          width: 90%;
        }
        
        .prompt-dialog h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }
        
        .prompt-dialog h3 svg {
          color: #fbbf24;
        }
        
        .prompt-dialog > p {
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .dialog-info {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin: 16px 0;
          font-size: 13px;
        }
        
        .dialog-info strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 8px;
        }
        
        .dialog-info ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
        }
        
        .dialog-info li {
          margin-bottom: 4px;
        }
        
        .dialog-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 20px;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <div className="editor-header">
        <Bot size={24} style={{ color: 'var(--accent-primary)' }} />
        <input
          type="text"
          value={agent.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="Agent name"
        />
        <span className="badge badge-info">{agent.type}</span>
      </div>
      
      <div className="editor-content">
        {/* Basic Info */}
        <Section
          id="basic"
          title="Basic Info"
          icon={<Bot size={16} />}
          expanded={expandedSections.has('basic')}
          onToggle={() => toggleSection('basic')}
        >
          <div className="form-row">
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                value={agent.description}
                onChange={(e) => update({ description: e.target.value })}
                placeholder="What does this agent do?"
                style={{ minHeight: 60 }}
              />
            </div>
          </div>
          
          {isLlmAgent && (
            <>
              <div className="form-row">
                <div className="form-group full-width">
                  <div className="label-with-action">
                    <label>Instruction</label>
                    <button 
                      className="btn btn-secondary btn-sm generate-btn"
                      onClick={() => setShowPromptDialog(true)}
                      disabled={isGeneratingPrompt}
                    >
                      <Sparkles size={14} />
                      {isGeneratingPrompt ? 'Generating...' : 'AI Generate'}
                    </button>
                  </div>
                  <textarea
                    value={llmAgent.instruction}
                    onChange={(e) => update({ instruction: e.target.value } as Partial<LlmAgentConfig>)}
                    placeholder="System instruction for the agent..."
                  />
                </div>
              </div>
              
              {showPromptDialog && (
                <div className="prompt-dialog-overlay">
                  <div className="prompt-dialog">
                    <h3><Sparkles size={18} /> Generate Instruction with AI</h3>
                    <p>The AI will analyze your agent network and generate a detailed instruction prompt for <strong>{agent.name}</strong>.</p>
                    
                    <div className="form-group">
                      <label>Optional Hints</label>
                      <textarea
                        value={promptHint}
                        onChange={(e) => setPromptHint(e.target.value)}
                        placeholder="Any specific requirements, tone, or focus areas for this agent..."
                        rows={3}
                      />
                    </div>
                    
                    <div className="dialog-info">
                      <strong>Context that will be provided to the AI:</strong>
                      <ul>
                        <li>Project name and description</li>
                        <li>All {project.agents.length} agents and their configurations</li>
                        <li>This agent's tools and sub-agents</li>
                        <li>How this agent fits in the overall system</li>
                      </ul>
                    </div>
                    
                    <div className="dialog-actions">
                      <button 
                        className="btn btn-secondary"
                        onClick={() => setShowPromptDialog(false)}
                        disabled={isGeneratingPrompt}
                      >
                        Cancel
                      </button>
                      <button 
                        className="btn btn-primary"
                        onClick={handleGeneratePrompt}
                        disabled={isGeneratingPrompt}
                      >
                        {isGeneratingPrompt ? (
                          <>
                            <Loader size={14} className="spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles size={14} />
                            Generate Prompt
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label>Output Key</label>
                  <select
                    value={llmAgent.output_key || ''}
                    onChange={(e) => update({ output_key: e.target.value || undefined } as Partial<LlmAgentConfig>)}
                  >
                    <option value="">None</option>
                    {project.app.state_keys.map(key => (
                      <option key={key.name} value={key.name}>{key.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Include Contents</label>
                  <select
                    value={llmAgent.include_contents}
                    onChange={(e) => update({ include_contents: e.target.value as 'default' | 'none' } as Partial<LlmAgentConfig>)}
                  >
                    <option value="default">Default</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="disallow-parent"
                    checked={llmAgent.disallow_transfer_to_parent}
                    onChange={(e) => update({ disallow_transfer_to_parent: e.target.checked } as Partial<LlmAgentConfig>)}
                  />
                  <label htmlFor="disallow-parent">Disallow transfer to parent</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="disallow-peers"
                    checked={llmAgent.disallow_transfer_to_peers}
                    onChange={(e) => update({ disallow_transfer_to_peers: e.target.checked } as Partial<LlmAgentConfig>)}
                  />
                  <label htmlFor="disallow-peers">Disallow transfer to peers</label>
                </div>
              </div>
            </>
          )}
          
          {agent.type === 'LoopAgent' && (
            <div className="form-row">
              <div className="form-group">
                <label>Max Iterations</label>
                <input
                  type="number"
                  value={(agent as any).max_iterations || ''}
                  onChange={(e) => update({ max_iterations: parseInt(e.target.value) || undefined })}
                  placeholder="No limit"
                />
              </div>
            </div>
          )}
        </Section>
        
        {/* Model Config (LLM only) */}
        {isLlmAgent && (
          <Section
            id="model"
            title="Model"
            icon={<Cpu size={16} />}
            expanded={expandedSections.has('model')}
            onToggle={() => toggleSection('model')}
          >
            <ModelSelector
              agent={llmAgent}
              appModels={project.app.models || []}
              defaultModelId={project.app.default_model_id}
              onUpdate={(modelConfig) => update({ model: modelConfig } as Partial<LlmAgentConfig>)}
            />
          </Section>
        )}
        
        {/* Tools (LLM only) */}
        {isLlmAgent && (
          <Section
            id="tools"
            title={`Tools (${llmAgent.tools.length})`}
            icon={<Wrench size={16} />}
            expanded={expandedSections.has('tools')}
            onToggle={() => toggleSection('tools')}
          >
            <ToolsEditor
              tools={llmAgent.tools}
              onAdd={addTool}
              onRemove={removeTool}
              builtinTools={builtinTools}
              mcpServers={mcpServers}
              customTools={project.custom_tools}
              agents={availableAgents}
            />
          </Section>
        )}
        
        {/* Sub-agents */}
        {'sub_agents' in agent && (
          <Section
            id="subagents"
            title={`Sub-Agents (${agent.sub_agents.length})`}
            icon={<Users size={16} />}
            expanded={expandedSections.has('subagents')}
            onToggle={() => toggleSection('subagents')}
          >
            <div className="sub-agent-list">
              {agent.sub_agents.map(subId => {
                const subAgent = project.agents.find(a => a.id === subId);
                if (!subAgent) return null;
                return (
                  <div key={subId} className="sub-agent-chip">
                    {subAgent.name}
                    <button onClick={() => removeSubAgent(subId)}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                );
              })}
              <select
                value=""
                onChange={(e) => { if (e.target.value) addSubAgent(e.target.value); }}
                style={{ width: 150, padding: '6px 10px', fontSize: 13 }}
              >
                <option value="">Add agent...</option>
                {availableAgents
                  .filter(a => !agent.sub_agents.includes(a.id))
                  .map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))
                }
              </select>
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

// Collapsible section component
function Section({ 
  id, title, icon, expanded, onToggle, children 
}: { 
  id: string; 
  title: string; 
  icon: React.ReactNode;
  expanded: boolean; 
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="section">
      <div className="section-header" onClick={onToggle}>
        {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <h4>{icon} {title}</h4>
      </div>
      {expanded && <div className="section-content">{children}</div>}
    </div>
  );
}

// Tools editor sub-component
function ToolsEditor({
  tools,
  onAdd,
  onRemove,
  builtinTools,
  mcpServers,
  customTools,
  agents
}: {
  tools: ToolConfig[];
  onAdd: (tool: ToolConfig) => void;
  onRemove: (index: number) => void;
  builtinTools: any[];
  mcpServers: any[];
  customTools: any[];
  agents: AgentConfig[];
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  function openDropdown() {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const maxDropdownHeight = 350;
      const spaceBelow = viewportHeight - rect.bottom - 16;
      const spaceAbove = rect.top - 16;
      
      // Always use top positioning - calculate based on available space
      if (spaceBelow >= 200 || spaceBelow >= spaceAbove) {
        // Position below the button
        const maxHeight = Math.min(maxDropdownHeight, spaceBelow);
        setDropdownStyle({
          top: rect.bottom + 4,
          left: rect.left,
          maxHeight
        });
      } else {
        // Position above the button - calculate top so dropdown ends at button top
        const maxHeight = Math.min(maxDropdownHeight, spaceAbove);
        setDropdownStyle({
          top: rect.top - maxHeight - 4,
          left: rect.left,
          maxHeight
        });
      }
    }
    setDropdownOpen(true);
  }
  
  function addBuiltinTool(name: string) {
    onAdd({ type: 'builtin', name });
    setDropdownOpen(false);
  }
  
  function addMcpTool(server: any) {
    onAdd({ type: 'mcp', server: { ...server } });
    setDropdownOpen(false);
  }
  
  function addCustomTool(tool: any) {
    onAdd({ type: 'function', name: tool.name, module_path: tool.module_path });
    setDropdownOpen(false);
  }
  
  function addAgentTool(agentId: string) {
    const agent = agents.find(a => a.id === agentId);
    onAdd({ type: 'agent', agent_id: agentId, name: agent?.name });
    setDropdownOpen(false);
  }
  
  return (
    <div>
      <div className="tool-list">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <Wrench size={14} style={{ color: 'var(--accent-primary)' }} />
            <div className="tool-item-info">
              <div className="tool-item-name">
                {tool.name || (tool.type === 'mcp' ? tool.server?.name : tool.agent_id)}
              </div>
              <div className="tool-item-type">{tool.type}</div>
            </div>
            <button className="delete-btn" onClick={() => onRemove(index)}>
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="add-tool-dropdown" style={{ marginTop: 12 }}>
        <button 
          ref={buttonRef}
          className="btn btn-secondary btn-sm"
          onClick={() => dropdownOpen ? setDropdownOpen(false) : openDropdown()}
        >
          <Plus size={14} />
          Add Tool
        </button>
        
        {dropdownOpen && (
          <>
            <div 
              className="dropdown-backdrop"
              onClick={() => setDropdownOpen(false)}
            />
            <div 
              className="dropdown-content dropdown-fixed"
              style={dropdownStyle}
            >
              <div className="dropdown-section">
                <h5>Built-in Tools</h5>
                {builtinTools.map(tool => (
                  <button
                    key={tool.name}
                    className="dropdown-item"
                    onClick={() => addBuiltinTool(tool.name)}
                  >
                    <div className="dropdown-item-name">{tool.name}</div>
                    <div className="dropdown-item-desc">{tool.description}</div>
                  </button>
                ))}
              </div>
              
              {mcpServers.length > 0 && (
                <div className="dropdown-section">
                  <h5>MCP Servers</h5>
                  {mcpServers.map(server => (
                    <button
                      key={server.name}
                      className="dropdown-item"
                      onClick={() => addMcpTool(server)}
                    >
                      <div className="dropdown-item-name">{server.name}</div>
                      <div className="dropdown-item-desc">{server.description}</div>
                    </button>
                  ))}
                </div>
              )}
              
              {customTools.length > 0 && (
                <div className="dropdown-section">
                  <h5>Custom Tools</h5>
                  {customTools.map(tool => (
                    <button
                      key={tool.id}
                      className="dropdown-item"
                      onClick={() => addCustomTool(tool)}
                    >
                      <div className="dropdown-item-name">{tool.name}</div>
                      <div className="dropdown-item-desc">{tool.description}</div>
                    </button>
                  ))}
                </div>
              )}
              
              {agents.length > 0 && (
                <div className="dropdown-section">
                  <h5>Agents as Tools</h5>
                  {agents.map(agent => (
                    <button
                      key={agent.id}
                      className="dropdown-item"
                      onClick={() => addAgentTool(agent.id)}
                    >
                      <div className="dropdown-item-name">{agent.name}</div>
                      <div className="dropdown-item-desc">{agent.type}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Model selector component
function ModelSelector({
  agent,
  appModels,
  defaultModelId,
  onUpdate
}: {
  agent: LlmAgentConfig;
  appModels: AppModelConfig[];
  defaultModelId?: string;
  onUpdate: (model: ModelConfig) => void;
}) {
  const [useCustom, setUseCustom] = useState(() => {
    // Check if current model matches any app model
    if (!agent.model) return false;
    return !appModels.some(m => 
      m.provider === agent.model?.provider && 
      m.model_name === agent.model?.model_name &&
      m.api_base === agent.model?.api_base
    );
  });
  
  const [selectedModelId, setSelectedModelId] = useState(() => {
    // Find matching app model
    const match = appModels.find(m => 
      m.provider === agent.model?.provider && 
      m.model_name === agent.model?.model_name &&
      m.api_base === agent.model?.api_base
    );
    return match?.id || defaultModelId || appModels[0]?.id;
  });
  
  function selectAppModel(modelId: string) {
    setSelectedModelId(modelId);
    const model = appModels.find(m => m.id === modelId);
    if (model) {
      onUpdate({
        provider: model.provider,
        model_name: model.model_name,
        api_base: model.api_base,
        temperature: model.temperature,
        max_output_tokens: model.max_output_tokens,
        top_p: model.top_p,
        top_k: model.top_k,
        fallbacks: []
      });
    }
  }
  
  function toggleCustom() {
    if (useCustom) {
      // Switch to app model
      setUseCustom(false);
      if (selectedModelId) {
        selectAppModel(selectedModelId);
      }
    } else {
      setUseCustom(true);
    }
  }
  
  function updateCustomModel(updates: Partial<ModelConfig>) {
    onUpdate({ ...agent.model!, ...updates });
  }
  
  const selectedModel = appModels.find(m => m.id === selectedModelId);
  const defaultModel = appModels.find(m => m.id === defaultModelId);
  
  return (
    <div className="model-selector">
      <style>{`
        .model-selector {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .model-choice {
          display: flex;
          gap: 12px;
        }
        
        .model-option {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: center;
        }
        
        .model-option:hover {
          border-color: var(--text-muted);
        }
        
        .model-option.selected {
          border-color: var(--accent-primary);
          background: rgba(0, 245, 212, 0.05);
        }
        
        .model-option-label {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .model-option-desc {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .app-model-select {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .app-model-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .app-model-item:hover {
          background: var(--bg-hover);
        }
        
        .app-model-item.selected {
          border-color: var(--accent-primary);
          background: rgba(0, 245, 212, 0.05);
        }
        
        .app-model-item-info {
          flex: 1;
        }
        
        .app-model-item-name {
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .app-model-item-details {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        .default-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          padding: 2px 6px;
          background: rgba(255, 217, 61, 0.15);
          color: var(--accent-secondary);
          border-radius: 999px;
          font-weight: normal;
        }
        
        .no-models-message {
          padding: 20px;
          text-align: center;
          color: var(--text-muted);
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .custom-model-form .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .custom-model-form .form-row:last-child {
          margin-bottom: 0;
        }
      `}</style>
      
      {appModels.length > 0 && (
        <div className="model-choice">
          <div 
            className={`model-option ${!useCustom ? 'selected' : ''}`}
            onClick={() => !useCustom || toggleCustom()}
          >
            <div className="model-option-label">Use App Model</div>
            <div className="model-option-desc">Select from configured models</div>
          </div>
          <div 
            className={`model-option ${useCustom ? 'selected' : ''}`}
            onClick={() => useCustom || toggleCustom()}
          >
            <div className="model-option-label">Custom</div>
            <div className="model-option-desc">Configure model manually</div>
          </div>
        </div>
      )}
      
      {!useCustom && appModels.length > 0 ? (
        <div className="app-model-select">
          {appModels.map(model => (
            <div
              key={model.id}
              className={`app-model-item ${selectedModelId === model.id ? 'selected' : ''}`}
              onClick={() => selectAppModel(model.id)}
            >
              <div className="app-model-item-info">
                <div className="app-model-item-name">
                  {model.name}
                  {model.id === defaultModelId && (
                    <span className="default-badge">
                      <Star size={10} fill="currentColor" />
                      Default
                    </span>
                  )}
                </div>
                <div className="app-model-item-details">
                  {model.provider} / {model.model_name}
                  {model.api_base && ` • ${model.api_base}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : appModels.length === 0 ? (
        <div className="no-models-message">
          No models configured in App Config. Configure models there first, or use custom settings below.
        </div>
      ) : null}
      
      {(useCustom || appModels.length === 0) && (
        <div className="custom-model-form">
          <div className="form-row">
            <div className="form-group">
              <label>Provider</label>
              <select
                value={agent.model?.provider || 'gemini'}
                onChange={(e) => updateCustomModel({ provider: e.target.value as any })}
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
                value={agent.model?.model_name || ''}
                onChange={(e) => updateCustomModel({ model_name: e.target.value })}
                placeholder="e.g., gemini-2.0-flash"
              />
            </div>
            {agent.model?.provider === 'litellm' && (
              <div className="form-group" style={{ flex: 2 }}>
                <label>API Base</label>
                <input
                  type="text"
                  value={agent.model?.api_base || ''}
                  onChange={(e) => updateCustomModel({ api_base: e.target.value || undefined })}
                  placeholder="http://localhost:11434"
                />
              </div>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Temperature</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="2"
                value={agent.model?.temperature ?? ''}
                onChange={(e) => updateCustomModel({ temperature: e.target.value ? parseFloat(e.target.value) : undefined })}
                placeholder="Default"
              />
            </div>
            <div className="form-group">
              <label>Max Tokens</label>
              <input
                type="number"
                value={agent.model?.max_output_tokens ?? ''}
                onChange={(e) => updateCustomModel({ max_output_tokens: e.target.value ? parseInt(e.target.value) : undefined })}
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
                value={agent.model?.top_p ?? ''}
                onChange={(e) => updateCustomModel({ top_p: e.target.value ? parseFloat(e.target.value) : undefined })}
                placeholder="Default"
              />
            </div>
            <div className="form-group">
              <label>Top K</label>
              <input
                type="number"
                min="1"
                value={agent.model?.top_k ?? ''}
                onChange={(e) => updateCustomModel({ top_k: e.target.value ? parseInt(e.target.value) : undefined })}
                placeholder="Default"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

