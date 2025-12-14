"""Docker container lifecycle manager for the sandbox.

This module manages the Docker containers for the App-scoped sandbox:
- Gateway container (mitmproxy)
- Agent runner container
- MCP server containers (for SSE transport)

Based on DOCKER_PLAN.md specification.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import tempfile
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

from .models import (
    MCPContainerStatus,
    MCPServerSandboxConfig,
    NetworkAllowlist,
    SandboxConfig,
    SandboxInstance,
    SandboxStatus,
)
from .mcp_manager import MCPContainerManager

logger = logging.getLogger(__name__)

# Check if docker is available
try:
    import docker
    from docker.errors import DockerException, NotFound, APIError
    DOCKER_AVAILABLE = True
except ImportError:
    DOCKER_AVAILABLE = False
    docker = None
    DockerException = Exception
    NotFound = Exception
    APIError = Exception


class SandboxManager:
    """Manages Docker sandbox lifecycle for ADK apps.
    
    The sandbox is App-scoped: one sandbox instance per App, shared by all
    Agents in the App.
    """
    
    # Image names
    GATEWAY_IMAGE = "adk-sandbox-gateway"
    AGENT_IMAGE = "adk-sandbox-agent"
    MCP_IMAGE = "adk-sandbox-mcp"
    
    # Network name prefix
    NETWORK_PREFIX = "adk-sandbox-net"
    
    def __init__(self, docker_dir: Optional[Path] = None):
        """Initialize the sandbox manager.
        
        Args:
            docker_dir: Directory containing Dockerfiles. Defaults to
                        the docker/ subdirectory of this module.
        """
        self.docker_dir = docker_dir or Path(__file__).parent / "docker"
        self.client: Optional[docker.DockerClient] = None
        self.instances: Dict[str, SandboxInstance] = {}  # app_id -> instance
        self.mcp_managers: Dict[str, MCPContainerManager] = {}  # app_id -> manager
        self._initialized = False
    
    async def initialize(self) -> bool:
        """Initialize Docker client and build images if needed.
        
        Returns:
            True if initialization succeeded
        """
        if not DOCKER_AVAILABLE:
            logger.error("Docker Python SDK not installed. Run: pip install docker")
            return False
        
        try:
            self.client = docker.from_env()
            # Test connection
            self.client.ping()
            logger.info("Docker client connected")
        except DockerException as e:
            logger.error(f"Failed to connect to Docker: {e}")
            return False
        
        # Build images if they don't exist
        try:
            await self._ensure_images_built()
        except Exception as e:
            logger.error(f"Failed to build Docker images: {e}")
            return False
        
        self._initialized = True
        return True
    
    async def _ensure_images_built(self):
        """Ensure Docker images are built."""
        if not self.client:
            return
        
        images_to_build = [
            (self.GATEWAY_IMAGE, "Dockerfile.gateway"),
            (self.AGENT_IMAGE, "Dockerfile.agent"),
            (self.MCP_IMAGE, "Dockerfile.mcp"),
        ]
        
        for image_name, dockerfile in images_to_build:
            try:
                self.client.images.get(image_name)
                logger.info(f"Image {image_name} already exists")
            except NotFound:
                logger.info(f"Building image {image_name}...")
                dockerfile_path = self.docker_dir / dockerfile
                if not dockerfile_path.exists():
                    logger.warning(f"Dockerfile not found: {dockerfile_path}")
                    continue
                
                # Build the image
                try:
                    self.client.images.build(
                        path=str(self.docker_dir),
                        dockerfile=dockerfile,
                        tag=image_name,
                        rm=True,
                    )
                    logger.info(f"Built image {image_name}")
                except Exception as e:
                    logger.error(f"Failed to build {image_name}: {e}")
    
    async def start_sandbox(
        self,
        app_id: str,
        config: SandboxConfig,
        project_config: Dict[str, Any],
        workspace_path: Path,
    ) -> SandboxInstance:
        """Start a sandbox for an App.
        
        Args:
            app_id: The App ID (used for container naming)
            config: Sandbox configuration
            project_config: Full project configuration dict
            workspace_path: Path to the project workspace
        
        Returns:
            The SandboxInstance with container info
        """
        if not self._initialized:
            if not await self.initialize():
                raise RuntimeError("Docker not available")
        
        # Check if already running
        if app_id in self.instances:
            existing = self.instances[app_id]
            if existing.status == SandboxStatus.RUNNING:
                logger.info(f"Sandbox for {app_id} already running")
                return existing
        
        # Create instance
        instance = SandboxInstance(
            app_id=app_id,
            status=SandboxStatus.STARTING,
            started_at=datetime.now(),
            config=config,
        )
        self.instances[app_id] = instance
        
        try:
            # Create network
            network_name = f"{self.NETWORK_PREFIX}-{app_id}"
            network = await self._create_network(network_name)
            
            # Create MCP manager and parse MCP configs
            mcp_manager = MCPContainerManager(client=self.client)
            self.mcp_managers[app_id] = mcp_manager
            mcp_configs = mcp_manager.parse_mcp_configs_from_project(project_config)
            
            # Get MCP-required domains and add to allowlist
            mcp_domains = mcp_manager.get_allowed_domains_for_mcp(mcp_configs)
            
            # Prepare allowlist with defaults and MCP domains
            allowlist = config.allowlist.with_defaults()
            allowlist.auto.extend(mcp_domains)
            allowlist.auto = list(set(allowlist.auto))  # Deduplicate
            
            # Write project config to temp file
            config_file = await self._write_config_file(project_config)
            
            # Start gateway container
            gateway_id = await self._start_gateway(
                app_id=app_id,
                network_name=network_name,
                allowlist=allowlist,
                unknown_action=config.unknown_action,
                approval_timeout=config.approval_timeout,
            )
            instance.gateway_container_id = gateway_id
            
            # Start agent container
            agent_id = await self._start_agent(
                app_id=app_id,
                network_name=network_name,
                workspace_path=workspace_path,
                config_file=config_file,
                memory_limit=config.agent_memory_limit_mb,
                cpu_limit=config.agent_cpu_limit,
                mcp_configs=mcp_configs,
            )
            instance.agent_container_id = agent_id
            
            # Start SSE MCP server containers
            for mcp_config in mcp_configs:
                if mcp_config.transport == "sse":
                    mcp_status = await mcp_manager.start_sse_container(
                        config=mcp_config,
                        network_name=network_name,
                        session_id=instance.id,
                    )
                    instance.mcp_containers.append(mcp_status)
            
            instance.status = SandboxStatus.RUNNING
            logger.info(f"Sandbox started for {app_id}")
            
        except Exception as e:
            instance.status = SandboxStatus.ERROR
            instance.error = str(e)
            logger.error(f"Failed to start sandbox for {app_id}: {e}")
            # Cleanup any partially created containers
            await self.stop_sandbox(app_id)
            raise
        
        return instance
    
    async def _create_network(self, network_name: str):
        """Create an isolated Docker network."""
        if not self.client:
            raise RuntimeError("Docker client not initialized")
        
        try:
            # Check if network exists
            network = self.client.networks.get(network_name)
            logger.info(f"Network {network_name} already exists")
            return network
        except NotFound:
            pass
        
        # Create network
        network = self.client.networks.create(
            network_name,
            driver="bridge",
            internal=False,  # Allow outbound through gateway
        )
        logger.info(f"Created network {network_name}")
        return network
    
    async def _write_config_file(self, project_config: Dict[str, Any]) -> Path:
        """Write project config to a temp file."""
        fd, path = tempfile.mkstemp(suffix=".json", prefix="sandbox_config_")
        with os.fdopen(fd, "w") as f:
            json.dump(project_config, f)
        return Path(path)
    
    async def _start_gateway(
        self,
        app_id: str,
        network_name: str,
        allowlist: NetworkAllowlist,
        unknown_action: str,
        approval_timeout: int,
    ) -> str:
        """Start the gateway container."""
        if not self.client:
            raise RuntimeError("Docker client not initialized")
        
        # Prepare allowlist patterns
        patterns = []
        for p in allowlist.all_patterns():
            patterns.append({
                "pattern": p.pattern,
                "type": p.pattern_type.value,
            })
        
        container = self.client.containers.run(
            image=self.GATEWAY_IMAGE,
            name=f"sandbox-gateway-{app_id}",
            detach=True,
            network=network_name,
            environment={
                "ALLOWLIST_PATTERNS": json.dumps(patterns),
                "UNKNOWN_ACTION": unknown_action,
                "APPROVAL_TIMEOUT": str(approval_timeout),
                "HOST_WEBHOOK_URL": "http://host.docker.internal:8080",
            },
            ports={
                "8080/tcp": None,  # Proxy port (internal)
                "8081/tcp": None,  # Control API
            },
            extra_hosts={
                "host.docker.internal": "host-gateway",
            },
        )
        
        logger.info(f"Started gateway container: {container.id[:12]}")
        return container.id
    
    async def _start_agent(
        self,
        app_id: str,
        network_name: str,
        workspace_path: Path,
        config_file: Path,
        memory_limit: int,
        cpu_limit: float,
        mcp_configs: Optional[List[MCPServerSandboxConfig]] = None,
    ) -> str:
        """Start the agent runner container.
        
        Args:
            app_id: App ID for naming
            network_name: Docker network to join
            workspace_path: Path to project workspace
            config_file: Path to project config file
            memory_limit: Memory limit in MB
            cpu_limit: CPU limit (1.0 = 1 core)
            mcp_configs: MCP server configurations (stdio servers will be spawned in container)
        """
        if not self.client:
            raise RuntimeError("Docker client not initialized")
        
        # Memory limit in bytes
        mem_limit = f"{memory_limit}m"
        
        # Prepare MCP configuration for stdio servers
        mcp_manager = self.mcp_managers.get(app_id)
        stdio_mcp_config = {}
        if mcp_manager and mcp_configs:
            stdio_mcp_config = mcp_manager.get_stdio_config_for_agent(mcp_configs)
        
        container = self.client.containers.run(
            image=self.AGENT_IMAGE,
            name=f"sandbox-agent-{app_id}",
            detach=True,
            network=network_name,
            environment={
                "HTTP_PROXY": "http://gateway:8080",
                "HTTPS_PROXY": "http://gateway:8080",
                "NO_PROXY": "localhost,127.0.0.1,gateway",
                "WORKSPACE_PATH": "/workspace",
                "PROJECT_CONFIG_PATH": "/config/project.json",
                "HOST_URL": "http://host.docker.internal:8080",
                # MCP server configuration for stdio servers
                "MCP_SERVERS_CONFIG": json.dumps(stdio_mcp_config),
            },
            volumes={
                str(workspace_path): {"bind": "/workspace", "mode": "ro"},
                str(config_file): {"bind": "/config/project.json", "mode": "ro"},
            },
            ports={
                "5000/tcp": None,  # Agent API
            },
            mem_limit=mem_limit,
            cpu_period=100000,
            cpu_quota=int(cpu_limit * 100000),
            extra_hosts={
                "host.docker.internal": "host-gateway",
            },
            # Add alias for gateway
            network_aliases=["agent-runner"],
        )
        
        # Connect to network with alias
        network = self.client.networks.get(network_name)
        network.connect(container, aliases=["agent-runner"])
        
        logger.info(f"Started agent container: {container.id[:12]}")
        return container.id
    
    async def stop_sandbox(self, app_id: str) -> bool:
        """Stop a sandbox and cleanup containers.
        
        Args:
            app_id: The App ID
        
        Returns:
            True if stopped successfully
        """
        if app_id not in self.instances:
            return False
        
        instance = self.instances[app_id]
        instance.status = SandboxStatus.STOPPING
        
        if not self.client:
            return False
        
        # Stop containers
        for container_id in [
            instance.agent_container_id,
            instance.gateway_container_id,
        ]:
            if container_id:
                try:
                    container = self.client.containers.get(container_id)
                    container.stop(timeout=5)
                    container.remove()
                    logger.info(f"Stopped container {container_id[:12]}")
                except NotFound:
                    pass
                except Exception as e:
                    logger.error(f"Error stopping container {container_id[:12]}: {e}")
        
        # Stop MCP containers
        for mcp in instance.mcp_containers:
            if mcp.container_id:
                try:
                    container = self.client.containers.get(mcp.container_id)
                    container.stop(timeout=5)
                    container.remove()
                except NotFound:
                    pass
                except Exception as e:
                    logger.error(f"Error stopping MCP container {mcp.name}: {e}")
        
        # Remove network
        network_name = f"{self.NETWORK_PREFIX}-{app_id}"
        try:
            network = self.client.networks.get(network_name)
            network.remove()
            logger.info(f"Removed network {network_name}")
        except NotFound:
            pass
        except Exception as e:
            logger.error(f"Error removing network: {e}")
        
        # Cleanup MCP manager
        if app_id in self.mcp_managers:
            await self.mcp_managers[app_id].stop_all()
            del self.mcp_managers[app_id]
        
        instance.status = SandboxStatus.STOPPED
        del self.instances[app_id]
        
        return True
    
    async def get_sandbox_status(self, app_id: str) -> Optional[SandboxInstance]:
        """Get the status of a sandbox.
        
        Args:
            app_id: The App ID
        
        Returns:
            The SandboxInstance or None if not found
        """
        return self.instances.get(app_id)
    
    async def list_sandboxes(self) -> List[SandboxInstance]:
        """List all sandbox instances."""
        return list(self.instances.values())
    
    async def send_message_to_agent(
        self,
        app_id: str,
        message: str,
        session_id: Optional[str] = None,
    ) -> Optional[str]:
        """Send a message to the agent in the sandbox.
        
        Args:
            app_id: The App ID
            message: The user message
            session_id: Optional session ID to continue
        
        Returns:
            The session ID if started successfully
        """
        instance = self.instances.get(app_id)
        if not instance or instance.status != SandboxStatus.RUNNING:
            return None
        
        if not instance.agent_container_id or not self.client:
            return None
        
        # Get agent container port
        try:
            container = self.client.containers.get(instance.agent_container_id)
            ports = container.ports.get("5000/tcp")
            if not ports:
                return None
            host_port = ports[0]["HostPort"]
            
            # Send message to agent
            import aiohttp
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"http://localhost:{host_port}/run",
                    json={"message": message, "session_id": session_id},
                ) as resp:
                    if resp.status == 200:
                        data = await resp.json()
                        return data.get("session_id")
        except Exception as e:
            logger.error(f"Failed to send message to agent: {e}")
        
        return None
    
    async def approve_request(
        self,
        app_id: str,
        request_id: str,
        pattern: Optional[str] = None,
    ) -> bool:
        """Approve a pending network request.
        
        Args:
            app_id: The App ID
            request_id: The request ID to approve
            pattern: Optional pattern to add to allowlist
        
        Returns:
            True if approved successfully
        """
        instance = self.instances.get(app_id)
        if not instance or instance.status != SandboxStatus.RUNNING:
            return False
        
        if not instance.gateway_container_id or not self.client:
            return False
        
        try:
            container = self.client.containers.get(instance.gateway_container_id)
            ports = container.ports.get("8081/tcp")
            if not ports:
                return False
            host_port = ports[0]["HostPort"]
            
            import aiohttp
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"http://localhost:{host_port}/approve",
                    json={"request_id": request_id, "pattern": pattern},
                ) as resp:
                    return resp.status == 200
        except Exception as e:
            logger.error(f"Failed to approve request: {e}")
        
        return False
    
    async def deny_request(self, app_id: str, request_id: str) -> bool:
        """Deny a pending network request."""
        instance = self.instances.get(app_id)
        if not instance or instance.status != SandboxStatus.RUNNING:
            return False
        
        if not instance.gateway_container_id or not self.client:
            return False
        
        try:
            container = self.client.containers.get(instance.gateway_container_id)
            ports = container.ports.get("8081/tcp")
            if not ports:
                return False
            host_port = ports[0]["HostPort"]
            
            import aiohttp
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"http://localhost:{host_port}/deny",
                    json={"request_id": request_id},
                ) as resp:
                    return resp.status == 200
        except Exception as e:
            logger.error(f"Failed to deny request: {e}")
        
        return False
    
    async def cleanup(self):
        """Cleanup all sandboxes on shutdown."""
        for app_id in list(self.instances.keys()):
            await self.stop_sandbox(app_id)


# Global sandbox manager instance
_manager: Optional[SandboxManager] = None


def get_sandbox_manager() -> SandboxManager:
    """Get the global sandbox manager instance."""
    global _manager
    if _manager is None:
        _manager = SandboxManager()
    return _manager

