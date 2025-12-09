// Types matching backend models

export type AgentType = 'LlmAgent' | 'SequentialAgent' | 'LoopAgent' | 'ParallelAgent';
export type ServiceType = 'memory://' | 'sqlite://' | 'postgresql://';
export type MCPConnectionType = 'stdio' | 'sse' | 'http';

export interface StateKeyConfig {
  name: string;
  description: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  default_value?: any;
  scope: 'session' | 'user' | 'app' | 'temp';
}

export interface MCPServerConfig {
  name: string;
  description: string;
  connection_type: MCPConnectionType;
  command?: string;
  args: string[];
  env: Record<string, string>;
  url?: string;
  headers: Record<string, string>;
  timeout: number;
  tool_filter?: string[] | null;  // null = no filter (all tools), [] = no tools, ["a","b"] = only those
  tool_name_prefix?: string;
}

export interface ModelConfig {
  provider: 'gemini' | 'litellm' | 'anthropic';
  model_name: string;
  api_base?: string;
  fallbacks: string[];
  temperature?: number;
  max_output_tokens?: number;
  top_p?: number;
  top_k?: number;
}

export interface CallbackConfig {
  module_path: string;
}

export interface ToolConfig {
  type: 'function' | 'mcp' | 'agent' | 'builtin';
  name?: string;
  description?: string;
  module_path?: string;
  server?: MCPServerConfig;
  agent_id?: string;
  skip_summarization?: boolean;
}

export interface LlmAgentConfig {
  type: 'LlmAgent';
  id: string;
  name: string;
  description: string;
  model?: ModelConfig;
  instruction: string;
  output_key?: string;
  include_contents: 'default' | 'none';
  disallow_transfer_to_parent: boolean;
  disallow_transfer_to_peers: boolean;
  tools: ToolConfig[];
  sub_agents: string[];
  before_agent_callbacks: CallbackConfig[];
  after_agent_callbacks: CallbackConfig[];
  before_model_callbacks: CallbackConfig[];
  after_model_callbacks: CallbackConfig[];
  before_tool_callbacks: CallbackConfig[];
  after_tool_callbacks: CallbackConfig[];
}

export interface SequentialAgentConfig {
  type: 'SequentialAgent';
  id: string;
  name: string;
  description: string;
  sub_agents: string[];
}

export interface LoopAgentConfig {
  type: 'LoopAgent';
  id: string;
  name: string;
  description: string;
  sub_agents: string[];
  max_iterations?: number;
}

export interface ParallelAgentConfig {
  type: 'ParallelAgent';
  id: string;
  name: string;
  description: string;
  sub_agents: string[];
}

export type AgentConfig = LlmAgentConfig | SequentialAgentConfig | LoopAgentConfig | ParallelAgentConfig;

export interface PluginConfig {
  type: string;
  name: string;
  max_retries?: number;
  throw_exception_if_retry_exceeded?: boolean;
}

export interface CompactionConfig {
  enabled: boolean;
  max_events: number;
  summarize: boolean;
}

export interface ContextCacheConfig {
  enabled: boolean;
  ttl_seconds: number;
}

export interface ResumabilityConfig {
  enabled: boolean;
}

export interface ArtifactConfig {
  name: string;
  description: string;
  type: 'file' | 'image' | 'data';
}

export interface AppModelConfig {
  id: string;
  name: string;
  provider: 'gemini' | 'litellm' | 'anthropic';
  model_name: string;
  api_base?: string;
  temperature?: number;
  max_output_tokens?: number;
  top_p?: number;
  top_k?: number;
  is_default?: boolean;
}

export interface AppConfig {
  id: string;
  name: string;
  description: string;
  root_agent_id?: string;
  session_service_uri: string;
  memory_service_uri: string;
  artifact_service_uri: string;
  compaction: CompactionConfig;
  context_cache: ContextCacheConfig;
  resumability: ResumabilityConfig;
  plugins: PluginConfig[];
  state_keys: StateKeyConfig[];
  artifacts: ArtifactConfig[];
  models: AppModelConfig[];
  default_model_id?: string;
  env_vars: Record<string, string>;
}

export interface CustomToolDefinition {
  id: string;
  name: string;
  description: string;
  module_path: string;
  code: string;
  state_keys_used: string[];
}

export interface WatchExpressionConfig {
  id: string;
  serverName: string;
  toolName: string;
  args: Record<string, any>;
  transform?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  app: AppConfig;
  agents: AgentConfig[];
  custom_tools: CustomToolDefinition[];
  mcp_servers: MCPServerConfig[];
  watches: WatchExpressionConfig[];
}

export interface RunEvent {
  timestamp: number;
  event_type: 'agent_start' | 'agent_end' | 'tool_call' | 'tool_result' | 
              'model_call' | 'model_response' | 'state_change' | 'transfer';
  agent_name: string;
  data: Record<string, any>;
}

export interface RunSession {
  id: string;
  project_id: string;
  started_at: number;
  ended_at?: number;
  status: 'running' | 'completed' | 'error';
  events: RunEvent[];
  final_state: Record<string, any>;
  token_counts: Record<string, number>;
}

export interface BuiltinTool {
  name: string;
  description: string;
}

export interface WatchToolConfig {
  id: string;
  name: string;  // Display name
  type: 'builtin' | 'mcp' | 'custom';
  tool_name: string;  // Actual tool function name
  args: Record<string, any>;  // Tool arguments
  mcp_server?: string;  // For MCP tools
}

export interface WatchToolResult {
  watch_id: string;
  result: any;
  error?: string;
  timestamp: number;
}

