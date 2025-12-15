"""Agent runner that executes inside the Docker sandbox.

This script:
1. Receives the project configuration via environment or mounted file
2. Loads and executes the ADK agent
3. Spawns stdio MCP servers as subprocesses
4. Streams events back to the host via HTTP/WebSocket

All network traffic goes through the HTTP_PROXY (gateway).
"""

import asyncio
import json
import logging
import os
import sys
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

import aiohttp
from aiohttp import web

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MCP imports - optional, may not be available
try:
    from mcp import ClientSession, StdioServerParameters
    from mcp.client.stdio import stdio_client
    MCP_AVAILABLE = True
except ImportError:
    MCP_AVAILABLE = False
    logger.warning("MCP SDK not available - MCP tool execution disabled")


# Configuration
HOST_URL = os.environ.get("HOST_URL", "http://host.docker.internal:8080")
WORKSPACE_PATH = os.environ.get("WORKSPACE_PATH", "/workspace")
PROJECT_CONFIG_PATH = os.environ.get("PROJECT_CONFIG_PATH", "/config/project.json")
API_PORT = int(os.environ.get("API_PORT", "5000"))
MCP_SERVERS_CONFIG = os.environ.get("MCP_SERVERS_CONFIG", "{}")


class MCPSessionManager:
    """Manages MCP server connections for tool execution.
    
    This allows external callers to execute MCP tools inside the container,
    useful for Tool Watches and debugging.
    """
    
    def __init__(self):
        self._sessions: Dict[str, Any] = {}  # server_name -> (session, context_manager)
        self._server_configs: Dict[str, dict] = {}
        self._load_configs()
    
    def _load_configs(self):
        """Load MCP server configurations from environment."""
        try:
            config = json.loads(MCP_SERVERS_CONFIG)
            if isinstance(config, dict):
                # Handle format from docker_manager: {"stdio_mcp_servers": [{"name": ..., "command": ...}]}
                if "stdio_mcp_servers" in config:
                    for server in config["stdio_mcp_servers"]:
                        name = server.get("name")
                        if name:
                            self._server_configs[name] = {
                                "command": server.get("command", ""),
                                "args": server.get("args", []),
                                "env": server.get("env", {}),
                            }
                else:
                    # Direct format: {"server_name": {"command": ...}}
                    self._server_configs = config
                logger.info(f"Loaded {len(self._server_configs)} MCP server configs: {list(self._server_configs.keys())}")
        except json.JSONDecodeError as e:
            logger.warning(f"Failed to parse MCP_SERVERS_CONFIG: {e}")
    
    def list_servers(self) -> List[dict]:
        """List available MCP servers."""
        servers = []
        for name, config in self._server_configs.items():
            servers.append({
                "name": name,
                "command": config.get("command", ""),
                "args": config.get("args", []),
                "connected": name in self._sessions,
            })
        return servers
    
    async def connect(self, server_name: str) -> Optional[Any]:
        """Connect to an MCP server if not already connected."""
        if not MCP_AVAILABLE:
            raise RuntimeError("MCP SDK not available")
        
        if server_name in self._sessions:
            return self._sessions[server_name]["session"]
        
        if server_name not in self._server_configs:
            raise ValueError(f"Unknown MCP server: {server_name}")
        
        config = self._server_configs[server_name]
        
        # Build environment with proxy variables
        env = {}
        for key in ["HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY", "UV_HTTP_PROXY", 
                    "UV_HTTPS_PROXY", "NPM_CONFIG_PROXY", "NPM_CONFIG_HTTPS_PROXY",
                    "http_proxy", "https_proxy", "no_proxy"]:
            if key in os.environ:
                env[key] = os.environ[key]
        # Add server-specific env vars
        if config.get("env"):
            env.update(config["env"])
        
        server_params = StdioServerParameters(
            command=config.get("command", ""),
            args=config.get("args", []),
            env=env if env else None,
        )
        
        try:
            # Create the stdio client context manager
            client_cm = stdio_client(server_params)
            read_stream, write_stream = await client_cm.__aenter__()
            
            # Create and initialize the session
            session = ClientSession(read_stream, write_stream)
            await session.__aenter__()
            await session.initialize()
            
            self._sessions[server_name] = {
                "session": session,
                "client_cm": client_cm,
            }
            
            logger.info(f"Connected to MCP server: {server_name}")
            return session
            
        except Exception as e:
            logger.error(f"Failed to connect to MCP server {server_name}: {e}")
            raise
    
    async def disconnect(self, server_name: str):
        """Disconnect from an MCP server."""
        if server_name not in self._sessions:
            return
        
        try:
            session_data = self._sessions.pop(server_name)
            await session_data["session"].__aexit__(None, None, None)
            await session_data["client_cm"].__aexit__(None, None, None)
            logger.info(f"Disconnected from MCP server: {server_name}")
        except Exception as e:
            logger.warning(f"Error disconnecting from {server_name}: {e}")
    
    async def disconnect_all(self):
        """Disconnect from all MCP servers."""
        for server_name in list(self._sessions.keys()):
            await self.disconnect(server_name)
    
    async def list_tools(self, server_name: str) -> List[dict]:
        """List tools available from an MCP server."""
        session = await self.connect(server_name)
        result = await session.list_tools()
        
        tools = []
        for tool in result.tools:
            tools.append({
                "name": tool.name,
                "description": tool.description or "",
                "input_schema": tool.inputSchema if hasattr(tool, "inputSchema") else {},
            })
        return tools
    
    async def call_tool(self, server_name: str, tool_name: str, args: dict) -> Any:
        """Call a tool on an MCP server."""
        session = await self.connect(server_name)
        result = await session.call_tool(tool_name, args)
        
        # Convert result to JSON-serializable format
        if hasattr(result, "content"):
            content = []
            for item in result.content:
                if hasattr(item, "text"):
                    content.append({"type": "text", "text": item.text})
                elif hasattr(item, "data"):
                    content.append({"type": "data", "data": str(item.data)})
                else:
                    content.append({"type": "unknown", "value": str(item)})
            return {"content": content, "isError": getattr(result, "isError", False)}
        return {"result": str(result)}


# Global MCP session manager
mcp_manager = MCPSessionManager()


class TrackingPlugin:
    """Plugin that tracks all events during agent execution.
    
    This mirrors the TrackingPlugin from runtime.py to capture
    model_call, model_response, tool_call, tool_result, etc.
    """
    
    def __init__(self, emit_callback):
        self.emit_callback = emit_callback
        self.token_counts = {"input": 0, "output": 0}
    
    async def _emit(self, event: Dict[str, Any]):
        """Emit an event."""
        try:
            await self.emit_callback(event)
        except Exception as e:
            logger.error(f"Failed to emit event {event.get('event_type')}: {e}")
    
    async def _emit_error(self, source: str, error: Exception, context: str = ""):
        """Emit an error event that will show in the message list."""
        import traceback
        await self._emit({
            "event_type": "callback_error",
            "timestamp": time.time(),
            "agent_name": "system",
            "data": {
                "source": source,
                "error": str(error),
                "error_type": type(error).__name__,
                "context": context,
                "traceback": traceback.format_exc(),
            },
        })
    
    async def before_agent_callback(self, *, agent, callback_context, **kwargs):
        try:
            await self._emit({
                "event_type": "agent_start",
                "timestamp": time.time(),
                "agent_name": agent.name,
                "data": {"instruction": getattr(agent, "instruction", "") or ""},
            })
        except Exception as e:
            logger.error(f"Error in before_agent_callback for {agent.name}: {e}")
            await self._emit_error("before_agent_callback", e, f"agent={agent.name}")
        return None
    
    async def after_agent_callback(self, *, agent, callback_context, **kwargs):
        try:
            await self._emit({
                "event_type": "agent_end",
                "timestamp": time.time(),
                "agent_name": agent.name,
                "data": {},
            })
        except Exception as e:
            logger.error(f"Error in after_agent_callback for {agent.name}: {e}")
            await self._emit_error("after_agent_callback", e, f"agent={agent.name}")
        return None
    
    async def on_event_callback(self, *, invocation_context, event, **kwargs):
        if hasattr(event, "actions") and event.actions and event.actions.state_delta:
            state_delta = dict(event.actions.state_delta)
            author = getattr(event, "author", None) or "system"
            
            # Check for callback instrumentation events (keys like _cb_start_xxx or _cb_end_xxx)
            callback_keys = [k for k in state_delta.keys() if k.startswith("_cb_start_") or k.startswith("_cb_end_")]
            for key in callback_keys:
                cb_event = state_delta.pop(key)
                if isinstance(cb_event, dict):
                    event_type = "callback_start" if cb_event.get("type") == "callback_start" else "callback_end"
                    await self._emit({
                        "event_type": event_type,
                        "timestamp": cb_event.get("ts", time.time()),
                        "agent_name": author,
                        "data": {
                            "callback_name": cb_event.get("name", "unknown"),
                            "callback_type": cb_event.get("callback_type", ""),
                        },
                    })
            
            # Emit state change for remaining state delta (if any)
            if state_delta:
                await self._emit({
                    "event_type": "state_change",
                    "timestamp": time.time(),
                    "agent_name": author,
                    "data": {"state_delta": state_delta},
                })
        return None
    
    async def before_model_callback(self, *, callback_context, llm_request, **kwargs):
        try:
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
            
            await self._emit({
                "event_type": "model_call",
                "timestamp": time.time(),
                "agent_name": getattr(callback_context, "agent_name", None) or "system",
                "data": {
                    "contents": contents,
                    "system_instruction": system_instruction,
                    "tool_names": tool_names,
                    "tool_count": len(tool_names),
                },
            })
        except Exception as e:
            logger.error(f"Error in before_model_callback: {e}")
            await self._emit_error("before_model_callback", e, "")
        return None
    
    async def after_model_callback(self, *, callback_context, llm_response, **kwargs):
        try:
            response_parts = []
            if hasattr(llm_response, "content") and llm_response.content:
                if hasattr(llm_response.content, "parts") and llm_response.content.parts:
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
            
            await self._emit({
                "event_type": "model_response",
                "timestamp": time.time(),
                "agent_name": getattr(callback_context, "agent_name", None) or "system",
                "data": {"parts": response_parts, "token_counts": dict(self.token_counts)},
            })
        except Exception as e:
            logger.error(f"Error in after_model_callback: {e}")
            await self._emit_error("after_model_callback", e, "")
        return None
    
    async def before_tool_callback(self, *, tool, tool_args, tool_context, **kwargs):
        try:
            # Serialize args safely
            safe_args = {}
            if tool_args:
                for k, v in tool_args.items():
                    try:
                        json.dumps(v)  # Test if serializable
                        safe_args[k] = v
                    except (TypeError, ValueError):
                        safe_args[k] = str(v)
            
            await self._emit({
                "event_type": "tool_call",
                "timestamp": time.time(),
                "agent_name": getattr(tool_context, "agent_name", None) or "system",
                "data": {"tool_name": tool.name, "args": safe_args},
            })
        except Exception as e:
            logger.error(f"Error in before_tool_callback for {tool.name}: {e}")
            await self._emit_error("before_tool_callback", e, f"tool={tool.name}")
        return None
    
    async def after_tool_callback(self, *, tool, tool_args, tool_context, result, **kwargs):
        try:
            if hasattr(tool_context, "_event_actions") and tool_context._event_actions.state_delta:
                await self._emit({
                    "event_type": "state_change",
                    "timestamp": time.time(),
                    "agent_name": getattr(tool_context, "agent_name", None) or "system",
                    "data": {"state_delta": dict(tool_context._event_actions.state_delta)},
                })
            
            # Serialize result safely
            safe_result = result
            try:
                json.dumps(result)
            except (TypeError, ValueError):
                safe_result = str(result)
            
            await self._emit({
                "event_type": "tool_result",
                "timestamp": time.time(),
                "agent_name": getattr(tool_context, "agent_name", None) or "system",
                "data": {"tool_name": tool.name, "result": safe_result},
            })
        except Exception as e:
            logger.error(f"Error in after_tool_callback for {tool.name}: {e}")
            await self._emit_error("after_tool_callback", e, f"tool={tool.name}")
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
                    if part_data:
                        content_data["parts"].append(part_data)
            
            result.append(content_data)
        
        return result


class AgentRunner:
    """Runs ADK agents inside the sandbox."""
    
    def __init__(self):
        self.generated_code: Optional[str] = None
        self.project_name: Optional[str] = None
        self.app_id: Optional[str] = None
        self.running = False
        self.session_id: Optional[str] = None
        self.events: List[Dict[str, Any]] = []
        self._event_queue: asyncio.Queue = asyncio.Queue()
    
    async def load_project(self, data: Dict[str, Any]):
        """Load generated Python code for the project.
        
        Args:
            data: Dict with 'code' (generated Python code), 'project_name', and 'app_id'
        """
        self.generated_code = data.get("code")
        self.project_name = data.get("project_name", "sandbox_app")
        self.app_id = data.get("app_id")
        logger.info(f"Loaded project: {self.project_name} (app_id={self.app_id}, {len(self.generated_code or '')} chars)")
    
    async def run_agent(
        self,
        user_message: str,
        session_id: Optional[str] = None,
    ) -> str:
        """Run the agent with the given message.
        
        Returns:
            The session ID
        """
        if not self.generated_code:
            raise ValueError("No project loaded")
        
        self.session_id = session_id or str(uuid.uuid4())[:8]
        self.running = True
        self.events = []
        
        try:
            # Add workspace to path
            workspace = Path(WORKSPACE_PATH)
            if str(workspace) not in sys.path:
                sys.path.insert(0, str(workspace))
            
            # Import ADK components
            from google.adk.runners import Runner
            from google.adk.sessions.in_memory_session_service import InMemorySessionService
            from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
            from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
            from google.adk.plugins import BasePlugin
            from google.genai import types
            
            # Create tracking plugin to capture all events
            tracker = TrackingPlugin(emit_callback=self._emit_event)
            
            # Wrap tracker as BasePlugin
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
            
            # Execute the generated code to get the app
            logger.info(f"Executing generated code ({len(self.generated_code)} chars)")
            namespace = {"__builtins__": __builtins__, "__name__": "__main__"}
            exec(compile(self.generated_code, "<generated>", "exec"), namespace)
            
            if "app" not in namespace:
                raise ValueError("Generated code did not produce an 'app' variable")
            
            app = namespace["app"]
            
            # Add tracking plugin to the app
            if hasattr(app, "plugins") and app.plugins is not None:
                app.plugins.append(TrackingPluginWrapper(tracker))
            else:
                app.plugins = [TrackingPluginWrapper(tracker)]
            
            # Create services
            session_service = InMemorySessionService()
            artifact_service = InMemoryArtifactService()
            memory_service = InMemoryMemoryService()
            
            # Create runner
            runner = Runner(
                app=app,
                session_service=session_service,
                artifact_service=artifact_service,
                memory_service=memory_service,
            )
            
            # Create session
            adk_session = await runner.session_service.create_session(
                app_name=app.name,
                user_id="sandbox_user",
                session_id=self.session_id,
            )
            
            # Run the agent - events are captured by the TrackingPlugin callbacks
            content = types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_message)],
            )
            
            async for event in runner.run_async(
                user_id=adk_session.user_id,
                session_id=adk_session.id,
                new_message=content,
            ):
                if not self.running:
                    break
                # Process the event to extract tool calls/results that plugin callbacks might miss
                await self._process_event(event)
            
            await runner.close()
            
        except Exception as e:
            logger.error(f"Agent run failed: {e}", exc_info=True)
            await self._emit_event({
                "type": "error",
                "error": str(e),
                "timestamp": time.time(),
            })
        finally:
            self.running = False
        
        return self.session_id
    
    async def _process_event(self, event):
        """Process an ADK Event for additional data.
        
        Note: Tool calls and results are already emitted by TrackingPlugin callbacks,
        so we don't emit them here to avoid duplication.
        
        This method can be extended to process other event data in the future.
        """
        # Currently, all needed events are captured by TrackingPlugin callbacks.
        # This method is kept for potential future use (e.g., capturing state changes
        # or other event data that callbacks might miss).
        pass
    
    async def _emit_event(self, event: Dict[str, Any]):
        """Emit an event to the queue and notify host."""
        self.events.append(event)
        await self._event_queue.put(event)
        
        # Also send to host webhook with app_id
        # Must use proxy since we're on an internal network
        proxy_url = os.environ.get("HTTP_PROXY")
        try:
            event_with_app_id = {**event, "app_id": self.app_id}
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"{HOST_URL}/api/sandbox/event",
                    json=event_with_app_id,
                    proxy=proxy_url,  # Route through gateway
                    timeout=aiohttp.ClientTimeout(total=5),
                ) as resp:
                    if resp.status != 200:
                        logger.warning(f"Event webhook returned {resp.status}")
        except Exception as e:
            logger.warning(f"Failed to notify host: {e}")
    
    def stop(self):
        """Stop the current run."""
        self.running = False


# Global runner instance
runner = AgentRunner()


# HTTP API handlers
async def health_check(request: web.Request) -> web.Response:
    """Health check endpoint."""
    return web.json_response({"status": "ok", "running": runner.running})


async def load_project(request: web.Request) -> web.Response:
    """Load project configuration."""
    data = await request.json()
    await runner.load_project(data)
    return web.json_response({"status": "loaded"})


async def run_agent(request: web.Request) -> web.Response:
    """Run the agent."""
    data = await request.json()
    user_message = data.get("message", "")
    session_id = data.get("session_id")
    wait_for_completion = data.get("wait", True)  # Default to sync mode
    
    if not user_message:
        return web.json_response({"error": "message required"}, status=400)
    
    if wait_for_completion:
        # Run synchronously and wait for completion
        try:
            result_session_id = await runner.run_agent(user_message, session_id)
            return web.json_response({
                "status": "completed",
                "session_id": result_session_id,
                "events": runner.events,
            })
        except Exception as e:
            logger.error(f"Agent run failed: {e}")
            return web.json_response({
                "status": "error",
                "error": str(e),
                "events": runner.events,
            }, status=500)
    else:
        # Run in background (async mode)
        asyncio.create_task(runner.run_agent(user_message, session_id))
        return web.json_response({
            "status": "started",
            "session_id": runner.session_id,
        })


async def stop_agent(request: web.Request) -> web.Response:
    """Stop the current run."""
    runner.stop()
    return web.json_response({"status": "stopped"})


async def get_events(request: web.Request) -> web.Response:
    """Get all events from the current/last run."""
    return web.json_response({"events": runner.events})


async def stream_events(request: web.Request) -> web.StreamResponse:
    """Stream events via Server-Sent Events."""
    response = web.StreamResponse(
        status=200,
        reason="OK",
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    )
    await response.prepare(request)
    
    while True:
        try:
            event = await asyncio.wait_for(
                runner._event_queue.get(),
                timeout=30,
            )
            data = json.dumps(event)
            await response.write(f"data: {data}\n\n".encode())
        except asyncio.TimeoutError:
            # Send keepalive
            await response.write(b": keepalive\n\n")
        except Exception:
            break
    
    return response


async def mcp_list_servers(request: web.Request) -> web.Response:
    """List available MCP servers."""
    try:
        servers = mcp_manager.list_servers()
        return web.json_response({"servers": servers})
    except Exception as e:
        logger.error(f"Failed to list MCP servers: {e}")
        return web.json_response({"error": str(e)}, status=500)


async def mcp_list_tools(request: web.Request) -> web.Response:
    """List tools from an MCP server."""
    try:
        data = await request.json()
        server_name = data.get("server")
        if not server_name:
            return web.json_response({"error": "server name required"}, status=400)
        
        tools = await mcp_manager.list_tools(server_name)
        return web.json_response({"tools": tools})
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        logger.error(f"Failed to list MCP tools: {e}")
        return web.json_response({"error": str(e)}, status=500)


async def mcp_call_tool(request: web.Request) -> web.Response:
    """Call a tool on an MCP server."""
    try:
        data = await request.json()
        server_name = data.get("server")
        tool_name = data.get("tool")
        args = data.get("args", {})
        
        if not server_name:
            return web.json_response({"error": "server name required"}, status=400)
        if not tool_name:
            return web.json_response({"error": "tool name required"}, status=400)
        
        result = await mcp_manager.call_tool(server_name, tool_name, args)
        return web.json_response({"result": result})
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        logger.error(f"Failed to call MCP tool: {e}", exc_info=True)
        return web.json_response({"error": str(e)}, status=500)


async def mcp_disconnect(request: web.Request) -> web.Response:
    """Disconnect from an MCP server."""
    try:
        data = await request.json()
        server_name = data.get("server")
        if server_name:
            await mcp_manager.disconnect(server_name)
        else:
            await mcp_manager.disconnect_all()
        return web.json_response({"status": "disconnected"})
    except Exception as e:
        logger.error(f"Failed to disconnect MCP: {e}")
        return web.json_response({"error": str(e)}, status=500)


def create_app() -> web.Application:
    """Create the HTTP API application."""
    app = web.Application()
    
    # Agent endpoints
    app.router.add_get("/health", health_check)
    app.router.add_post("/project", load_project)
    app.router.add_post("/run", run_agent)
    app.router.add_post("/stop", stop_agent)
    app.router.add_get("/events", get_events)
    app.router.add_get("/events/stream", stream_events)
    
    # MCP endpoints - for Tool Watches and debugging
    app.router.add_get("/mcp/servers", mcp_list_servers)
    app.router.add_post("/mcp/tools", mcp_list_tools)
    app.router.add_post("/mcp/call", mcp_call_tool)
    app.router.add_post("/mcp/disconnect", mcp_disconnect)
    
    return app


async def main():
    """Run the agent runner API."""
    # Check if project config exists
    config_path = Path(PROJECT_CONFIG_PATH)
    if config_path.exists():
        with open(config_path) as f:
            config = json.load(f)
        await runner.load_project(config)
    
    app = create_app()
    app_runner = web.AppRunner(app)
    await app_runner.setup()
    
    site = web.TCPSite(app_runner, "0.0.0.0", API_PORT)
    await site.start()
    
    logger.info(f"Agent runner API running on port {API_PORT}")
    
    # Keep running
    while True:
        await asyncio.sleep(3600)


if __name__ == "__main__":
    asyncio.run(main())

