"""FastAPI backend for ADK Playground."""

from __future__ import annotations

import asyncio
import json
import os
from pathlib import Path
from typing import List, Optional

import yaml
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from models import (
    Project, AppConfig, AgentConfig, LlmAgentConfig, SequentialAgentConfig,
    LoopAgentConfig, ParallelAgentConfig, CustomToolDefinition, MCPServerConfig,
    EvalTestGroup, EvalResult, RunEvent,
)
from project_manager import ProjectManager
from runtime import RuntimeManager
from known_mcp_servers import KNOWN_MCP_SERVERS, BUILTIN_TOOLS

# Get projects directory from environment variable, default to ~/adk_tmp/projects
PROJECTS_DIR = Path(
    os.environ.get("ADK_PLAYGROUND_PROJECTS_DIR", str(Path.home() / "adk_tmp" / "projects"))
)
PROJECTS_DIR.mkdir(parents=True, exist_ok=True)

# Initialize managers
project_manager = ProjectManager(str(PROJECTS_DIR))
runtime_manager = RuntimeManager(str(PROJECTS_DIR))


# ============================================================================
# MCP Connection Pool
# ============================================================================

class MCPConnectionPool:
    """Manages persistent MCP server connections to avoid startup delays."""
    
    def __init__(self):
        self._toolsets: dict[str, any] = {}  # server_key -> MCPToolset
        self._tools_cache: dict[str, list] = {}  # server_key -> list of tools
        self._lock = asyncio.Lock()
        self._last_access: dict[str, float] = {}  # server_key -> timestamp
        self._cleanup_task: asyncio.Task | None = None
    
    def _get_server_key(self, config: dict) -> str:
        """Generate a unique key for a server configuration."""
        conn_type = config.get("connection_type", "stdio")
        if conn_type == "stdio":
            return f"stdio:{config.get('command')}:{':'.join(config.get('args', []))}"
        elif conn_type in ("sse", "http"):
            return f"{conn_type}:{config.get('url')}"
        return f"unknown:{hash(str(config))}"
    
    async def get_toolset(self, config: dict):
        """Get or create a toolset for the given server config."""
        import sys
        import time
        
        if sys.version_info < (3, 10):
            raise RuntimeError(f"MCP requires Python 3.10+, but you have Python {sys.version_info.major}.{sys.version_info.minor}")
        
        from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset
        from google.adk.tools.mcp_tool.mcp_session_manager import (
            StdioConnectionParams,
            SseConnectionParams,
        )
        
        server_key = self._get_server_key(config)
        
        async with self._lock:
            # Check if we already have this toolset
            if server_key in self._toolsets:
                self._last_access[server_key] = time.time()
                return self._toolsets[server_key]
            
            # Create new connection
            connection_type = config.get("connection_type", "stdio")
            
            if connection_type == "stdio":
                command = config.get("command")
                if not command:
                    raise ValueError("Command is required for stdio connection")
                
                connection_params = StdioConnectionParams(
                    server_params={
                        "command": command,
                        "args": config.get("args", []),
                        "env": config.get("env"),
                    }
                )
            elif connection_type == "sse":
                url = config.get("url")
                if not url:
                    raise ValueError("URL is required for SSE connection")
                connection_params = SseConnectionParams(
                    url=url,
                    headers=config.get("headers"),
                )
            else:
                raise ValueError(f"Unknown connection type: {connection_type}")
            
            toolset = MCPToolset(connection_params=connection_params)
            self._toolsets[server_key] = toolset
            self._last_access[server_key] = time.time()
            
            # Start cleanup task if not running
            if self._cleanup_task is None or self._cleanup_task.done():
                self._cleanup_task = asyncio.create_task(self._cleanup_loop())
            
            return toolset
    
    async def get_tools(self, config: dict, timeout: int = 30) -> list:
        """Get tools from a server, using cache if available."""
        import time
        
        server_key = self._get_server_key(config)
        
        # Check cache first
        if server_key in self._tools_cache:
            self._last_access[server_key] = time.time()
            return self._tools_cache[server_key]
        
        # Get toolset and fetch tools
        toolset = await self.get_toolset(config)
        tools = await asyncio.wait_for(toolset.get_tools(), timeout=timeout)
        
        # Cache the tools
        self._tools_cache[server_key] = tools
        return tools
    
    async def call_tool(self, config: dict, tool_name: str, arguments: dict, timeout: int = 30):
        """Call a tool on an MCP server."""
        toolset = await self.get_toolset(config)
        tools = await self.get_tools(config, timeout)
        
        # Find the tool
        tool = next((t for t in tools if t.name == tool_name), None)
        if not tool:
            raise ValueError(f"Tool '{tool_name}' not found on server")
        
        # Call the tool using keyword arguments
        # MCP tools have run_async(*, args: dict, tool_context: ToolContext)
        # We create a minimal mock tool context for direct calls
        from unittest.mock import MagicMock
        mock_context = MagicMock()
        mock_context.actions = MagicMock()
        
        result = await asyncio.wait_for(
            tool.run_async(args=arguments, tool_context=mock_context),
            timeout=timeout
        )
        return result
    
    async def invalidate(self, config: dict = None):
        """Invalidate cached connections. If config is None, invalidate all."""
        async with self._lock:
            if config is None:
                self._toolsets.clear()
                self._tools_cache.clear()
                self._last_access.clear()
            else:
                server_key = self._get_server_key(config)
                self._toolsets.pop(server_key, None)
                self._tools_cache.pop(server_key, None)
                self._last_access.pop(server_key, None)
    
    async def _cleanup_loop(self):
        """Periodically clean up idle connections."""
        import time
        
        IDLE_TIMEOUT = 300  # 5 minutes
        CHECK_INTERVAL = 60  # 1 minute
        
        while True:
            await asyncio.sleep(CHECK_INTERVAL)
            
            now = time.time()
            to_remove = []
            
            async with self._lock:
                for server_key, last_access in self._last_access.items():
                    if now - last_access > IDLE_TIMEOUT:
                        to_remove.append(server_key)
                
                for server_key in to_remove:
                    self._toolsets.pop(server_key, None)
                    self._tools_cache.pop(server_key, None)
                    self._last_access.pop(server_key, None)
                    print(f"[MCP Pool] Closed idle connection: {server_key}")


# Global MCP connection pool
mcp_pool = MCPConnectionPool()

# Determine if we're in production mode (serving static files)
# Set ADK_PLAYGROUND_MODE=production to enable static file serving
# Default is dev mode (separate frontend server)
PRODUCTION_MODE = os.environ.get("ADK_PLAYGROUND_MODE", "dev").lower() == "production"

# Create FastAPI app
app = FastAPI(
    title="ADK Playground",
    description="Visual builder and runtime for Google ADK agents",
    version="0.1.0",
)

# CORS for frontend (only in dev mode)
if not PRODUCTION_MODE:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
            "http://127.0.0.1:3000",
            "http://127.0.0.1:3001",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


# ============================================================================
# Project Endpoints
# ============================================================================

@app.get("/api/projects")
async def list_projects():
    """List all projects."""
    return {"projects": project_manager.list_projects()}


@app.post("/api/projects")
async def create_project(data: dict):
    """Create a new project."""
    project = project_manager.create_project(
        name=data.get("name", "New Project"),
        description=data.get("description", ""),
    )
    return {"project": project.model_dump(mode="json", by_alias=True)}


@app.get("/api/projects/{project_id}")
async def get_project(project_id: str):
    """Get a project by ID."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"project": project.model_dump(mode="json", by_alias=True)}


@app.put("/api/projects/{project_id}")
async def update_project(project_id: str, data: dict):
    """Update a project."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Update from dict
    try:
        updated = Project.model_validate({**project.model_dump(), **data, "id": project_id})
        project_manager.save_project(updated)
        return {"project": updated.model_dump(mode="json")}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.delete("/api/projects/{project_id}")
async def delete_project(project_id: str):
    """Delete a project."""
    if project_manager.delete_project(project_id):
        return {"success": True}
    raise HTTPException(status_code=404, detail="Project not found")


# ============================================================================
# YAML Import/Export
# ============================================================================

@app.get("/api/projects/{project_id}/yaml")
async def get_project_yaml(project_id: str):
    """Get project as YAML."""
    yaml_content = project_manager.get_project_yaml(project_id)
    if not yaml_content:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"yaml": yaml_content}


@app.put("/api/projects/{project_id}/yaml")
async def update_project_yaml(project_id: str, data: dict):
    """Update project from YAML."""
    yaml_content = data.get("yaml", "")
    project = project_manager.update_project_from_yaml(project_id, yaml_content)
    if not project:
        raise HTTPException(status_code=400, detail="Invalid YAML")
    return {"project": project.model_dump(mode="json", by_alias=True)}


# ============================================================================
# Agent Endpoints
# ============================================================================

@app.get("/api/projects/{project_id}/agents")
async def list_agents(project_id: str):
    """List all agents in a project."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"agents": [a.model_dump(mode="json", by_alias=True) for a in project.agents]}


@app.post("/api/projects/{project_id}/agents")
async def create_agent(project_id: str, data: dict):
    """Create a new agent."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    agent_type = data.get("type", "LlmAgent")
    try:
        if agent_type == "LlmAgent":
            agent = LlmAgentConfig.model_validate(data)
        elif agent_type == "SequentialAgent":
            agent = SequentialAgentConfig.model_validate(data)
        elif agent_type == "LoopAgent":
            agent = LoopAgentConfig.model_validate(data)
        elif agent_type == "ParallelAgent":
            agent = ParallelAgentConfig.model_validate(data)
        else:
            raise ValueError(f"Unknown agent type: {agent_type}")
        
        project.agents.append(agent)
        project_manager.save_project(project)
        return {"agent": agent.model_dump(mode="json", by_alias=True)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.put("/api/projects/{project_id}/agents/{agent_id}")
async def update_agent(project_id: str, agent_id: str, data: dict):
    """Update an agent."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    for i, agent in enumerate(project.agents):
        if agent.id == agent_id:
            agent_type = data.get("type", agent.type)
            try:
                if agent_type == "LlmAgent":
                    updated = LlmAgentConfig.model_validate(data)
                elif agent_type == "SequentialAgent":
                    updated = SequentialAgentConfig.model_validate(data)
                elif agent_type == "LoopAgent":
                    updated = LoopAgentConfig.model_validate(data)
                elif agent_type == "ParallelAgent":
                    updated = ParallelAgentConfig.model_validate(data)
                else:
                    raise ValueError(f"Unknown agent type: {agent_type}")
                
                project.agents[i] = updated
                project_manager.save_project(project)
                return {"agent": updated.model_dump(mode="json", by_alias=True)}
            except Exception as e:
                raise HTTPException(status_code=400, detail=str(e))
    
    raise HTTPException(status_code=404, detail="Agent not found")


@app.delete("/api/projects/{project_id}/agents/{agent_id}")
async def delete_agent(project_id: str, agent_id: str):
    """Delete an agent."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project.agents = [a for a in project.agents if a.id != agent_id]
    project_manager.save_project(project)
    return {"success": True}


# ============================================================================
# Custom Tools Endpoints
# ============================================================================

@app.get("/api/projects/{project_id}/tools")
async def list_custom_tools(project_id: str):
    """List all custom tools in a project."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"tools": [t.model_dump(mode="json") for t in project.custom_tools]}


@app.post("/api/projects/{project_id}/tools")
async def create_custom_tool(project_id: str, data: dict):
    """Create a new custom tool."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    try:
        tool = CustomToolDefinition.model_validate(data)
        project.custom_tools.append(tool)
        project_manager.save_project(project)
        return {"tool": tool.model_dump(mode="json")}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.put("/api/projects/{project_id}/tools/{tool_id}")
async def update_custom_tool(project_id: str, tool_id: str, data: dict):
    """Update a custom tool."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    for i, tool in enumerate(project.custom_tools):
        if tool.id == tool_id:
            try:
                updated = CustomToolDefinition.model_validate(data)
                project.custom_tools[i] = updated
                project_manager.save_project(project)
                return {"tool": updated.model_dump(mode="json")}
            except Exception as e:
                raise HTTPException(status_code=400, detail=str(e))
    
    raise HTTPException(status_code=404, detail="Tool not found")


@app.delete("/api/projects/{project_id}/tools/{tool_id}")
async def delete_custom_tool(project_id: str, tool_id: str):
    """Delete a custom tool."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project.custom_tools = [t for t in project.custom_tools if t.id != tool_id]
    project_manager.save_project(project)
    return {"success": True}


# ============================================================================
# Reference Data Endpoints
# ============================================================================

@app.get("/api/mcp-servers")
async def list_mcp_servers():
    """List known MCP servers."""
    return {"servers": [s.model_dump(mode="json") for s in KNOWN_MCP_SERVERS]}


@app.get("/api/builtin-tools")
async def list_builtin_tools():
    """List built-in ADK tools."""
    return {"tools": BUILTIN_TOOLS}


# ============================================================================
# MCP Server Testing
# ============================================================================

class TestMcpRequest(BaseModel):
    """Request to test an MCP server connection."""
    connection_type: str = "stdio"
    command: Optional[str] = None
    args: Optional[List[str]] = None
    env: Optional[dict] = None
    url: Optional[str] = None
    headers: Optional[dict] = None
    timeout: int = 30

@app.post("/api/test-mcp-server")
async def test_mcp_server(request: TestMcpRequest):
    """Test an MCP server connection and list its available tools."""
    import traceback
    
    try:
        # Build config dict for the pool
        config = {
            "connection_type": request.connection_type,
            "command": request.command,
            "args": request.args or [],
            "env": request.env,
            "url": request.url,
            "headers": request.headers,
            "timeout": request.timeout,
        }
        
        # Get tools using the connection pool (keeps connection open)
        tools = await mcp_pool.get_tools(config, timeout=request.timeout)
        
        # Extract tool information
        tool_list = []
        for tool in tools:
            tool_info = {
                "name": tool.name,
                "description": getattr(tool, "description", "") or "",
            }
            # Try to get parameters schema from various sources
            if hasattr(tool, "parameters") and tool.parameters:
                tool_info["parameters"] = tool.parameters
            elif hasattr(tool, "_schema") and tool._schema:
                tool_info["parameters"] = tool._schema
            elif hasattr(tool, "raw_mcp_tool") and hasattr(tool.raw_mcp_tool, "inputSchema"):
                # MCP tools store schema in raw_mcp_tool.inputSchema
                tool_info["parameters"] = tool.raw_mcp_tool.inputSchema
            tool_list.append(tool_info)
        
        return {
            "success": True,
            "tools": tool_list,
            "message": f"Successfully connected! Found {len(tool_list)} tools."
        }
        
    except asyncio.TimeoutError:
        return {
            "success": False,
            "error": f"Connection timed out after {request.timeout} seconds. The MCP server may not be responding.",
            "tools": []
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
            "tools": []
        }


@app.post("/api/projects/{project_id}/mcp-servers/{server_name}/test-connection")
async def test_project_mcp_server(project_id: str, server_name: str):
    """Test an MCP server connection by server name, looking up from project or known servers."""
    import sys
    import traceback
    
    # Check Python version - MCP requires 3.10+
    if sys.version_info < (3, 10):
        return {
            "success": False,
            "error": f"MCP requires Python 3.10+, but you have Python {sys.version_info.major}.{sys.version_info.minor}",
            "tools": []
        }
    
    # Load project to get its MCP servers
    project_path = PROJECTS_DIR / f"{project_id}.yaml"
    server_config = None
    
    if project_path.exists():
        with open(project_path, "r") as f:
            project_data = yaml.safe_load(f) or {}
        
        # Look in project's MCP servers
        for server in project_data.get("mcp_servers", []):
            if server.get("name") == server_name:
                server_config = server
                break
    
    # If not found in project, check known servers
    if not server_config:
        for known_server in KNOWN_MCP_SERVERS:
            if known_server.name == server_name:
                server_config = known_server.model_dump()
                break
    
    if not server_config:
        return {
            "success": False,
            "error": f"MCP server '{server_name}' not found in project or known servers",
            "tools": []
        }
    
    try:
        # Get tools using the connection pool (keeps connection open for reuse)
        timeout = server_config.get("timeout", 30)
        tools = await mcp_pool.get_tools(server_config, timeout=timeout)
        
        # Extract tool information
        tool_list = []
        for tool in tools:
            tool_info = {
                "name": getattr(tool, "name", str(tool)),
                "description": getattr(tool, "description", ""),
            }
            # Try to get parameters schema from various sources
            if hasattr(tool, "parameters") and tool.parameters:
                tool_info["parameters"] = tool.parameters
            elif hasattr(tool, "_schema") and tool._schema:
                tool_info["parameters"] = tool._schema
            elif hasattr(tool, "raw_mcp_tool") and hasattr(tool.raw_mcp_tool, "inputSchema"):
                # MCP tools store schema in raw_mcp_tool.inputSchema
                tool_info["parameters"] = tool.raw_mcp_tool.inputSchema
            tool_list.append(tool_info)
        
        return {
            "success": True,
            "tools": tool_list
        }
        
    except asyncio.TimeoutError:
        timeout = server_config.get("timeout", 30)
        return {
            "success": False,
            "error": f"Connection timed out after {timeout} seconds. The MCP server may not be responding.",
            "tools": []
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
            "tools": []
        }


class RunMcpToolRequest(BaseModel):
    """Request to run an MCP tool."""
    server_name: str
    tool_name: str
    arguments: dict = {}


@app.post("/api/projects/{project_id}/run-mcp-tool")
async def run_mcp_tool(project_id: str, request: RunMcpToolRequest):
    """Run an MCP tool and return its result."""
    import traceback
    
    # Find the server config
    project_path = PROJECTS_DIR / f"{project_id}.yaml"
    server_config = None
    
    if project_path.exists():
        with open(project_path, "r") as f:
            project_data = yaml.safe_load(f) or {}
        
        for server in project_data.get("mcp_servers", []):
            if server.get("name") == request.server_name:
                server_config = server
                break
    
    if not server_config:
        for known_server in KNOWN_MCP_SERVERS:
            if known_server.name == request.server_name:
                server_config = known_server.model_dump()
                break
    
    if not server_config:
        return {
            "success": False,
            "error": f"MCP server '{request.server_name}' not found"
        }
    
    try:
        timeout = server_config.get("timeout", 30)
        result = await mcp_pool.call_tool(
            server_config, 
            request.tool_name, 
            request.arguments, 
            timeout=timeout
        )
        
        # Try to extract text from MCP result
        if hasattr(result, 'content') and result.content:
            # MCP results often have content as a list of parts
            if isinstance(result.content, list):
                texts = []
                for part in result.content:
                    if hasattr(part, 'text'):
                        texts.append(part.text)
                    elif isinstance(part, dict) and 'text' in part:
                        texts.append(part['text'])
                if texts:
                    return {"success": True, "result": "\n".join(texts)}
            return {"success": True, "result": str(result.content)}
        
        return {"success": True, "result": str(result)}
        
    except asyncio.TimeoutError:
        return {
            "success": False,
            "error": f"Tool call timed out after {server_config.get('timeout', 30)} seconds"
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc()
        }


# ============================================================================
# Runtime WebSocket
# ============================================================================

class ConnectionManager:
    """Manage WebSocket connections."""
    
    def __init__(self):
        self.active_connections: dict[str, WebSocket] = {}
    
    async def connect(self, websocket: WebSocket, session_id: str):
        # Note: websocket should already be accepted before calling this
        self.active_connections[session_id] = websocket
    
    def disconnect(self, session_id: str):
        if session_id in self.active_connections:
            del self.active_connections[session_id]
    
    async def send_event(self, session_id: str, event: dict):
        if session_id in self.active_connections:
            await self.active_connections[session_id].send_json(event)


connection_manager = ConnectionManager()


@app.websocket("/ws/run/{project_id}")
async def run_agent_ws(websocket: WebSocket, project_id: str):
    """WebSocket endpoint for running agents with real-time updates."""
    project = project_manager.get_project(project_id)
    if not project:
        await websocket.close(code=4004, reason="Project not found")
        return
    
    session_id = None
    try:
        await websocket.accept()
        
        # Wait for initial message with user input
        data = await websocket.receive_json()
        user_message = data.get("message", "")
        requested_session_id = data.get("session_id")  # Optional: reuse existing session
        agent_id = data.get("agent_id")  # Optional: run specific agent instead of root
        
        session_id = None  # Will be set from first event
        
        async def event_callback(event: RunEvent):
            await connection_manager.send_event(session_id, event.model_dump(mode="json"))
        
        # Run the agent (optionally a specific agent instead of root, optionally reuse session)
        async for event in runtime_manager.run_agent(
            project, 
            user_message, 
            event_callback, 
            agent_id=agent_id,
            session_id=requested_session_id,  # Pass through to reuse existing session
        ):
            # First event contains session_id info
            if not session_id and event.event_type == "agent_start" and event.data.get("session_id"):
                session_id = event.data["session_id"]
                await connection_manager.connect(websocket, session_id)
                # Send session_id to client
                await websocket.send_json({"type": "session_started", "session_id": session_id})
            
            await websocket.send_json(event.model_dump(mode="json"))
        
        # Get the actual session_id that was used (may be new or reused)
        # We need to get it from the runtime manager
        # Actually, we can get it from the RunSession that was created/used
        # Let me check if we can get it from the event callback or we need to modify the approach
        
        # For now, connect after we have the session_id
        # Actually, let's connect before running and use a temporary ID, then update
        # Or better: get session_id from the runtime after run starts
        
        # Actually, a simpler approach: the session_id is known before run_agent starts
        # because we either use the requested one or generate a new one
        # But we need to know what was actually used. Let me modify run_agent to yield the session_id first
            await websocket.send_json(event.model_dump(mode="json"))
        
        # Send completion message
        await websocket.send_json({"type": "completed"})
        
    except WebSocketDisconnect:
        if session_id:
            runtime_manager.stop_run(session_id)
    except Exception as e:
        import traceback
        error_msg = f"{str(e)}\n{traceback.format_exc()}"
        print(f"WebSocket error: {error_msg}")
        try:
            await websocket.send_json({"type": "error", "error": str(e), "traceback": traceback.format_exc()})
        except Exception:
            pass  # WebSocket might be closed
    finally:
        if session_id:
            connection_manager.disconnect(session_id)


# ============================================================================
# HTTP Run Endpoint (for simpler testing)
# ============================================================================

class RunRequest(BaseModel):
    message: str
    session_id: Optional[str] = None


@app.post("/api/projects/{project_id}/run")
async def run_agent_http(project_id: str, request: RunRequest):
    """HTTP endpoint to run agent (collects all events and returns them)."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    events = []
    
    async def collect_event(event: RunEvent):
        events.append(event.model_dump(mode="json"))
    
    try:
        async for event in runtime_manager.run_agent(project, request.message, collect_event):
            events.append(event.model_dump(mode="json"))
        return {"events": events, "status": "completed"}
    except Exception as e:
        import traceback
        return {"events": events, "status": "error", "error": str(e), "traceback": traceback.format_exc()}


# ============================================================================
# Session History Endpoints
# ============================================================================

@app.get("/api/sessions")
async def list_sessions():
    """List all run sessions."""
    sessions = list(runtime_manager.sessions.values())
    return {"sessions": [s.model_dump(mode="json") for s in sessions]}


@app.get("/api/projects/{project_id}/sessions")
async def list_project_sessions(project_id: str):
    """List all sessions from the session service for a project."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    sessions = await runtime_manager.list_sessions_from_service(project)
    return {"sessions": sessions}


@app.get("/api/sessions/{session_id}")
async def get_session(session_id: str):
    """Get a session by ID."""
    session = runtime_manager.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return {"session": session.model_dump(mode="json")}


@app.get("/api/projects/{project_id}/sessions/{session_id}/load")
async def load_session(project_id: str, session_id: str):
    """Load a session's events from the session service."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    session = await runtime_manager.load_session_from_service(project, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    return {"session": session.model_dump(mode="json")}


@app.post("/api/sessions/{session_id}/save-to-memory")
async def save_session_to_memory(session_id: str):
    """Save a session to memory service."""
    session = runtime_manager.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    # Get the project for this session
    project = project_manager.get_project(session.project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found for session")
    
    result = await runtime_manager.save_session_to_memory(project, session_id)
    if not result.get("success"):
        raise HTTPException(status_code=500, detail=result.get("error", "Failed to save to memory"))
    
    return result


# ============================================================================
# AI-Assisted Prompt Generation
# ============================================================================

class GeneratePromptRequest(BaseModel):
    agent_id: str
    context: Optional[str] = None  # Optional user hints

@app.post("/api/projects/{project_id}/generate-prompt")
async def generate_agent_prompt(project_id: str, request: GeneratePromptRequest):
    """Generate an instruction prompt for an agent using AI."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Find the target agent
    target_agent = None
    agent_ids_in_project = [a.id for a in project.agents]
    for agent in project.agents:
        if agent.id == request.agent_id:
            target_agent = agent
            break
    
    if not target_agent:
        raise HTTPException(
            status_code=404, 
            detail=f"Agent not found. Looking for '{request.agent_id}', available agents: {agent_ids_in_project}"
        )
    
    # Build context about the entire agent network
    agent_summaries = []
    for agent in project.agents:
        summary = {
            "name": agent.name,
            "type": agent.type,
            "description": getattr(agent, "description", "") or "",
        }
        if agent.type == "LlmAgent":
            # Handle different tool types
            tool_names = []
            for t in getattr(agent, "tools", []):
                if hasattr(t, "name") and t.name:
                    tool_names.append(f"{t.type}:{t.name}")
                elif hasattr(t, "server") and t.server:
                    tool_names.append(f"{t.type}:{t.server.name}")
                elif hasattr(t, "agent_id"):
                    tool_names.append(f"{t.type}:{t.agent_id}")
                else:
                    tool_names.append(t.type)
            summary["tools"] = tool_names
            summary["current_instruction"] = getattr(agent, "instruction", "")[:200] if getattr(agent, "instruction", "") else ""
        elif agent.type in ["SequentialAgent", "LoopAgent", "ParallelAgent"]:
            summary["sub_agents"] = getattr(agent, "sub_agent_ids", [])
        
        if agent.id == request.agent_id:
            summary["is_target"] = True
        agent_summaries.append(summary)
    
    # Build the meta-prompt for prompt generation
    meta_prompt = f"""You are an expert prompt engineer for AI agents. Your task is to write a detailed, effective instruction prompt for an agent in a multi-agent system.

## Project Context
Project Name: {project.name}
Project Description: {project.description or 'No description'}

## Agent Network
The following agents exist in this project:

"""
    for summary in agent_summaries:
        marker = ">>> TARGET AGENT <<<" if summary.get("is_target") else ""
        meta_prompt += f"""
### {summary['name']} ({summary['type']}) {marker}
- Description: {summary['description'] or 'No description yet'}
"""
        if summary.get("tools"):
            meta_prompt += f"- Tools: {', '.join(summary['tools'])}\n"
        if summary.get("sub_agents"):
            meta_prompt += f"- Sub-agents: {', '.join(summary['sub_agents'])}\n"
        if summary.get("current_instruction"):
            meta_prompt += f"- Current instruction preview: {summary['current_instruction']}...\n"
    
    meta_prompt += f"""
## Your Task
Write a detailed instruction prompt for the TARGET AGENT: **{target_agent.name}**

The prompt should:
1. Clearly define the agent's role and responsibilities
2. Explain how it fits within the multi-agent system
3. Specify how to interact with any tools it has access to
4. Define expected input/output formats if applicable
5. Include any relevant constraints or guidelines
6. Be specific and actionable, not vague

"""
    if request.context:
        meta_prompt += f"""## Additional Context from User
{request.context}

"""
    
    meta_prompt += """## Output Format
Write ONLY the instruction prompt itself, without any preamble or explanation. The prompt should be ready to use directly as the agent's instruction.
"""
    
    # Use the project's configured model, or fall back to a default
    try:
        from google.adk import Agent
        from google.adk.runners import Runner
        from google.adk.sessions.in_memory_session_service import InMemorySessionService
        from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
        from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
        from google.genai import types
        
        # Get model config from project
        model_config = None
        if project.app.models and len(project.app.models) > 0:
            if project.app.default_model_id:
                model_config = next((m for m in project.app.models if m.id == project.app.default_model_id), None)
            if not model_config:
                model_config = project.app.models[0]
        
        # Create a simple agent for prompt generation
        if model_config and model_config.provider == "litellm":
            from google.adk.models.lite_llm import LiteLlm
            model = LiteLlm(
                model=model_config.model_name,
                api_base=model_config.api_base,
            )
        else:
            # Default to Gemini if available
            model = "gemini-2.0-flash"
        
        prompt_agent = Agent(
            name="prompt_generator",
            model=model,
            instruction="You are a prompt engineering expert. Generate high-quality instruction prompts for AI agents.",
        )
        
        runner = Runner(
            app_name="prompt_generator",
            agent=prompt_agent,
            session_service=InMemorySessionService(),
            memory_service=InMemoryMemoryService(),
            artifact_service=InMemoryArtifactService(),
        )
        
        session = await runner.session_service.create_session(
            app_name="prompt_generator",
            user_id="prompt_gen_user",
        )
        
        # Run the prompt generation
        generated_prompt = ""
        async for event in runner.run_async(
            session_id=session.id,
            user_id="prompt_gen_user",
            new_message=types.Content(
                role="user",
                parts=[types.Part.from_text(text=meta_prompt)]
            ),
        ):
            if event.content and event.content.parts:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        generated_prompt += part.text
        
        return {"prompt": generated_prompt.strip(), "success": True}
        
    except Exception as e:
        import traceback
        return {
            "prompt": None,
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
        }


# ============================================================================
# AI-Assisted Tool Code Generation
# ============================================================================

class GenerateToolCodeRequest(BaseModel):
    tool_name: str
    tool_description: str
    state_keys_used: List[str] = []
    context: Optional[str] = None  # Additional hints from user

ADK_TOOL_SYSTEM_PROMPT = '''You are an expert Python developer specializing in writing tools for the Google Agent Development Kit (ADK).

## ADK Tool Architecture

ADK tools are Python functions that agents can call. The key component is `ToolContext`, which provides access to:

### ToolContext Properties and Methods:
- `tool_context.state` - Dictionary-like access to session state. Read: `tool_context.state.get('key')`, Write: `tool_context.state['key'] = value`
- `tool_context.actions` - EventActions object for signaling behavior:
  - `tool_context.actions.escalate = True` - Escalate to parent agent (exit loops)
  - `tool_context.actions.skip_summarization = True` - Skip LLM summarization of result
  - `tool_context.actions.state_delta` - Dict of state changes (auto-tracked when using state)
- `tool_context.agent_name` - Name of the agent calling this tool
- `tool_context.invocation_id` - Unique ID for this invocation
- `tool_context.function_call_id` - ID of the specific function call
- `await tool_context.search_memory(query)` - Search the memory service
- `await tool_context.list_artifacts()` - List available artifacts
- `await tool_context.load_artifact(filename)` - Load an artifact
- `await tool_context.save_artifact(filename, artifact)` - Save an artifact
- `tool_context.request_credential(auth_config)` - Request authentication
- `tool_context.get_auth_response(auth_config)` - Get auth credentials

### Tool Function Signature:
```python
from google.adk.tools.tool_context import ToolContext

def my_tool(tool_context: ToolContext, param1: str, param2: int = 10) -> dict:
    """Tool description shown to the LLM.
    
    Args:
        param1: Description of param1 (used by LLM to understand the parameter)
        param2: Description of param2 (optional parameters have defaults)
    
    Returns:
        A dictionary with the result (converted to JSON for LLM)
    """
    # Implementation
    return {{"result": "value", "status": "success"}}
```

### Async Tools:
```python
async def my_async_tool(tool_context: ToolContext, query: str) -> dict:
    """Async tools can use await for I/O operations."""
    results = await tool_context.search_memory(query)
    return {{"memories": results.memories}}
```

### State Management Patterns:
```python
def tool_with_state(tool_context: ToolContext) -> dict:
    # Reading state
    counter = tool_context.state.get('counter', 0)
    user_prefs = tool_context.state.get('user_preferences', {{}})
    
    # Writing state (automatically tracked in state_delta)
    tool_context.state['counter'] = counter + 1
    tool_context.state['last_action'] = 'incremented'
    
    return {{"new_counter": counter + 1}}
```

### Control Flow Tools:
```python
def exit_loop_tool(tool_context: ToolContext) -> dict:
    """Exit the current loop (LoopAgent)."""
    tool_context.actions.escalate = True
    tool_context.actions.skip_summarization = True
    return {{"status": "exiting loop"}}

def continue_without_summary(tool_context: ToolContext, data: dict) -> dict:
    """Return data directly without LLM summarization."""
    tool_context.actions.skip_summarization = True
    return data
```

### Working with Artifacts:
```python
async def save_report(tool_context: ToolContext, content: str, filename: str) -> dict:
    """Save content as an artifact."""
    from google.genai import types
    artifact = types.Part.from_text(text=content)
    version = await tool_context.save_artifact(filename, artifact)
    return {{"saved": filename, "version": version}}

async def load_document(tool_context: ToolContext, filename: str) -> dict:
    """Load a previously saved artifact."""
    artifact = await tool_context.load_artifact(filename)
    if artifact and hasattr(artifact, 'text'):
        return {{"content": artifact.text}}
    return {{"error": "Not found"}}
```

### Error Handling:
```python
def safe_tool(tool_context: ToolContext, input_data: str) -> dict:
    """Tools should handle errors gracefully."""
    try:
        # Processing logic
        result = process(input_data)
        return {{"success": True, "result": result}}
    except ValueError as err:
        return {{"success": False, "error": "Invalid input: " + str(err)}}
    except Exception as err:
        return {{"success": False, "error": "Unexpected error: " + str(err)}}
```

## Important Guidelines:
1. Always include `tool_context: ToolContext` as the first parameter
2. Use type hints for all parameters - the LLM uses these to understand the tool
3. Write clear docstrings - they're shown to the LLM to explain what the tool does
4. Return dictionaries (they're serialized to JSON for the LLM)
5. Use descriptive parameter names and docstrings for each parameter
6. Handle errors gracefully and return informative error messages
7. For async operations (memory, artifacts), make the function async
8. State changes are automatically tracked when you modify tool_context.state

## Output Format:
Return ONLY the Python code for the tool function. Do not include any explanation, markdown formatting, or code blocks. Just the raw Python code starting with the imports (if any) and the function definition.
'''

@app.post("/api/projects/{project_id}/generate-tool-code")
async def generate_tool_code(project_id: str, request: GenerateToolCodeRequest):
    """Generate Python code for an ADK tool using AI."""
    import traceback
    import sys
    
    print(f"[generate-tool-code] Starting for project {project_id}", file=sys.stderr, flush=True)
    
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    print(f"[generate-tool-code] Project found: {project.name}", file=sys.stderr, flush=True)
    
    try:
        # Build context about available state keys
        state_keys_info = []
        for key in project.app.state_keys:
            state_keys_info.append(f"- {key.name} ({key.type}): {key.description or 'No description'}")
        
        # Build the user prompt
        user_prompt = f"""Write an ADK tool with the following specifications:

**Tool Name:** {request.tool_name}
**Description:** {request.tool_description}

**Available State Keys:**
{chr(10).join(state_keys_info) if state_keys_info else 'No state keys defined yet.'}

**State Keys This Tool Should Use:**
{', '.join(request.state_keys_used) if request.state_keys_used else 'None specified - decide based on the tool purpose.'}

{f"**Additional Requirements:** {request.context}" if request.context else ""}

Write the complete Python code for this tool. Include appropriate imports at the top if needed (like `from google.adk.tools.tool_context import ToolContext`). Make sure the function name matches the tool name (use snake_case).
"""
        
        from google.adk import Agent
        from google.adk.runners import Runner
        from google.adk.sessions.in_memory_session_service import InMemorySessionService
        from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
        from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
        from google.genai import types
        
        # Get model config from project
        model_config = None
        if project.app.models and len(project.app.models) > 0:
            if project.app.default_model_id:
                model_config = next((m for m in project.app.models if m.id == project.app.default_model_id), None)
            if not model_config:
                model_config = project.app.models[0]
        
        # Create a code generation agent
        if model_config and model_config.provider == "litellm":
            from google.adk.models.lite_llm import LiteLlm
            model = LiteLlm(
                model=model_config.model_name,
                api_base=model_config.api_base,
            )
        else:
            model = "gemini-2.0-flash"
        
        code_agent = Agent(
            name="tool_code_generator",
            model=model,
            instruction=ADK_TOOL_SYSTEM_PROMPT,
        )
        
        runner = Runner(
            app_name="tool_code_generator",
            agent=code_agent,
            session_service=InMemorySessionService(),
            memory_service=InMemoryMemoryService(),
            artifact_service=InMemoryArtifactService(),
        )
        
        session = await runner.session_service.create_session(
            app_name="tool_code_generator",
            user_id="code_gen_user",
        )
        
        # Run the code generation
        generated_code = ""
        async for event in runner.run_async(
            session_id=session.id,
            user_id="code_gen_user",
            new_message=types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_prompt)]
            ),
        ):
            if event.content and event.content.parts:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        generated_code += part.text
        
        # Clean up the code (remove markdown code blocks if present)
        code = generated_code.strip()
        if code.startswith("```python"):
            code = code[9:]
        elif code.startswith("```"):
            code = code[3:]
        if code.endswith("```"):
            code = code[:-3]
        code = code.strip()
        
        return {"code": code, "success": True}
        
    except Exception as e:
        import traceback
        print(f"[generate-tool-code] ERROR: {e}", file=sys.stderr, flush=True)
        print(traceback.format_exc(), file=sys.stderr, flush=True)
        return {
            "code": None,
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
        }


# ============================================================================
# Code Completion (Monacopilot)
# ============================================================================

class CodeCompletionRequest(BaseModel):
    """Request format from Monacopilot."""
    completionMetadata: dict
    
ADK_CODE_COMPLETION_CONTEXT = '''You are an expert Python code completion assistant for the Google Agent Development Kit (ADK).

## ADK Tool Patterns:
- Tools use `ToolContext` as first parameter: `def my_tool(tool_context: ToolContext, ...)`
- Access state: `tool_context.state.get('key')` or `tool_context.state['key'] = value`
- Control flow: `tool_context.actions.escalate = True`, `tool_context.actions.skip_summarization = True`
- Async methods: `await tool_context.search_memory(query)`, `await tool_context.list_artifacts()`
- Return dictionaries from tools (they become JSON for the LLM)

## Common Imports:
- `from google.adk.tools.tool_context import ToolContext`
- `from google.adk.agents import Agent, LlmAgent, SequentialAgent, LoopAgent, ParallelAgent`
- `from google.adk.runners import Runner`
- `from google.adk.tools import google_search, exit_loop`
- `from google.genai import types`

## Tool Function Template:
```python
def tool_name(tool_context: ToolContext, param: str) -> dict:
    """Description for LLM."""
    result = ...
    return {"result": result}
```

Provide ONLY the completion text, no explanation.'''

@app.post("/api/code-completion")
async def code_completion(request: CodeCompletionRequest):
    """Handle code completion requests from Monacopilot."""
    try:
        metadata = request.completionMetadata
        text_before = metadata.get("textBeforeCursor", "")
        text_after = metadata.get("textAfterCursor", "")
        language = metadata.get("language", "python")
        filename = metadata.get("filename", "")
        
        # Build the completion prompt
        user_prompt = f"""Complete this {language} code. Return ONLY the completion text that should be inserted at the cursor position.

Code before cursor:
```{language}
{text_before[-1500:]}
```

Code after cursor:
```{language}
{text_after[:500]}
```

Provide the code completion (just the code to insert, no markdown):"""
        
        # Use a default model for completion (fast model preferred)
        from google.adk import Agent
        from google.adk.runners import Runner
        from google.adk.sessions.in_memory_session_service import InMemorySessionService
        from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
        from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
        from google.adk.models.lite_llm import LiteLlm
        from google.genai import types
        
        # Use a fast model for completions
        model = LiteLlm(
            model="ollama/qwen3:8b",
            api_base="http://node1:11434",
        )
        
        completion_agent = Agent(
            name="code_completer",
            model=model,
            instruction=ADK_CODE_COMPLETION_CONTEXT,
        )
        
        runner = Runner(
            app_name="code_completer",
            agent=completion_agent,
            session_service=InMemorySessionService(),
            memory_service=InMemoryMemoryService(),
            artifact_service=InMemoryArtifactService(),
        )
        
        session = await runner.session_service.create_session(
            app_name="code_completer",
            user_id="completion_user",
        )
        
        completion_text = ""
        async for event in runner.run_async(
            session_id=session.id,
            user_id="completion_user",
            new_message=types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_prompt)]
            ),
        ):
            if event.content and event.content.parts:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        completion_text += part.text
        
        # Clean up the completion (remove markdown if present)
        completion = completion_text.strip()
        if completion.startswith("```"):
            lines = completion.split("\n")
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].strip() == "```":
                lines = lines[:-1]
            completion = "\n".join(lines)
        
        return {
            "completion": completion.strip(),
        }
        
    except Exception as e:
        import traceback
        print(f"Code completion error: {e}\n{traceback.format_exc()}")
        return {"completion": None}


# ============================================================================
# AI-Assisted Agent Configuration
# ============================================================================

class GenerateAgentConfigRequest(BaseModel):
    description: str  # User's description of what the agent should do

@app.post("/api/projects/{project_id}/generate-agent-config")
async def generate_agent_config(project_id: str, request: GenerateAgentConfigRequest):
    """Generate a complete agent configuration using AI."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Get available tools
    builtin_tools = [t["name"] for t in BUILTIN_TOOLS]
    mcp_servers_info = []
    for server in KNOWN_MCP_SERVERS:
        mcp_servers_info.append({
            "name": server.name,
            "description": server.description,
            "tools": server.tool_filter or [],
        })
    
    # Get existing agents for sub-agent selection
    existing_agents = [{"id": a.id, "name": a.name, "description": a.description, "type": a.type} for a in project.agents]
    
    # Get custom tools
    custom_tools = [{"name": t.name, "description": t.description} for t in project.custom_tools]
    
    meta_prompt = f"""You are an expert AI agent architect. Based on the user's description, generate a complete agent configuration.

## User's Request
{request.description}

## Available Resources

### Built-in Tools
{json.dumps(builtin_tools, indent=2)}

### MCP Servers (with their tools)
{json.dumps(mcp_servers_info, indent=2)}

### Custom Tools in Project
{json.dumps(custom_tools, indent=2)}

### Existing Agents (can be used as sub-agents)
{json.dumps(existing_agents, indent=2)}

## Your Task
Generate a JSON configuration for an LLM agent that fulfills the user's request.

The JSON must have this exact structure:
{{
  "name": "short_snake_case_name",
  "description": "Brief third-person description for other agents (e.g., 'Searches the web for information')",
  "instruction": "Detailed markdown instruction for the agent...",
  "tools": {{
    "builtin": ["tool_name1", "tool_name2"],
    "mcp": [
      {{"server": "server_name", "tools": ["tool1", "tool2"]}}
    ],
    "custom": ["custom_tool_name"],
    "agents": ["agent_id"]
  }},
  "sub_agents": ["agent_id1", "agent_id2"]
}}

Rules:
1. Only include tools/servers that are relevant to the task
2. For MCP servers, only enable specific tools that are needed
3. The instruction should be detailed and well-formatted markdown
4. The description should be under 100 characters, third-person
5. Sub-agents are other agents this agent can delegate to
6. Return ONLY valid JSON, no explanation

JSON:"""

    try:
        from google.adk import Agent
        from google.adk.runners import Runner
        from google.adk.sessions.in_memory_session_service import InMemorySessionService
        from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
        from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
        from google.genai import types
        
        # Get model config from project
        model_config = None
        if project.app.models and len(project.app.models) > 0:
            if project.app.default_model_id:
                model_config = next((m for m in project.app.models if m.id == project.app.default_model_id), None)
            if not model_config:
                model_config = project.app.models[0]
        
        if model_config and model_config.provider == "litellm":
            from google.adk.models.lite_llm import LiteLlm
            model = LiteLlm(
                model=model_config.model_name,
                api_base=model_config.api_base,
            )
        else:
            model = "gemini-2.0-flash"
        
        config_agent = Agent(
            name="config_generator",
            model=model,
            instruction="You are an expert at configuring AI agents. Generate valid JSON configurations.",
        )
        
        runner = Runner(
            app_name="config_generator",
            agent=config_agent,
            session_service=InMemorySessionService(),
            memory_service=InMemoryMemoryService(),
            artifact_service=InMemoryArtifactService(),
        )
        
        session = await runner.session_service.create_session(
            app_name="config_generator",
            user_id="config_gen_user",
        )
        
        # Retry logic for models that don't always return JSON
        max_retries = 3
        last_error = None
        last_raw_response = None
        
        for attempt in range(max_retries):
            generated_text = ""
            
            if attempt == 0:
                # First attempt: use the original prompt
                message = meta_prompt
            else:
                # Retry: ask for just the JSON, referencing the failed attempt
                message = f"""Your previous response was not valid JSON. Here's what you returned:

{last_raw_response[:2000]}

The error was: {last_error}

Please return ONLY the JSON object with the agent configuration. No explanation, no markdown, just the raw JSON starting with {{ and ending with }}. Make sure to close all brackets and quotes properly."""
            
            async for event in runner.run_async(
                session_id=session.id,
                user_id="config_gen_user",
                new_message=types.Content(
                    role="user",
                    parts=[types.Part.from_text(text=message)]
                ),
            ):
                if event.content and event.content.parts:
                    for part in event.content.parts:
                        if hasattr(part, "text") and part.text:
                            generated_text += part.text
            
            # Parse the JSON from the response
            generated_text = generated_text.strip()
            last_raw_response = generated_text
            
            # Try to extract JSON if it's wrapped in markdown code blocks
            if "```json" in generated_text:
                generated_text = generated_text.split("```json")[1].split("```")[0].strip()
            elif "```" in generated_text:
                parts = generated_text.split("```")
                if len(parts) >= 2:
                    generated_text = parts[1].strip()
            
            # Try to find JSON object in the text
            json_start = generated_text.find('{')
            json_end = generated_text.rfind('}')
            if json_start != -1 and json_end != -1 and json_end > json_start:
                generated_text = generated_text[json_start:json_end + 1]
            
            try:
                config = json.loads(generated_text)
                return {"config": config, "success": True, "attempts": attempt + 1}
            except json.JSONDecodeError as e:
                last_error = str(e)
                if attempt < max_retries - 1:
                    continue  # Try again
                else:
                    # All retries exhausted
                    return {
                        "config": None,
                        "success": False,
                        "error": f"Failed to parse JSON after {max_retries} attempts: {last_error}",
                        "raw_response": last_raw_response[:2000] if last_raw_response else None,
                        "attempts": max_retries,
                    }
        
        # Should not reach here, but just in case
        return {"config": None, "success": False, "error": "Unknown error"}
        
    except Exception as e:
        import traceback
        return {
            "config": None,
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
        }


# ============================================================================
# Watch Tool Execution
# ============================================================================

class WatchToolRequest(BaseModel):
    type: str  # 'builtin', 'mcp', 'custom'
    tool_name: str
    args: dict = {}
    mcp_server: Optional[str] = None

@app.post("/api/projects/{project_id}/execute-tool")
async def execute_watch_tool(project_id: str, request: WatchToolRequest):
    """Execute a tool call for watch functionality.
    
    This is used by the Watch panel to execute read-only tool calls
    to query external state.
    """
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    try:
        result = None
        
        if request.type == 'builtin':
            # Execute built-in tool
            if request.tool_name == 'google_search':
                # Google search requires API key and special handling
                result = {"error": "Google search not available in watch mode"}
            elif request.tool_name == 'exit_loop':
                result = {"info": "exit_loop is a control tool, not queryable"}
            else:
                result = {"error": f"Unknown built-in tool: {request.tool_name}"}
        
        elif request.type == 'custom':
            # Execute custom tool
            custom_tool = next((t for t in project.custom_tools if t.name == request.tool_name), None)
            if not custom_tool:
                result = {"error": f"Custom tool not found: {request.tool_name}"}
            else:
                # Create a sandboxed execution environment
                local_vars = {}
                try:
                    # Execute the tool code to define the function
                    exec(custom_tool.code, {"__builtins__": __builtins__}, local_vars)
                    
                    # Find the function (should be the tool name)
                    func = local_vars.get(request.tool_name)
                    if func and callable(func):
                        # Create a mock tool context for read-only execution
                        class MockToolContext:
                            state = {}
                            def __init__(self):
                                self.actions = type('Actions', (), {'state_delta': {}})()
                        
                        mock_ctx = MockToolContext()
                        result = func(mock_ctx, **request.args)
                    else:
                        result = {"error": f"Function {request.tool_name} not found in tool code"}
                except Exception as e:
                    result = {"error": f"Tool execution error: {str(e)}"}
        
        elif request.type == 'mcp':
            # Execute MCP tool
            if not request.mcp_server:
                result = {"error": "MCP server name required"}
            else:
                # Find the MCP server config
                mcp_config = next((s for s in project.mcp_servers if s.name == request.mcp_server), None)
                if not mcp_config:
                    mcp_config = next((s for s in KNOWN_MCP_SERVERS if s.name == request.mcp_server), None)
                
                if not mcp_config:
                    result = {"error": f"MCP server not found: {request.mcp_server}"}
                else:
                    # For now, return a placeholder - MCP execution requires async context
                    result = {"info": f"MCP tool execution for {request.tool_name} on {request.mcp_server} - not yet implemented"}
        
        else:
            result = {"error": f"Unknown tool type: {request.type}"}
        
        return {
            "success": True,
            "result": result,
            "tool_name": request.tool_name,
            "tool_type": request.type,
        }
        
    except Exception as e:
        import traceback
        return {
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc(),
        }


# ============================================================================
# Health Check
# ============================================================================

@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "ok"}


# ============================================================================
# Static Files (for production)
# ============================================================================

# Mount frontend build in production mode
# This serves the built frontend assets and handles SPA routing
if PRODUCTION_MODE:
    frontend_build = Path(__file__).parent.parent / "frontend" / "dist"
    if frontend_build.exists():
        # Serve static assets (JS, CSS, images, etc.) from /assets
        assets_dir = frontend_build / "assets"
        if assets_dir.exists():
            app.mount("/assets", StaticFiles(directory=str(assets_dir)), name="assets")
        
        # Serve index.html for all non-API/WebSocket routes (SPA routing)
        # This must be last to catch all other routes
        @app.get("/{full_path:path}")
        async def serve_spa(full_path: str):
            """Serve index.html for SPA routing, but exclude API and WebSocket routes."""
            # Don't serve index.html for API or WebSocket routes
            if full_path.startswith(("api/", "ws/", "assets/")):
                raise HTTPException(status_code=404, detail="Not found")
            
            index_file = frontend_build / "index.html"
            if index_file.exists():
                from fastapi.responses import FileResponse
                return FileResponse(str(index_file))
            raise HTTPException(status_code=404, detail="Frontend not built. Run 'npm run build' in frontend/")
    else:
        import sys
        print("WARNING: Production mode enabled but frontend/dist not found.", file=sys.stderr)
        print("Run 'npm run build' in the frontend/ directory to build the frontend.", file=sys.stderr)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)

