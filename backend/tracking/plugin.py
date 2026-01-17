"""Unified TrackingPlugin for ADK Playground.

This module provides a single TrackingPlugin implementation that works in both
local execution and sandboxed (Docker) execution contexts.

Previously, this code was duplicated in:
- backend/runtime.py
- backend/sandbox/docker/agent_runner.py

Now consolidated here for maintainability.
"""

from __future__ import annotations

import json
import logging
import time
import traceback
from typing import Any, Callable, Dict, Optional, Union, TYPE_CHECKING

if TYPE_CHECKING:
    from models import RunEvent, RunSession

logger = logging.getLogger(__name__)


class TrackingPlugin:
    """Plugin that tracks all events during agent execution.
    
    This plugin captures model calls, tool invocations, state changes,
    and agent lifecycle events, emitting them to a callback function.
    
    Can be used in two modes:
    1. With a RunSession (stores events in session.events, emits RunEvent objects)
    2. With just a callback (emits plain dicts, for sandbox execution)
    
    Args:
        emit_callback: Async function to call with each event.
        session: Optional RunSession to store events in. If provided,
                 events are also appended to session.events as RunEvent objects.
    """
    
    def __init__(
        self,
        emit_callback: Callable,
        session: Optional["RunSession"] = None,
    ):
        self.emit_callback = emit_callback
        self.session = session
        self.token_counts = {"input": 0, "output": 0}
    
    async def _emit(self, event_data: Dict[str, Any]):
        """Emit an event to the callback and optionally store in session."""
        try:
            # If we have a session, also store as RunEvent
            if self.session is not None:
                from models import RunEvent
                run_event = RunEvent(**event_data)
                self.session.events.append(run_event)
                await self.emit_callback(run_event)
            else:
                # Sandbox mode: emit plain dict
                await self.emit_callback(event_data)
        except Exception as e:
            logger.error(f"Failed to emit event {event_data.get('event_type')}: {e}")
    
    async def _emit_error(self, source: str, error: Exception, context: str = ""):
        """Emit an error event that will show in the message list."""
        await self._emit({
            "event_type": "callback_error",
            "timestamp": time.time(),
            "agent_name": "system",
            "branch": None,
            "data": {
                "source": source,
                "error": str(error),
                "error_type": type(error).__name__,
                "context": context,
                "traceback": traceback.format_exc(),
            },
        })
    
    def _get_branch(self, context) -> Optional[str]:
        """Extract branch from callback_context or tool_context for parallel execution tracking."""
        if hasattr(context, "_invocation_context"):
            branch = getattr(context._invocation_context, "branch", None)
            # Ensure branch is a valid string (not a mock or other object)
            if isinstance(branch, str):
                return branch
        return None
    
    def _safe_serialize(self, value: Any) -> Any:
        """Safely serialize a value to JSON-compatible format."""
        try:
            json.dumps(value)
            return value
        except (TypeError, ValueError):
            return str(value)
    
    def _serialize_contents(self, contents) -> list:
        """Serialize LLM contents to a structured format for display."""
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
                    if hasattr(part, "thought") and part.thought:
                        part_data["thought"] = True
                    if part_data:
                        content_data["parts"].append(part_data)
            
            result.append(content_data)
        
        return result
    
    # =========================================================================
    # Agent Callbacks
    # =========================================================================
    
    async def before_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called before an agent runs."""
        try:
            await self._emit({
                "event_type": "agent_start",
                "timestamp": time.time(),
                "agent_name": agent.name,
                "branch": self._get_branch(callback_context),
                "data": {"instruction": getattr(agent, "instruction", "") or ""},
            })
        except Exception as e:
            logger.error(f"Error in before_agent_callback for {agent.name}: {e}")
            await self._emit_error("before_agent_callback", e, f"agent={agent.name}")
        return None
    
    async def after_agent_callback(self, *, agent, callback_context, **kwargs):
        """Called after an agent runs."""
        try:
            await self._emit({
                "event_type": "agent_end",
                "timestamp": time.time(),
                "agent_name": agent.name,
                "branch": self._get_branch(callback_context),
                "data": {},
            })
        except Exception as e:
            logger.error(f"Error in after_agent_callback for {agent.name}: {e}")
            await self._emit_error("after_agent_callback", e, f"agent={agent.name}")
        return None
    
    # =========================================================================
    # Event Callbacks
    # =========================================================================
    
    async def on_event_callback(self, *, invocation_context, event, **kwargs):
        """Called for every event - captures state changes from output_key etc."""
        if hasattr(event, "actions") and event.actions and event.actions.state_delta:
            state_delta = dict(event.actions.state_delta)
            author = getattr(event, "author", None) or "system"
            branch = getattr(invocation_context, "branch", None)
            # Ensure branch is a valid string
            branch = branch if isinstance(branch, str) else None
            
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
                        "branch": branch,
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
                    "branch": branch,
                    "data": {"state_delta": state_delta},
                })
        return None
    
    # =========================================================================
    # Model Callbacks
    # =========================================================================
    
    async def before_model_callback(self, *, callback_context, llm_request, **kwargs):
        """Called before an LLM call."""
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
                "branch": self._get_branch(callback_context),
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
        """Called after an LLM call."""
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
                "branch": self._get_branch(callback_context),
                "data": {"parts": response_parts, "token_counts": dict(self.token_counts)},
            })
        except Exception as e:
            logger.error(f"Error in after_model_callback: {e}")
            await self._emit_error("after_model_callback", e, "")
        return None
    
    # =========================================================================
    # Tool Callbacks
    # =========================================================================
    
    async def before_tool_callback(self, *, tool, tool_args, tool_context, **kwargs):
        """Called before a tool is executed."""
        try:
            # Serialize args safely
            safe_args = {}
            if tool_args:
                for k, v in tool_args.items():
                    safe_args[k] = self._safe_serialize(v)
            
            await self._emit({
                "event_type": "tool_call",
                "timestamp": time.time(),
                "agent_name": getattr(tool_context, "agent_name", None) or "system",
                "branch": self._get_branch(tool_context),
                "data": {"tool_name": tool.name, "args": safe_args},
            })
        except Exception as e:
            logger.error(f"Error in before_tool_callback for {tool.name}: {e}")
            await self._emit_error("before_tool_callback", e, f"tool={tool.name}")
        return None
    
    async def after_tool_callback(self, *, tool, tool_args, tool_context, result, **kwargs):
        """Called after a tool is executed."""
        try:
            branch = self._get_branch(tool_context)
            
            # Check for state changes from tools
            if hasattr(tool_context, "_event_actions") and tool_context._event_actions.state_delta:
                await self._emit({
                    "event_type": "state_change",
                    "timestamp": time.time(),
                    "agent_name": getattr(tool_context, "agent_name", None) or "system",
                    "branch": branch,
                    "data": {"state_delta": dict(tool_context._event_actions.state_delta)},
                })
            
            # Serialize result safely
            safe_result = self._safe_serialize(result)
            
            await self._emit({
                "event_type": "tool_result",
                "timestamp": time.time(),
                "agent_name": getattr(tool_context, "agent_name", None) or "system",
                "branch": branch,
                "data": {"tool_name": tool.name, "result": safe_result},
            })
        except Exception as e:
            logger.error(f"Error in after_tool_callback for {tool.name}: {e}")
            await self._emit_error("after_tool_callback", e, f"tool={tool.name}")
        return None


def create_tracking_plugin_wrapper(tracker: TrackingPlugin):
    """Create a BasePlugin wrapper around a TrackingPlugin instance.
    
    This is needed because TrackingPlugin doesn't inherit from BasePlugin
    directly (to avoid import issues in the Docker sandbox), but ADK's
    Runner expects plugins to be BasePlugin instances.
    
    Args:
        tracker: The TrackingPlugin instance to wrap.
        
    Returns:
        A BasePlugin subclass that delegates to the tracker.
    """
    from google.adk.plugins import BasePlugin
    
    class TrackingPluginWrapper(BasePlugin):
        def __init__(self, tracker: TrackingPlugin):
            super().__init__(name="tracking")
            self.tracker = tracker
        
        async def before_agent_callback(self, *, agent, callback_context):
            return await self.tracker.before_agent_callback(agent=agent, callback_context=callback_context)
        
        async def after_agent_callback(self, *, agent, callback_context):
            return await self.tracker.after_agent_callback(agent=agent, callback_context=callback_context)
        
        async def on_event_callback(self, *, invocation_context, event):
            return await self.tracker.on_event_callback(invocation_context=invocation_context, event=event)
        
        async def before_model_callback(self, *, callback_context, llm_request):
            return await self.tracker.before_model_callback(callback_context=callback_context, llm_request=llm_request)
        
        async def after_model_callback(self, *, callback_context, llm_response):
            return await self.tracker.after_model_callback(callback_context=callback_context, llm_response=llm_response)
        
        async def before_tool_callback(self, *, tool, tool_args, tool_context):
            return await self.tracker.before_tool_callback(tool=tool, tool_args=tool_args, tool_context=tool_context)
        
        async def after_tool_callback(self, *, tool, tool_args, tool_context, result):
            return await self.tracker.after_tool_callback(tool=tool, tool_args=tool_args, tool_context=tool_context, result=result)
    
    return TrackingPluginWrapper(tracker)

