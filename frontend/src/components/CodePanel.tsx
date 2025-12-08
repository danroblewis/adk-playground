import { useState, useEffect, useMemo } from 'react';
import { Copy, Download, Check, Code } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import Editor from '@monaco-editor/react';
import type { Project, AgentConfig, LlmAgentConfig, ToolConfig, MCPServerConfig } from '../utils/types';

function escapeString(s: string): string {
  // Escape for Python triple-quoted string
  return s.replace(/\\/g, '\\\\').replace(/"""/g, '\\"\\"\\"');
}

function indent(code: string, spaces: number): string {
  const prefix = ' '.repeat(spaces);
  return code.split('\n').map(line => line ? prefix + line : line).join('\n');
}

function generateModelCode(model: LlmAgentConfig['model'], modelName: string = 'model'): string {
  if (!model) return '';
  
  const params: string[] = [`model="${model.model_name}"`];
  if (model.api_base) params.push(`api_base="${model.api_base}"`);
  if (model.temperature !== undefined) params.push(`temperature=${model.temperature}`);
  if (model.max_output_tokens !== undefined) params.push(`max_output_tokens=${model.max_output_tokens}`);
  if (model.top_p !== undefined) params.push(`top_p=${model.top_p}`);
  if (model.top_k !== undefined) params.push(`top_k=${model.top_k}`);
  
  if (model.provider === 'litellm') {
    return `${modelName} = LiteLlm(\n    ${params.join(',\n    ')}\n)`;
  } else if (model.provider === 'anthropic') {
    return `${modelName} = Claude(\n    ${params.join(',\n    ')}\n)`;
  } else {
    return `${modelName} = "${model.model_name}"  # Gemini model`;
  }
}

function generateToolCode(tool: ToolConfig, project: Project): string {
  if (tool.type === 'builtin') {
    return tool.name || '';
  } else if (tool.type === 'function') {
    const customTool = project.custom_tools.find(t => t.id === (tool as any).tool_id);
    return customTool?.name || 'custom_tool';
  } else if (tool.type === 'agent') {
    const agent = project.agents.find(a => a.id === (tool as any).agent_id);
    return agent ? `AgentTool(agent=${agent.name}_agent)` : 'AgentTool(agent=sub_agent)';
  } else if (tool.type === 'mcp') {
    // Reference the MCPToolset variable generated earlier
    if (tool.server?.name) {
      return `${tool.server.name}_tools`;
    }
    return '';
  }
  return '';
}

function generateAgentCode(agent: AgentConfig, project: Project, agentVarNames: Map<string, string>): string {
  const varName = agentVarNames.get(agent.id) || `${agent.name}_agent`;
  
  if (agent.type === 'LlmAgent') {
    const llmAgent = agent as LlmAgentConfig;
    const params: string[] = [`name="${agent.name}"`];
    
    // Model
    if (llmAgent.model) {
      params.push(`model=${agent.name}_model`);
    }
    
    // Instruction
    if (llmAgent.instruction) {
      params.push(`instruction="""${escapeString(llmAgent.instruction)}"""`);
    }
    
    // Description
    if (llmAgent.description) {
      params.push(`description="${escapeString(llmAgent.description)}"`);
    }
    
    // Output key
    if (llmAgent.output_key) {
      params.push(`output_key="${llmAgent.output_key}"`);
    }
    
    // Tools
    const tools = llmAgent.tools
      .map(t => generateToolCode(t, project))
      .filter(t => t && !t.startsWith('#'));
    if (tools.length > 0) {
      params.push(`tools=[${tools.join(', ')}]`);
    }
    
    // Sub-agents
    if (llmAgent.sub_agents && llmAgent.sub_agents.length > 0) {
      const subAgentVars = llmAgent.sub_agents
        .map(id => agentVarNames.get(id) || 'sub_agent')
        .join(', ');
      params.push(`sub_agents=[${subAgentVars}]`);
    }
    
    // Include contents
    if (llmAgent.include_contents === 'none') {
      params.push(`include_contents="none"`);
    }
    
    // Transfer settings
    if (llmAgent.disallow_transfer_to_parent) {
      params.push(`disallow_transfer_to_parent=True`);
    }
    if (llmAgent.disallow_transfer_to_peers) {
      params.push(`disallow_transfer_to_peers=True`);
    }
    
    return `${varName} = Agent(\n    ${params.join(',\n    ')}\n)`;
    
  } else if (agent.type === 'SequentialAgent') {
    const subAgentVars = agent.sub_agents
      .map(id => agentVarNames.get(id) || 'sub_agent')
      .join(', ');
    return `${varName} = SequentialAgent(\n    name="${agent.name}",\n    sub_agents=[${subAgentVars}]\n)`;
    
  } else if (agent.type === 'LoopAgent') {
    const loopAgent = agent as any;
    const params = [`name="${agent.name}"`];
    const subAgentVars = agent.sub_agents
      .map(id => agentVarNames.get(id) || 'sub_agent')
      .join(', ');
    params.push(`sub_agents=[${subAgentVars}]`);
    if (loopAgent.max_iterations) {
      params.push(`max_iterations=${loopAgent.max_iterations}`);
    }
    return `${varName} = LoopAgent(\n    ${params.join(',\n    ')}\n)`;
    
  } else if (agent.type === 'ParallelAgent') {
    const subAgentVars = agent.sub_agents
      .map(id => agentVarNames.get(id) || 'sub_agent')
      .join(', ');
    return `${varName} = ParallelAgent(\n    name="${agent.name}",\n    sub_agents=[${subAgentVars}]\n)`;
  }
  
  return `# Unknown agent type: ${agent.type}`;
}

function generateMcpToolsetCode(server: MCPServerConfig): string {
  const lines: string[] = [];
  
  if (server.connection_type === 'stdio') {
    lines.push(`${server.name}_tools = MCPToolset(`);
    lines.push(`    connection_params=StdioConnectionParams(`);
    lines.push(`        server_params=StdioServerParameters(`);
    if (server.command) lines.push(`            command="${server.command}",`);
    if (server.args.length > 0) lines.push(`            args=${JSON.stringify(server.args)},`);
    if (Object.keys(server.env).length > 0) {
      lines.push(`            env=${JSON.stringify(server.env)},`);
    }
    lines.push(`        )`);
    lines.push(`    )`);
    lines.push(`)`);
  } else if (server.connection_type === 'sse') {
    lines.push(`${server.name}_tools = MCPToolset(`);
    lines.push(`    connection_params=SseConnectionParams(`);
    if (server.url) lines.push(`        url="${server.url}",`);
    lines.push(`    )`);
    lines.push(`)`);
  }
  
  return lines.join('\n');
}

function generatePythonCode(project: Project): string {
  const lines: string[] = [];
  
  // Header comment
  lines.push('"""');
  lines.push(`${project.name} - Generated by ADK Playground`);
  if (project.description) {
    lines.push('');
    lines.push(project.description);
  }
  lines.push('"""');
  lines.push('');
  
  // Imports
  const imports = new Set<string>();
  imports.add('from google.adk.agents import Agent');
  
  const hasSequential = project.agents.some(a => a.type === 'SequentialAgent');
  const hasLoop = project.agents.some(a => a.type === 'LoopAgent');
  const hasParallel = project.agents.some(a => a.type === 'ParallelAgent');
  
  if (hasSequential) imports.add('from google.adk.agents import SequentialAgent');
  if (hasLoop) imports.add('from google.adk.agents import LoopAgent');
  if (hasParallel) imports.add('from google.adk.agents import ParallelAgent');
  
  // Check for LiteLLM models
  const hasLiteLlm = project.agents.some(a => 
    a.type === 'LlmAgent' && (a as LlmAgentConfig).model?.provider === 'litellm'
  );
  if (hasLiteLlm) {
    imports.add('from google.adk.models.lite_llm import LiteLlm');
  }
  
  // Check for AgentTool
  const hasAgentTool = project.agents.some(a => 
    a.type === 'LlmAgent' && (a as LlmAgentConfig).tools.some(t => t.type === 'agent')
  );
  if (hasAgentTool) {
    imports.add('from google.adk.tools import AgentTool');
  }
  
  // Check for built-in tools
  const builtinTools = new Set<string>();
  project.agents.forEach(agent => {
    if (agent.type === 'LlmAgent') {
      (agent as LlmAgentConfig).tools.forEach(tool => {
        if (tool.type === 'builtin' && tool.name) {
          builtinTools.add(tool.name);
        }
      });
    }
  });
  if (builtinTools.has('exit_loop')) {
    imports.add('from google.adk.tools import exit_loop');
  }
  if (builtinTools.has('google_search')) {
    imports.add('from google.adk.tools import google_search');
  }
  
  // Check for MCP
  const hasMcp = project.mcp_servers.length > 0;
  if (hasMcp) {
    imports.add('from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset');
    imports.add('from google.adk.tools.mcp_tool.mcp_toolset import StdioConnectionParams');
    imports.add('from google.adk.tools.mcp_tool.mcp_toolset import StdioServerParameters');
  }
  
  // Always import App
  imports.add('from google.adk.apps import App');
  
  // Check for plugins
  const hasPlugins = project.app.plugins.length > 0;
  if (hasPlugins) {
    project.app.plugins.forEach(p => {
      if (p.type === 'ReflectAndRetryToolPlugin') {
        imports.add('from google.adk.plugins import ReflectAndRetryToolPlugin');
      }
    });
  }
  
  // Sort and add imports
  const importLines = Array.from(imports).sort();
  lines.push(...importLines);
  lines.push('');
  lines.push('');
  
  // Build agent variable name map (for resolving sub_agents references)
  const agentVarNames = new Map<string, string>();
  project.agents.forEach(agent => {
    agentVarNames.set(agent.id, `${agent.name}_agent`);
  });
  
  // Topological sort agents (sub-agents must be defined before parent agents)
  const sortedAgents: AgentConfig[] = [];
  const visited = new Set<string>();
  
  function visitAgent(id: string) {
    if (visited.has(id)) return;
    const agent = project.agents.find(a => a.id === id);
    if (!agent) return;
    
    // Visit sub-agents first
    agent.sub_agents.forEach(subId => visitAgent(subId));
    
    visited.add(id);
    sortedAgents.push(agent);
  }
  
  project.agents.forEach(agent => visitAgent(agent.id));
  
  // Collect all MCP servers used by agents
  const usedMcpServers = new Map<string, MCPServerConfig>();
  sortedAgents.forEach(agent => {
    if (agent.type === 'LlmAgent') {
      (agent as LlmAgentConfig).tools.forEach(tool => {
        if (tool.type === 'mcp' && tool.server) {
          usedMcpServers.set(tool.server.name, tool.server);
        }
      });
    }
  });
  
  // Generate MCP toolset code for servers used by agents
  if (usedMcpServers.size > 0) {
    lines.push('# MCP Server Toolsets');
    usedMcpServers.forEach(server => {
      lines.push(generateMcpToolsetCode(server));
      lines.push('');
    });
    lines.push('');
  }
  
  // Generate custom tools (if any)
  if (project.custom_tools.length > 0) {
    lines.push('# Custom Tools');
    project.custom_tools.forEach(tool => {
      lines.push(tool.code);
      lines.push('');
    });
    lines.push('');
  }
  
  // Generate model definitions
  lines.push('# Models');
  sortedAgents.forEach(agent => {
    if (agent.type === 'LlmAgent' && (agent as LlmAgentConfig).model) {
      lines.push(generateModelCode((agent as LlmAgentConfig).model, `${agent.name}_model`));
      lines.push('');
    }
  });
  lines.push('');
  
  // Generate agents
  lines.push('# Agents');
  sortedAgents.forEach(agent => {
    lines.push(generateAgentCode(agent, project, agentVarNames));
    lines.push('');
  });
  
  // Generate root_agent assignment
  const rootAgent = project.agents.find(a => a.id === project.app.root_agent_id);
  if (rootAgent) {
    lines.push('');
    lines.push('# Root Agent');
    lines.push(`root_agent = ${agentVarNames.get(rootAgent.id)}`);
  }
  
  // Always generate App
  lines.push('');
  lines.push('');
  lines.push('# App Configuration');
  lines.push('app = App(');
  lines.push(`    name="${project.app.name}",`);
  lines.push(`    root_agent=root_agent,`);
  
  if (hasPlugins) {
    const pluginLines = project.app.plugins.map(p => {
      if (p.type === 'ReflectAndRetryToolPlugin') {
        return `        ReflectAndRetryToolPlugin(max_retries=${p.max_retries || 3})`;
      }
      return `        # ${p.type}()`;
    });
    lines.push(`    plugins=[`);
    lines.push(pluginLines.join(',\n'));
    lines.push(`    ],`);
  }
  
  lines.push(')');
  
  return lines.join('\n');
}

export default function CodePanel() {
  const { project } = useStore();
  const [copied, setCopied] = useState(false);
  
  if (!project) return null;
  
  const pythonCode = useMemo(() => generatePythonCode(project), [project]);
  
  function handleCopy() {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  
  function handleDownload() {
    const blob = new Blob([pythonCode], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name}_agent.py`;
    a.click();
    URL.revokeObjectURL(url);
  }
  
  return (
    <div className="code-panel">
      <style>{`
        .code-panel {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 180px);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .code-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .code-title h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .code-title .badge {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(167, 139, 250, 0.15);
          color: var(--accent-primary);
          border-radius: 999px;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 999px;
        }
        
        .status-badge.success {
          background: rgba(0, 245, 212, 0.15);
          color: var(--success);
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
        }
        
        .code-editor {
          flex: 1;
          min-height: 0;
        }
        
        .code-info {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .code-info p {
          margin-bottom: 8px;
        }
        
        .code-info code {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }
      `}</style>
      
      <div className="code-header">
        <div className="code-title">
          <Code size={16} />
          <h3>Python Code</h3>
          <span className="badge">Generated</span>
          {copied && (
            <span className="status-badge success">
              <Check size={12} />
              Copied!
            </span>
          )}
        </div>
        <div className="code-actions">
          <button className="btn btn-secondary btn-sm" onClick={handleCopy} title="Copy to clipboard">
            <Copy size={14} />
            Copy
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleDownload} title="Download Python file">
            <Download size={14} />
            Download
          </button>
        </div>
      </div>
      
      <div className="code-editor">
        <Editor
          height="100%"
          language="python"
          theme="vs-dark"
          value={pythonCode}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            padding: { top: 12 },
            wordWrap: 'on',
          }}
        />
      </div>
      
      <div className="code-info">
        <p>
          This is the Python code equivalent of your project configuration. 
          You can use this code directly with ADK.
        </p>
        <p>
          Place this in a file named <code>agent.py</code> inside your agent directory, 
          then run with <code>adk web .</code> or <code>adk run your_agent</code>.
        </p>
      </div>
    </div>
  );
}

