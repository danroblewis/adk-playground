# Docker Sandbox Plan

This document outlines the plan for running ADK agents in isolated Docker containers with network monitoring and interactive approval.

## Overview

Run agents in a sandboxed Docker environment where:
- Agent code runs in an isolated container with **no direct internet access**
- All network traffic is routed through a **mitmproxy gateway**
- Users can **monitor all network requests** in real-time
- Unknown domains trigger an **interactive approval dialog** with sound notification
- Approved domains are added to an allowlist (per-session or permanent)

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  HOST MACHINE                                                                   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │  ADK Playground Backend (FastAPI)                      :8080            │   │
│  │  - POST /api/run-sandboxed - Start sandboxed run                        │   │
│  │  - WebSocket /ws/sandbox/{session} - Stream events                      │   │
│  │  - POST /api/sandbox/{session}/approval - Forward user decisions        │   │
│  └──────────────────────────────────────────────────────────────────────────┘   │
│                                     │                                           │
│                          Docker API │ (docker-py)                               │
│                                     ▼                                           │
│  ┌──────────────────────────────────────────────────────────────────────────┐   │
│  │  DOCKER                                                                  │   │
│  │                                                                          │   │
│  │  ┌─── sandbox-network (internal, no internet) ────────────────────────┐  │   │
│  │  │                                                                     │  │   │
│  │  │  ┌────────────────────────────┐   ┌────────────────────────────┐   │  │   │
│  │  │  │  agent-runner              │   │  mitmproxy-gateway         │   │  │   │
│  │  │  │                            │   │                            │   │  │   │
│  │  │  │  - Runs ADK agent          │   │  - mitmproxy with addon    │   │  │   │
│  │  │  │  - HTTP API :5000          │◀──│  - Allowlist checking      │   │  │   │
│  │  │  │  - WebSocket streaming     │   │  - Request interception    │───┼──┼──▶ Internet
│  │  │  │  - No direct internet      │   │  - Webhooks to host        │   │  │   │
│  │  │  │                            │   │                            │   │  │   │
│  │  │  │  HTTP_PROXY=gateway:8080   │──▶│  :8080 (proxy)             │   │  │   │
│  │  │  │                            │   │  :8081 (control API)       │   │  │   │
│  │  │  └────────────────────────────┘   └────────────────────────────┘   │  │   │
│  │  └────────────────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Components

### 1. Gateway Container (mitmproxy)

**Dockerfile.gateway**
```dockerfile
FROM mitmproxy/mitmproxy:latest

COPY gateway_addon.py /app/
COPY gateway_control.py /app/

# Run mitmproxy with our addon + control API
CMD ["sh", "-c", "mitmdump -s /app/gateway_addon.py & python /app/gateway_control.py"]

EXPOSE 8080 8081
```

**Features:**
- Intercepts all HTTP/HTTPS traffic from agent container
- Checks requests against allowlist
- Pauses unknown requests and notifies host for approval
- Streams all network activity to host via webhooks
- Control API for receiving approval decisions

**Allowlist sources (auto-populated):**
- LLM providers: `generativelanguage.googleapis.com`, `api.anthropic.com`, `api.openai.com`, `api.groq.com`
- Project config: `app.model.api_base`, LiteLLM config URLs
- MCP servers: Any URLs in MCP server configurations
- User-added: Manually configured domains
- Session-approved: Domains approved during current run

### 2. Agent Runner Container

**Dockerfile.agent**
```dockerfile
FROM python:3.11-slim

RUN pip install google-adk aiohttp

COPY agent_runner.py /app/

WORKDIR /app
EXPOSE 5000

CMD ["python", "agent_runner.py"]
```

**Features:**
- Loads project code from mounted `/workspace` volume
- Runs ADK agent with Runner
- Exposes WebSocket API for control and event streaming
- All network traffic goes through HTTP_PROXY (gateway)

### 3. Backend Integration

**New files:**
- `backend/sandbox/docker_manager.py` - Docker container lifecycle
- `backend/sandbox/network_monitor.py` - Track and stream network events

**New endpoints:**
- `POST /api/run-sandboxed` - Start agent in sandbox
- `POST /api/sandbox/{session}/approval` - Forward approval decision
- `GET /api/sandbox/{session}/network` - Get network activity history
- WebSocket `/ws/sandbox/{session}` - Stream agent + network events

### 4. Frontend Components

**New components:**
- `NetworkMonitor.tsx` - Real-time network activity display
- `NetworkApprovalDialog.tsx` - Interactive approval popup
- `SandboxSettings.tsx` - Configuration UI

**Features:**
- Real-time network request list (method, URL, status, timing)
- Filter: show/hide LLM API calls
- Approval dialog with sound notification
- Options: Deny, Allow Once, Allow Domain, Allow Permanently
- 30-second timeout with visual countdown

## User Flow

1. User enables "Docker Sandbox" in App settings
2. User configures allowlist (or uses defaults)
3. User clicks "Run" 
4. Backend creates Docker containers
5. Agent runs, events stream to frontend
6. When agent makes network request:
   - If domain in allowlist → forward immediately, show in monitor
   - If domain not in allowlist → pause, show approval dialog
7. User approves/denies
8. Request continues or is blocked
9. Run completes, containers cleaned up

## Configuration UI

```
┌─────────────────────────────────────────────────────────────────┐
│  🐳 Docker Sandbox Settings                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [✓] Enable Docker sandbox for agent runs                       │
│                                                                 │
│  Network Allowlist:                                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ✓ Gemini API (generativelanguage.googleapis.com)       │   │
│  │  ✓ Anthropic API (api.anthropic.com)                    │   │
│  │  ✓ OpenAI API (api.openai.com)                          │   │
│  │  ✓ Groq API (api.groq.com)                              │   │
│  │  ───────────────────────────────────────────────────    │   │
│  │  ✓ api.github.com (from MCP: github)                    │   │
│  │  ✓ localhost:11434 (from LiteLLM: ollama)               │   │
│  │  ───────────────────────────────────────────────────    │   │
│  │  ✓ api.custom-service.com (manually added)              │   │
│  │    [+ Add domain...]                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  When unknown domain requested:                                 │
│  (•) Ask for approval (with sound notification)                 │
│  ( ) Auto-deny all unknown                                      │
│  ( ) Auto-allow all (⚠️ defeats sandbox purpose)                │
│                                                                 │
│  Timeout for approval: [30] seconds                             │
│                                                                 │
│  Resource Limits:                                               │
│  Memory: [512] MB    CPU: [1.0] cores    Timeout: [300] sec    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Network Monitor UI

```
┌─────────────────────────────────────────────────────────────────────┐
│  🌐 Network Activity                              [Filter: All ▾]   │
├─────────────────────────────────────────────────────────────────────┤
│  ✓ POST api.github.com/graphql              200   45ms    1.2KB    │
│  ✓ GET  api.weather.com/v1/forecast         200   120ms   3.4KB    │
│  ⏳ GET  api.unknown.com/data               PENDING (asking...)    │
│  🚫 GET  malicious-site.com/exfil           DENIED                 │
│─────────────────────────────────────────────────────────────────────│
│  🤖 POST generativelanguage.googleapis.com  200   890ms   12KB     │
├─────────────────────────────────────────────────────────────────────┤
│  [ ] Show LLM API calls    [Export HAR]                            │
│  Requests: 5 | Allowed: 3 | Denied: 1 | Pending: 1                 │
└─────────────────────────────────────────────────────────────────────┘
```

## Approval Dialog

```
┌─────────────────────────────────────────────────────────────────┐
│  🔔 Network Request Approval                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Agent "data_fetcher" wants to connect to:                      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  GET https://api.unknown.com/v1/data?query=test         │   │
│  │  Headers: Authorization: Bearer ***                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [🚫 Deny]  [✓ Once]  [✓ Domain]  [✓ Always]                   │
│                                                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░  25s        │
└─────────────────────────────────────────────────────────────────┘
```

## Implementation Phases

### Phase 1: Basic Docker Integration
- [ ] Create Dockerfile.gateway with basic mitmproxy
- [ ] Create Dockerfile.agent with agent runner
- [ ] Implement `SandboxManager` in backend
- [ ] Add `/api/run-sandboxed` endpoint
- [ ] Basic event streaming (no network monitoring yet)

### Phase 2: Network Monitoring
- [ ] Implement mitmproxy addon for traffic capture
- [ ] Add webhook to stream network events to host
- [ ] Create `NetworkMonitor.tsx` component
- [ ] Display real-time network activity in Run panel

### Phase 3: Interactive Approval
- [ ] Implement request interception in mitmproxy addon
- [ ] Add approval webhook flow (gateway → host → frontend → host → gateway)
- [ ] Create `NetworkApprovalDialog.tsx` with sound
- [ ] Add timeout handling

### Phase 4: Configuration UI
- [ ] Create `SandboxSettings.tsx` component
- [ ] Add allowlist management
- [ ] Auto-populate from project config (API bases, MCP servers)
- [ ] Persist settings to project YAML

### Phase 5: Polish
- [ ] Export network log as HAR file
- [ ] Resource limits (memory, CPU, timeout)
- [ ] Error handling and recovery
- [ ] Documentation

## Data Models

```python
# backend/sandbox/models.py

@dataclass
class SandboxConfig:
    enabled: bool = False
    allowlist: list[str] = field(default_factory=list)
    unknown_action: str = "ask"  # ask, deny, allow
    approval_timeout: int = 30
    memory_limit_mb: int = 512
    cpu_limit: float = 1.0
    run_timeout: int = 300

@dataclass
class NetworkRequest:
    id: str
    timestamp: datetime
    method: str
    url: str
    host: str
    status: str  # pending, allowed, denied, completed, error
    response_status: Optional[int] = None
    response_time_ms: Optional[float] = None
    response_size: Optional[int] = None
    is_llm_provider: bool = False
    agent_name: Optional[str] = None
```

## Security Considerations

1. **Container Isolation**: Agent container has no direct internet access
2. **Proxy Enforcement**: All traffic must go through gateway (HTTP_PROXY)
3. **Allowlist Default**: Only LLM providers allowed by default
4. **User Consent**: Unknown domains require explicit approval
5. **Timeout**: Unapproved requests timeout after 30 seconds
6. **Resource Limits**: Memory, CPU, and time limits prevent abuse
7. **Read-only Code**: Project code mounted read-only
8. **No Host Access**: Container cannot access host filesystem (except workspace)

## Dependencies

- `docker` (Python SDK for Docker)
- `mitmproxy` (HTTP/HTTPS proxy)
- `aiohttp` (Async HTTP for control APIs)
- Docker Engine on host machine

## Notes

- This is a significant feature that adds complexity
- Requires Docker to be installed and running
- May not work on all platforms (especially Windows without WSL2)
- Consider making this opt-in and clearly marked as experimental
- Could be useful for enterprise deployments with security requirements

