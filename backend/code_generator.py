"""
Code Generator - Generates Python code from Project configuration.

This module converts the YAML-based Project model into executable Python code
that uses the ADK SDK. The generated code is the same as what's shown in the
Code tab of the UI.
"""

import json
from typing import Dict, List, Any, Set
from models import (
    Project, AgentConfig, LlmAgentConfig, ToolConfig, 
    MCPServerConfig, SequentialAgentConfig, LoopAgentConfig,
    ParallelAgentConfig, CallbackConfig
)


def escape_string(s: str) -> str:
    """Escape for Python triple-quoted string."""
    if not s:
        return ""
    return s.replace("\\", "\\\\").replace('"""', '\\"\\"\\"')


def generate_model_code(model: dict, model_name: str = "model") -> str:
    """Generate Python code for a model configuration."""
    if not model:
        return ""
    
    model_name_str = model.get("model_name", "gemini-2.0-flash")
    provider = model.get("provider", "gemini")
    
    params = [f'model="{model_name_str}"']
    
    if model.get("api_base"):
        params.append(f'api_base="{model["api_base"]}"')
    if model.get("temperature") is not None:
        params.append(f'temperature={model["temperature"]}')
    if model.get("max_output_tokens") is not None:
        params.append(f'max_output_tokens={model["max_output_tokens"]}')
    if model.get("top_p") is not None:
        params.append(f'top_p={model["top_p"]}')
    if model.get("top_k") is not None:
        params.append(f'top_k={model["top_k"]}')
    
    if provider == "litellm":
        return f"{model_name} = LiteLlm(\n    {','.join(params)}\n)"
    elif provider == "anthropic":
        return f"{model_name} = Claude(\n    {','.join(params)}\n)"
    else:
        # Gemini - just use string
        return f'{model_name} = "{model_name_str}"  # Gemini model'


def generate_tool_code(tool: ToolConfig, project: Project, agent_var_names: Dict[str, str]) -> str:
    """Generate Python code for a tool reference."""
    tool_type = tool.type
    
    if tool_type == "builtin":
        return tool.name or ""
    elif tool_type == "function":
        return tool.name or "custom_tool"
    elif tool_type == "agent":
        agent_id = getattr(tool, "agent_id", None)
        if agent_id:
            return f"AgentTool(agent={agent_var_names.get(agent_id, 'sub_agent')})"
        return "AgentTool(agent=sub_agent)"
    elif tool_type == "mcp":
        if tool.server and tool.server.name:
            return f"{tool.server.name}_tools"
        return ""
    elif tool_type == "skillset":
        skillset_id = getattr(tool, "skillset_id", None)
        if skillset_id and project.skillsets:
            skillset = next((s for s in project.skillsets if s.get("id") == skillset_id), None)
            if skillset:
                safe_name = "".join(c if c.isalnum() or c == "_" else "_" for c in skillset.get("name", ""))
                return f"{safe_name}_skillset"
        return ""
    
    return ""


def generate_mcp_toolset_code(server: MCPServerConfig) -> str:
    """Generate Python code for an MCP toolset."""
    lines = []
    
    if server.connection_type == "stdio":
        lines.append(f"{server.name}_tools = McpToolset(")
        lines.append("    connection_params=StdioConnectionParams(")
        lines.append("        server_params=StdioServerParameters(")
        if server.command:
            lines.append(f'            command="{server.command}",')
        if server.args:
            lines.append(f"            args={json.dumps(server.args)},")
        if server.env:
            lines.append(f"            env={json.dumps(server.env)},")
        lines.append("        ),")
        if server.timeout:
            lines.append(f"        timeout={server.timeout},")
        lines.append("    ),")
        lines.append(")")
    elif server.connection_type == "sse":
        lines.append(f"{server.name}_tools = McpToolset(")
        lines.append("    connection_params=SseConnectionParams(")
        if server.url:
            lines.append(f'        url="{server.url}",')
        if server.timeout:
            lines.append(f"        timeout={server.timeout},")
        lines.append("    ),")
        lines.append(")")
    
    return "\n".join(lines)


def generate_skillset_code(skillset: dict, project: Project) -> str:
    """Generate Python code for a SkillSet toolset."""
    lines = []
    safe_name = "".join(c if c.isalnum() or c == "_" else "_" for c in skillset.get("name", ""))
    
    lines.append(f"# SkillSet: {skillset.get('name', '')}")
    lines.append(f"{safe_name}_manager = KnowledgeServiceManager()")
    lines.append(f"{safe_name}_skillset = SkillSet(")
    lines.append(f'    skillset_id="{skillset.get("id", "")}",')
    lines.append(f'    project_id="{project.id}",')
    lines.append(f"    manager={safe_name}_manager,")
    
    embedding_model = skillset.get("embedding_model", "text-embedding-004")
    lines.append(f'    model_name="{embedding_model}",')
    
    lines.append(f'    search_enabled={skillset.get("search_enabled", False)},')
    lines.append(f'    preload_enabled={skillset.get("preload_enabled", False)},')
    
    if skillset.get("preload_top_k"):
        lines.append(f'    preload_top_k={skillset["preload_top_k"]},')
    if skillset.get("preload_min_score"):
        lines.append(f'    preload_min_score={skillset["preload_min_score"]},')
    
    lines.append(")")
    
    return "\n".join(lines)


def generate_agent_code(
    agent: AgentConfig, 
    project: Project, 
    agent_var_names: Dict[str, str]
) -> str:
    """Generate Python code for an agent."""
    var_name = agent_var_names.get(agent.id, f"{agent.name}_agent")
    
    if isinstance(agent, LlmAgentConfig) or agent.type == "LlmAgent":
        params = [f'name="{agent.name}"']
        
        # Model
        if hasattr(agent, "model") and agent.model:
            params.append(f"model={agent.name}_model")
        
        # Instruction
        if hasattr(agent, "instruction") and agent.instruction:
            params.append(f'instruction="""{escape_string(agent.instruction)}"""')
        
        # Description
        if hasattr(agent, "description") and agent.description:
            params.append(f'description="{escape_string(agent.description)}"')
        
        # Output key
        if hasattr(agent, "output_key") and agent.output_key:
            params.append(f'output_key="{agent.output_key}"')
        
        # Tools
        if hasattr(agent, "tools") and agent.tools:
            tool_refs = []
            for t in agent.tools:
                tool_code = generate_tool_code(t, project, agent_var_names)
                if tool_code and not tool_code.startswith("#"):
                    tool_refs.append(tool_code)
            if tool_refs:
                params.append(f"tools=[{', '.join(tool_refs)}]")
        
        # Sub-agents
        if hasattr(agent, "sub_agents") and agent.sub_agents:
            sub_agent_vars = [agent_var_names.get(sid, "sub_agent") for sid in agent.sub_agents]
            params.append(f"sub_agents=[{', '.join(sub_agent_vars)}]")
        
        # Include contents
        if hasattr(agent, "include_contents") and agent.include_contents == "none":
            params.append('include_contents="none"')
        
        # Transfer settings
        if hasattr(agent, "disallow_transfer_to_parent") and agent.disallow_transfer_to_parent:
            params.append("disallow_transfer_to_parent=True")
        if hasattr(agent, "disallow_transfer_to_peers") and agent.disallow_transfer_to_peers:
            params.append("disallow_transfer_to_peers=True")
        
        # Callbacks - ADK uses singular names
        callback_mapping = {
            "before_agent_callbacks": "before_agent_callback",
            "after_agent_callbacks": "after_agent_callback",
            "before_model_callbacks": "before_model_callback",
            "after_model_callbacks": "after_model_callback",
            "before_tool_callbacks": "before_tool_callback",
            "after_tool_callbacks": "after_tool_callback",
        }
        
        for config_key, adk_key in callback_mapping.items():
            if hasattr(agent, config_key):
                callbacks = getattr(agent, config_key, []) or []
                if callbacks:
                    # Find callback definitions to get function names
                    callback_refs = []
                    for c in callbacks:
                        full_path = c.module_path if hasattr(c, "module_path") else c.get("module_path", "")
                        callback_def = None
                        func_name = None
                        
                        # First, try to match by full path
                        for cb in project.custom_callbacks:
                            if cb.module_path == full_path:
                                callback_def = cb
                                func_name = cb.name
                                break
                        
                        # If not found, try parsing as "module.function"
                        if not callback_def:
                            parts = full_path.rsplit(".", 1)
                            if len(parts) == 2:
                                possible_module, possible_func = parts
                                for cb in project.custom_callbacks:
                                    if cb.module_path == possible_module and cb.name == possible_func:
                                        callback_def = cb
                                        func_name = possible_func
                                        break
                        
                        if callback_def and func_name:
                            # Return the actual function reference, not a string
                            callback_refs.append(func_name)
                        else:
                            # Fallback - try to extract function name from path
                            parts = full_path.rsplit(".", 1)
                            if len(parts) == 2:
                                callback_refs.append(parts[1])  # Use function name part
                            else:
                                # Last resort - use full path as string (will likely fail)
                                callback_refs.append(f'"{full_path}"')
                    
                    if len(callbacks) == 1:
                        params.append(f"{adk_key}={callback_refs[0]}")
                    else:
                        params.append(f"{adk_key}=[{', '.join(callback_refs)}]")
        
        return f"{var_name} = Agent(\n    {','.join(params)}\n)"
    
    elif isinstance(agent, SequentialAgentConfig) or agent.type == "SequentialAgent":
        sub_agent_vars = [agent_var_names.get(sid, "sub_agent") for sid in (agent.sub_agents or [])]
        return f'{var_name} = SequentialAgent(\n    name="{agent.name}",\n    sub_agents=[{", ".join(sub_agent_vars)}]\n)'
    
    elif isinstance(agent, LoopAgentConfig) or agent.type == "LoopAgent":
        params = [f'name="{agent.name}"']
        sub_agent_vars = [agent_var_names.get(sid, "sub_agent") for sid in (agent.sub_agents or [])]
        params.append(f"sub_agents=[{', '.join(sub_agent_vars)}]")
        if hasattr(agent, "max_iterations") and agent.max_iterations:
            params.append(f"max_iterations={agent.max_iterations}")
        return f"{var_name} = LoopAgent(\n    {','.join(params)}\n)"
    
    elif isinstance(agent, ParallelAgentConfig) or agent.type == "ParallelAgent":
        sub_agent_vars = [agent_var_names.get(sid, "sub_agent") for sid in (agent.sub_agents or [])]
        return f'{var_name} = ParallelAgent(\n    name="{agent.name}",\n    sub_agents=[{", ".join(sub_agent_vars)}]\n)'
    
    return f"# Unknown agent type: {agent.type}"


def generate_python_code(project: Project) -> str:
    """
    Generate complete Python code from a Project configuration.
    
    This generates the same code shown in the Code tab of the UI.
    """
    lines = []
    
    # Header comment
    lines.append('"""')
    lines.append(f"{project.name} - Generated by ADK Playground")
    if project.description:
        lines.append("")
        lines.append(project.description)
    lines.append('"""')
    lines.append("")
    
    # Environment variables
    env_vars = project.app.env_vars if project.app and project.app.env_vars else {}
    if env_vars:
        lines.append("import os")
        lines.append("")
        lines.append("# Environment Variables")
        for key, value in env_vars.items():
            if value:
                is_sensitive = "key" in key.lower() or "secret" in key.lower()
                display_value = "***" if is_sensitive else value
                lines.append(f'os.environ["{key}"] = "{display_value}"')
            else:
                lines.append(f'# os.environ["{key}"] = ""  # TODO: Set your {key}')
        lines.append("")
    
    # Collect imports
    imports: Set[str] = set()
    imports.add("from google.adk.agents import Agent")
    
    has_sequential = any(a.type == "SequentialAgent" for a in project.agents)
    has_loop = any(a.type == "LoopAgent" for a in project.agents)
    has_parallel = any(a.type == "ParallelAgent" for a in project.agents)
    
    if has_sequential:
        imports.add("from google.adk.agents import SequentialAgent")
    if has_loop:
        imports.add("from google.adk.agents import LoopAgent")
    if has_parallel:
        imports.add("from google.adk.agents import ParallelAgent")
    
    # Check for LiteLLM/Anthropic models
    for agent in project.agents:
        if hasattr(agent, "model") and agent.model:
            provider = agent.model.provider if hasattr(agent.model, "provider") else agent.model.get("provider", "")
            if provider == "litellm":
                imports.add("from google.adk.models.lite_llm import LiteLlm")
            elif provider == "anthropic":
                imports.add("from google.adk.models.anthropic import Claude")
    
    # Check for AgentTool
    for agent in project.agents:
        if hasattr(agent, "tools"):
            for tool in agent.tools:
                if tool.type == "agent":
                    imports.add("from google.adk.tools import AgentTool")
                    break
    
    # Check for built-in tools
    builtin_tools: Set[str] = set()
    for agent in project.agents:
        if hasattr(agent, "tools"):
            for tool in agent.tools:
                if tool.type == "builtin" and tool.name:
                    builtin_tools.add(tool.name)
    
    if "exit_loop" in builtin_tools:
        imports.add("from google.adk.tools import exit_loop")
    if "google_search" in builtin_tools:
        imports.add("from google.adk.tools import google_search")
    
    # Check for MCP
    if project.mcp_servers:
        imports.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset")
        has_stdio = any(s.connection_type == "stdio" for s in project.mcp_servers)
        has_sse = any(s.connection_type == "sse" for s in project.mcp_servers)
        if has_stdio:
            imports.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams")
            imports.add("from mcp import StdioServerParameters")
        if has_sse:
            imports.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")
    
    # Check for SkillSets
    used_skillset_ids: Set[str] = set()
    for agent in project.agents:
        if hasattr(agent, "tools"):
            for tool in agent.tools:
                if tool.type == "skillset":
                    skillset_id = getattr(tool, "skillset_id", None)
                    if skillset_id:
                        used_skillset_ids.add(skillset_id)
    
    if used_skillset_ids:
        imports.add("from skillset import SkillSet")
        imports.add("from knowledge_service import KnowledgeServiceManager")
    
    # Always import App
    imports.add("from google.adk.apps import App")
    
    # Check for plugins
    if project.app and project.app.plugins:
        for plugin in project.app.plugins:
            if plugin.type == "ReflectAndRetryToolPlugin":
                imports.add("from google.adk.plugins import ReflectAndRetryToolPlugin")
    
    # Scan custom tools and callbacks for common types they might use
    all_custom_code = ""
    for tool in project.custom_tools:
        all_custom_code += tool.code + "\n"
    for callback in project.custom_callbacks:
        all_custom_code += callback.code + "\n"
    
    # Add imports for types used in custom code
    if "ToolContext" in all_custom_code:
        imports.add("from google.adk.tools.tool_context import ToolContext")
    if "CallbackContext" in all_custom_code:
        imports.add("from google.adk.agents.callback_context import CallbackContext")
    if "types.Content" in all_custom_code or "types.Part" in all_custom_code:
        imports.add("from google.genai import types")
    if "LlmRequest" in all_custom_code:
        imports.add("from google.adk.models.llm_request import LlmRequest")
    if "LlmResponse" in all_custom_code:
        imports.add("from google.adk.models.llm_response import LlmResponse")
    if "Optional[" in all_custom_code or "List[" in all_custom_code or "Dict[" in all_custom_code:
        imports.add("from typing import Optional, List, Dict, Any")
    
    # Add imports
    for imp in sorted(imports):
        lines.append(imp)
    lines.append("")
    lines.append("")
    
    # Build agent variable name map
    agent_var_names: Dict[str, str] = {}
    for agent in project.agents:
        var_name = f"{agent.name}_agent" if not agent.name.endswith("_agent") else agent.name
        agent_var_names[agent.id] = var_name
    
    # Topological sort agents (sub-agents before parents)
    sorted_agents: List[AgentConfig] = []
    visited: Set[str] = set()
    
    def visit_agent(agent_id: str):
        if agent_id in visited:
            return
        agent = next((a for a in project.agents if a.id == agent_id), None)
        if not agent:
            return
        
        for sub_id in (agent.sub_agents or []):
            visit_agent(sub_id)
        
        visited.add(agent_id)
        sorted_agents.append(agent)
    
    for agent in project.agents:
        visit_agent(agent.id)
    
    # Collect MCP servers used by agents
    used_mcp_servers: Dict[str, MCPServerConfig] = {}
    for agent in sorted_agents:
        if hasattr(agent, "tools"):
            for tool in agent.tools:
                if tool.type == "mcp" and tool.server:
                    used_mcp_servers[tool.server.name] = tool.server
    
    # Generate MCP toolset code
    if used_mcp_servers:
        lines.append("# MCP Server Toolsets")
        for server in used_mcp_servers.values():
            lines.append(generate_mcp_toolset_code(server))
            lines.append("")
        lines.append("")
    
    # Generate SkillSet toolset code
    if used_skillset_ids and project.skillsets:
        lines.append("# SkillSet Toolsets")
        lines.append("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/")
        for skillset_id in used_skillset_ids:
            skillset = next((s for s in project.skillsets if s.get("id") == skillset_id), None)
            if skillset:
                lines.append(generate_skillset_code(skillset, project))
                lines.append("")
        lines.append("")
    
    # Generate custom tools
    if project.custom_tools:
        lines.append("# Custom Tools")
        for tool in project.custom_tools:
            lines.append(tool.code)
            lines.append("")
        lines.append("")
    
    # Generate custom callbacks
    if project.custom_callbacks:
        lines.append("# Custom Callbacks")
        for callback in project.custom_callbacks:
            lines.append(callback.code)
            lines.append("")
        lines.append("")
    
    # Generate model definitions
    lines.append("# Models")
    for agent in sorted_agents:
        if hasattr(agent, "model") and agent.model:
            model_dict = agent.model.dict() if hasattr(agent.model, "dict") else agent.model
            lines.append(generate_model_code(model_dict, f"{agent.name}_model"))
            lines.append("")
    lines.append("")
    
    # Generate agents
    lines.append("# Agents")
    for agent in sorted_agents:
        lines.append(generate_agent_code(agent, project, agent_var_names))
        lines.append("")
    
    # Get root agent variable name
    root_agent = next((a for a in project.agents if a.id == project.app.root_agent_id), None)
    root_agent_var_name = agent_var_names.get(root_agent.id if root_agent else "", "root_agent")
    
    # Generate App
    lines.append("")
    lines.append("")
    lines.append("# App Configuration")
    lines.append("app = App(")
    # Sanitize app name to be a valid identifier
    safe_app_name = "".join(c if c.isalnum() or c == "_" else "_" for c in project.app.name)
    lines.append(f'    name="{safe_app_name}",')
    lines.append(f"    root_agent={root_agent_var_name},")
    
    if project.app.plugins:
        plugin_lines = []
        for p in project.app.plugins:
            if p.type == "ReflectAndRetryToolPlugin":
                max_retries = p.max_retries if hasattr(p, "max_retries") else 3
                plugin_lines.append(f"        ReflectAndRetryToolPlugin(max_retries={max_retries})")
            else:
                plugin_lines.append(f"        # {p.type}()")
        lines.append("    plugins=[")
        lines.append(",\n".join(plugin_lines))
        lines.append("    ],")
    
    lines.append(")")
    
    # Export root_agent for compatibility
    lines.append("")
    lines.append(f"root_agent = {root_agent_var_name}")
    
    return "\n".join(lines)

