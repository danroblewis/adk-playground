import React, { useState } from 'react';
import { Bot, Cpu, Wrench, Users, Plus, Trash2, ChevronDown, ChevronRight, Star, Loader, Play } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import type { AgentConfig, LlmAgentConfig, ToolConfig, ModelConfig, AppModelConfig } from '../utils/types';
import { generatePrompt } from '../utils/api';
import MarkdownEditor from './MarkdownEditor';

interface Props {
  agent: AgentConfig;
}

export default function AgentEditor({ agent }: Props) {
  const { project, updateAgent, mcpServers, builtinTools, setActiveTab, setRun2AgentId } = useStore();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basic', 'model', 'tools', 'subagents']));
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [showRequestChanges, setShowRequestChanges] = useState(false);
  const [requestChangesText, setRequestChangesText] = useState('');
  
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
  
  function updateTool(index: number, tool: ToolConfig) {
    if (!isLlmAgent) return;
    const newTools = [...llmAgent.tools];
    newTools[index] = tool;
    update({ tools: newTools } as Partial<LlmAgentConfig>);
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
    if (!project || !isLlmAgent) return;
    setIsGeneratingPrompt(true);
    try {
      // Use current prompt as context for improvement
      const currentPrompt = llmAgent.instruction || '';
      const context = currentPrompt 
        ? `Current instruction to improve:\n\n${currentPrompt}\n\nPlease improve and expand this instruction while preserving its core intent.`
        : undefined;
      
      const result = await generatePrompt(project.id, agent.id, context);
      if (result.success && result.prompt) {
        update({ instruction: result.prompt } as Partial<LlmAgentConfig>);
      } else {
        alert('Failed to generate prompt: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error generating prompt: ' + (e as Error).message);
    } finally {
      setIsGeneratingPrompt(false);
    }
  }
  
  async function handleRequestChanges() {
    if (!project || !isLlmAgent || !requestChangesText.trim()) return;
    setIsGeneratingPrompt(true);
    try {
      const currentPrompt = llmAgent.instruction || '';
      const context = `Current instruction:\n\n${currentPrompt}\n\n---\n\nRequested changes:\n${requestChangesText}\n\nPlease apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`;
      
      const result = await generatePrompt(project.id, agent.id, context);
      if (result.success && result.prompt) {
        update({ instruction: result.prompt } as Partial<LlmAgentConfig>);
        setShowRequestChanges(false);
        setRequestChangesText('');
      } else {
        alert('Failed to apply changes: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error applying changes: ' + (e as Error).message);
    } finally {
      setIsGeneratingPrompt(false);
    }
  }
  
  async function handleGenerateDescription() {
    if (!project || !isLlmAgent) return;
    const currentPrompt = llmAgent.instruction;
    if (!currentPrompt) {
      alert('Please write an instruction first');
      return;
    }
    
    setIsGeneratingDescription(true);
    try {
      const context = `Write a 5-10 word description of what this agent does.

STRICT RULES:
- Maximum 10 words
- Third person (NOT "You are...")
- Start with a verb (Writes, Reviews, Searches, Generates, etc.)
- Single phrase, no periods

GOOD EXAMPLES:
- "Writes creative stories"
- "Reviews code for bugs"
- "Searches the web for information"
- "Generates unit tests"

BAD (too long):
- "This agent is designed to help users write creative stories based on their prompts"

Agent instruction to summarize:
${currentPrompt.slice(0, 500)}

Your response (5-10 words only):`;
      
      const result = await generatePrompt(project.id, agent.id, context);
      if (result.success && result.prompt) {
        // Truncate if still too long, take first sentence/phrase
        let desc = result.prompt.trim();
        // Remove any leading quotes or punctuation
        desc = desc.replace(/^["']|["']$/g, '').trim();
        // Take only the first sentence if there are multiple
        const firstSentence = desc.split(/[.!?\n]/)[0].trim();
        // Limit to ~80 chars
        const truncated = firstSentence.length > 80 ? firstSentence.slice(0, 77) + '...' : firstSentence;
        update({ description: truncated });
      } else {
        alert('Failed to generate description: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error generating description: ' + (e as Error).message);
    } finally {
      setIsGeneratingDescription(false);
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
        
        .editor-header .run-agent-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          font-size: 12px;
          white-space: nowrap;
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
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .request-changes-box {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .request-changes-box input {
          flex: 1;
          font-size: 13px;
        }
        
        .request-changes-box .btn {
          white-space: nowrap;
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
        <button
          className="btn btn-primary btn-sm run-agent-btn"
          onClick={() => {
            setRun2AgentId(agent.id);
            setActiveTab('run2');
          }}
          title="Test this agent in Run2"
        >
          <Play size={14} />
          Run
        </button>
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
              <div className="label-with-action">
                <label>Description</label>
                {isLlmAgent && llmAgent.instruction && (
                  <button 
                    className="btn btn-secondary btn-sm generate-btn"
                    onClick={handleGenerateDescription}
                    disabled={isGeneratingDescription}
                    title="Generate description from instruction"
                  >
                    {isGeneratingDescription ? (
                      <>
                        <Loader size={14} className="spin" />
                        Summarizing...
                      </>
                    ) : (
                      'Summarize'
                    )}
                  </button>
                )}
              </div>
              <input
                type="text"
                value={agent.description}
                onChange={(e) => update({ description: e.target.value })}
                placeholder="e.g., Reviews code for bugs and suggests fixes"
              />
            </div>
          </div>
          
          {isLlmAgent && (
            <>
              <div className="form-row">
                <div className="form-group full-width">
                  <div className="label-with-action">
                    <label>Instruction</label>
                    <div className="action-buttons">
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => setShowRequestChanges(!showRequestChanges)}
                        disabled={isGeneratingPrompt || !llmAgent.instruction}
                        title="Request specific changes to the instruction"
                      >
                        Request Changes
                      </button>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={handleGeneratePrompt}
                        disabled={isGeneratingPrompt}
                        title="Uses AI to improve and expand the current instruction"
                      >
                        {isGeneratingPrompt ? (
                          <>
                            <Loader size={14} className="spin" />
                            Working...
                          </>
                        ) : (
                          'Auto-Improve'
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {showRequestChanges && (
                    <div className="request-changes-box">
                      <input
                        type="text"
                        value={requestChangesText}
                        onChange={(e) => setRequestChangesText(e.target.value)}
                        placeholder="Describe what changes you want..."
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && requestChangesText.trim()) {
                            handleRequestChanges();
                          } else if (e.key === 'Escape') {
                            setShowRequestChanges(false);
                            setRequestChangesText('');
                          }
                        }}
                        autoFocus
                      />
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={handleRequestChanges}
                        disabled={isGeneratingPrompt || !requestChangesText.trim()}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  
                  <MarkdownEditor
                    value={llmAgent.instruction}
                    onChange={(value) => update({ instruction: value } as Partial<LlmAgentConfig>)}
                    placeholder="Write your agent's instruction here... (Markdown supported)"
                    minHeight={200}
                  />
                </div>
              </div>
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
              onUpdate={updateTool}
              builtinTools={builtinTools}
              mcpServers={mcpServers}
              projectMcpServers={project.mcp_servers}
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
  onUpdate,
  builtinTools,
  mcpServers,
  projectMcpServers,
  customTools,
  agents
}: {
  tools: ToolConfig[];
  onAdd: (tool: ToolConfig) => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, tool: ToolConfig) => void;
  builtinTools: any[];
  mcpServers: any[];
  projectMcpServers: any[];
  customTools: any[];
  agents: AgentConfig[];
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [mcpConfigDialog, setMcpConfigDialog] = useState<{ 
    server: any; 
    enabledTools: Set<string>;
    availableTools: { name: string; description: string }[];
    isLoading: boolean;
    error?: string;
  } | null>(null);
  const [expandedMcpTools, setExpandedMcpTools] = useState<Set<number>>(new Set());
  
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
  
  async function openMcpConfig(server: any) {
    setDropdownOpen(false);
    
    // If we already have a tool_filter with items, use those as available tools
    const existingTools = server.tool_filter || [];
    
    // Start the dialog immediately with loading state
    setMcpConfigDialog({
      server,
      enabledTools: new Set(existingTools),
      availableTools: existingTools.map((name: string) => ({ name, description: '' })),
      isLoading: existingTools.length === 0, // Only load if we don't have tools
      error: undefined
    });
    
    // If no tools defined, fetch from server
    if (existingTools.length === 0) {
      try {
        const { testMcpServer } = await import('../utils/api');
        const result = await testMcpServer({
          connection_type: server.connection_type,
          command: server.command,
          args: server.args,
          env: server.env,
          url: server.url,
          headers: server.headers,
          timeout: server.timeout || 30,
        });
        
        if (result.success) {
          setMcpConfigDialog(prev => prev ? {
            ...prev,
            availableTools: result.tools,
            enabledTools: new Set(result.tools.map(t => t.name)), // Start with all enabled
            isLoading: false
          } : null);
        } else {
          setMcpConfigDialog(prev => prev ? {
            ...prev,
            isLoading: false,
            error: result.error || 'Failed to connect to MCP server'
          } : null);
        }
      } catch (e) {
        setMcpConfigDialog(prev => prev ? {
          ...prev,
          isLoading: false,
          error: (e as Error).message
        } : null);
      }
    }
  }
  
  function toggleMcpTool(toolName: string) {
    if (!mcpConfigDialog) return;
    const next = new Set(mcpConfigDialog.enabledTools);
    if (next.has(toolName)) {
      next.delete(toolName);
    } else {
      next.add(toolName);
    }
    setMcpConfigDialog({ ...mcpConfigDialog, enabledTools: next });
  }
  
  function confirmMcpTool() {
    if (!mcpConfigDialog) return;
    const enabledTools = Array.from(mcpConfigDialog.enabledTools);
    onAdd({
      type: 'mcp',
      server: {
        ...mcpConfigDialog.server,
        tool_filter: enabledTools
      }
    });
    setMcpConfigDialog(null);
  }
  
  function toggleMcpExpand(index: number) {
    const next = new Set(expandedMcpTools);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setExpandedMcpTools(next);
  }
  
  function toggleExistingMcpTool(toolIndex: number, toolName: string) {
    const tool = tools[toolIndex];
    if (tool.type !== 'mcp' || !tool.server) return;
    
    const currentFilter = tool.server.tool_filter || [];
    let newFilter: string[];
    
    if (currentFilter.includes(toolName)) {
      newFilter = currentFilter.filter(t => t !== toolName);
    } else {
      newFilter = [...currentFilter, toolName];
    }
    
    onUpdate(toolIndex, {
      ...tool,
      server: {
        ...tool.server,
        tool_filter: newFilter
      }
    });
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
  
  // Get the known server config for an existing MCP tool to get all available tools
  function getKnownServer(serverName: string) {
    return mcpServers.find(s => s.name === serverName);
  }
  
  return (
    <div>
      <style>{`
        .mcp-tool-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 8px;
        }
        
        .mcp-tool-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .mcp-tool-header:hover {
          background: var(--bg-tertiary);
        }
        
        .mcp-tool-header .delete-btn {
          padding: 6px;
          color: var(--text-muted);
          background: transparent;
          border: none;
          border-radius: var(--radius-sm);
          opacity: 0.6;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .mcp-tool-header:hover .delete-btn {
          opacity: 1;
        }
        
        .mcp-tool-header .delete-btn:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .mcp-tool-info {
          flex: 1;
        }
        
        .mcp-tool-name {
          font-weight: 500;
        }
        
        .mcp-tool-count {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .mcp-tool-body {
          padding: 12px;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
        }
        
        .mcp-tool-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .mcp-tool-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .mcp-tool-chip.enabled {
          background: rgba(0, 245, 212, 0.1);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        
        .mcp-tool-chip.disabled {
          opacity: 0.5;
          text-decoration: line-through;
        }
        
        .mcp-config-dialog {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }
        
        .mcp-config-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
        }
        
        .mcp-config-content h3 {
          margin-bottom: 8px;
        }
        
        .mcp-config-content > p {
          color: var(--text-muted);
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .mcp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px;
          gap: 16px;
        }
        
        .mcp-loading .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
          border-top-color: var(--accent-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .mcp-loading p {
          color: var(--text-muted);
          font-size: 14px;
        }
        
        .mcp-error {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid var(--error);
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 16px;
        }
        
        .mcp-error p {
          color: var(--error);
          margin: 0;
        }
        
        .mcp-error .hint {
          color: var(--text-muted);
          font-size: 12px;
          margin-top: 8px;
        }
        
        .mcp-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .mcp-tool-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 13px;
          transition: all 0.15s;
        }
        
        .mcp-tool-toggle:hover {
          border-color: var(--text-muted);
        }
        
        .mcp-tool-toggle.enabled {
          background: rgba(0, 245, 212, 0.1);
          border-color: var(--accent-primary);
        }
        
        .mcp-tool-toggle input {
          margin: 0;
        }
        
        .mcp-select-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .mcp-select-actions button {
          font-size: 12px;
          padding: 4px 8px;
        }
      `}</style>
      
      <div className="tool-list">
        {tools.map((tool, index) => (
          tool.type === 'mcp' && tool.server ? (
            <div key={index} className="mcp-tool-item">
              <div className="mcp-tool-header" onClick={() => toggleMcpExpand(index)}>
                {expandedMcpTools.has(index) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <Wrench size={14} style={{ color: 'var(--accent-primary)' }} />
                <div className="mcp-tool-info">
                  <div className="mcp-tool-name">{tool.server.name}</div>
                  <div className="mcp-tool-count">
                    {tool.server.tool_filter === null || tool.server.tool_filter === undefined ? 'all tools' : `${tool.server.tool_filter.length} tools enabled`}
                  </div>
                </div>
                <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onRemove(index); }}>
                  <Trash2 size={14} />
                </button>
              </div>
              {expandedMcpTools.has(index) && (
                <div className="mcp-tool-body">
                  <div className="mcp-tool-list">
                    {(() => {
                      const knownServer = getKnownServer(tool.server!.name);
                      const allTools = knownServer?.tool_filter || tool.server!.tool_filter || [];
                      const enabledTools = new Set(tool.server!.tool_filter || []);
                      
                      return allTools.map((toolName: string) => (
                        <label
                          key={toolName}
                          className={`mcp-tool-chip ${enabledTools.has(toolName) ? 'enabled' : 'disabled'}`}
                          onClick={() => toggleExistingMcpTool(index, toolName)}
                        >
                          <input
                            type="checkbox"
                            checked={enabledTools.has(toolName)}
                            onChange={() => {}}
                            style={{ display: 'none' }}
                          />
                          {toolName}
                        </label>
                      ));
                    })()}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div key={index} className="tool-item">
              <Wrench size={14} style={{ color: 'var(--accent-primary)' }} />
              <div className="tool-item-info">
                <div className="tool-item-name">
                  {tool.name || tool.agent_id}
                </div>
                <div className="tool-item-type">{tool.type}</div>
              </div>
              <button className="delete-btn" onClick={() => onRemove(index)}>
                <Trash2 size={14} />
              </button>
            </div>
          )
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
              
              {/* Known MCP Servers */}
              {mcpServers.length > 0 && (
                <div className="dropdown-section">
                  <h5>Known MCP Servers ({mcpServers.length})</h5>
                  {mcpServers.map(server => (
                    <button
                      key={`known-${server.name}`}
                      className="dropdown-item"
                      onClick={() => openMcpConfig(server)}
                    >
                      <div className="dropdown-item-name">
                        {server.name}
                        <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>
                          {server.tool_filter === null || server.tool_filter === undefined ? 'all tools' : `${server.tool_filter.length} tools`}
                        </span>
                      </div>
                      <div className="dropdown-item-desc">{server.description}</div>
                    </button>
                  ))}
                </div>
              )}
              
              {/* Project MCP Servers */}
              {projectMcpServers.length > 0 && (
                <div className="dropdown-section">
                  <h5>Project MCP Servers ({projectMcpServers.length})</h5>
                  {projectMcpServers.map(server => (
                    <button
                      key={`project-${server.id || server.name}`}
                      className="dropdown-item"
                      onClick={() => openMcpConfig(server)}
                    >
                      <div className="dropdown-item-name">
                        {server.name}
                        <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>
                          {server.tool_filter === null || server.tool_filter === undefined ? 'all tools' : `${server.tool_filter.length} tools`}
                        </span>
                      </div>
                      <div className="dropdown-item-desc">{server.description || 'Custom MCP server'}</div>
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
      
      {mcpConfigDialog && (
        <div className="mcp-config-dialog">
          <div className="mcp-config-content">
            <h3>Configure {mcpConfigDialog.server.name}</h3>
            <p>{mcpConfigDialog.server.description}</p>
            
            {mcpConfigDialog.isLoading ? (
              <div className="mcp-loading">
                <div className="spinner" />
                <p>Connecting to MCP server and discovering tools...</p>
              </div>
            ) : mcpConfigDialog.error ? (
              <div className="mcp-error">
                <p>⚠️ Failed to discover tools: {mcpConfigDialog.error}</p>
                <p className="hint">You can still add the server, but you won't be able to select specific tools.</p>
              </div>
            ) : (
              <>
                <div className="mcp-select-actions">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setMcpConfigDialog({
                      ...mcpConfigDialog,
                      enabledTools: new Set(mcpConfigDialog.availableTools.map(t => t.name))
                    })}
                  >
                    Select All ({mcpConfigDialog.availableTools.length})
                  </button>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setMcpConfigDialog({
                      ...mcpConfigDialog,
                      enabledTools: new Set()
                    })}
                  >
                    Select None
                  </button>
                </div>
                
                <div className="mcp-tools-grid">
                  {mcpConfigDialog.availableTools.map((tool) => (
                    <label 
                      key={tool.name}
                      className={`mcp-tool-toggle ${mcpConfigDialog.enabledTools.has(tool.name) ? 'enabled' : ''}`}
                      onClick={() => toggleMcpTool(tool.name)}
                      title={tool.description || tool.name}
                    >
                      <input
                        type="checkbox"
                        checked={mcpConfigDialog.enabledTools.has(tool.name)}
                        onChange={() => {}}
                      />
                      {tool.name}
                    </label>
                  ))}
                </div>
              </>
            )}
            
            <div className="dialog-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setMcpConfigDialog(null)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={confirmMcpTool}
                disabled={mcpConfigDialog.enabledTools.size === 0}
              >
                Add {mcpConfigDialog.enabledTools.size} Tools
              </button>
            </div>
          </div>
        </div>
      )}
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

