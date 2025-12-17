"""Tests for ParallelAgent containing LoopAgents.

This test file specifically tests the case where a ParallelAgent
contains LoopAgents as sub-agents, which was reported to cause
"unhandled errors in a TaskGroup" errors.
"""

from __future__ import annotations

import asyncio
import sys
from pathlib import Path
from typing import Any, Dict, List
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

# Add backend to path
backend_dir = Path(__file__).parent.parent / "backend"
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

from models import RunEvent, Project
from runtime import RuntimeManager
from code_generator import generate_python_code


class TestParallelLoopAgentsCodeGeneration:
    """Tests for code generation of parallel loop agents."""
    
    def test_generated_code_has_correct_structure(self, parallel_loop_agents_project):
        """Test that generated code has correct agent structure."""
        code = generate_python_code(parallel_loop_agents_project)
        
        # Check all agents are present
        assert "parallel_controller" in code
        assert "loop_controller_1" in code
        assert "loop_controller_2" in code
        assert "agent_in_loop_1" in code
        assert "agent_in_loop_2" in code
        
        # Check ParallelAgent has correct sub-agents
        assert "ParallelAgent" in code
        assert "LoopAgent" in code
        
        # Check loop agents have max_iterations
        assert "max_iterations=2" in code
    
    def test_agent_order_is_correct(self, parallel_loop_agents_project):
        """Test that agents are ordered correctly (dependencies first)."""
        code = generate_python_code(parallel_loop_agents_project)
        
        # LLM agents should come before loop agents (check variable assignment lines)
        # The generated code uses "_agent" suffix for variable names
        llm1_pos = code.find("agent_in_loop_1_agent = Agent(")
        llm2_pos = code.find("agent_in_loop_2_agent = Agent(")
        loop1_pos = code.find("loop_controller_1_agent = LoopAgent(")
        loop2_pos = code.find("loop_controller_2_agent = LoopAgent(")
        parallel_pos = code.find("parallel_controller_agent = ParallelAgent(")
        
        # All agents should be found
        assert llm1_pos > 0, f"agent_in_loop_1_agent not found"
        assert loop1_pos > 0, f"loop_controller_1_agent not found"
        assert parallel_pos > 0, f"parallel_controller_agent not found"
        
        # LLM agents should be defined before loop agents
        assert llm1_pos < loop1_pos, "LLM agent 1 should be defined before loop agent 1"
        
        # Loop agents should be defined before parallel agent
        assert loop1_pos < parallel_pos, "Loop agent 1 should be defined before parallel agent"
        assert loop2_pos < parallel_pos, "Loop agent 2 should be defined before parallel agent"


class TestParallelLoopAgentsExecution:
    """Tests for execution of parallel loop agents."""
    
    def test_execute_generated_code_produces_app(self, temp_projects_dir, parallel_loop_agents_project):
        """Test that _execute_generated_code produces an app without errors."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        # Prepare temp dir for imports
        manager._prepare_temp_dir(parallel_loop_agents_project, "test_session")
        
        try:
            app = manager._execute_generated_code(parallel_loop_agents_project)
            
            # App should exist
            assert app is not None
            assert app.name == "Parallel_Loop_App"
            assert app.root_agent is not None
            
            # Root agent should be the parallel controller
            assert app.root_agent.name == "parallel_controller"
            
            # Check sub-agents
            assert hasattr(app.root_agent, 'sub_agents')
            assert len(app.root_agent.sub_agents) == 2
            
            # Each sub-agent should be a LoopAgent
            for sub_agent in app.root_agent.sub_agents:
                assert sub_agent.__class__.__name__ == "LoopAgent"
                assert hasattr(sub_agent, 'sub_agents')
                assert len(sub_agent.sub_agents) == 1
        finally:
            manager._cleanup_temp_dir("test_session")
    
    @pytest.mark.asyncio
    async def test_parallel_loop_agents_no_taskgroup_error(
        self, 
        temp_projects_dir, 
        parallel_loop_agents_project
    ):
        """Test that ParallelAgent with LoopAgents doesn't cause TaskGroup errors.
        
        This is the main regression test for the reported bug:
        "unhandled errors in a TaskGroup (1 sub-exception)"
        """
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        events: List[RunEvent] = []
        errors: List[str] = []
        
        async def collector(event: RunEvent):
            events.append(event)
            # Check for TaskGroup errors
            if event.data:
                error_text = str(event.data.get("error", ""))
                if "TaskGroup" in error_text or "sub-exception" in error_text:
                    errors.append(error_text)
        
        # Mock the LLM to return a simple response with exit_loop
        mock_response = MagicMock()
        mock_response.content = MagicMock()
        mock_part = MagicMock()
        mock_part.text = "Loop iteration complete. EXIT LOOP NOW."
        mock_part.thought = False
        mock_part.function_call = None
        mock_response.content.parts = [mock_part]
        mock_response.content.role = "model"
        mock_response.usage_metadata = MagicMock()
        mock_response.usage_metadata.prompt_token_count = 10
        mock_response.usage_metadata.candidates_token_count = 5
        mock_response.candidates = []
        
        # We need to patch the LLM at the right level
        # The actual agent runner uses the ADK's LLM interface
        with patch('google.adk.models.lite_llm.LiteLlm') as MockLiteLlm:
            mock_llm = MagicMock()
            mock_llm.generate_content_async = AsyncMock(return_value=mock_response)
            MockLiteLlm.return_value = mock_llm
            
            try:
                # Run the agent
                async for event in manager.run_agent(
                    project=parallel_loop_agents_project,
                    message="Run both loops",
                    event_callback=collector,
                ):
                    pass
            except Exception as e:
                error_str = str(e)
                if "TaskGroup" in error_str or "sub-exception" in error_str:
                    pytest.fail(f"TaskGroup error occurred: {error_str}")
        
        # Assert no TaskGroup errors were collected
        assert len(errors) == 0, f"TaskGroup errors found: {errors}"
    
    def test_parallel_loop_structure_is_valid(self, temp_projects_dir, parallel_loop_agents_project):
        """Test that the parallel loop agent structure is valid and can be instantiated."""
        manager = RuntimeManager(projects_dir=str(temp_projects_dir))
        
        # Prepare temp dir for imports
        manager._prepare_temp_dir(parallel_loop_agents_project, "test_session")
        
        try:
            app = manager._execute_generated_code(parallel_loop_agents_project)
            
            # Verify structure
            root = app.root_agent
            assert root.name == "parallel_controller"
            
            # Check both loop agents exist
            loop_names = [sa.name for sa in root.sub_agents]
            assert "loop_controller_1" in loop_names
            assert "loop_controller_2" in loop_names
            
            # Check LLM agents are nested inside loop agents
            for loop_agent in root.sub_agents:
                assert len(loop_agent.sub_agents) == 1
                assert loop_agent.sub_agents[0].name.startswith("agent_in_loop")
        finally:
            manager._cleanup_temp_dir("test_session")

