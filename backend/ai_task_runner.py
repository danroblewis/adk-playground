"""Utilities for running one-off ADK agents ("AI tasks") in-process.

Several HTTP endpoints need to run a single-turn LLM/ADK agent to generate
arbitrary outputs (prompt generation, code generation, etc.). Historically each
endpoint duplicated the same Runner bootstrapping. This module centralizes that
logic so new AI tasks can be added without copy/paste.
"""

from __future__ import annotations

from contextlib import contextmanager
from dataclasses import dataclass
from typing import Any, Dict, Optional


@dataclass(frozen=True)
class AiTaskResult:
    """Result of a single-turn AI task run."""

    text: str
    session_state: Dict[str, Any]
    app_name: str
    agent_name: str
    user_id: str
    session_id: str


@contextmanager
def temporary_env(env_vars: Dict[str, str]):
    """Temporarily set env vars; restore previous values on exit."""

    import os

    old_env: Dict[str, Optional[str]] = {}
    try:
        for key, value in (env_vars or {}).items():
            old_env[key] = os.environ.get(key)
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value
        yield
    finally:
        for key, value in old_env.items():
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value


def _select_adk_model_from_project(project) -> Any:
    """Select an ADK model based on project configuration.

    Returns either a model name (str) or an ADK model instance (e.g. LiteLlm).
    """

    model_config = None
    if getattr(project.app, "models", None):
        if getattr(project.app, "default_model_id", None):
            model_config = next(
                (m for m in project.app.models if m.id == project.app.default_model_id),
                None,
            )
        if not model_config:
            model_config = project.app.models[0]

    if model_config and getattr(model_config, "provider", None) == "litellm":
        from google.adk.models.lite_llm import LiteLlm

        return LiteLlm(
            model=model_config.model_name,
            api_base=model_config.api_base,
        )

    if model_config:
        return model_config.model_name

    # Default fallback
    return "gemini-2.0-flash"


def _cleanup_code_fences(text: str) -> str:
    code = (text or "").strip()
    if code.startswith("```python"):
        code = code[9:]
    elif code.startswith("```"):
        code = code[3:]
    if code.endswith("```"):
        code = code[:-3]
    return code.strip()


def build_model_from_project(project) -> Any:
    """Public helper: select an ADK model from a Project."""

    return _select_adk_model_from_project(project)


async def run_agent_task(
    *,
    agent: Any,
    message: str,
    output_key: Optional[str] = None,
    app_name: str = "ai_task",
    user_id: str = "ai_task_user",
    env_vars: Optional[Dict[str, str]] = None,
    cleanup_code_fences: bool = False,
) -> AiTaskResult:
    """Run a caller-provided ADK Agent and return output + full session state.

    This is the core primitive intended for running "in-app agents" and future
    multi-agent systems you define in `agents/`.
    """

    from google.adk.runners import Runner
    from google.adk.sessions.in_memory_session_service import InMemorySessionService
    from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
    from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService
    from google.genai import types

    effective_output_key = output_key or getattr(agent, "output_key", None)

    runner = Runner(
        app_name=app_name,
        agent=agent,
        session_service=InMemorySessionService(),
        memory_service=InMemoryMemoryService(),
        artifact_service=InMemoryArtifactService(),
    )

    with temporary_env(env_vars or {}):
        session = await runner.session_service.create_session(
            app_name=app_name,
            user_id=user_id,
        )

        streamed_text_parts: list[str] = []
        try:
            async for event in runner.run_async(
                session_id=session.id,
                user_id=user_id,
                new_message=types.Content(
                    role="user",
                    parts=[types.Part.from_text(text=message)],
                ),
            ):
                if (
                    not effective_output_key
                    and getattr(event, "content", None)
                    and getattr(event.content, "parts", None)
                ):
                    for part in event.content.parts:
                        if hasattr(part, "text") and part.text:
                            streamed_text_parts.append(part.text)

            final_session = await runner.session_service.get_session(
                app_name=app_name,
                user_id=user_id,
                session_id=session.id,
            )
            session_state = (
                dict(final_session.state)
                if final_session and getattr(final_session, "state", None)
                else {}
            )

            if effective_output_key:
                text = str(session_state.get(effective_output_key, "") or "").strip()
            else:
                text = "".join(streamed_text_parts).strip()

            if cleanup_code_fences:
                text = _cleanup_code_fences(text)

            return AiTaskResult(
                text=text,
                session_state=session_state,
                app_name=app_name,
                agent_name=getattr(agent, "name", "agent"),
                user_id=user_id,
                session_id=session.id,
            )
        finally:
            await runner.close()


async def run_ai_task(
    *,
    project,
    instruction: str,
    message: str,
    output_key: Optional[str] = None,
    app_name: str = "ai_task",
    agent_name: str = "ai_task_agent",
    user_id: str = "ai_task_user",
    cleanup_code_fences: bool = False,
) -> AiTaskResult:
    """Run a single-turn ADK Agent via Runner and return final output.

    - Uses project's `app.env_vars` for API keys (temporarily).
    - Uses project's default model config if available.
    - If `output_key` is provided, returns that value from session state (best
      effort to avoid model "thinking" blocks). Otherwise returns concatenated
      assistant text from streamed events.
    """

    from google.adk import Agent

    model = _select_adk_model_from_project(project)

    agent_kwargs: Dict[str, Any] = {
        "name": agent_name,
        "model": model,
        "instruction": instruction,
    }
    if output_key:
        agent_kwargs["output_key"] = output_key

    task_agent = Agent(**agent_kwargs)

    return await run_agent_task(
        agent=task_agent,
        message=message,
        output_key=output_key,
        app_name=app_name,
        user_id=user_id,
        env_vars=getattr(project.app, "env_vars", None) or {},
        cleanup_code_fences=cleanup_code_fences,
    )

