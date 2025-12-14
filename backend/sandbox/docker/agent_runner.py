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


# Configuration
HOST_URL = os.environ.get("HOST_URL", "http://host.docker.internal:8080")
WORKSPACE_PATH = os.environ.get("WORKSPACE_PATH", "/workspace")
PROJECT_CONFIG_PATH = os.environ.get("PROJECT_CONFIG_PATH", "/config/project.json")
API_PORT = int(os.environ.get("API_PORT", "5000"))


class AgentRunner:
    """Runs ADK agents inside the sandbox."""
    
    def __init__(self):
        self.project_config: Optional[Dict[str, Any]] = None
        self.running = False
        self.session_id: Optional[str] = None
        self.events: List[Dict[str, Any]] = []
        self._event_queue: asyncio.Queue = asyncio.Queue()
    
    async def load_project(self, config: Dict[str, Any]):
        """Load project configuration."""
        self.project_config = config
        logger.info(f"Loaded project: {config.get('name', 'unknown')}")
    
    async def run_agent(
        self,
        user_message: str,
        session_id: Optional[str] = None,
    ) -> str:
        """Run the agent with the given message.
        
        Returns:
            The session ID
        """
        if not self.project_config:
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
            from google.genai import types
            
            # Execute the generated code to get the app
            app = await self._build_app()
            
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
            
            # Emit start event
            await self._emit_event({
                "type": "agent_start",
                "session_id": adk_session.id,
                "timestamp": time.time(),
            })
            
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
                if not self.running:
                    break
                
                # Convert event to dict and emit
                event_data = self._serialize_event(event)
                await self._emit_event(event_data)
            
            # Get final state
            final_session = await runner.session_service.get_session(
                app_name=app.name,
                user_id=adk_session.user_id,
                session_id=adk_session.id,
            )
            
            # Emit end event
            await self._emit_event({
                "type": "agent_end",
                "session_id": adk_session.id,
                "timestamp": time.time(),
                "final_state": dict(final_session.state) if final_session else {},
            })
            
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
    
    async def _build_app(self):
        """Build the ADK app from project config."""
        # This is a simplified version - the real implementation
        # would generate code similar to code_generator.py
        from google.adk import Agent
        from google.adk.apps import App
        
        config = self.project_config
        app_config = config.get("app", {})
        agents = config.get("agents", [])
        
        # Find root agent
        root_agent_id = app_config.get("root_agent_id")
        if not root_agent_id and agents:
            root_agent_id = agents[0].get("id")
        
        # Build agents (simplified)
        agent_map = {}
        for agent_config in agents:
            agent = Agent(
                name=agent_config.get("name", agent_config.get("id")),
                model=self._get_model_string(agent_config),
                instruction=agent_config.get("instruction", ""),
                description=agent_config.get("description", ""),
            )
            agent_map[agent_config.get("id")] = agent
        
        # Get root agent
        root_agent = agent_map.get(root_agent_id)
        if not root_agent:
            # Create a default agent
            root_agent = Agent(
                name="assistant",
                model="gemini-2.0-flash",
                instruction="You are a helpful assistant.",
            )
        
        # Create app
        app = App(
            name=app_config.get("name", config.get("name", "sandbox_app")),
            root_agent=root_agent,
        )
        
        return app
    
    def _get_model_string(self, agent_config: Dict[str, Any]) -> str:
        """Get model string from agent config."""
        model_config = agent_config.get("model", {})
        if not model_config:
            return "gemini-2.0-flash"
        
        provider = model_config.get("provider", "gemini")
        model_name = model_config.get("model_name", "gemini-2.0-flash")
        
        if provider == "gemini":
            return model_name
        else:
            return f"{provider}/{model_name}"
    
    def _serialize_event(self, event) -> Dict[str, Any]:
        """Serialize an ADK event to dict."""
        data = {
            "type": "event",
            "timestamp": time.time(),
            "author": getattr(event, "author", None),
        }
        
        if hasattr(event, "content") and event.content:
            parts = []
            if hasattr(event.content, "parts"):
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        parts.append({"type": "text", "text": part.text})
                    elif hasattr(part, "function_call") and part.function_call:
                        fc = part.function_call
                        parts.append({
                            "type": "function_call",
                            "name": getattr(fc, "name", "unknown"),
                            "args": dict(getattr(fc, "args", {})) if hasattr(fc, "args") else {},
                        })
                    elif hasattr(part, "function_response") and part.function_response:
                        fr = part.function_response
                        parts.append({
                            "type": "function_response",
                            "name": getattr(fr, "name", "unknown"),
                            "response": getattr(fr, "response", None),
                        })
            data["parts"] = parts
        
        return data
    
    async def _emit_event(self, event: Dict[str, Any]):
        """Emit an event to the queue and notify host."""
        self.events.append(event)
        await self._event_queue.put(event)
        
        # Also send to host webhook
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"{HOST_URL}/api/sandbox/event",
                    json=event,
                    timeout=aiohttp.ClientTimeout(total=5),
                ) as resp:
                    pass
        except Exception as e:
            logger.debug(f"Failed to notify host: {e}")
    
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
    
    if not user_message:
        return web.json_response({"error": "message required"}, status=400)
    
    # Run in background
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


def create_app() -> web.Application:
    """Create the HTTP API application."""
    app = web.Application()
    
    app.router.add_get("/health", health_check)
    app.router.add_post("/project", load_project)
    app.router.add_post("/run", run_agent)
    app.router.add_post("/stop", stop_agent)
    app.router.add_get("/events", get_events)
    app.router.add_get("/events/stream", stream_events)
    
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

