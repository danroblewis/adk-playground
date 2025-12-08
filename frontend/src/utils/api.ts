import type { Project, AgentConfig, CustomToolDefinition, MCPServerConfig, BuiltinTool } from './types';

const API_BASE = '/api';

export async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }
  
  return response.json();
}

// Projects
export async function listProjects(): Promise<{ id: string; name: string; description: string }[]> {
  const data = await fetchJSON<{ projects: any[] }>('/projects');
  return data.projects;
}

export async function getProject(id: string): Promise<Project> {
  const data = await fetchJSON<{ project: Project }>(`/projects/${id}`);
  return data.project;
}

export async function createProject(name: string, description: string = ''): Promise<Project> {
  const data = await fetchJSON<{ project: Project }>('/projects', {
    method: 'POST',
    body: JSON.stringify({ name, description }),
  });
  return data.project;
}

export async function updateProject(id: string, updates: Partial<Project>): Promise<Project> {
  const data = await fetchJSON<{ project: Project }>(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  });
  return data.project;
}

export async function deleteProject(id: string): Promise<void> {
  await fetchJSON(`/projects/${id}`, { method: 'DELETE' });
}

// YAML
export async function getProjectYaml(id: string): Promise<string> {
  const data = await fetchJSON<{ yaml: string }>(`/projects/${id}/yaml`);
  return data.yaml;
}

export async function updateProjectFromYaml(id: string, yaml: string): Promise<Project> {
  const data = await fetchJSON<{ project: Project }>(`/projects/${id}/yaml`, {
    method: 'PUT',
    body: JSON.stringify({ yaml }),
  });
  return data.project;
}

// Agents
export async function createAgent(projectId: string, agent: Partial<AgentConfig>): Promise<AgentConfig> {
  const data = await fetchJSON<{ agent: AgentConfig }>(`/projects/${projectId}/agents`, {
    method: 'POST',
    body: JSON.stringify(agent),
  });
  return data.agent;
}

export async function updateAgent(projectId: string, agentId: string, agent: AgentConfig): Promise<AgentConfig> {
  const data = await fetchJSON<{ agent: AgentConfig }>(`/projects/${projectId}/agents/${agentId}`, {
    method: 'PUT',
    body: JSON.stringify(agent),
  });
  return data.agent;
}

export async function deleteAgent(projectId: string, agentId: string): Promise<void> {
  await fetchJSON(`/projects/${projectId}/agents/${agentId}`, { method: 'DELETE' });
}

// Custom Tools
export async function createCustomTool(projectId: string, tool: Partial<CustomToolDefinition>): Promise<CustomToolDefinition> {
  const data = await fetchJSON<{ tool: CustomToolDefinition }>(`/projects/${projectId}/tools`, {
    method: 'POST',
    body: JSON.stringify(tool),
  });
  return data.tool;
}

export async function updateCustomTool(projectId: string, toolId: string, tool: CustomToolDefinition): Promise<CustomToolDefinition> {
  const data = await fetchJSON<{ tool: CustomToolDefinition }>(`/projects/${projectId}/tools/${toolId}`, {
    method: 'PUT',
    body: JSON.stringify(tool),
  });
  return data.tool;
}

export async function deleteCustomTool(projectId: string, toolId: string): Promise<void> {
  await fetchJSON(`/projects/${projectId}/tools/${toolId}`, { method: 'DELETE' });
}

// Reference data
export async function getMcpServers(): Promise<MCPServerConfig[]> {
  const data = await fetchJSON<{ servers: MCPServerConfig[] }>('/mcp-servers');
  return data.servers;
}

export async function getBuiltinTools(): Promise<BuiltinTool[]> {
  const data = await fetchJSON<{ tools: BuiltinTool[] }>('/builtin-tools');
  return data.tools;
}

// WebSocket for running agents
export function createRunWebSocket(projectId: string): WebSocket {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const host = window.location.host;
  return new WebSocket(`${protocol}//${host}/ws/run/${projectId}`);
}

// AI-assisted prompt generation
export interface GeneratePromptResult {
  prompt: string | null;
  success: boolean;
  error?: string;
}

export async function generatePrompt(
  projectId: string, 
  agentId: string, 
  context?: string
): Promise<GeneratePromptResult> {
  const data = await fetchJSON<GeneratePromptResult>(`/projects/${projectId}/generate-prompt`, {
    method: 'POST',
    body: JSON.stringify({ agent_id: agentId, context }),
  });
  return data;
}

// AI-assisted agent configuration
export interface GeneratedAgentConfig {
  name: string;
  description: string;
  instruction: string;
  tools: {
    builtin: string[];
    mcp: { server: string; tools: string[] }[];
    custom: string[];
    agents: string[];
  };
  sub_agents: string[];
}

export interface GenerateAgentConfigResult {
  config: GeneratedAgentConfig | null;
  success: boolean;
  error?: string;
  raw_response?: string;
}

export async function generateAgentConfig(
  projectId: string,
  description: string
): Promise<GenerateAgentConfigResult> {
  const data = await fetchJSON<GenerateAgentConfigResult>(`/projects/${projectId}/generate-agent-config`, {
    method: 'POST',
    body: JSON.stringify({ description }),
  });
  return data;
}

// AI-assisted tool code generation
export interface GenerateToolCodeResult {
  code: string | null;
  success: boolean;
  error?: string;
}

export async function generateToolCode(
  projectId: string,
  toolName: string,
  toolDescription: string,
  stateKeysUsed: string[] = [],
  context?: string
): Promise<GenerateToolCodeResult> {
  const data = await fetchJSON<GenerateToolCodeResult>(`/projects/${projectId}/generate-tool-code`, {
    method: 'POST',
    body: JSON.stringify({
      tool_name: toolName,
      tool_description: toolDescription,
      state_keys_used: stateKeysUsed,
      context,
    }),
  });
  return data;
}

// MCP Server Testing
export interface McpToolInfo {
  name: string;
  description: string;
}

export interface TestMcpServerResult {
  success: boolean;
  tools: McpToolInfo[];
  message?: string;
  error?: string;
  traceback?: string;
}

export async function testMcpServer(config: {
  connection_type: string;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  url?: string;
  headers?: Record<string, string>;
  timeout?: number;
}): Promise<TestMcpServerResult> {
  const data = await fetchJSON<TestMcpServerResult>('/test-mcp-server', {
    method: 'POST',
    body: JSON.stringify(config),
  });
  return data;
}

