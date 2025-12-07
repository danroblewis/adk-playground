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

from models import (
    Project, AppConfig, AgentConfig, LlmAgentConfig, SequentialAgentConfig,
    LoopAgentConfig, ParallelAgentConfig, CustomToolDefinition, MCPServerConfig,
    EvalTestGroup, EvalResult, RunEvent,
)
from project_manager import ProjectManager
from runtime import RuntimeManager
from known_mcp_servers import KNOWN_MCP_SERVERS, BUILTIN_TOOLS

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


@app.get("/api/sessions/{session_id}")
async def get_session(session_id: str):
    """Get a session by ID."""
    session = runtime_manager.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return {"session": session.model_dump(mode="json")}


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
    for agent in project.agents:
        if agent.id == request.agent_id:
            target_agent = agent
            break
    
    if not target_agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    
    # Build context about the entire agent network
    agent_summaries = []
    for agent in project.agents:
        summary = {
            "name": agent.name,
            "type": agent.type,
            "description": getattr(agent, "description", "") or "",
        }
        if agent.type == "LlmAgent":
            summary["tools"] = [t.type + ":" + (t.name or "") for t in getattr(agent, "tools", [])]
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
        
        generated_text = ""
        async for event in runner.run_async(
            session_id=session.id,
            user_id="config_gen_user",
            new_message=types.Content(
                role="user",
                parts=[types.Part.from_text(text=meta_prompt)]
            ),
        ):
            if event.content and event.content.parts:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        generated_text += part.text
        
        # Parse the JSON from the response
        generated_text = generated_text.strip()
        # Try to extract JSON if it's wrapped in markdown code blocks
        if "```json" in generated_text:
            generated_text = generated_text.split("```json")[1].split("```")[0].strip()
        elif "```" in generated_text:
            generated_text = generated_text.split("```")[1].split("```")[0].strip()
        
        config = json.loads(generated_text)
        return {"config": config, "success": True}
        
    except json.JSONDecodeError as e:
        return {
            "config": None,
            "success": False,
            "error": f"Failed to parse JSON: {str(e)}",
            "raw_response": generated_text[:1000] if 'generated_text' in dir() else None,
        }
    except Exception as e:
        import traceback
        return {
            "config": None,
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

# Mount frontend build in production
frontend_build = Path(__file__).parent.parent / "frontend" / "dist"
if frontend_build.exists():
    app.mount("/", StaticFiles(directory=str(frontend_build), html=True), name="frontend")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)

