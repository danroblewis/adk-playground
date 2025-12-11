"""Runtime execution for ADK agents with tracking."""

from __future__ import annotations

import asyncio
import logging
import sys
import time
import uuid
from pathlib import Path
from typing import Any, AsyncGenerator, Dict, List, Optional

logger = logging.getLogger(__name__)

# Add parent directory to path for file_session_service and file_memory_service
_parent_dir = Path(__file__).parent.parent
if str(_parent_dir) not in sys.path:
    sys.path.insert(0, str(_parent_dir))

from models import (
    Project, RunSession, RunEvent, AgentConfig, LlmAgentConfig,
    SequentialAgentConfig, LoopAgentConfig, ParallelAgentConfig,
    ToolConfig, FunctionToolConfig, MCPToolConfig, AgentToolConfig, BuiltinToolConfig,
    SkillSetToolConfig, ModelConfig,
)


class TrackingPlugin:
    """Plugin that tracks all events during agent execution."""
    
    def __init__(self, session: RunSession, callback):
        self.session = session
        self.callback = callback  # async callback to send events
        self.token_counts = {"input": 0, "output": 0}
    
    async def _emit(self, event: RunEvent):
        """Emit an event."""
        self.session.events.append(event)
        # Await callback to ensure it completes before continuing
        await self.callback(event)
    
    async def before_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called before an agent runs."""
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_start",
            agent_name=agent.name,
            data={"instruction": getattr(agent, "instruction", "") if getattr(agent, "instruction", None) else ""},
        ))
        return None
    
    async def after_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called after an agent runs."""
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_end",
            agent_name=agent.name,
            data={},
        ))
        return None
    
    async def on_event_callback(self, *, invocation_context, event, **kwargs):
        """Called for every event - captures state changes from output_key etc."""
        # Check if the event has state_delta (e.g., from output_key)
        if hasattr(event, "actions") and event.actions and event.actions.state_delta:
            state_delta = event.actions.state_delta
            if state_delta:
                agent_name = getattr(event, "author", None) or "system"
                await self._emit(RunEvent(
                    timestamp=time.time(),
                    event_type="state_change",
                    agent_name=agent_name,
                    data={
                        "state_delta": dict(state_delta),
                    },
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
                            part_data["response"] = response
                    
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
                if si:
                    # Handle string system_instruction (from append_instructions with strings)
                    if isinstance(si, str):
                        system_instruction = si
                    # Handle Content object with parts
                    elif hasattr(si, "parts"):
                        system_instruction = "".join(
                            getattr(p, "text", "") for p in si.parts if hasattr(p, "text")
                        )
        
        # Get tool names
        tool_names = []
        if hasattr(llm_request, "tools_dict") and llm_request.tools_dict:
            tool_names = list(llm_request.tools_dict.keys())
        
        agent_name = getattr(callback_context, "agent_name", None) or "system"
        await self._emit(RunEvent(
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
        await self._emit(RunEvent(
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
        
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_call",
            agent_name=agent_name,
            data={
                "tool_name": tool.name,
                "args": tool_args,
            },
        ))
        return None
    
    async def after_tool_callback(self, *, tool, tool_args, tool_context, result, **kwargs):
        """Called after a tool is executed."""
        agent_name = getattr(tool_context, "agent_name", None) or "system"
        
        # Track state changes
        if hasattr(tool_context, "_event_actions") and tool_context._event_actions.state_delta:
            await self._emit(RunEvent(
                timestamp=time.time(),
                event_type="state_change",
                agent_name=agent_name,
                data={
                    "state_delta": dict(tool_context._event_actions.state_delta),
                },
            ))
        
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_result",
            agent_name=agent_name,
            data={
                "tool_name": tool.name,
                "result": result,
            },
        ))
        return None


class RuntimeManager:
    """Manages agent runtime execution."""
    
    def __init__(self, projects_dir: str = "./projects"):
        self.projects_dir = Path(projects_dir)
        self.sessions: Dict[str, RunSession] = {}
        self._running: Dict[str, bool] = {}
        self._temp_dirs: Dict[str, Path] = {}  # session_id -> temp_dir for cleanup
    
    def _prepare_project_files(self, project: Project, session_id: str) -> Path:
        """Create temp directory with callback and tool files from project.
        
        This allows the runtime to be self-contained - the Project object's
        custom_callbacks[].code and custom_tools[].code fields contain everything
        needed to run, without requiring files to be pre-created on disk.
        
        Args:
            project: The Project containing custom_callbacks and custom_tools
            session_id: Used to track temp dir for cleanup
            
        Returns:
            Path to the temp directory (added to sys.path)
        """
        import tempfile
        from typing import Dict as DictType
        
        temp_dir = Path(tempfile.mkdtemp(prefix=f"adk_{project.id}_{session_id}_"))
        self._temp_dirs[session_id] = temp_dir
        
        # Write callbacks from project.custom_callbacks
        if project.custom_callbacks:
            callbacks_dir = temp_dir / "callbacks"
            callbacks_dir.mkdir(parents=True, exist_ok=True)
            (callbacks_dir / "__init__.py").write_text("")
            
            # Group callbacks by module_path to write to appropriate files
            # module_path is like "callbacks.custom" -> write to callbacks/custom.py
            files_content: DictType[str, list] = {}
            for callback in project.custom_callbacks:
                if not callback.code:
                    continue
                    
                # Parse module_path to get filename
                # e.g., "callbacks.custom" -> "custom.py"
                parts = callback.module_path.split(".")
                if len(parts) >= 2:
                    filename = parts[-1]  # e.g., "custom"
                else:
                    filename = "custom"
                
                if filename not in files_content:
                    files_content[filename] = []
                files_content[filename].append(callback.code)
            
            # Write each file
            for filename, code_blocks in files_content.items():
                file_path = callbacks_dir / f"{filename}.py"
                # Combine code blocks with header
                header = '"""Auto-generated callbacks module."""\n\n'
                content = header + "\n\n".join(code_blocks)
                file_path.write_text(content)
        
        # Write tools from project.custom_tools
        if project.custom_tools:
            tools_dir = temp_dir / "tools"
            tools_dir.mkdir(parents=True, exist_ok=True)
            (tools_dir / "__init__.py").write_text("")
            
            # Group tools by module_path
            files_content: DictType[str, list] = {}
            for tool in project.custom_tools:
                if not tool.code:
                    continue
                
                # Parse module_path to get filename
                # e.g., "tools.math" -> "math.py"
                parts = tool.module_path.split(".")
                if len(parts) >= 2:
                    filename = parts[-1]
                else:
                    filename = "custom"
                
                if filename not in files_content:
                    files_content[filename] = []
                files_content[filename].append(tool.code)
            
            # Write each file
            for filename, code_blocks in files_content.items():
                file_path = tools_dir / f"{filename}.py"
                header = '"""Auto-generated tools module."""\n\n'
                content = header + "\n\n".join(code_blocks)
                file_path.write_text(content)
        
        # Add temp_dir to sys.path so imports work
        if str(temp_dir) not in sys.path:
            sys.path.insert(0, str(temp_dir))
        
        logger.info(f"Prepared project files in temp dir: {temp_dir}")
        return temp_dir
    
    def _cleanup_temp_dir(self, session_id: str) -> None:
        """Clean up temp directory for a session."""
        if session_id in self._temp_dirs:
            temp_dir = self._temp_dirs[session_id]
            # Remove from sys.path
            if str(temp_dir) in sys.path:
                sys.path.remove(str(temp_dir))
            # Clean up temp files
            import shutil
            try:
                shutil.rmtree(temp_dir)
                logger.debug(f"Cleaned up temp dir: {temp_dir}")
            except Exception as e:
                logger.warning(f"Failed to cleanup temp dir {temp_dir}: {e}")
            del self._temp_dirs[session_id]
    
    async def run_agent(
        self,
        project: Project,
        user_message: str,
        event_callback,
        agent_id: Optional[str] = None,
        session_id: Optional[str] = None,
    ) -> AsyncGenerator[RunEvent, None]:
        """Run an agent and stream events.
        
        Args:
            project: The project containing agents
            user_message: User's input message
            event_callback: Callback for events
            agent_id: Optional agent ID to run. If None, uses project's root_agent_id
            session_id: Optional session ID to reuse. If None, creates a new session.
                        If provided and session exists, appends to existing session.
            
        Yields:
            RunEvent objects, with the first event containing session_id in data
        """
        # Generate new session_id if not provided
        if not session_id:
            session_id = str(uuid.uuid4())[:8]
        
        # Check if we already have a RunSession for this ID
        existing_run_session = self.sessions.get(session_id)
        if existing_run_session:
            session = existing_run_session
            session.status = "running"
        else:
            session = RunSession(
                id=session_id,
                project_id=project.id,
                started_at=time.time(),
                status="running",
            )
            self.sessions[session_id] = session
        
        self._running[session_id] = True
        
        try:
            # Prepare project files (callbacks, tools) from Project object
            # This creates a temp directory with Python files generated from
            # project.custom_callbacks[].code and project.custom_tools[].code
            temp_project_dir = self._prepare_project_files(project, session_id)
            
            # Set environment variables from project config
            import os
            env_vars = project.app.env_vars or {}
            for key, value in env_vars.items():
                if value:  # Only set if value is not empty
                    os.environ[key] = value
            
            # Import ADK components
            from google.adk import Agent
            from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
            from google.adk.apps import App
            from google.adk.runners import Runner
            from google.adk.sessions.in_memory_session_service import InMemorySessionService
            from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
            from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
            from google.genai import types
            
            # Create session service based on URI
            def create_session_service(uri: str):
                if uri.startswith("file://"):
                    from file_session_service import FileSessionService
                    from pathlib import Path
                    path = uri[7:]  # Remove "file://" prefix
                    # Expand ~ to home directory
                    path = str(Path(path).expanduser())
                    return FileSessionService(base_dir=path)
                elif uri.startswith("sqlite://"):
                    from google.adk.sessions.sqlite_session_service import SqliteSessionService
                    db_path = uri[9:]  # Remove "sqlite://" prefix
                    return SqliteSessionService(db_path=db_path)
                else:
                    return InMemorySessionService()
            
            # Create memory service based on URI
            def create_memory_service(uri: str):
                if uri.startswith("file://"):
                    try:
                        from file_memory_service import FileMemoryService
                        from pathlib import Path
                        path = uri[7:]  # Remove "file://" prefix
                        # Expand ~ to home directory
                        path = str(Path(path).expanduser())
                        return FileMemoryService(base_dir=path)
                    except ImportError:
                        # FileMemoryService may not be available
                        # This is expected - fallback to in-memory
                        import logging
                        from pathlib import Path
                        expanded_path = str(Path(uri[7:]).expanduser()) if uri.startswith("file://") else uri
                        logger = logging.getLogger(__name__)
                        logger.debug(
                            f"FileMemoryService not available. "
                            f"Using InMemoryMemoryService for file:// URI: {expanded_path}. "
                            f"Memory will work but not be persisted to disk."
                        )
                        return InMemoryMemoryService()
                else:
                    return InMemoryMemoryService()
            
            # Create artifact service based on URI
            def create_artifact_service(uri: str):
                if uri.startswith("file://"):
                    # Try to import FileArtifactService - it may not be available in all google-adk installations
                    try:
                        # First try direct import
                        from google.adk.artifacts.file_artifact_service import FileArtifactService
                        from pathlib import Path
                        path = uri[7:]  # Remove "file://" prefix
                        # Expand ~ to home directory
                        path = str(Path(path).expanduser())
                        return FileArtifactService(root_dir=path)
                    except ImportError:
                        # FileArtifactService is not available in the installed google-adk package
                        # This is expected when using the PyPI package - fallback to in-memory
                        # Note: This is not an error - artifacts will work, just not persisted to disk
                        import sys
                        from pathlib import Path
                        expanded_path = str(Path(uri[7:]).expanduser()) if uri.startswith("file://") else uri
                        # Only log at debug level since this is expected behavior
                        import logging
                        logger = logging.getLogger(__name__)
                        logger.debug(
                            f"FileArtifactService not available in google-adk package. "
                            f"Using InMemoryArtifactService for file:// URI: {expanded_path}. "
                            f"Artifacts will work but not be persisted to disk."
                        )
                        return InMemoryArtifactService()
                elif uri.startswith("gcs://"):
                    try:
                        from google.adk.artifacts.gcs_artifact_service import GcsArtifactService
                        bucket = uri[6:]  # Remove "gcs://" prefix
                        return GcsArtifactService(bucket_name=bucket)
                    except ImportError:
                        import sys
                        print(f"WARNING: GcsArtifactService not available, using InMemoryArtifactService for gcs:// URI", file=sys.stderr)
                        return InMemoryArtifactService()
                else:
                    return InMemoryArtifactService()
            
            session_service = create_session_service(project.app.session_service_uri or "memory://")
            memory_service = create_memory_service(project.app.memory_service_uri or "memory://")
            artifact_service = create_artifact_service(project.app.artifact_service_uri or "memory://")
            
            # Check if ADK session exists (for reuse) - check before building agents
            adk_session = None
            session_reused = False
            if session_id:
                adk_session = await session_service.get_session(
                    app_name=project.app.name,
                    user_id="playground_user",
                    session_id=session_id,
                )
                if adk_session:
                    session_reused = True
                    # Update our RunSession with existing session info
                    session.id = adk_session.id
                    session_id = adk_session.id
                    # Update started_at if this is the first time we're tracking it
                    if session_id not in self.sessions:
                        session.started_at = adk_session.events[0].timestamp if adk_session.events else time.time()
                    self.sessions[session_id] = session
            
            # Create tracking plugin BEFORE building agents so callbacks can be wrapped
            tracking = TrackingPlugin(session, event_callback)
            
            # Build agents from config - NOW with tracking plugin so callbacks can be wrapped
            agents = self._build_agents(project, tracking_plugin=tracking)
            
            # Determine which agent to run
            target_agent_id = agent_id or project.app.root_agent_id
            
            if not target_agent_id or target_agent_id not in agents:
                available = list(agents.keys())
                raise ValueError(f"Agent '{target_agent_id}' not found. Available agents: {available}")
            
            root_agent = agents[target_agent_id]
            
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
                
                async def on_event_callback(self, *, invocation_context, event):
                    return await self.tracker.on_event_callback(invocation_context=invocation_context, event=event)
            
            plugins = [TrackingPluginWrapper(tracking)]
            
            # Add configured plugins
            for plugin_config in project.app.plugins:
                if plugin_config.type == "ReflectAndRetryToolPlugin":
                    from google.adk.plugins import ReflectAndRetryToolPlugin
                    plugins.append(ReflectAndRetryToolPlugin(
                        max_retries=plugin_config.max_retries or 3,
                        throw_exception_if_retry_exceeded=plugin_config.throw_exception_if_retry_exceeded or False,
                    ))
                elif plugin_config.type == "ContextFilterPlugin":
                    from google.adk.plugins import ContextFilterPlugin
                    plugins.append(ContextFilterPlugin(
                        num_invocations_to_keep=plugin_config.num_invocations_to_keep,
                    ))
                elif plugin_config.type == "LoggingPlugin":
                    from google.adk.plugins import LoggingPlugin
                    plugins.append(LoggingPlugin())
                elif plugin_config.type == "GlobalInstructionPlugin":
                    from google.adk.plugins import GlobalInstructionPlugin
                    plugins.append(GlobalInstructionPlugin(
                        global_instruction=plugin_config.global_instruction or "",
                    ))
                elif plugin_config.type == "SaveFilesAsArtifactsPlugin":
                    from google.adk.plugins import SaveFilesAsArtifactsPlugin
                    plugins.append(SaveFilesAsArtifactsPlugin())
                elif plugin_config.type == "MultimodalToolResultsPlugin":
                    from google.adk.plugins import MultimodalToolResultsPlugin
                    plugins.append(MultimodalToolResultsPlugin())
            
            app = App(
                name=project.app.name,
                root_agent=root_agent,
                plugins=plugins,
            )
            
            # Create runner with actual app
            runner = Runner(
                app=app,
                session_service=session_service,
                artifact_service=artifact_service,
                memory_service=memory_service,
            )
            
            # Create new ADK session if it doesn't exist
            if not adk_session:
                adk_session = await runner.session_service.create_session(
                    app_name=project.app.name,
                    user_id="playground_user",
                    session_id=session_id,  # Use provided session_id if available
                )
                # Update our RunSession with the actual session_id from ADK
                session.id = adk_session.id
                session_id = adk_session.id
                self.sessions[session_id] = session
            
            # Yield session_id info first so client knows which session is being used
            yield RunEvent(
                timestamp=time.time(),
                event_type="agent_start",
                agent_name="system",
                data={"session_id": adk_session.id, "session_reused": session_reused},
            )
            
            # Run the agent (this will append to existing session if it exists)
            content = types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_message)],
            )
            
            async for event in runner.run_async(
                user_id=adk_session.user_id,
                session_id=adk_session.id,  # Use existing session_id to append
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
            
            # Automatically save session to memory if memory service is available
            if memory_service and final_session:
                try:
                    await memory_service.add_session_to_memory(final_session)
                    logger.info(f"Session {final_session.id} saved to memory")
                except Exception as e:
                    logger.warning(f"Failed to save session to memory: {e}")
            
            # Save RunEvents to session service if it's a FileSessionService
            try:
                # Import here to avoid circular dependency
                from file_session_service import FileSessionService
                if isinstance(session_service, FileSessionService):
                    # Convert RunEvents to dict format
                    run_events_dict = [
                        {
                            "timestamp": e.timestamp,
                            "event_type": e.event_type,
                            "agent_name": e.agent_name,
                            "data": e.data,
                        }
                        for e in session.events
                    ]
                    session_service.save_run_events(
                        app_name=project.app.name,
                        user_id=adk_session.user_id,
                        session_id=adk_session.id,
                        run_events=run_events_dict,
                    )
                    logger.debug(f"Saved {len(run_events_dict)} RunEvents to session {adk_session.id}")
            except Exception as e:
                logger.debug(f"Could not save RunEvents to session service (may not be FileSessionService): {e}")
            
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
            # Clean up temp directory
            self._cleanup_temp_dir(session_id)
    
    def stop_run(self, session_id: str):
        """Stop a running session."""
        self._running[session_id] = False
    
    def get_session(self, session_id: str) -> Optional[RunSession]:
        """Get a session by ID."""
        return self.sessions.get(session_id)
    
    async def list_sessions_from_service(self, project: Project) -> List[dict]:
        """List all sessions from the session service for a project.
        
        Args:
            project: The project configuration
            
        Returns:
            List of session summaries (id, started_at, ended_at, status)
        """
        try:
            def create_session_service(uri: str):
                if uri.startswith("file://"):
                    from file_session_service import FileSessionService
                    from pathlib import Path
                    path = uri[7:]  # Remove "file://" prefix
                    # Expand ~ to home directory
                    path = str(Path(path).expanduser())
                    return FileSessionService(base_dir=path)
                elif uri.startswith("sqlite://"):
                    from google.adk.sessions.sqlite_session_service import SqliteSessionService
                    db_path = uri[9:]  # Remove "sqlite://" prefix
                    return SqliteSessionService(db_path=db_path)
                else:
                    from google.adk.sessions.in_memory_session_service import InMemorySessionService
                    return InMemorySessionService()
            
            session_service = create_session_service(project.app.session_service_uri or "memory://")
            
            # List sessions from the service
            response = await session_service.list_sessions(
                app_name=project.app.name,
                user_id="playground_user",
            )
            
            sessions = []
            for adk_session in response.sessions:
                duration = None
                if adk_session.last_update_time and adk_session.events:
                    # Estimate duration from first and last event timestamps
                    if len(adk_session.events) > 0:
                        first_time = adk_session.events[0].timestamp
                        last_time = adk_session.events[-1].timestamp
                        duration = last_time - first_time
                
                sessions.append({
                    "id": adk_session.id,
                    "started_at": adk_session.events[0].timestamp if adk_session.events else adk_session.last_update_time,
                    "ended_at": adk_session.last_update_time if adk_session.events else None,
                    "duration": duration,
                    "event_count": len(adk_session.events),
                })
            
            # Sort by started_at descending (newest first)
            sessions.sort(key=lambda x: x["started_at"], reverse=True)
            return sessions
            
        except Exception as e:
            logger.error(f"Failed to list sessions from service: {e}", exc_info=True)
            return []
    
    async def load_session_from_service(self, project: Project, session_id: str) -> Optional[RunSession]:
        """Load a session's events from the session service.
        
        Args:
            project: The project configuration
            session_id: The session ID to load
            
        Returns:
            RunSession with events, or None if not found
        """
        try:
            def create_session_service(uri: str):
                if uri.startswith("file://"):
                    from file_session_service import FileSessionService
                    from pathlib import Path
                    path = uri[7:]  # Remove "file://" prefix
                    # Expand ~ to home directory
                    path = str(Path(path).expanduser())
                    return FileSessionService(base_dir=path)
                elif uri.startswith("sqlite://"):
                    from google.adk.sessions.sqlite_session_service import SqliteSessionService
                    db_path = uri[9:]  # Remove "sqlite://" prefix
                    return SqliteSessionService(db_path=db_path)
                else:
                    from google.adk.sessions.in_memory_session_service import InMemorySessionService
                    return InMemorySessionService()
            
            session_service = create_session_service(project.app.session_service_uri or "memory://")
            
            # Get the ADK session
            adk_session = await session_service.get_session(
                app_name=project.app.name,
                user_id="playground_user",
                session_id=session_id,
            )
            
            if not adk_session:
                return None
            
            # Try to load stored RunEvents first (if using FileSessionService)
            run_events = None
            try:
                from file_session_service import FileSessionService
                if isinstance(session_service, FileSessionService):
                    stored_run_events = session_service.get_run_events(
                        app_name=project.app.name,
                        user_id="playground_user",
                        session_id=session_id,
                    )
                    if stored_run_events:
                        # Convert dicts back to RunEvent objects
                        run_events = [
                            RunEvent(
                                timestamp=e.get("timestamp", 0),
                                event_type=e.get("event_type", "model_response"),
                                agent_name=e.get("agent_name", "unknown"),
                                data=e.get("data", {}),
                            )
                            for e in stored_run_events
                        ]
                        logger.debug(f"Loaded {len(run_events)} stored RunEvents for session {session_id}")
            except Exception as e:
                logger.debug(f"Could not load stored RunEvents: {e}")
            
            # If no stored RunEvents, convert ADK events to RunEvents
            if run_events is None:
                logger.debug(f"Converting ADK events to RunEvents for session {session_id}")
                run_events = []
                for event in adk_session.events:
                    event_data = {}
                    event_type = "model_response"  # default
                    
                    # Extract content from event
                    if event.content and event.content.parts:
                        parts_data = []
                        for part in event.content.parts:
                            part_data = {}
                            if hasattr(part, 'text') and part.text:
                                part_data["type"] = "text"
                                part_data["text"] = part.text
                            elif hasattr(part, 'function_call') and part.function_call:
                                fc = part.function_call
                                part_data["type"] = "function_call"
                                part_data["name"] = getattr(fc, "name", "unknown")
                                part_data["args"] = dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {}
                            elif hasattr(part, 'function_response') and part.function_response:
                                fr = part.function_response
                                part_data["type"] = "function_response"
                                part_data["name"] = getattr(fr, "name", "unknown")
                                response = getattr(fr, "response", None)
                                if response:
                                    part_data["response"] = response
                            
                            if part_data:
                                parts_data.append(part_data)
                        
                        if parts_data:
                            event_data["response_content"] = {"parts": parts_data}
                            # Check if it's a function call to determine type
                            if any(p.get("type") == "function_call" for p in parts_data):
                                event_type = "model_response"
                            elif any(p.get("type") == "function_response" for p in parts_data):
                                event_type = "tool_result"
                    
                    # Check event actions for state changes
                    if hasattr(event, 'actions') and event.actions and event.actions.state_delta:
                        event_data["state_delta"] = dict(event.actions.state_delta)
                        # Also emit a separate state_change event
                        run_events.append(RunEvent(
                            timestamp=event.timestamp,
                            event_type="state_change",
                            agent_name=event.author or "unknown",
                            data={"state_delta": dict(event.actions.state_delta)},
                        ))
                    
                    run_events.append(RunEvent(
                        timestamp=event.timestamp,
                        event_type=event_type,
                        agent_name=event.author or "unknown",
                        data=event_data,
                    ))
            
            # Create RunSession
            return RunSession(
                id=adk_session.id,
                project_id=project.id,
                started_at=adk_session.events[0].timestamp if adk_session.events else adk_session.last_update_time,
                ended_at=adk_session.last_update_time if adk_session.events else None,
                status="completed",
                events=run_events,
                final_state=dict(adk_session.state) if adk_session.state else {},
                token_counts={},  # Not stored in session service
            )
            
        except Exception as e:
            logger.error(f"Failed to load session from service: {e}", exc_info=True)
            return None
    
    async def save_session_to_memory(self, project: Project, session_id: str) -> dict:
        """Save a session to memory service.
        
        Args:
            project: The project configuration
            session_id: The session ID to save
            
        Returns:
            dict with success status and message
        """
        session = self.get_session(session_id)
        if not session:
            return {"success": False, "error": "Session not found"}
        
        try:
            # Create memory service based on project config
            def create_memory_service(uri: str):
                if uri.startswith("file://"):
                    from file_memory_service import FileMemoryService
                    from pathlib import Path
                    path = uri[7:]  # Remove "file://" prefix
                    # Expand ~ to home directory
                    path = str(Path(path).expanduser())
                    return FileMemoryService(base_dir=path)
                else:
                    from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
                    return InMemoryMemoryService()
            
            memory_service = create_memory_service(project.app.memory_service_uri or "memory://")
            
            # Get the actual ADK session from the session service
            def create_session_service(uri: str):
                if uri.startswith("file://"):
                    from file_session_service import FileSessionService
                    from pathlib import Path
                    path = uri[7:]  # Remove "file://" prefix
                    # Expand ~ to home directory
                    path = str(Path(path).expanduser())
                    return FileSessionService(base_dir=path)
                elif uri.startswith("sqlite://"):
                    from google.adk.sessions.sqlite_session_service import SqliteSessionService
                    db_path = uri[9:]  # Remove "sqlite://" prefix
                    return SqliteSessionService(db_path=db_path)
                else:
                    from google.adk.sessions.in_memory_session_service import InMemorySessionService
                    return InMemorySessionService()
            
            session_service = create_session_service(project.app.session_service_uri or "memory://")
            
            # Get the ADK session
            adk_session = await session_service.get_session(
                app_name=project.app.name,
                user_id="playground_user",
                session_id=session_id,
            )
            
            if not adk_session:
                return {"success": False, "error": "ADK session not found"}
            
            # Save to memory
            await memory_service.add_session_to_memory(adk_session)
            
            return {"success": True, "message": f"Session {session_id} saved to memory"}
            
        except Exception as e:
            import logging
            logger = logging.getLogger(__name__)
            logger.error(f"Failed to save session to memory: {e}", exc_info=True)
            return {"success": False, "error": str(e)}
    
    def _build_agents(self, project: Project, tracking_plugin=None) -> Dict[str, Any]:
        """Build ADK agents from project config."""
        from google.adk import Agent
        from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
        
        agents = {}
        
        # First pass: create all agents without sub_agents
        for agent_config in project.agents:
            agent = self._build_single_agent(agent_config, project, tracking_plugin=tracking_plugin)
            agents[agent_config.id] = agent
        
        # Second pass: wire up sub_agents
        for agent_config in project.agents:
            if hasattr(agent_config, "sub_agents") and agent_config.sub_agents:
                agent = agents[agent_config.id]
                sub_agents = [agents[sa_id] for sa_id in agent_config.sub_agents if sa_id in agents]
                if hasattr(agent, "sub_agents"):
                    agent.sub_agents = sub_agents
        
        return agents
    
    def _build_single_agent(self, config: AgentConfig, project: Project, tracking_plugin=None) -> Any:
        """Build a single agent from config."""
        from google.adk import Agent
        from google.adk.agents import SequentialAgent, LoopAgent, ParallelAgent
        import importlib
        import inspect
        
        if isinstance(config, LlmAgentConfig):
            model = self._build_model(config.model) if config.model else "gemini-2.0-flash"
            tools = self._build_tools(config.tools, project)
            
            # Load callbacks - ADK uses singular names (before_agent_callback) not plural
            # Map from our plural config names to ADK's singular names
            callback_mapping = {
                'before_agent_callbacks': 'before_agent_callback',
                'after_agent_callbacks': 'after_agent_callback',
                'before_model_callbacks': 'before_model_callback',
                'after_model_callbacks': 'after_model_callback',
                'before_tool_callbacks': 'before_tool_callback',
                'after_tool_callbacks': 'after_tool_callback',
            }
            
            # Load and wrap callbacks
            # Callbacks are loaded via importlib from sys.path which includes:
            # 1. Temp directory created by _prepare_project_files() (from project.custom_callbacks[].code)
            # 2. Legacy: project directory on disk (for backwards compatibility)
            project_dir = self.projects_dir / project.id
            if project_dir.exists() and str(project_dir) not in sys.path:
                sys.path.insert(0, str(project_dir))
            
            callbacks_config = {}
            for config_attr_name, adk_attr_name in callback_mapping.items():
                if hasattr(config, config_attr_name):
                    callbacks = getattr(config, config_attr_name)
                    logger.info(f"Checking {config_attr_name} on agent {config.name}: {callbacks} (type: {type(callbacks)})")
                    if callbacks:
                        logger.info(f"Processing {len(callbacks)} callback(s) for {config_attr_name} on agent {config.name}")
                        loaded_callbacks = []
                        for callback_config in callbacks:
                            logger.info(f"Loading callback from config: {callback_config}")
                            try:
                                # Load callback from module_path
                                # Module path format can be:
                                # 1. "module.submodule.function_name" (full path from code/YAML)
                                # 2. "module.submodule" (just module, function name from callback definition)
                                full_path = callback_config.module_path
                                
                                # Check if it's a full path (contains function name)
                                # Try to find a callback definition that matches
                                callback_def = None
                                module_path = full_path
                                func_name = None
                                
                                # First, try to match by full path (for backwards compatibility)
                                for cb in project.custom_callbacks:
                                    if cb.module_path == full_path:
                                        callback_def = cb
                                        module_path = cb.module_path
                                        func_name = cb.name
                                        break
                                
                                # If not found, try parsing as full path (module.function)
                                if not callback_def:
                                    parts = full_path.rsplit('.', 1)
                                    if len(parts) == 2:
                                        possible_module_path, possible_func_name = parts
                                        # Try to find callback with matching module_path and function name
                                        for cb in project.custom_callbacks:
                                            if cb.module_path == possible_module_path and cb.name == possible_func_name:
                                                callback_def = cb
                                                module_path = possible_module_path
                                                func_name = possible_func_name
                                                break
                                
                                if not callback_def:
                                    raise ValueError(f"Callback definition not found for module_path: {full_path}")
                                
                                if not func_name:
                                    func_name = callback_def.name
                                
                                # Import the module (e.g., "callbacks.custom")
                                # Force reload by removing from cache first to ensure we get latest code from disk
                                logger.info(f"Loading callback {func_name} from module {module_path}")
                                
                                # Remove module and any submodules from cache to force fresh import
                                # This ensures we get the latest code from disk, not cached bytecode
                                modules_to_remove = [m for m in list(sys.modules.keys()) 
                                                    if m == module_path or m.startswith(module_path + ".")]
                                
                                # Also remove parent package if it exists (e.g., "callbacks" for "callbacks.custom")
                                if "." in module_path:
                                    parent_package = module_path.rsplit(".", 1)[0]
                                    if parent_package in sys.modules:
                                        modules_to_remove.append(parent_package)
                                
                                for mod_name in modules_to_remove:
                                    del sys.modules[mod_name]
                                    logger.debug(f"Removed {mod_name} from sys.modules cache to force reload")
                                
                                # Now import fresh from disk
                                module = importlib.import_module(module_path)
                                
                                # Get the function from the module
                                callback_func = getattr(module, func_name, None)
                                if callback_func is None:
                                    raise AttributeError(f"Module {module_path} has no attribute {func_name}")
                                
                                logger.info(f"Successfully loaded callback {func_name} from module {module_path}")
                                
                                # Wrap callback to emit tracking events if tracking plugin is provided
                                if tracking_plugin:
                                    # Capture ALL loop variables in closure correctly
                                    # Python closures capture by reference, not value, so we must
                                    # create local copies of any variables used inside the closure
                                    captured_module_path = module_path
                                    captured_agent_name = config.name
                                    captured_func_name = func_name
                                    captured_callback_func = callback_func
                                    captured_callback_type = config_attr_name.replace('_callbacks', '')
                                    
                                    # Import functools for preserving function signatures
                                    import functools
                                    
                                    # Create wrapper that preserves the original function's signature
                                    if inspect.iscoroutinefunction(callback_func):
                                        @functools.wraps(callback_func)
                                        async def wrapped_callback(*args, 
                                                                    _func=captured_callback_func,
                                                                    _name=captured_func_name,
                                                                    _type=captured_callback_type,
                                                                    _module=captured_module_path,
                                                                    _agent=captured_agent_name,
                                                                    **kwargs):
                                            # Emit callback_start event
                                            await tracking_plugin._emit(RunEvent(
                                                timestamp=time.time(),
                                                event_type="callback_start",
                                                agent_name=_agent,
                                                data={
                                                    "callback_name": _name,
                                                    "callback_type": _type,
                                                    "module_path": _module,
                                                },
                                            ))
                                            
                                            try:
                                                result = await _func(*args, **kwargs)
                                                
                                                # Emit callback_end event
                                                await tracking_plugin._emit(RunEvent(
                                                    timestamp=time.time(),
                                                    event_type="callback_end",
                                                    agent_name=_agent,
                                                    data={
                                                        "callback_name": _name,
                                                        "callback_type": _type,
                                                        "module_path": _module,
                                                    },
                                                ))
                                                
                                                return result
                                            except Exception as e:
                                                # Emit callback_end event with detailed error information
                                                import traceback
                                                error_data = {
                                                    "callback_name": _name,
                                                    "callback_type": _type,
                                                    "module_path": _module,
                                                    "error": str(e),
                                                    "error_type": type(e).__name__,
                                                }
                                                # Add stack trace if available
                                                try:
                                                    stack_trace = traceback.format_exc()
                                                    if stack_trace:
                                                        error_data["stack_trace"] = stack_trace
                                                except Exception:
                                                    pass  # If we can't get stack trace, continue without it
                                                
                                                await tracking_plugin._emit(RunEvent(
                                                    timestamp=time.time(),
                                                    event_type="callback_end",
                                                    agent_name=_agent,
                                                    data=error_data,
                                                ))
                                                raise
                                        
                                        loaded_callbacks.append(wrapped_callback)
                                    else:
                                        # Sync callback - wrap in async wrapper for tracking
                                        # ADK can handle both sync and async callbacks, but we need to wrap
                                        # sync callbacks in async to emit tracking events
                                        # We preserve the original function's signature using functools.wraps
                                        # even though we're converting sync to async
                                        @functools.wraps(callback_func)
                                        async def wrapped_sync_callback(*args,
                                                                         _func=captured_callback_func,
                                                                         _name=captured_func_name,
                                                                         _type=captured_callback_type,
                                                                         _module=captured_module_path,
                                                                         _agent=captured_agent_name,
                                                                         **kwargs):
                                            # Emit callback_start event
                                            await tracking_plugin._emit(RunEvent(
                                                timestamp=time.time(),
                                                event_type="callback_start",
                                                agent_name=_agent,
                                                data={
                                                    "callback_name": _name,
                                                    "callback_type": _type,
                                                    "module_path": _module,
                                                },
                                            ))
                                            
                                            try:
                                                # Call sync callback synchronously
                                                # ADK will call this with callback_context=callback_context
                                                # so kwargs will contain callback_context
                                                result = _func(*args, **kwargs)
                                                
                                                # Emit callback_end event
                                                await tracking_plugin._emit(RunEvent(
                                                    timestamp=time.time(),
                                                    event_type="callback_end",
                                                    agent_name=_agent,
                                                    data={
                                                        "callback_name": _name,
                                                        "callback_type": _type,
                                                        "module_path": _module,
                                                    },
                                                ))
                                                
                                                return result
                                            except Exception as e:
                                                # Emit callback_end event with detailed error information
                                                import traceback
                                                error_data = {
                                                    "callback_name": _name,
                                                    "callback_type": _type,
                                                    "module_path": _module,
                                                    "error": str(e),
                                                    "error_type": type(e).__name__,
                                                }
                                                # Add stack trace if available
                                                try:
                                                    stack_trace = traceback.format_exc()
                                                    if stack_trace:
                                                        error_data["stack_trace"] = stack_trace
                                                except Exception:
                                                    pass  # If we can't get stack trace, continue without it
                                                
                                                await tracking_plugin._emit(RunEvent(
                                                    timestamp=time.time(),
                                                    event_type="callback_end",
                                                    agent_name=_agent,
                                                    data=error_data,
                                                ))
                                                raise
                                        
                                        loaded_callbacks.append(wrapped_sync_callback)
                                else:
                                    # No tracking, just use the original callback
                                    loaded_callbacks.append(callback_func)
                            except Exception as e:
                                import traceback
                                logger.error(f"Failed to load callback {callback_config.module_path}: {e}")
                                logger.error(traceback.format_exc())
                                # Don't add failed callbacks - they would break the agent
                        
                        if loaded_callbacks:
                            # ADK accepts single callback or list
                            callbacks_config[adk_attr_name] = loaded_callbacks if len(loaded_callbacks) > 1 else loaded_callbacks[0]
                            logger.info(f"Loaded {len(loaded_callbacks)} callback(s) for {adk_attr_name} on agent {config.name}")
                        else:
                            logger.warning(f"No callbacks loaded for {config_attr_name} on agent {config.name} (check module paths and function names)")
            
            agent_kwargs = {
                "name": config.name,
                "description": config.description,
                "model": model,
                "instruction": config.instruction,
                "output_key": config.output_key,
                "include_contents": config.include_contents,
                "disallow_transfer_to_parent": config.disallow_transfer_to_parent,
                "disallow_transfer_to_peers": config.disallow_transfer_to_peers,
                "tools": tools,
            }
            
            # Add callbacks if we have them
            for attr_name, callbacks in callbacks_config.items():
                agent_kwargs[attr_name] = callbacks
                logger.info(f"Added {attr_name} to agent {config.name}: {type(callbacks).__name__}")
            
            logger.info(f"Creating Agent with kwargs: {list(agent_kwargs.keys())}")
            return Agent(**agent_kwargs)
        
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
            
            elif isinstance(tool_config, SkillSetToolConfig):
                toolset = self._build_skillset_toolset(tool_config, project)
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
            elif name == "skillset":
                # Return the shared SkillSet instance
                from skillset import SkillSet
                return SkillSet(
                    preload_enabled=True,
                    search_enabled=True,
                )
            # Add more as needed
        except ImportError as e:
            logger.warning(f"Failed to import builtin tool {name}: {e}")
            pass
        return None
    
    def _load_function_tool(self, config: FunctionToolConfig, project: Project):
        """Load a custom function tool.
        
        Tools are loaded via importlib from sys.path which includes:
        1. Temp directory created by _prepare_project_files() (from project.custom_tools[].code)
        2. Legacy: project tools directory on disk (for backwards compatibility)
        """
        # Legacy fallback: add project tools directory to path if it exists on disk
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
        """Build an MCP toolset from config with enhanced error tracking."""
        try:
            from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset
            from google.adk.tools.mcp_tool.mcp_session_manager import (
                StdioConnectionParams,
                SseConnectionParams,
            )
            from google.adk.tools.base_toolset import BaseToolset
            
            print(f"[MCP] Building toolset for: {server_config.name}")
            print(f"[MCP] Connection type: {server_config.connection_type}")
            print(f"[MCP] Command: {server_config.command}")
            print(f"[MCP] Args: {server_config.args}")
            
            if server_config.connection_type.value == "stdio":
                server_params_dict = {
                    "command": server_config.command,
                    "args": server_config.args or [],
                }
                if server_config.env:
                    server_params_dict["env"] = server_config.env
                
                connection_params = StdioConnectionParams(
                    server_params=server_params_dict,
                    timeout=server_config.timeout,
                )
            elif server_config.connection_type.value == "sse":
                connection_params = SseConnectionParams(
                    url=server_config.url,
                    headers=server_config.headers if server_config.headers else None,
                    timeout=server_config.timeout,
                )
            else:
                print(f"[MCP] Unknown connection type: {server_config.connection_type}")
                return None
            
            # Create a wrapper that provides better error messages
            class MCPToolsetWithErrorTracking(BaseToolset):
                """Wrapper that adds server name to error messages."""
                
                def __init__(self, inner_toolset, server_name, server_command):
                    # Don't call super().__init__ to avoid attribute issues
                    self._inner = inner_toolset
                    self._server_name = server_name
                    self._server_command = server_command
                
                async def get_tools(self, readonly_context=None):
                    try:
                        return await self._inner.get_tools(readonly_context)
                    except Exception as e:
                        error_msg = str(e)
                        # Enhance error message with server details
                        raise ConnectionError(
                            f"MCP server '{self._server_name}' ({self._server_command}) failed: {error_msg}"
                        ) from e
                
                async def close(self):
                    if hasattr(self._inner, 'close'):
                        await self._inner.close()
                
                # Delegate other attributes to inner toolset
                def __getattr__(self, name):
                    return getattr(self._inner, name)
            
            inner_toolset = MCPToolset(
                connection_params=connection_params,
                tool_filter=server_config.tool_filter if server_config.tool_filter else None,
                tool_name_prefix=server_config.tool_name_prefix,
            )
            
            # Wrap with error tracking
            toolset = MCPToolsetWithErrorTracking(
                inner_toolset, 
                server_config.name,
                f"{server_config.command} {' '.join(server_config.args or [])}"
            )
            print(f"[MCP] Toolset created successfully for: {server_config.name}")
            return toolset
        except Exception as e:
            import traceback
            print(f"[MCP] Error building toolset for '{server_config.name}': {e}")
            print(traceback.format_exc())
            return None
    
    def _build_skillset_toolset(self, tool_config: SkillSetToolConfig, project: Project):
        """Build a SkillSet toolset from config."""
        try:
            from .skillset import SkillSet
            from .knowledge_service import KnowledgeServiceManager
            
            # Find the skillset config in the project
            skillset_config = next(
                (s for s in project.skillsets if s.id == tool_config.skillset_id),
                None
            )
            if not skillset_config:
                logger.error(f"SkillSet not found: {tool_config.skillset_id}")
                return None
            
            # Get the embedding model
            model_name = skillset_config.embedding_model or "text-embedding-004"
            if skillset_config.app_model_id:
                app_model = next(
                    (m for m in project.app.models if m.id == skillset_config.app_model_id),
                    None
                )
                if app_model:
                    model_name = app_model.model_name
            
            # Create the knowledge service manager
            manager = KnowledgeServiceManager(self.projects_dir)
            
            logger.info(
                f"[SkillSet] Creating toolset: {skillset_config.name} "
                f"(id={tool_config.skillset_id}, model={model_name})"
            )
            
            # Create the SkillSet toolset
            skillset = SkillSet(
                skillset_id=tool_config.skillset_id,
                project_id=project.id,
                manager=manager,
                model_name=model_name,
                search_enabled=skillset_config.search_enabled,
                preload_enabled=skillset_config.preload_enabled,
                preload_top_k=skillset_config.preload_top_k,
                preload_min_score=skillset_config.preload_min_score,
            )
            
            logger.info(
                f"[SkillSet] Toolset created: {skillset_config.name} "
                f"(search={skillset_config.search_enabled}, "
                f"preload={skillset_config.preload_enabled})"
            )
            return skillset
            
        except Exception as e:
            import traceback
            logger.error(f"[SkillSet] Error building toolset: {e}")
            logger.error(traceback.format_exc())
            return None

