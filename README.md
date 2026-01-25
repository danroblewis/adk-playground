# ADK Playground

A web-based UI for building and testing Google ADK (Agent Development Kit) agents.

[![PyPI version](https://badge.fury.io/py/adk-playground.svg)](https://badge.fury.io/py/adk-playground)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

### Quick Start with uvx (Recommended)

The easiest way to run ADK Playground is using `uvx` (part of the [uv](https://github.com/astral-sh/uv) package manager):

```bash
# Run directly from PyPI - no installation required!
uvx adk-playground
```

Then open your browser to `http://localhost:8080`

### Install from PyPI

```bash
# Install with pip
pip install adk-playground

# Then run
adk-playground
```

### Install with uv

```bash
# Install with uv
uv pip install adk-playground

# Or add to your project
uv add adk-playground
```

### Install from GitHub

```bash
# Run directly from GitHub (latest development version)
uvx --from git+https://github.com/danroblewis/adk-playground.git adk-playground
```

### Install from Source

If you want to contribute or modify the code:

```bash
# Clone the repository
git clone https://github.com/danroblewis/adk-playground.git
cd adk-playground

# Run with uvx (production mode - uses built frontend from repo)
uvx --from . adk-playground
```

## Usage

Access the UI at `http://localhost:8080` after starting the server.

### Configuration

**Environment Variables:**

- `ADK_PLAYGROUND_PORT` - Server port (default: `8080`)
- `ADK_PLAYGROUND_HOST` - Server host (default: `0.0.0.0`)
- `ADK_PLAYGROUND_MODE` - Run mode: `dev` or `production` (default: `production`)
- `ADK_PLAYGROUND_PROJECTS_DIR` - Projects directory (default: `~/.adk-playground/projects`)
- `ADK_PLAYGROUND_MCP_CONFIG` - MCP servers config file (default: `~/.adk-playground/mcp.json`)

**Command Line Arguments:**

- `--projects-dir PATH` - Directory for storing projects
- `--mcp-config PATH` - Path to MCP servers configuration file
- `--port PORT` - Server port
- `--host HOST` - Server host
- `--mode {dev,production}` - Run mode

**Example:**

```bash
# Run on a different port
uvx adk-playground --port 8081

# Or with environment variables
ADK_PLAYGROUND_PORT=8081 uvx adk-playground
```

## Features

- Visual agent builder with YAML configuration
- Real-time agent execution and event monitoring
- Code generation from agent configurations
- MCP server support
- Custom tool creation
- Session management with filesystem storage
- Memory and artifact services

## Development

### Prerequisites

- Python 3.10+
- Node.js 18+ (for frontend development)
- [uv](https://github.com/astral-sh/uv) package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/danroblewis/adk-playground.git
cd adk-playground

# Install Python dependencies
uv sync --extra dev

# Install frontend dependencies
cd frontend && npm install && cd ..
```

### Running in Development Mode

```bash
# Terminal 1: Start backend
uv run python -m backend

# Terminal 2: Start frontend dev server (hot reload)
cd frontend && npm run dev
```

Access the UI at `http://localhost:3000` (proxies to backend on port 8080)

### Building the Frontend

```bash
./build.sh
```

### Running Tests

```bash
uv run pytest tests/ -v
```

## License

MIT License - see [LICENSE](LICENSE) for details.
