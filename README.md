# ADK Playground

A web-based UI for building and testing Google ADK (Agent Development Kit) agents.

## Features

- **Visual Agent Builder**: Create and configure agents through a web interface
- **YAML Configuration**: Edit agent configurations in YAML format
- **Code Generation**: Generate Python code from your agent configurations
- **Real-time Execution**: Run agents and see events in real-time
- **Session Management**: Save and load agent execution sessions
- **MCP Server Support**: Configure and use Model Context Protocol servers
- **Tool Management**: Create custom tools, configure built-in tools, and manage MCP tools
- **Memory & Artifacts**: Configure filesystem-based session, memory, and artifact services

## Requirements

- Python 3.10 or higher (Python 3.11+ recommended)
- Node.js 18+ and npm (for frontend)
- `google-adk` package

### Installing google-adk

If `google-adk` is available on PyPI:
```bash
pip install google-adk
```

If you need to install from source (e.g., from the parent `adk-python` repository):
```bash
# From the adk-python repository root:
pip install -e .
```

Or if you have a built wheel:
```bash
pip install /path/to/google_adk-*.whl
```

## Quick Start

### 1. Setup

Run the setup script to create a virtual environment and install dependencies:

```bash
./setup.sh
```

Or manually:

```bash
# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -e .

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Start the Servers

**Backend** (in one terminal):
```bash
source .venv/bin/activate
cd backend
uvicorn main:app --port 8080 --host 0.0.0.0
```

**Frontend** (in another terminal):
```bash
cd frontend
npm run dev
```

### 3. Access the UI

Open your browser to `http://localhost:3000`

## Project Structure

```
adk_playground/
├── backend/              # FastAPI backend
│   ├── main.py          # Main FastAPI app
│   ├── models.py        # Pydantic models
│   ├── runtime.py       # Agent execution runtime
│   └── project_manager.py # Project management
├── frontend/            # React + TypeScript frontend
│   └── src/
│       ├── components/  # React components
│       └── utils/       # Utilities and API client
├── file_session_service.py  # Filesystem session service
├── file_memory_service.py    # Filesystem memory service
├── tracing_plugin/      # ADK plugin for event tracing
├── mcp_servers/         # Example MCP servers
└── projects/            # User projects (created at runtime)
```

## Configuration

### Session Service

Configure the session service URI in App Config:
- `file:///path/to/sessions` - Filesystem-based sessions
- `memory://` - In-memory sessions (default, not persisted)

### Memory Service

Configure the memory service URI in App Config:
- `file:///path/to/memories` - Filesystem-based memories
- `memory://` - In-memory memories (default, not persisted)

### Artifact Service

Configure the artifact service URI in App Config:
- `file:///path/to/artifacts` - Filesystem-based artifacts
- `gcs://bucket-name` - Google Cloud Storage artifacts
- `memory://` - In-memory artifacts (default, not persisted)

## Development

### Backend Development

The backend uses FastAPI and is located in `backend/`. Key files:
- `main.py` - API endpoints and WebSocket handlers
- `runtime.py` - Agent execution and event tracking
- `models.py` - Data models

### Frontend Development

The frontend uses React + TypeScript and Vite. Key directories:
- `src/components/` - React components
- `src/utils/` - API client and utilities

### Running Tests

```bash
# Backend tests (when available)
pytest backend/tests/

# Frontend tests (when available)
cd frontend && npm test
```

## License

Copyright 2025 Google LLC

Licensed under the Apache License, Version 2.0
