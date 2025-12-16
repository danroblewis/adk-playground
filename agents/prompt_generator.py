from __future__ import annotations

from google.adk import Agent

from backend.ai_task_runner import build_model_from_project


APP_NAME = "prompt_generator"
USER_ID = "prompt_gen_user"
OUTPUT_KEY = "generated_prompt"


def build_prompt_generator_agent(project) -> Agent:
    """Agent that generates instruction prompts for a target agent."""

    return Agent(
        name="prompt_generator",
        model=build_model_from_project(project),
        instruction=(
            "You are a prompt engineering expert. "
            "Generate high-quality instruction prompts for AI agents."
        ),
        output_key=OUTPUT_KEY,
    )

