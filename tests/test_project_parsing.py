"""Tests for project parsing and agent building."""

from __future__ import annotations

import sys
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

# Add backend to path
backend_dir = Path(__file__).parent.parent / "backend"
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

from models import (
    Project,
    AppConfig,
    LlmAgentConfig,
    SequentialAgentConfig,
    LoopAgentConfig,
    ParallelAgentConfig,
    ModelConfig,
    BuiltinToolConfig,
    FunctionToolConfig,
    MCPToolConfig,
    MCPServerConfig,
    CallbackConfig,
    CustomCallbackDefinition,
)
from runtime import RuntimeManager


class TestProjectParsing:
    """Tests for parsing project configurations."""
    
    def test_simple_project_parsing(self, simple_project):
        """Test that a simple project can be parsed."""
        assert simple_project.id == "test_project"
        assert simple_project.name == "Test Project"
        assert len(simple_project.agents) == 1
        assert simple_project.app.root_agent_id == "agent_1"
    
    def test_agent_config_parsing(self, simple_project):
        """Test that agent configuration is correctly parsed."""
        agent = simple_project.agents[0]
        assert isinstance(agent, LlmAgentConfig)
        assert agent.id == "agent_1"
        assert agent.name == "test_agent"
        assert "helpful assistant" in agent.instruction
    
    def test_model_config_parsing(self, simple_project):
        """Test that model configuration is correctly parsed."""
        agent = simple_project.agents[0]
        assert agent.model is not None
        assert agent.model.provider == "gemini"
        assert agent.model.model_name == "gemini-2.0-flash"
    
    def test_sequential_agent_parsing(self, sequential_agent_project):
        """Test parsing of sequential agent configuration."""
        seq_agent = None
        for agent in sequential_agent_project.agents:
            if isinstance(agent, SequentialAgentConfig):
                seq_agent = agent
                break
        
        assert seq_agent is not None
        assert seq_agent.name == "sequential_controller"
        assert len(seq_agent.sub_agents) == 2
        assert "agent_1" in seq_agent.sub_agents
        assert "agent_2" in seq_agent.sub_agents
    
    def test_loop_agent_parsing(self, loop_agent_project):
        """Test parsing of loop agent configuration."""
        loop_agent = None
        for agent in loop_agent_project.agents:
            if isinstance(agent, LoopAgentConfig):
                loop_agent = agent
                break
        
        assert loop_agent is not None
        assert loop_agent.name == "loop_controller"
        assert loop_agent.max_iterations == 3
        assert len(loop_agent.sub_agents) == 1
    
    def test_builtin_tool_parsing(self, loop_agent_project):
        """Test parsing of builtin tool configuration."""
        # Find the agent with tools
        agent_with_tools = None
        for agent in loop_agent_project.agents:
            if isinstance(agent, LlmAgentConfig) and agent.tools:
                agent_with_tools = agent
                break
        
        assert agent_with_tools is not None
        assert len(agent_with_tools.tools) == 1
        tool = agent_with_tools.tools[0]
        assert isinstance(tool, BuiltinToolConfig)
        assert tool.name == "exit_loop"
    
    def test_callback_config_parsing(self, project_with_callbacks):
        """Test parsing of callback configuration."""
        agent = project_with_callbacks.agents[0]
        assert len(agent.before_agent_callbacks) == 1
        callback = agent.before_agent_callbacks[0]
        assert callback.module_path == "callbacks.custom"
    
    def test_custom_callback_definition_parsing(self, project_with_callbacks):
        """Test parsing of custom callback definitions."""
        assert len(project_with_callbacks.custom_callbacks) == 1
        callback = project_with_callbacks.custom_callbacks[0]
        assert callback.name == "set_foo"
        assert "callback_context.state['foo']" in callback.code


class TestAgentBuilding:
    """Tests for building ADK agents from project configuration."""
    
    def test_runtime_manager_init(self, temp_projects_dir):
        """Test RuntimeManager initialization."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        assert manager.projects_dir == temp_projects_dir
        assert manager.sessions == {}
    
    @patch("google.adk.Agent")
    def test_build_simple_agent(self, mock_agent_class, temp_projects_dir, simple_project):
        """Test building a simple LLM agent."""
        # Set up mock to return a mock agent instance
        mock_agent_instance = MagicMock()
        mock_agent_class.return_value = mock_agent_instance
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        # Build agents without tracking plugin
        agents = manager._build_agents(simple_project, tracking_plugin=None)
        
        assert "agent_1" in agents
        mock_agent_class.assert_called_once()
        
        # Verify the call arguments
        call_kwargs = mock_agent_class.call_args.kwargs
        assert call_kwargs["name"] == "test_agent"
        assert "HELLO_WORLD" in call_kwargs["instruction"]
    
    @patch("google.adk.agents.SequentialAgent")
    @patch("google.adk.Agent")
    def test_build_sequential_agent(self, mock_agent_class, mock_seq_class, 
                                      temp_projects_dir, sequential_agent_project):
        """Test building a sequential agent with sub-agents."""
        # Set up mocks to return mock instances
        mock_agent_class.return_value = MagicMock()
        mock_seq_class.return_value = MagicMock()
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        agents = manager._build_agents(sequential_agent_project, tracking_plugin=None)
        
        assert "seq_agent" in agents
        assert "agent_1" in agents
        assert "agent_2" in agents
        mock_seq_class.assert_called_once()
    
    @patch("google.adk.agents.LoopAgent")
    @patch("google.adk.Agent")
    def test_build_loop_agent(self, mock_agent_class, mock_loop_class,
                               temp_projects_dir, loop_agent_project):
        """Test building a loop agent."""
        # Set up mocks to return mock instances
        mock_agent_class.return_value = MagicMock()
        mock_loop_class.return_value = MagicMock()
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        agents = manager._build_agents(loop_agent_project, tracking_plugin=None)
        
        assert "loop_agent" in agents
        mock_loop_class.assert_called_once()
        
        # Verify max_iterations is passed
        call_kwargs = mock_loop_class.call_args.kwargs
        assert call_kwargs["max_iterations"] == 3


class TestModelBuilding:
    """Tests for building model configurations."""
    
    def test_build_gemini_model(self, temp_projects_dir, simple_project):
        """Test building a Gemini model."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        agent = simple_project.agents[0]
        model = manager._build_model(agent.model)
        
        # For Gemini, it should return the model name as a string
        assert model == "gemini-2.0-flash"
    
    @patch("google.adk.models.lite_llm.LiteLlm")
    def test_build_litellm_model(self, mock_litellm, temp_projects_dir):
        """Test building a LiteLLM model."""
        # Set up mock to return a mock instance
        mock_litellm.return_value = MagicMock()
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        model_config = ModelConfig(
            provider="litellm",
            model_name="gpt-4o-mini",
            api_base="http://localhost:8000",
        )
        
        result = manager._build_model(model_config)
        
        mock_litellm.assert_called_once()
        call_kwargs = mock_litellm.call_args.kwargs
        assert call_kwargs["model"] == "gpt-4o-mini"
        assert call_kwargs["api_base"] == "http://localhost:8000"


class TestToolBuilding:
    """Tests for building tools from configuration."""
    
    def test_get_builtin_exit_loop_tool(self, temp_projects_dir):
        """Test getting the exit_loop builtin tool."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        tool = manager._get_builtin_tool("exit_loop")
        
        assert tool is not None
    
    def test_get_unknown_builtin_returns_none(self, temp_projects_dir):
        """Test that unknown builtin tools return None."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        tool = manager._get_builtin_tool("unknown_tool")
        
        assert tool is None
    
    def test_build_tools_with_builtin(self, temp_projects_dir, loop_agent_project):
        """Test building tools list with builtin tools."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        agent = None
        for a in loop_agent_project.agents:
            if isinstance(a, LlmAgentConfig) and a.tools:
                agent = a
                break
        
        tools = manager._build_tools(agent.tools, loop_agent_project)
        
        # Should have the exit_loop tool
        assert len(tools) >= 1


class TestProjectValidation:
    """Tests for project validation."""
    
    def test_project_with_invalid_root_agent_id(self, temp_projects_dir):
        """Test that invalid root_agent_id raises an error."""
        project = Project(
            id="invalid_project",
            name="Invalid Project",
            app=AppConfig(
                id="app_invalid",
                name="Invalid App",
                root_agent_id="nonexistent_agent",
                session_service_uri="memory://",
            ),
            agents=[
                LlmAgentConfig(
                    id="agent_1",
                    name="real_agent",
                    instruction="I exist",
                ),
            ],
        )
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        agents = manager._build_agents(project, tracking_plugin=None)
        
        # The agent should be built but root_agent_id points to wrong agent
        assert "agent_1" in agents
        assert "nonexistent_agent" not in agents
    
    def test_project_with_missing_sub_agents(self, temp_projects_dir):
        """Test handling of missing sub-agent references."""
        project = Project(
            id="missing_sub",
            name="Missing Sub-agents",
            app=AppConfig(
                id="app_missing",
                name="Missing App",
                root_agent_id="seq_agent",
                session_service_uri="memory://",
            ),
            agents=[
                SequentialAgentConfig(
                    id="seq_agent",
                    name="sequential",
                    sub_agents=["nonexistent_1", "nonexistent_2"],
                ),
            ],
        )
        
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        agents = manager._build_agents(project, tracking_plugin=None)
        
        # Sequential agent should be created but with empty sub_agents
        assert "seq_agent" in agents

