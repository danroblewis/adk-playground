"""Runtime execution for ADK agents with tracking."""

from __future__ import annotations

import asyncio
import sys
import time
import uuid
from pathlib import Path
from typing import Any, AsyncGenerator, Dict, List, Optional

from models import (
    Project, RunSession, RunEvent, AgentConfig, LlmAgentConfig,
    SequentialAgentConfig, LoopAgentConfig, ParallelAgentConfig,
    ToolConfig, FunctionToolConfig, MCPToolConfig, AgentToolConfig, BuiltinToolConfig,
    ModelConfig,
)


class TrackingPlugin:
    """Plugin that tracks all events during agent execution."""
    
    def __init__(self, session: RunSession, callback):
        self.session = session
        self.callback = callback  # async callback to send events
        self.token_counts = {"input": 0, "output": 0}
    
    def _emit(self, event: RunEvent):
        """Emit an event."""
        self.session.events.append(event)
        # Run callback in background
        asyncio.create_task(self.callback(event))
    
    async def before_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called before an agent runs."""
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_start",
            agent_name=agent.name,
            data={"instruction": getattr(agent, "instruction", "")[:200] if getattr(agent, "instruction", None) else ""},
        ))
        return None
    
    async def after_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called after an agent runs."""
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_end",
            agent_name=agent.name,
            data={},
        ))
        return None
    
    def _serialize_contents(self, contents) -> list:
        """Serialize LLM contents to a structured format for display."""
        if not contents:
            return []
        
        result = []
        for content in contents:
            content_data = {
                "role": getattr(content, "role", "unknown"),
                "parts": []
            }
            
            if hasattr(content, "parts") and content.parts:
                for part in content.parts:
                    part_data = {}
                    
                    # Text content
                    if hasattr(part, "text") and part.text:
                        part_data["type"] = "text"
                        part_data["text"] = part.text
                    
                    # Function call
                    elif hasattr(part, "function_call") and part.function_call:
                        fc = part.function_call
                        part_data["type"] = "function_call"
                        part_data["name"] = getattr(fc, "name", "unknown")
                        part_data["args"] = dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {}
                    
                    # Function response
                    elif hasattr(part, "function_response") and part.function_response:
                        fr = part.function_response
                        part_data["type"] = "function_response"
                        part_data["name"] = getattr(fr, "name", "unknown")
                        response = getattr(fr, "response", None)
                        if response:
                            # Truncate large responses
                            part_data["response"] = str(response)[:1000] if len(str(response)) > 1000 else response
                    
                    # Thought (for reasoning models)
                    if hasattr(part, "thought") and part.thought:
                        part_data["thought"] = True
                    
                    if part_data:
                        content_data["parts"].append(part_data)
            
            result.append(content_data)
        
        return result
    
    async def before_model_callback(self, *, callback_context, llm_request, **kwargs):
        """Called before an LLM call."""
        # Serialize contents to structured format
        contents = []
        if hasattr(llm_request, "contents") and llm_request.contents:
            contents = self._serialize_contents(llm_request.contents)
        
        # Get system instruction if present
        system_instruction = None
        if hasattr(llm_request, "config") and llm_request.config:
            if hasattr(llm_request.config, "system_instruction"):
                si = llm_request.config.system_instruction
                if si and hasattr(si, "parts"):
                    system_instruction = "".join(
                        getattr(p, "text", "") for p in si.parts if hasattr(p, "text")
                    )[:2000]  # Truncate long instructions
        
        # Get tool names
        tool_names = []
        if hasattr(llm_request, "tools_dict") and llm_request.tools_dict:
            tool_names = list(llm_request.tools_dict.keys())
        
        agent_name = getattr(callback_context, "agent_name", None) or "system"
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="model_call",
            agent_name=agent_name,
            data={
                "contents": contents,
                "system_instruction": system_instruction,
                "tool_names": tool_names,
                "tool_count": len(tool_names),
            },
        ))
        return None
    
    async def after_model_callback(self, *, callback_context, llm_response, **kwargs):
        """Called after an LLM call."""
        # Serialize the response content
        response_parts = []
        if hasattr(llm_response, "content") and llm_response.content:
            if hasattr(llm_response.content, "parts"):
                for part in llm_response.content.parts:
                    part_data = {}
                    
                    if hasattr(part, "text") and part.text:
                        part_data["type"] = "text"
                        part_data["text"] = part.text
                        if hasattr(part, "thought") and part.thought:
                            part_data["thought"] = True
                    
                    elif hasattr(part, "function_call") and part.function_call:
                        fc = part.function_call
                        part_data["type"] = "function_call"
                        part_data["name"] = getattr(fc, "name", "unknown")
                        part_data["args"] = dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {}
                    
                    if part_data:
                        response_parts.append(part_data)
        
        # Track token usage if available
        if hasattr(llm_response, "usage_metadata") and llm_response.usage_metadata:
            usage = llm_response.usage_metadata
            if hasattr(usage, "prompt_token_count"):
                self.token_counts["input"] += usage.prompt_token_count or 0
            if hasattr(usage, "candidates_token_count"):
                self.token_counts["output"] += usage.candidates_token_count or 0
        
        # Get finish reason
        finish_reason = None
        if hasattr(llm_response, "candidates") and llm_response.candidates:
            if len(llm_response.candidates) > 0:
                finish_reason = getattr(llm_response.candidates[0], "finish_reason", None)
                if finish_reason:
                    finish_reason = str(finish_reason)
        
        agent_name = getattr(callback_context, "agent_name", None) or "system"
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="model_response",
            agent_name=agent_name,
            data={
                "parts": response_parts,
                "finish_reason": finish_reason,
                "token_counts": dict(self.token_counts),
            },
        ))
        return None
    
    async def before_tool_callback(self, *, tool, tool_args, tool_context, **kwargs):
        """Called before a tool is executed."""
        agent_name = getattr(tool_context, "agent_name", None) or "system"
        
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_call",
            agent_name=agent_name,
            data={
                "tool_name": tool.name,
                "args": {k: str(v)[:100] for k, v in tool_args.items()},
            },
        ))
        return None
    
    async def after_tool_callback(self, *, tool, tool_args, tool_context, result, **kwargs):
        """Called after a tool is executed."""
        agent_name = getattr(tool_context, "agent_name", None) or "system"
        
        # Track state changes
        if hasattr(tool_context, "_event_actions") and tool_context._event_actions.state_delta:
            self._emit(RunEvent(
                timestamp=time.time(),
                event_type="state_change",
                agent_name=agent_name,
                data={
                    "state_delta": {k: str(v)[:100] for k, v in tool_context._event_actions.state_delta.items()},
                },
            ))
        
        self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_result",
            agent_name=agent_name,
            data={
                "tool_name": tool.name,
                "result_preview": str(result)[:500] if result else None,
            },
        ))
        return None


class RuntimeManager:
    """Manages agent runtime execution."""
    
    def __init__(self, projects_dir: str = "./projects"):
        self.projects_dir = Path(projects_dir)
        self.sessions: Dict[str, RunSession] = {}
        self._running: Dict[str, bool] = {}
    
    async def run_agent(
        self,
        project: Project,
        user_message: str,
        event_callback,
    ) -> AsyncGenerator[RunEvent, None]:
        """Run an agent and stream events."""
        session_id = str(uuid.uuid4())[:8]
        
        session = RunSession(
            id=session_id,
            project_id=project.id,
            started_at=time.time(),
            status="running",
        )
        self.sessions[session_id] = session
        self._running[session_id] = True
        
        try:
            # Import ADK components
            from google.adk import Agent
            from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
            from google.adk.apps import App
            from google.adk.runners import Runner
            from google.adk.sessions.in_memory_session_service import InMemorySessionService
            from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
            from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
            from google.genai import types
            
            # Build agents from config
            agents = self._build_agents(project)
            
            if not project.app.root_agent_id or project.app.root_agent_id not in agents:
                raise ValueError("No root agent configured")
            
            root_agent = agents[project.app.root_agent_id]
            
            # Create tracking plugin
            tracking = TrackingPlugin(session, event_callback)
            
            # Build the app
            from google.adk.plugins import BasePlugin
            
            class TrackingPluginWrapper(BasePlugin):
                def __init__(self, tracker):
                    super().__init__(name="tracking")
                    self.tracker = tracker
                
                async def before_agent_callback(self, *, agent, callback_context):
                    return await self.tracker.before_agent_callback(agent=agent, callback_context=callback_context)
                
                async def after_agent_callback(self, *, agent, callback_context):
                    return await self.tracker.after_agent_callback(agent=agent, callback_context=callback_context)
                
                async def before_model_callback(self, *, callback_context, llm_request):
                    return await self.tracker.before_model_callback(callback_context=callback_context, llm_request=llm_request)
                
                async def after_model_callback(self, *, callback_context, llm_response):
                    return await self.tracker.after_model_callback(callback_context=callback_context, llm_response=llm_response)
                
                async def before_tool_callback(self, *, tool, tool_args, tool_context):
                    return await self.tracker.before_tool_callback(tool=tool, tool_args=tool_args, tool_context=tool_context)
                
                async def after_tool_callback(self, *, tool, tool_args, tool_context, result):
                    return await self.tracker.after_tool_callback(tool=tool, tool_args=tool_args, tool_context=tool_context, result=result)
            
            plugins = [TrackingPluginWrapper(tracking)]
            
            # Add configured plugins
            for plugin_config in project.app.plugins:
                if plugin_config.type == "ReflectAndRetryToolPlugin":
                    from google.adk.plugins import ReflectAndRetryToolPlugin
                    plugins.append(ReflectAndRetryToolPlugin(
                        max_retries=plugin_config.max_retries or 3,
                        throw_exception_if_retry_exceeded=plugin_config.throw_exception_if_retry_exceeded or False,
                    ))
            
            app = App(
                name=project.app.name,
                root_agent=root_agent,
                plugins=plugins,
            )
            
            # Create runner
            runner = Runner(
                app=app,
                session_service=InMemorySessionService(),
                artifact_service=InMemoryArtifactService(),
                memory_service=InMemoryMemoryService(),
            )
            
            # Create session
            adk_session = await runner.session_service.create_session(
                app_name=project.app.name,
                user_id="playground_user",
            )
            
            # Run the agent
            content = types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_message)],
            )
            
            async for event in runner.run_async(
                user_id=adk_session.user_id,
                session_id=adk_session.id,
                new_message=content,
            ):
                if not self._running.get(session_id, False):
                    break
                
                # Extract text from event
                if event.content and event.content.parts:
                    for part in event.content.parts:
                        if hasattr(part, "text") and part.text:
                            yield RunEvent(
                                timestamp=time.time(),
                                event_type="model_response",
                                agent_name=event.author,
                                data={"text": part.text},
                            )
            
            # Get final state
            final_session = await runner.session_service.get_session(
                app_name=project.app.name,
                user_id=adk_session.user_id,
                session_id=adk_session.id,
            )
            session.final_state = dict(final_session.state) if final_session else {}
            session.token_counts = tracking.token_counts
            session.status = "completed"
            session.ended_at = time.time()
            
            await runner.close()
            
        except Exception as e:
            session.status = "error"
            session.ended_at = time.time()
            yield RunEvent(
                timestamp=time.time(),
                event_type="agent_end",
                agent_name="system",
                data={"error": str(e)},
            )
        finally:
            self._running[session_id] = False
    
    def stop_run(self, session_id: str):
        """Stop a running session."""
        self._running[session_id] = False
    
    def get_session(self, session_id: str) -> Optional[RunSession]:
        """Get a session by ID."""
        return self.sessions.get(session_id)
    
    def _build_agents(self, project: Project) -> Dict[str, Any]:
        """Build ADK agents from project config."""
        from google.adk import Agent
        from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
        
        agents = {}
        
        # First pass: create all agents without sub_agents
        for agent_config in project.agents:
            agent = self._build_single_agent(agent_config, project)
            agents[agent_config.id] = agent
        
        # Second pass: wire up sub_agents
        for agent_config in project.agents:
            if hasattr(agent_config, "sub_agents") and agent_config.sub_agents:
                agent = agents[agent_config.id]
                sub_agents = [agents[sa_id] for sa_id in agent_config.sub_agents if sa_id in agents]
                if hasattr(agent, "sub_agents"):
                    agent.sub_agents = sub_agents
        
        return agents
    
    def _build_single_agent(self, config: AgentConfig, project: Project) -> Any:
        """Build a single agent from config."""
        from google.adk import Agent
        from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
        
        if isinstance(config, LlmAgentConfig):
            model = self._build_model(config.model) if config.model else "gemini-2.0-flash"
            tools = self._build_tools(config.tools, project)
            
            return Agent(
                name=config.name,
                description=config.description,
                model=model,
                instruction=config.instruction,
                output_key=config.output_key,
                include_contents=config.include_contents,
                disallow_transfer_to_parent=config.disallow_transfer_to_parent,
                disallow_transfer_to_peers=config.disallow_transfer_to_peers,
                tools=tools,
            )
        
        elif isinstance(config, SequentialAgentConfig):
            return SequentialAgent(
                name=config.name,
                description=config.description,
                sub_agents=[],  # Will be filled in second pass
            )
        
        elif isinstance(config, LoopAgentConfig):
            return LoopAgent(
                name=config.name,
                description=config.description,
                max_iterations=config.max_iterations,
                sub_agents=[],
            )
        
        elif isinstance(config, ParallelAgentConfig):
            return ParallelAgent(
                name=config.name,
                description=config.description,
                sub_agents=[],
            )
        
        raise ValueError(f"Unknown agent type: {type(config)}")
    
    def _build_model(self, config: ModelConfig) -> Any:
        """Build a model from config."""
        if config.provider == "litellm":
            from google.adk.models.lite_llm import LiteLlm
            return LiteLlm(
                model=config.model_name,
                api_base=config.api_base,
                fallbacks=config.fallbacks if config.fallbacks else None,
            )
        elif config.provider == "anthropic":
            from google.adk.models.anthropic_llm import Claude
            return Claude(model=config.model_name)
        else:
            # Default to Gemini string
            return config.model_name
    
    def _build_tools(self, tools_config: List[ToolConfig], project: Project) -> List:
        """Build tools from config."""
        tools = []
        
        for tool_config in tools_config:
            if isinstance(tool_config, BuiltinToolConfig):
                tool = self._get_builtin_tool(tool_config.name)
                if tool:
                    tools.append(tool)
            
            elif isinstance(tool_config, FunctionToolConfig):
                tool = self._load_function_tool(tool_config, project)
                if tool:
                    tools.append(tool)
            
            elif isinstance(tool_config, MCPToolConfig):
                toolset = self._build_mcp_toolset(tool_config.server)
                if toolset:
                    tools.append(toolset)
            
            elif isinstance(tool_config, AgentToolConfig):
                # Will be handled after all agents are built
                pass
        
        return tools
    
    def _get_builtin_tool(self, name: str):
        """Get a built-in ADK tool by name."""
        try:
            if name == "exit_loop":
                from google.adk.tools import exit_loop
                return exit_loop
            elif name == "google_search":
                from google.adk.tools import google_search
                return google_search
            elif name == "load_memory":
                from google.adk.tools import load_memory
                return load_memory
            # Add more as needed
        except ImportError:
            pass
        return None
    
    def _load_function_tool(self, config: FunctionToolConfig, project: Project):
        """Load a custom function tool."""
        # Add project tools directory to path
        tools_dir = self.projects_dir / project.id / "tools"
        if tools_dir.exists() and str(tools_dir) not in sys.path:
            sys.path.insert(0, str(tools_dir))
        
        try:
            parts = config.module_path.rsplit(".", 1)
            if len(parts) == 2:
                module_name, func_name = parts
                import importlib
                module = importlib.import_module(module_name)
                return getattr(module, func_name)
        except Exception as e:
            print(f"Error loading tool {config.module_path}: {e}")
        return None
    
    def _build_mcp_toolset(self, server_config):
        """Build an MCP toolset from config."""
        try:
            from google.adk.tools.mcp_tool import MCPToolset, StdioConnectionParams, SseConnectionParams
            from mcp import StdioServerParameters
            
            if server_config.connection_type.value == "stdio":
                connection_params = StdioConnectionParams(
                    server_params=StdioServerParameters(
                        command=server_config.command,
                        args=server_config.args,
                        env=server_config.env if server_config.env else None,
                    ),
                    timeout=server_config.timeout,
                )
            elif server_config.connection_type.value == "sse":
                connection_params = SseConnectionParams(
                    url=server_config.url,
                    headers=server_config.headers if server_config.headers else None,
                    timeout=server_config.timeout,
                )
            else:
                return None
            
            return MCPToolset(
                connection_params=connection_params,
                tool_filter=server_config.tool_filter if server_config.tool_filter else None,
                tool_name_prefix=server_config.tool_name_prefix,
            )
        except Exception as e:
            print(f"Error building MCP toolset: {e}")
            return None

