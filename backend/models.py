"""Pydantic models for the ADK Playground API."""

from __future__ import annotations

from typing import Any, Dict, List, Literal, Optional, Union
from pydantic import BaseModel, Field
from enum import Enum


# ============================================================================
# Enums
# ============================================================================

class AgentType(str, Enum):
    LLM = "LlmAgent"
    SEQUENTIAL = "SequentialAgent"
    LOOP = "LoopAgent"
    PARALLEL = "ParallelAgent"


class ServiceType(str, Enum):
    MEMORY = "memory://"
    SQLITE = "sqlite://"
    POSTGRES = "postgresql://"


class MCPConnectionType(str, Enum):
    STDIO = "stdio"
    SSE = "sse"
    HTTP = "http"


# ============================================================================
# State Key Configuration
# ============================================================================

class StateKeyConfig(BaseModel):
    """Configuration for a session state key."""
    name: str
    description: str = ""
    type: Literal["string", "number", "boolean", "object", "array"] = "string"
    default_value: Optional[Any] = None
    scope: Literal["session", "user", "app", "temp"] = "session"


# ============================================================================
# Tool Configurations
# ============================================================================

class FunctionToolConfig(BaseModel):
    """Configuration for a Python function tool."""
    type: Literal["function"] = "function"
    name: str
    description: str = ""
    module_path: str  # e.g., "tools.my_module.my_function"
    
    
class MCPServerConfig(BaseModel):
    """Configuration for an MCP server."""
    name: str
    description: str = ""
    connection_type: MCPConnectionType = MCPConnectionType.STDIO
    # Stdio params
    command: Optional[str] = None
    args: List[str] = Field(default_factory=list)
    env: Dict[str, str] = Field(default_factory=dict)
    # SSE/HTTP params
    url: Optional[str] = None
    headers: Dict[str, str] = Field(default_factory=dict)
    timeout: float = 10.0
    # Tool filtering (null = no filter/all tools, [] = no tools, ["a","b"] = only those tools)
    tool_filter: Optional[List[str]] = None
    tool_name_prefix: Optional[str] = None


class MCPToolConfig(BaseModel):
    """Configuration for an MCP toolset."""
    type: Literal["mcp"] = "mcp"
    server: MCPServerConfig


class AgentToolConfig(BaseModel):
    """Configuration for wrapping an agent as a tool."""
    type: Literal["agent"] = "agent"
    agent_id: str
    skip_summarization: bool = False


class BuiltinToolConfig(BaseModel):
    """Configuration for a built-in ADK tool."""
    type: Literal["builtin"] = "builtin"
    name: str  # e.g., "google_search", "exit_loop", "load_memory"


class SkillSetToolConfig(BaseModel):
    """Configuration for a SkillSet as a tool."""
    type: Literal["skillset"] = "skillset"
    skillset_id: str  # Reference to project.skillsets[].id


ToolConfig = Union[FunctionToolConfig, MCPToolConfig, AgentToolConfig, BuiltinToolConfig, SkillSetToolConfig]


# ============================================================================
# Agent Configurations
# ============================================================================

class ModelConfig(BaseModel):
    """Configuration for the LLM model."""
    provider: Literal["gemini", "litellm", "anthropic"] = "gemini"
    model_name: str = "gemini-2.0-flash"
    # LiteLLM specific
    api_base: Optional[str] = None
    fallbacks: List[str] = Field(default_factory=list)
    # Generation config
    temperature: Optional[float] = None
    max_output_tokens: Optional[int] = None
    top_p: Optional[float] = None
    top_k: Optional[int] = None
    # Marker for linking to an App model - if set, this config mirrors an App model
    app_model_id: Optional[str] = Field(default=None, alias="_appModelId")
    
    model_config = {"populate_by_name": True, "by_alias": True}


class CallbackConfig(BaseModel):
    """Configuration for a callback function."""
    module_path: str
    

class LlmAgentConfig(BaseModel):
    """Configuration for an LlmAgent."""
    type: Literal["LlmAgent"] = "LlmAgent"
    id: str
    name: str
    description: str = ""
    model: Optional[ModelConfig] = None
    instruction: str = ""
    output_key: Optional[str] = None
    include_contents: Literal["default", "none"] = "default"
    disallow_transfer_to_parent: bool = False
    disallow_transfer_to_peers: bool = False
    tools: List[ToolConfig] = Field(default_factory=list)
    sub_agents: List[str] = Field(default_factory=list)  # Agent IDs
    # Callbacks
    before_agent_callbacks: List[CallbackConfig] = Field(default_factory=list)
    after_agent_callbacks: List[CallbackConfig] = Field(default_factory=list)
    before_model_callbacks: List[CallbackConfig] = Field(default_factory=list)
    after_model_callbacks: List[CallbackConfig] = Field(default_factory=list)
    before_tool_callbacks: List[CallbackConfig] = Field(default_factory=list)
    after_tool_callbacks: List[CallbackConfig] = Field(default_factory=list)


class SequentialAgentConfig(BaseModel):
    """Configuration for a SequentialAgent."""
    type: Literal["SequentialAgent"] = "SequentialAgent"
    id: str
    name: str
    description: str = ""
    sub_agents: List[str] = Field(default_factory=list)


class LoopAgentConfig(BaseModel):
    """Configuration for a LoopAgent."""
    type: Literal["LoopAgent"] = "LoopAgent"
    id: str
    name: str
    description: str = ""
    sub_agents: List[str] = Field(default_factory=list)
    max_iterations: Optional[int] = None


class ParallelAgentConfig(BaseModel):
    """Configuration for a ParallelAgent."""
    type: Literal["ParallelAgent"] = "ParallelAgent"
    id: str
    name: str
    description: str = ""
    sub_agents: List[str] = Field(default_factory=list)


AgentConfig = Union[LlmAgentConfig, SequentialAgentConfig, LoopAgentConfig, ParallelAgentConfig]


# ============================================================================
# Plugin Configurations
# ============================================================================

class PluginConfig(BaseModel):
    """Configuration for a plugin."""
    type: Literal[
        "ReflectAndRetryToolPlugin",
        "ContextFilterPlugin",
        "LoggingPlugin",
        "GlobalInstructionPlugin",
        "SaveFilesAsArtifactsPlugin",
        "MultimodalToolResultsPlugin"
    ]
    name: str = ""
    
    # ReflectAndRetryToolPlugin options
    max_retries: Optional[int] = None
    throw_exception_if_retry_exceeded: Optional[bool] = None
    
    # ContextFilterPlugin options
    num_invocations_to_keep: Optional[int] = None
    
    # GlobalInstructionPlugin options
    global_instruction: Optional[str] = None


# ============================================================================
# App Configuration
# ============================================================================

class CompactionConfig(BaseModel):
    """Configuration for event compaction."""
    enabled: bool = False
    max_events: int = 100
    summarize: bool = True


class ContextCacheConfig(BaseModel):
    """Configuration for context caching."""
    enabled: bool = False
    ttl_seconds: int = 3600


class ResumabilityConfig(BaseModel):
    """Configuration for resumability."""
    enabled: bool = False


class ArtifactConfig(BaseModel):
    """Configuration for an artifact."""
    name: str
    description: str = ""
    type: Literal["file", "image", "data"] = "file"


class AppModelConfig(BaseModel):
    """Configuration for a model preset in the app."""
    id: str
    name: str
    provider: Literal["gemini", "litellm", "anthropic"] = "gemini"
    model_name: str = "gemini-2.0-flash"
    api_base: Optional[str] = None
    temperature: Optional[float] = None
    max_output_tokens: Optional[int] = None
    top_p: Optional[float] = None
    top_k: Optional[int] = None
    is_default: bool = False


class AppConfig(BaseModel):
    """Full configuration for an ADK App."""
    id: str
    name: str
    description: str = ""
    
    # Root agent
    root_agent_id: Optional[str] = None
    
    # Services - use URI scheme to select implementation:
    # Session: memory://, sqlite://{path}, postgresql://{conn}, mysql://{conn}, agentengine://{project}/{location}/{engine_id}
    # Memory: memory://, rag://{corpus}, agentengine://{project}/{location}/{engine_id}
    # Artifact: memory://, file://{path}, gs://{bucket}
    session_service_uri: str = "sqlite://./sessions.db"
    memory_service_uri: str = "memory://"
    artifact_service_uri: str = "file://./artifacts"
    
    # Configuration
    compaction: CompactionConfig = Field(default_factory=CompactionConfig)
    context_cache: ContextCacheConfig = Field(default_factory=ContextCacheConfig)
    resumability: ResumabilityConfig = Field(default_factory=ResumabilityConfig)
    
    # Plugins
    plugins: List[PluginConfig] = Field(default_factory=list)
    
    # State keys
    state_keys: List[StateKeyConfig] = Field(default_factory=list)
    
    # Artifacts
    artifacts: List[ArtifactConfig] = Field(default_factory=list)
    
    # Models
    models: List[AppModelConfig] = Field(default_factory=list)
    default_model_id: Optional[str] = None
    
    # Environment variables (for API keys, etc.)
    env_vars: Dict[str, str] = Field(default_factory=dict)


# ============================================================================
# Project (Full workspace)
# ============================================================================

class CustomToolDefinition(BaseModel):
    """A custom Python tool defined by the user."""
    id: str
    name: str
    description: str = ""
    module_path: str  # e.g., "my_tools.utilities.helper"
    code: str  # Python code
    state_keys_used: List[str] = Field(default_factory=list)


class CustomCallbackDefinition(BaseModel):
    """A custom Python callback defined by the user."""
    id: str
    name: str
    description: str = ""
    module_path: str  # e.g., "callbacks.my_callbacks.logger"
    code: str  # Python code
    state_keys_used: List[str] = Field(default_factory=list)


class WatchExpression(BaseModel):
    """A tool watch expression for monitoring MCP tool results."""
    id: str
    serverName: str
    toolName: str
    args: Dict[str, Any] = Field(default_factory=dict)
    transform: Optional[str] = None


class SkillSetSourceConfig(BaseModel):
    """Configuration for a source in a SkillSet."""
    id: str
    type: Literal["file", "url", "text"] = "text"
    name: str  # Display name
    path: Optional[str] = None  # File path or URL
    text: Optional[str] = None  # Direct text content
    added_at: float = 0.0


class SkillSetConfig(BaseModel):
    """Configuration for a SkillSet (vector database toolset)."""
    id: str
    name: str
    description: str = ""
    
    # Model configuration for embeddings
    embedding_model: Optional[str] = None  # None = use app default
    app_model_id: Optional[str] = None  # Reference to app model
    
    # External vector store (placeholder for future)
    external_store_type: Optional[Literal["pinecone", "weaviate", "qdrant", "chromadb"]] = None
    external_store_config: Dict[str, Any] = Field(default_factory=dict)
    
    # Tool settings
    search_enabled: bool = True
    preload_enabled: bool = True
    preload_top_k: int = 3
    preload_min_score: float = 0.4
    
    # Sources
    sources: List[SkillSetSourceConfig] = Field(default_factory=list)
    
    # Entry count (for display)
    entry_count: int = 0


class Project(BaseModel):
    """A complete ADK Playground project."""
    id: str
    name: str
    description: str = ""
    
    # App configuration
    app: AppConfig
    
    # All agents
    agents: List[AgentConfig] = Field(default_factory=list)
    
    # Custom tools
    custom_tools: List[CustomToolDefinition] = Field(default_factory=list)
    custom_callbacks: List[CustomCallbackDefinition] = Field(default_factory=list)
    
    # Known MCP servers for quick selection
    mcp_servers: List[MCPServerConfig] = Field(default_factory=list)
    
    # SkillSets (vector database toolsets)
    skillsets: List[SkillSetConfig] = Field(default_factory=list)
    
    # Tool watches (persisted for the Run2 panel)
    watches: List[WatchExpression] = Field(default_factory=list)
    
    # Evaluation sets
    eval_sets: List["EvalSet"] = Field(default_factory=list)


# ============================================================================
# Runtime Models
# ============================================================================

class RunEvent(BaseModel):
    """An event from an agent run."""
    timestamp: float
    event_type: Literal["agent_start", "agent_end", "tool_call", "tool_result", 
                        "model_call", "model_response", "state_change", "transfer",
                        "callback_start", "callback_end"]
    agent_name: str
    data: Dict[str, Any] = Field(default_factory=dict)


class RunSession(BaseModel):
    """A session from running an agent."""
    id: str
    project_id: str
    started_at: float
    ended_at: Optional[float] = None
    status: Literal["running", "completed", "error"] = "running"
    events: List[RunEvent] = Field(default_factory=list)
    final_state: Dict[str, Any] = Field(default_factory=dict)
    token_counts: Dict[str, int] = Field(default_factory=dict)


# ============================================================================
# Evaluation Models (ADK-Compatible)
# ============================================================================

class ToolTrajectoryMatchType(str, Enum):
    """Match type for tool trajectory evaluation."""
    EXACT = "exact"  # Perfect match, same order, no extra tools
    IN_ORDER = "in_order"  # Expected tools appear in order, extras allowed between
    ANY_ORDER = "any_order"  # Expected tools all present, any order, extras allowed


class ExpectedToolCall(BaseModel):
    """An expected tool call with optional argument matching."""
    name: str
    args: Optional[Dict[str, Any]] = None  # If None, only match tool name
    args_match_mode: Literal["exact", "subset", "ignore"] = "exact"
    # exact: args must match exactly
    # subset: expected args must be subset of actual args
    # ignore: only match tool name, ignore args


class EvalInvocation(BaseModel):
    """A single invocation (turn) in a conversation for evaluation.
    
    This mirrors ADK's Invocation structure but is simplified for the playground.
    """
    id: str = ""
    user_message: str  # The user's input message
    expected_response: Optional[str] = None  # Expected final response (for fuzzy matching)
    expected_tool_calls: List[ExpectedToolCall] = Field(default_factory=list)
    # Note: final response and tool calls from actual run are captured at runtime


class EvalCase(BaseModel):
    """An evaluation case - a complete conversation to test.
    
    Compatible with ADK's EvalCase but simplified for the playground.
    Each eval case represents a multi-turn conversation.
    """
    id: str
    name: str
    description: str = ""
    
    # The conversation to test (list of invocations/turns)
    invocations: List[EvalInvocation] = Field(default_factory=list)
    
    # Initial session state before running the test
    initial_state: Dict[str, Any] = Field(default_factory=dict)
    
    # Expected final session state after all invocations
    expected_final_state: Optional[Dict[str, Any]] = None
    
    # Evaluation thresholds
    response_match_threshold: float = 0.7  # ROUGE-1 F1 threshold for response matching
    trajectory_match_type: ToolTrajectoryMatchType = ToolTrajectoryMatchType.IN_ORDER
    
    # Tags for organization
    tags: List[str] = Field(default_factory=list)


class EvalSet(BaseModel):
    """A set of evaluation cases (test suite).
    
    Compatible with ADK's EvalSet structure.
    """
    id: str
    name: str
    description: str = ""
    
    # The evaluation cases in this set
    eval_cases: List[EvalCase] = Field(default_factory=list)
    
    # Default thresholds (can be overridden per case)
    default_response_threshold: float = 0.7
    default_trajectory_match_type: ToolTrajectoryMatchType = ToolTrajectoryMatchType.IN_ORDER
    
    # Timestamps
    created_at: float = 0.0
    updated_at: float = 0.0


class InvocationResult(BaseModel):
    """Result of a single invocation evaluation."""
    invocation_id: str
    user_message: str
    
    # Actual values from running the agent
    actual_response: Optional[str] = None
    actual_tool_calls: List[Dict[str, Any]] = Field(default_factory=list)
    
    # Expected values
    expected_response: Optional[str] = None
    expected_tool_calls: List[Dict[str, Any]] = Field(default_factory=list)
    
    # Scores
    response_score: Optional[float] = None  # ROUGE-1 F1 score (0.0 to 1.0)
    trajectory_score: float = 0.0  # 1.0 if match, 0.0 if not (based on match type)
    
    # Pass/fail status
    response_passed: Optional[bool] = None  # None if no expected response
    trajectory_passed: Optional[bool] = None  # None if no expected tool calls
    
    # Error if any
    error: Optional[str] = None


class EvalCaseResult(BaseModel):
    """Result of running a single evaluation case."""
    eval_case_id: str
    eval_case_name: str
    session_id: str  # The ADK session used for this test
    
    # Overall scores (averages across invocations)
    overall_response_score: Optional[float] = None
    overall_trajectory_score: Optional[float] = None
    
    # Thresholds used
    response_threshold: float = 0.7
    trajectory_match_type: ToolTrajectoryMatchType = ToolTrajectoryMatchType.IN_ORDER
    
    # Pass/fail
    response_passed: bool = True  # True if all response scores >= threshold
    trajectory_passed: bool = True  # True if all trajectory matches pass
    overall_passed: bool = True
    
    # Per-invocation results
    invocation_results: List[InvocationResult] = Field(default_factory=list)
    
    # State comparison
    final_state: Dict[str, Any] = Field(default_factory=dict)
    expected_final_state: Optional[Dict[str, Any]] = None
    state_matched: Optional[bool] = None
    
    # Timing
    started_at: float = 0.0
    ended_at: float = 0.0
    duration_ms: float = 0.0
    
    # Error if the entire case failed
    error: Optional[str] = None


class EvalSetResult(BaseModel):
    """Results from running an entire evaluation set."""
    id: str
    eval_set_id: str
    eval_set_name: str
    project_id: str
    
    # Timestamps
    started_at: float = 0.0
    ended_at: float = 0.0
    duration_ms: float = 0.0
    
    # Individual case results
    case_results: List[EvalCaseResult] = Field(default_factory=list)
    
    # Summary statistics
    total_cases: int = 0
    passed_cases: int = 0
    failed_cases: int = 0
    error_cases: int = 0
    
    # Coverage metrics
    response_pass_rate: Optional[float] = None  # % of cases where response matched
    trajectory_pass_rate: Optional[float] = None  # % of cases where trajectory matched
    overall_pass_rate: float = 0.0  # % of cases that fully passed
    
    # Average scores
    avg_response_score: Optional[float] = None
    avg_trajectory_score: Optional[float] = None


# Legacy models for backwards compatibility
class EvalTestCase(BaseModel):
    """Legacy test case model - maps to simplified EvalCase."""
    id: str
    name: str
    description: str = ""
    input_message: str
    expected_output: Optional[str] = None
    expected_tool_calls: List[str] = Field(default_factory=list)
    expected_state: Dict[str, Any] = Field(default_factory=dict)


class EvalTestGroup(BaseModel):
    """Legacy group model - use EvalSet instead."""
    id: str
    name: str
    description: str = ""
    tests: List[EvalTestCase] = Field(default_factory=list)
    children: List["EvalTestGroup"] = Field(default_factory=list)


class EvalResult(BaseModel):
    """Legacy result model - use EvalCaseResult instead."""
    test_id: str
    passed: bool
    session_id: str
    error: Optional[str] = None
    details: Dict[str, Any] = Field(default_factory=dict)


class EvalRunResult(BaseModel):
    """Legacy run result - use EvalSetResult instead."""
    id: str
    project_id: str
    started_at: float
    ended_at: Optional[float] = None
    results: List[EvalResult] = Field(default_factory=list)
    summary: Dict[str, int] = Field(default_factory=dict)

