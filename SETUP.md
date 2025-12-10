# ADK Playground Setup Guide

This guide will help you set up ADK Playground as a standalone project.

## Quick Setup

1. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

2. **Start the servers:**
   ```bash
   ./start.sh
   ```

3. **Access the UI:**
   Open http://localhost:3000 in your browser

## Manual Setup

### 1. Create Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 2. Install Dependencies

**Option A: Using pyproject.toml (recommended)**
```bash
pip install --upgrade pip
pip install -e .
```

**Option B: Using requirements.txt**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**Note:** If `google-adk` is not available on PyPI, you'll need to install it separately:
- From source: `pip install -e /path/to/adk-python`
- From wheel: `pip install /path/to/google_adk-*.whl`

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Start Servers

**Backend:**
```bash
source .venv/bin/activate
cd backend
uvicorn main:app --port 8080 --host 0.0.0.0
```

**Frontend (in another terminal):**
```bash
cd frontend
npm run dev
```

## Project Structure

```
adk_playground/
├── .venv/                  # Python virtual environment (created by setup)
├── backend/                # FastAPI backend
│   ├── main.py            # Main application
│   ├── models.py          # Data models
│   ├── runtime.py         # Agent runtime
│   └── project_manager.py # Project management
├── frontend/              # React frontend
│   ├── src/               # Source code
│   └── package.json       # Node dependencies
├── file_session_service.py # Filesystem session service
├── file_memory_service.py  # Filesystem memory service
├── tracing_plugin/        # ADK tracing plugin
├── mcp_servers/           # Example MCP servers
├── projects/              # User projects (created at runtime)
├── pyproject.toml         # Python package configuration
├── requirements.txt       # Python dependencies
├── setup.sh               # Setup script
└── start.sh               # Start script
```

## Dependencies

### Python Dependencies (from pyproject.toml)
- `fastapi>=0.109.0` - Web framework
- `uvicorn>=0.27.0` - ASGI server
- `pyyaml>=6.0` - YAML parsing
- `pydantic>=2.0` - Data validation
- `python-multipart>=0.0.6` - File uploads
- `websockets>=12.0` - WebSocket support
- `google-adk` - Google ADK library

### Node Dependencies (from frontend/package.json)
- React, TypeScript, Vite, and other frontend dependencies

## Troubleshooting

### Python Version Issues
- Ensure Python 3.10+ is installed: `python3 --version`
- If using Python 3.9 or earlier, upgrade to 3.10+

### google-adk Not Found
- If `google-adk` is not on PyPI, install from source:
  ```bash
  cd /path/to/adk-python
  pip install -e .
  ```

### Import Errors
- Make sure you're running from the correct directory
- Ensure the virtual environment is activated
- Check that all dependencies are installed: `pip list`

### Port Already in Use
- Backend uses port 8080, frontend uses port 3000
- Change ports in the start commands if needed
- Kill existing processes: `lsof -ti:8080 | xargs kill -9`

## Development

### Running Tests
```bash
# Backend tests (when available)
pytest backend/tests/

# Frontend tests (when available)
cd frontend && npm test
```

### Code Formatting
```bash
# Python (if black is installed)
black backend/

# TypeScript/React (if configured)
cd frontend && npm run format
```

## Next Steps

1. Create your first project in the UI
2. Configure agents, tools, and MCP servers
3. Run agents and view execution traces
4. Save sessions and load them later

For more information, see the main [README.md](README.md).

