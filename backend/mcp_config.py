"""MCP configuration reader for ~/.mcp.conf.yml.

This module reads MCP server credentials and settings from a centralized
config file and provides them to the sandbox container.
"""

from __future__ import annotations

import logging
import os
from pathlib import Path
from typing import Any, Dict, Optional

import yaml

logger = logging.getLogger(__name__)

# Default path to MCP config file
DEFAULT_MCP_CONFIG_PATH = Path.home() / ".mcp.conf.yml"


def load_mcp_config(config_path: Optional[Path] = None) -> Dict[str, Any]:
    """Load MCP configuration from YAML file.
    
    Args:
        config_path: Path to config file. Defaults to ~/.mcp.conf.yml
        
    Returns:
        Parsed configuration dict, or empty dict if file doesn't exist.
    """
    path = config_path or DEFAULT_MCP_CONFIG_PATH
    
    if not path.exists():
        logger.debug(f"MCP config file not found at {path}")
        return {}
    
    try:
        with open(path, 'r') as f:
            config = yaml.safe_load(f) or {}
        logger.info(f"Loaded MCP config from {path} with {len(config)} sections")
        return config
    except Exception as e:
        logger.warning(f"Failed to load MCP config from {path}: {e}")
        return {}


def get_global_settings(config: Dict[str, Any]) -> Dict[str, Any]:
    """Extract global settings from config.
    
    Returns settings like log_level, timeout, etc.
    """
    return config.get("global", {})


def get_server_config(config: Dict[str, Any], server_name: str) -> Dict[str, Any]:
    """Get configuration for a specific MCP server.
    
    Args:
        config: The loaded config dict
        server_name: Name of the server (e.g., "jira", "google-drive")
        
    Returns:
        Server-specific config dict, or empty dict if not found.
    """
    # Try exact match first
    if server_name in config:
        return config[server_name]
    
    # Try normalized name (underscores to hyphens and vice versa)
    normalized = server_name.replace("_", "-")
    if normalized in config:
        return config[normalized]
    
    normalized = server_name.replace("-", "_")
    if normalized in config:
        return config[normalized]
    
    return {}


def get_server_auth(config: Dict[str, Any], server_name: str) -> Dict[str, Any]:
    """Get auth credentials for a specific MCP server.
    
    Args:
        config: The loaded config dict
        server_name: Name of the server (e.g., "jira", "google-drive")
        
    Returns:
        Auth dict with credentials, or empty dict if not found.
    """
    server_config = get_server_config(config, server_name)
    return server_config.get("auth", {})


def config_to_env_vars(config: Dict[str, Any], server_name: str) -> Dict[str, str]:
    """Convert server config to environment variables for the container.
    
    Converts auth credentials to env vars like:
      jira.auth.user -> JIRA_USER
      jira.auth.token -> JIRA_TOKEN
      google-drive.auth.credentials_file -> GOOGLE_DRIVE_CREDENTIALS_FILE
    
    Args:
        config: The loaded config dict
        server_name: Name of the server
        
    Returns:
        Dict of environment variable names to values.
    """
    server_config = get_server_config(config, server_name)
    if not server_config:
        return {}
    
    env_vars = {}
    prefix = server_name.upper().replace("-", "_")
    
    # Handle auth section
    auth = server_config.get("auth", {})
    for key, value in auth.items():
        if value is not None:
            env_name = f"{prefix}_{key.upper()}"
            env_vars[env_name] = str(value)
    
    # Handle other top-level settings (not auth)
    for key, value in server_config.items():
        if key != "auth" and value is not None and not isinstance(value, dict):
            env_name = f"{prefix}_{key.upper()}"
            env_vars[env_name] = str(value)
    
    return env_vars


def get_all_env_vars(config: Dict[str, Any]) -> Dict[str, str]:
    """Get all environment variables from all server configs.
    
    Args:
        config: The loaded config dict
        
    Returns:
        Dict of all environment variable names to values.
    """
    env_vars = {}
    
    for section_name, section_config in config.items():
        if section_name == "global":
            # Handle global settings with MCP_ prefix
            if isinstance(section_config, dict):
                for key, value in section_config.items():
                    if value is not None and not isinstance(value, dict):
                        env_name = f"MCP_{key.upper()}"
                        env_vars[env_name] = str(value)
        elif isinstance(section_config, dict):
            # Handle server-specific configs
            server_env = config_to_env_vars(config, section_name)
            env_vars.update(server_env)
    
    return env_vars


# Singleton cached config
_cached_config: Optional[Dict[str, Any]] = None


def get_mcp_config(force_reload: bool = False) -> Dict[str, Any]:
    """Get the MCP configuration (cached).
    
    Args:
        force_reload: If True, reload from disk even if cached.
        
    Returns:
        The MCP configuration dict.
    """
    global _cached_config
    
    if _cached_config is None or force_reload:
        _cached_config = load_mcp_config()
    
    return _cached_config


def get_mcp_env_vars(force_reload: bool = False) -> Dict[str, str]:
    """Get all MCP environment variables (cached).
    
    Args:
        force_reload: If True, reload config from disk.
        
    Returns:
        Dict of environment variable names to values.
    """
    config = get_mcp_config(force_reload)
    return get_all_env_vars(config)

