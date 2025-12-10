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
            data={"instruction": getattr(agent, "instruction", "") if getattr(agent, "instruction", None) else ""},
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
    
    async def on_event_callback(self, *, invocation_context, event, **kwargs):
        """Called for every event - captures state changes from output_key etc."""
        # Check if the event has state_delta (e.g., from output_key)
        if hasattr(event, "actions") and event.actions and event.actions.state_delta:
            state_delta = event.actions.state_delta
            if state_delta:
                agent_name = getattr(event, "author", None) or "system"
                self._emit(RunEvent(
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
                "args": tool_args,
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
                    "state_delta": dict(tool_context._event_actions.state_delta),
                },
            ))
        
        self._emit(RunEvent(
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
                    path = uri[7:]  # Remove "file://" prefix
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
                        path = uri[7:]  # Remove "file://" prefix
                        return FileMemoryService(base_dir=path)
                    except ImportError:
                        # FileMemoryService may not be available
                        import sys
                        print(f"WARNING: FileMemoryService not available. Using InMemoryMemoryService for file:// URI: {uri}", file=sys.stderr)
                        print(f"  Note: Memory will not be persisted. Consider using 'memory://' or ensuring file_memory_service is available.", file=sys.stderr)
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
                        path = uri[7:]  # Remove "file://" prefix
                        return FileArtifactService(root_dir=path)
                    except ImportError:
                        # FileArtifactService may not be in the installed package
                        # Use our own file-based implementation or fallback to in-memory
                        import sys
                        print(f"WARNING: FileArtifactService not available in google-adk package. Using InMemoryArtifactService for file:// URI: {uri}", file=sys.stderr)
                        print(f"  Note: File artifacts will not be persisted. Consider using 'memory://' or installing google-adk from source.", file=sys.stderr)
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
            
            # Build agents from config
            agents = self._build_agents(project)
            
            # Determine which agent to run
            target_agent_id = agent_id or project.app.root_agent_id
            
            if not target_agent_id or target_agent_id not in agents:
                available = list(agents.keys())
                raise ValueError(f"Agent '{target_agent_id}' not found. Available agents: {available}")
            
            root_agent = agents[target_agent_id]
            
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
                    path = uri[7:]  # Remove "file://" prefix
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
                    path = uri[7:]  # Remove "file://" prefix
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
                    path = uri[7:]  # Remove "file://" prefix
                    return FileMemoryService(base_dir=path)
                else:
                    from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
                    return InMemoryMemoryService()
            
            memory_service = create_memory_service(project.app.memory_service_uri or "memory://")
            
            # Get the actual ADK session from the session service
            def create_session_service(uri: str):
                if uri.startswith("file://"):
                    from file_session_service import FileSessionService
                    path = uri[7:]  # Remove "file://" prefix
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

