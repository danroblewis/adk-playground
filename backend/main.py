"""FastAPI backend for ADK Playground."""

from __future__ import annotations

import asyncio
import json
from pathlib import Path
from typing import Optional

import yaml
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from .models import (
    Project, AppConfig, AgentConfig, LlmAgentConfig, SequentialAgentConfig,
    LoopAgentConfig, ParallelAgentConfig, CustomToolDefinition, MCPServerConfig,
    EvalTestGroup, EvalResult, RunEvent,
)
from .project_manager import ProjectManager
from .runtime import RuntimeManager
from .known_mcp_servers import KNOWN_MCP_SERVERS, BUILTIN_TOOLS

# Initialize managers
PROJECTS_DIR = Path(__file__).parent.parent / "projects"
project_manager = ProjectManager(str(PROJECTS_DIR))
runtime_manager = RuntimeManager(str(PROJECTS_DIR))

# Create FastAPI app
app = FastAPI(
    title="ADK Playground",
    description="Visual builder and runtime for Google ADK agents",
    version="0.1.0",
)

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:3000"],
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
    return {"project": project.model_dump(mode="json")}


@app.get("/api/projects/{project_id}")
async def get_project(project_id: str):
    """Get a project by ID."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"project": project.model_dump(mode="json")}


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
    return {"project": project.model_dump(mode="json")}


# ============================================================================
# Agent Endpoints
# ============================================================================

@app.get("/api/projects/{project_id}/agents")
async def list_agents(project_id: str):
    """List all agents in a project."""
    project = project_manager.get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"agents": [a.model_dump(mode="json") for a in project.agents]}


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
        return {"agent": agent.model_dump(mode="json")}
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
                return {"agent": updated.model_dump(mode="json")}
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
# Runtime WebSocket
# ============================================================================

class ConnectionManager:
    """Manage WebSocket connections."""
    
    def __init__(self):
        self.active_connections: dict[str, WebSocket] = {}
    
    async def connect(self, websocket: WebSocket, session_id: str):
        await websocket.accept()
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
        session_id = data.get("session_id", f"ws_{project_id}")
        
        await connection_manager.connect(websocket, session_id)
        
        async def event_callback(event: RunEvent):
            await connection_manager.send_event(session_id, event.model_dump(mode="json"))
        
        # Run the agent
        async for event in runtime_manager.run_agent(project, user_message, event_callback):
            await websocket.send_json(event.model_dump(mode="json"))
        
        # Send completion message
        await websocket.send_json({"type": "completed"})
        
    except WebSocketDisconnect:
        if session_id:
            runtime_manager.stop_run(session_id)
    except Exception as e:
        await websocket.send_json({"type": "error", "error": str(e)})
    finally:
        if session_id:
            connection_manager.disconnect(session_id)


# ============================================================================
# Session History Endpoints
# ============================================================================

@app.get("/api/sessions")
async def list_sessions():
    """List all run sessions."""
    sessions = list(runtime_manager.sessions.values())
    return {"sessions": [s.model_dump(mode="json") for s in sessions]}


@app.get("/api/sessions/{session_id}")
async def get_session(session_id: str):
    """Get a session by ID."""
    session = runtime_manager.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return {"session": session.model_dump(mode="json")}


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

# Mount frontend build in production
frontend_build = Path(__file__).parent.parent / "frontend" / "dist"
if frontend_build.exists():
    app.mount("/", StaticFiles(directory=str(frontend_build), html=True), name="frontend")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)

