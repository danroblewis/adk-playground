"""Shared tracking plugin for ADK agent execution.

This module provides a unified TrackingPlugin that can be used in both
local execution (runtime.py) and sandboxed execution (docker/agent_runner.py).
"""

from .plugin import TrackingPlugin, create_tracking_plugin_wrapper

__all__ = ["TrackingPlugin", "create_tracking_plugin_wrapper"]

