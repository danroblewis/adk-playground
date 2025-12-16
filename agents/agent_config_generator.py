from __future__ import annotations

from google.adk import Agent

from backend.ai_task_runner import build_model_from_project


APP_NAME = "config_generator"
USER_ID = "config_gen_user"
OUTPUT_KEY = "generated_json"


def build_agent_config_generator_agent(project) -> Agent:
    """Agent that generates JSON agent configs (single agent, not app code)."""

    return Agent(
        name="config_generator",
        model=build_model_from_project(project),
        instruction="You are an expert at configuring AI agents. Generate valid JSON configurations.",
        output_key=OUTPUT_KEY,
    )

