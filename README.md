# ADK Playground

A visual builder and runtime for Google ADK (Agent Development Kit) agents.

![ADK Playground](https://img.shields.io/badge/ADK-Playground-00f5d4?style=for-the-badge)

## Features

### Phase 1: Configuration
- **App Configuration**: Memory service, session service, plugins, compaction, context cache, and resumability
- **Session State Keys**: Declare typed state keys that agents can share
- **Agent Builder**: Create LLM agents, Sequential, Loop, and Parallel workflow agents
- **Tool Configuration**: Built-in tools, MCP servers, custom Python functions, and agent-as-tool
- **Custom Tools**: Write Python tools in the browser with Monaco editor
- **YAML Import/Export**: Full project serialization for version control

### Phase 2: Runtime
- **Live Execution**: Run agents with real-time WebSocket streaming
- **Event Timeline**: Visual timeline with filtering and time range selection
- **Event Tracking**: Agent transfers, tool calls, model responses, state changes
- **Token Counting**: Track input/output token usage
- **Collapsible UI**: Focus on tool calls and state changes over text responses

### Phase 3: Evaluation (Coming Soon)
- **Hierarchical Tests**: Organize tests in folders with run-at-any-level
- **Test Sessions**: View test runs as historical sessions
- **Assertions**: Expected outputs, tool calls, and state values

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- uv (recommended) or pip

### Backend Setup

```bash
cd adk_playground/backend

# Create virtual environment
uv venv --python python3.11 .venv
source .venv/bin/activate

# Install dependencies
uv pip install -r requirements.txt

# Run the server
uvicorn main:app --reload --port 8080
```

### Frontend Setup

```bash
cd adk_playground/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at http://localhost:3000

## Architecture

```
adk_playground/
├── backend/
│   ├── main.py              # FastAPI endpoints
│   ├── models.py            # Pydantic models
│   ├── project_manager.py   # YAML persistence
│   ├── runtime.py           # Agent execution
│   └── known_mcp_servers.py # MCP server presets
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/           # Zustand store
│   │   ├── utils/           # API & types
│   │   └── styles/          # CSS
│   └── package.json
└── projects/                # Saved projects (YAML)
```

## API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/{id}` - Get project details
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### YAML
- `GET /api/projects/{id}/yaml` - Export as YAML
- `PUT /api/projects/{id}/yaml` - Import from YAML

### Agents & Tools
- `POST /api/projects/{id}/agents` - Create agent
- `PUT /api/projects/{id}/agents/{aid}` - Update agent
- `DELETE /api/projects/{id}/agents/{aid}` - Delete agent
- `POST /api/projects/{id}/tools` - Create custom tool
- `PUT /api/projects/{id}/tools/{tid}` - Update custom tool

### Runtime
- `WebSocket /ws/run/{project_id}` - Run agent with streaming events

### Reference Data
- `GET /api/mcp-servers` - List known MCP servers
- `GET /api/builtin-tools` - List built-in ADK tools

## Project Configuration Schema

```yaml
id: project_123
name: My Agent Project
description: A helpful assistant

app:
  id: app_123
  name: my_app
  root_agent_id: agent_main
  session_service_uri: memory://
  memory_service_uri: memory://
  artifact_service_uri: memory://
  compaction:
    enabled: true
    max_events: 100
  context_cache:
    enabled: false
  resumability:
    enabled: false
  plugins:
    - type: ReflectAndRetryToolPlugin
      max_retries: 3
  state_keys:
    - name: story
      type: string
      scope: session
      description: The story being written

agents:
  - type: LlmAgent
    id: agent_main
    name: writer
    model:
      provider: gemini
      model_name: gemini-2.0-flash
    instruction: You are a helpful writer.
    output_key: story
    tools:
      - type: builtin
        name: google_search
      - type: mcp
        server:
          name: filesystem
          connection_type: stdio
          command: npx
          args: ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"]

custom_tools:
  - id: tool_123
    name: save_to_state
    module_path: tools.custom
    code: |
      def save_to_state(tool_context: ToolContext, key: str, value: str):
          tool_context.state[key] = value
          return {"saved": key}
    state_keys_used: [story]
```

## Known MCP Servers

The playground comes with presets for popular MCP servers:

- **filesystem** - Read/write local files
- **github** - GitHub repository operations
- **notion** - Notion pages and databases
- **kubernetes** - Kubernetes cluster management
- **slack** - Slack messaging
- **puppeteer** - Browser automation
- **postgres** - PostgreSQL queries
- **sqlite** - SQLite database
- **brave-search** - Web search
- **google-maps** - Maps and directions

## Development

### Adding New Agent Types

1. Add the type to `AgentType` enum in `backend/models.py`
2. Create a config class (e.g., `CustomAgentConfig`)
3. Add to `AgentConfig` union type
4. Update `runtime.py` to build the agent
5. Update `AgentsPanel.tsx` with icon and color

### Adding New Built-in Tools

1. Add to `BUILTIN_TOOLS` in `known_mcp_servers.py`
2. Update `_get_builtin_tool()` in `runtime.py`

### Adding New MCP Servers

Add a new `MCPServerConfig` to `KNOWN_MCP_SERVERS` in `known_mcp_servers.py`

## License

Apache 2.0 - See LICENSE file

