"""Runtime execution for ADK agents with tracking.

This module executes the generated Python code from code_generator.py.
The generated code produces an `app` which is then run with the Runner.
"""

from __future__ import annotations

import asyncio
import logging
import sys
import tempfile
import time
import uuid
from pathlib import Path
from typing import Any, AsyncGenerator, Dict, List, Optional

logger = logging.getLogger(__name__)

from models import Project, RunSession, RunEvent
from code_generator import generate_python_code


# =============================================================================
# Service Factory Functions
# =============================================================================

def create_session_service_from_uri(uri: str):
    """Create a session service from a URI."""
    from google.adk.sessions.in_memory_session_service import InMemorySessionService
    
    if uri.startswith("memory://"):
        return InMemorySessionService()
    elif uri.startswith("sqlite://"):
        try:
            from google.adk.sessions.sqlite_session_service import SqliteSessionService
            db_path = uri[9:]
            return SqliteSessionService(db_path=db_path)
        except ImportError as e:
            logger.warning(f"SqliteSessionService not available: {e}")
            return InMemorySessionService()
    elif uri.startswith("postgresql://") or uri.startswith("mysql://"):
        try:
            from google.adk.sessions.database_session_service import DatabaseSessionService
            return DatabaseSessionService(db_url=uri)
        except ImportError as e:
            logger.warning(f"DatabaseSessionService not available: {e}")
            return InMemorySessionService()
    elif uri.startswith("agentengine://"):
        try:
            from google.adk.sessions.vertex_ai_session_service import VertexAiSessionService
            parts = uri[14:].split('/')
            return VertexAiSessionService(
                project=parts[0] if len(parts) > 0 else None,
                location=parts[1] if len(parts) > 1 else None,
                agent_engine_id=parts[2] if len(parts) > 2 else None,
            )
        except ImportError as e:
            logger.warning(f"VertexAiSessionService not available: {e}")
            return InMemorySessionService()
    elif uri.startswith("file://"):
        try:
            from file_session_service import FileSessionService
            return FileSessionService(base_dir=str(Path(uri[7:]).expanduser()))
        except ImportError:
            return InMemorySessionService()
    else:
        return InMemorySessionService()


def create_memory_service_from_uri(uri: str):
    """Create a memory service from a URI."""
    from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
    
    if uri.startswith("memory://"):
        return InMemoryMemoryService()
    elif uri.startswith("rag://"):
        try:
            from google.adk.memory.vertex_ai_rag_memory_service import VertexAiRagMemoryService
            return VertexAiRagMemoryService(rag_corpus=uri[6:])
        except ImportError:
            return InMemoryMemoryService()
    elif uri.startswith("agentengine://"):
        try:
            from google.adk.memory.vertex_ai_memory_bank_service import VertexAiMemoryBankService
            parts = uri[14:].split('/')
            return VertexAiMemoryBankService(
                project=parts[0] if len(parts) > 0 else None,
                location=parts[1] if len(parts) > 1 else None,
                agent_engine_id=parts[2] if len(parts) > 2 else None,
            )
        except ImportError:
            return InMemoryMemoryService()
    elif uri.startswith("file://"):
        try:
            from file_memory_service import FileMemoryService
            return FileMemoryService(base_dir=str(Path(uri[7:]).expanduser()))
        except ImportError:
            return InMemoryMemoryService()
    else:
        return InMemoryMemoryService()


def create_artifact_service_from_uri(uri: str):
    """Create an artifact service from a URI."""
    from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
    
    if uri.startswith("memory://"):
        return InMemoryArtifactService()
    elif uri.startswith("file://"):
        try:
            from google.adk.artifacts.file_artifact_service import FileArtifactService
            return FileArtifactService(root_dir=str(Path(uri[7:]).expanduser()))
        except ImportError:
            return InMemoryArtifactService()
    elif uri.startswith("gs://") or uri.startswith("gcs://"):
        try:
            from google.adk.artifacts.gcs_artifact_service import GcsArtifactService
            bucket = uri[5:] if uri.startswith("gs://") else uri[6:]
            return GcsArtifactService(bucket_name=bucket)
        except ImportError:
            return InMemoryArtifactService()
    else:
        return InMemoryArtifactService()


# =============================================================================
# Tracking Plugin
# =============================================================================

class TrackingPlugin:
    """Plugin that tracks all events during agent execution."""
    
    def __init__(self, session: RunSession, callback):
        self.session = session
        self.callback = callback
        self.token_counts = {"input": 0, "output": 0}
    
    async def _emit(self, event: RunEvent):
        """Emit an event."""
        self.session.events.append(event)
        await self.callback(event)
    
    async def before_agent_callback(self, *, agent, callback_context, **kwargs):
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_start",
            agent_name=agent.name,
            data={"instruction": getattr(agent, "instruction", "") or ""},
        ))
        return None
    
    async def after_agent_callback(self, *, agent, callback_context, **kwargs):
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="agent_end",
            agent_name=agent.name,
            data={},
        ))
        return None
    
    async def on_event_callback(self, *, invocation_context, event, **kwargs):
        if hasattr(event, "actions") and event.actions and event.actions.state_delta:
                await self._emit(RunEvent(
                    timestamp=time.time(),
                    event_type="state_change",
                agent_name=getattr(event, "author", None) or "system",
                data={"state_delta": dict(event.actions.state_delta)},
                ))
        return None
    
    async def before_model_callback(self, *, callback_context, llm_request, **kwargs):
        contents = self._serialize_contents(getattr(llm_request, "contents", None))
        
        system_instruction = None
        if hasattr(llm_request, "config") and llm_request.config:
            si = getattr(llm_request.config, "system_instruction", None)
            if si:
                if isinstance(si, str):
                    system_instruction = si
                elif hasattr(si, "parts"):
                    system_instruction = "".join(
                        getattr(p, "text", "") for p in si.parts if hasattr(p, "text")
                    )
        
        tool_names = list(getattr(llm_request, "tools_dict", {}).keys())
        
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="model_call",
            agent_name=getattr(callback_context, "agent_name", None) or "system",
            data={
                "contents": contents,
                "system_instruction": system_instruction,
                "tool_names": tool_names,
                "tool_count": len(tool_names),
            },
        ))
        return None
    
    async def after_model_callback(self, *, callback_context, llm_response, **kwargs):
        response_parts = []
        if hasattr(llm_response, "content") and llm_response.content:
            if hasattr(llm_response.content, "parts"):
                for part in llm_response.content.parts:
                    if hasattr(part, "text") and part.text:
                        part_data = {"type": "text", "text": part.text}
                        if hasattr(part, "thought") and part.thought:
                            part_data["thought"] = True
                        response_parts.append(part_data)
                    elif hasattr(part, "function_call") and part.function_call:
                        fc = part.function_call
                        response_parts.append({
                            "type": "function_call",
                            "name": getattr(fc, "name", "unknown"),
                            "args": dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {},
                        })
        
        if hasattr(llm_response, "usage_metadata") and llm_response.usage_metadata:
            usage = llm_response.usage_metadata
            self.token_counts["input"] += getattr(usage, "prompt_token_count", 0) or 0
            self.token_counts["output"] += getattr(usage, "candidates_token_count", 0) or 0
        
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="model_response",
            agent_name=getattr(callback_context, "agent_name", None) or "system",
            data={"parts": response_parts, "token_counts": dict(self.token_counts)},
        ))
        return None
    
    async def before_tool_callback(self, *, tool, tool_args, tool_context, **kwargs):
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_call",
            agent_name=getattr(tool_context, "agent_name", None) or "system",
            data={"tool_name": tool.name, "args": tool_args},
        ))
        return None
    
    async def after_tool_callback(self, *, tool, tool_args, tool_context, result, **kwargs):
        if hasattr(tool_context, "_event_actions") and tool_context._event_actions.state_delta:
            await self._emit(RunEvent(
                timestamp=time.time(),
                event_type="state_change",
                agent_name=getattr(tool_context, "agent_name", None) or "system",
                data={"state_delta": dict(tool_context._event_actions.state_delta)},
            ))
        
        await self._emit(RunEvent(
            timestamp=time.time(),
            event_type="tool_result",
            agent_name=getattr(tool_context, "agent_name", None) or "system",
            data={"tool_name": tool.name, "result": result},
        ))
        return None

    def _serialize_contents(self, contents) -> list:
        if not contents:
            return []
        
        result = []
        for content in contents:
            content_data = {"role": getattr(content, "role", "unknown"), "parts": []}
            
            if hasattr(content, "parts") and content.parts:
                for part in content.parts:
                    part_data = {}
                    if hasattr(part, "text") and part.text:
                        part_data = {"type": "text", "text": part.text}
                    elif hasattr(part, "function_call") and part.function_call:
                        fc = part.function_call
                        part_data = {
                            "type": "function_call",
                            "name": getattr(fc, "name", "unknown"),
                            "args": dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {},
                        }
                    elif hasattr(part, "function_response") and part.function_response:
                        fr = part.function_response
                        part_data = {
                            "type": "function_response",
                            "name": getattr(fr, "name", "unknown"),
                            "response": getattr(fr, "response", None),
                        }
                    if hasattr(part, "thought") and part.thought:
                        part_data["thought"] = True
                    if part_data:
                        content_data["parts"].append(part_data)
            
            result.append(content_data)
        return result


# =============================================================================
# Runtime Manager
# =============================================================================

class RuntimeManager:
    """Manages agent runtime execution."""
    
    def __init__(self, projects_dir: str = "./projects"):
        self.projects_dir = Path(projects_dir)
        self.sessions: Dict[str, RunSession] = {}
        self._running: Dict[str, bool] = {}
        self._temp_dirs: Dict[str, Path] = {}
    
    def _prepare_temp_dir(self, project: Project, session_id: str) -> Path:
        """Create temp directory with tool/callback files from project."""
        temp_dir = Path(tempfile.mkdtemp(prefix=f"adk_{project.id}_{session_id}_"))
        self._temp_dirs[session_id] = temp_dir
        
        # Write tools
        if project.custom_tools:
            tools_lines = ['"""Custom tools."""', "", "from typing import Any, Optional", ""]
            for tool in project.custom_tools:
                tools_lines.append(tool.code)
                tools_lines.append("")
            (temp_dir / "tools.py").write_text("\n".join(tools_lines))
        
        # Write callbacks
        if project.custom_callbacks:
            callbacks_lines = [
                '"""Custom callbacks."""', "",
                "from typing import Any, Optional",
                "from google.adk.agents.callback_context import CallbackContext",
                "from google.genai import types", "",
            ]
            for callback in project.custom_callbacks:
                callbacks_lines.append(callback.code)
                callbacks_lines.append("")
            (temp_dir / "callbacks.py").write_text("\n".join(callbacks_lines))
            
            # Also create callbacks package for module paths like "callbacks.custom"
            callbacks_pkg = temp_dir / "callbacks"
            callbacks_pkg.mkdir(exist_ok=True)
            (callbacks_pkg / "__init__.py").write_text("")
            (callbacks_pkg / "custom.py").write_text("\n".join(callbacks_lines))
        
        (temp_dir / "__init__.py").write_text("")
        
        # Add to sys.path
        if str(temp_dir) not in sys.path:
            sys.path.insert(0, str(temp_dir))
        
        # Add backend dir for skillset, knowledge_service imports
        backend_dir = Path(__file__).parent
        if str(backend_dir) not in sys.path:
            sys.path.insert(0, str(backend_dir))
        
        logger.info(f"Prepared temp dir: {temp_dir}")
        return temp_dir
    
    def _cleanup_temp_dir(self, session_id: str) -> None:
        """Clean up temp directory for a session."""
        if session_id in self._temp_dirs:
            temp_dir = self._temp_dirs[session_id]
            if str(temp_dir) in sys.path:
                sys.path.remove(str(temp_dir))
            import shutil
            try:
                shutil.rmtree(temp_dir)
            except Exception as e:
                logger.warning(f"Failed to cleanup temp dir: {e}")
            del self._temp_dirs[session_id]
    
    def _execute_generated_code(self, project: Project) -> Any:
        """Execute generated code and return the app.
        
        Returns:
            The App object from the executed code
        """
        code = generate_python_code(project)
        logger.debug(f"Executing generated code ({len(code)} chars)")
        
        # Clear cached modules to ensure fresh imports
        for mod_name in list(sys.modules.keys()):
            if mod_name in ["tools", "callbacks"] or mod_name.startswith("callbacks."):
                del sys.modules[mod_name]
        
        # Execute the code
        namespace = {"__builtins__": __builtins__, "__name__": "__main__"}
        exec(compile(code, "<generated>", "exec"), namespace)
        
        if "app" not in namespace:
            raise ValueError("Generated code did not produce an 'app' variable")
        
        return namespace["app"]
    
    async def run_agent(
        self,
        project: Project,
        user_message: str,
        event_callback,
        agent_id: Optional[str] = None,
        session_id: Optional[str] = None,
    ) -> AsyncGenerator[RunEvent, None]:
        """Run an agent and stream events."""
        if not session_id:
            session_id = str(uuid.uuid4())[:8]
        
        # Get or create RunSession
        session = self.sessions.get(session_id)
        if session:
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
            # Set environment variables
            import os
            for key, value in (project.app.env_vars or {}).items():
                if value:
                    os.environ[key] = value
            
            # Prepare temp directory with tool/callback files
            self._prepare_temp_dir(project, session_id)
            
            # Execute generated code to get the app
            app = self._execute_generated_code(project)
            
            # Create tracking plugin and inject it
            tracking = TrackingPlugin(session, event_callback)
            
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
            
            # Inject tracking plugin at the beginning
            if not hasattr(app, 'plugins') or app.plugins is None:
                app.plugins = []
            app.plugins.insert(0, TrackingPluginWrapper(tracking))
            
            # Create services
            from google.adk.runners import Runner
            from google.genai import types
            
            session_service = create_session_service_from_uri(project.app.session_service_uri or "memory://")
            memory_service = create_memory_service_from_uri(project.app.memory_service_uri or "memory://")
            artifact_service = create_artifact_service_from_uri(project.app.artifact_service_uri or "memory://")
            
            # Check for existing ADK session
            adk_session = await session_service.get_session(
                app_name=project.app.name,
                user_id="playground_user",
                session_id=session_id,
            )
            session_reused = adk_session is not None
            
            # Create runner
            runner = Runner(
                app=app,
                session_service=session_service,
                artifact_service=artifact_service,
                memory_service=memory_service,
            )
            
            # Create ADK session if needed
            if not adk_session:
                adk_session = await runner.session_service.create_session(
                    app_name=project.app.name,
                    user_id="playground_user",
                    session_id=session_id,
                )
            
                session.id = adk_session.id
                session_id = adk_session.id
                self.sessions[session_id] = session
            
            # Yield session info
            yield RunEvent(
                timestamp=time.time(),
                event_type="agent_start",
                agent_name="system",
                data={"session_id": adk_session.id, "session_reused": session_reused},
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
            
            # Save to memory if available
            if memory_service and final_session:
                try:
                    await memory_service.add_session_to_memory(final_session)
                except Exception as e:
                    logger.warning(f"Failed to save session to memory: {e}")
            
            await runner.close()
            
        except Exception as e:
            session.status = "error"
            session.ended_at = time.time()
            logger.error(f"Agent run failed: {e}", exc_info=True)
            yield RunEvent(
                timestamp=time.time(),
                event_type="agent_end",
                agent_name="system",
                data={"error": str(e)},
            )
        finally:
            self._running[session_id] = False
            self._cleanup_temp_dir(session_id)
    
    def stop_run(self, session_id: str):
        """Stop a running session."""
        self._running[session_id] = False
    
    def get_session(self, session_id: str) -> Optional[RunSession]:
        """Get a session by ID."""
        return self.sessions.get(session_id)
    
    async def list_sessions_from_service(self, project: Project) -> List[dict]:
        """List all sessions from the session service."""
        try:
            session_service = create_session_service_from_uri(project.app.session_service_uri or "memory://")
            response = await session_service.list_sessions(
                app_name=project.app.name,
                user_id=None,  # List all users' sessions
            )
            
            sessions = []
            for adk_session in response.sessions:
                duration = None
                if adk_session.events and len(adk_session.events) > 0:
                        first_time = adk_session.events[0].timestamp
                        last_time = adk_session.events[-1].timestamp
                        duration = last_time - first_time
                
                sessions.append({
                    "id": adk_session.id,
                    "user_id": adk_session.user_id,  # Include user_id for loading
                    "started_at": adk_session.events[0].timestamp if adk_session.events else adk_session.last_update_time,
                    "ended_at": adk_session.last_update_time if adk_session.events else None,
                    "duration": duration,
                    "event_count": len(adk_session.events),
                })
            
            sessions.sort(key=lambda x: x["started_at"], reverse=True)
            return sessions
        except Exception as e:
            logger.error(f"Failed to list sessions: {e}", exc_info=True)
            return []
    
    async def load_session_from_service(self, project: Project, session_id: str, user_id: Optional[str] = None) -> Optional[RunSession]:
        """Load a session from the session service."""
        try:
            session_service = create_session_service_from_uri(project.app.session_service_uri or "memory://")
            
            # Try with provided user_id first, then common fallbacks
            user_ids_to_try = [user_id] if user_id else []
            user_ids_to_try.extend(["playground_user", "sandbox_user"])
            
            adk_session = None
            for uid in user_ids_to_try:
                if uid is None:
                    continue
                try:
                    adk_session = await session_service.get_session(
                        app_name=project.app.name,
                        user_id=uid,
                        session_id=session_id,
                    )
                    if adk_session:
                        break
                except Exception:
                    continue
            
            if not adk_session:
                return None
            
            # Convert ADK events to RunEvents
            run_events = []
            for event in adk_session.events:
                event_data = {}
                event_type = "model_response"
                
                if event.content and event.content.parts:
                    parts_data = []
                    for part in event.content.parts:
                        if hasattr(part, 'text') and part.text:
                            parts_data.append({"type": "text", "text": part.text})
                        elif hasattr(part, 'function_call') and part.function_call:
                            fc = part.function_call
                            parts_data.append({
                                "type": "function_call",
                                "name": getattr(fc, "name", "unknown"),
                                "args": dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {},
                            })
                        elif hasattr(part, 'function_response') and part.function_response:
                            fr = part.function_response
                            parts_data.append({
                                "type": "function_response",
                                "name": getattr(fr, "name", "unknown"),
                                "response": getattr(fr, "response", None),
                            })
                    
                    if parts_data:
                        event_data["response_content"] = {"parts": parts_data}
                
                if hasattr(event, 'actions') and event.actions and event.actions.state_delta:
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
            
            return RunSession(
                id=adk_session.id,
                project_id=project.id,
                started_at=adk_session.events[0].timestamp if adk_session.events else adk_session.last_update_time,
                ended_at=adk_session.last_update_time,
                status="completed",
                events=run_events,
                final_state=dict(adk_session.state) if adk_session.state else {},
                token_counts={},
            )
        except Exception as e:
            logger.error(f"Failed to load session: {e}", exc_info=True)
            return None
    
    async def save_session_to_memory(self, project: Project, session_id: str) -> dict:
        """Save a session to memory service."""
        session = self.get_session(session_id)
        if not session:
            return {"success": False, "error": "Session not found"}
        
        try:
            memory_service = create_memory_service_from_uri(project.app.memory_service_uri or "memory://")
            session_service = create_session_service_from_uri(project.app.session_service_uri or "memory://")
            
            adk_session = await session_service.get_session(
                app_name=project.app.name,
                user_id="playground_user",
                session_id=session_id,
            )
            
            if not adk_session:
                return {"success": False, "error": "ADK session not found"}
            
            await memory_service.add_session_to_memory(adk_session)
            return {"success": True, "message": f"Session {session_id} saved to memory"}
        except Exception as e:
            logger.error(f"Failed to save session to memory: {e}", exc_info=True)
            return {"success": False, "error": str(e)}
