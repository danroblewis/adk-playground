"""ADK Playground package."""

from __future__ import annotations

import os
import sys
from pathlib import Path

# Add parent directory to path so we can import backend
_package_dir = Path(__file__).parent
_parent_dir = _package_dir.parent
if str(_parent_dir) not in sys.path:
    sys.path.insert(0, str(_parent_dir))


def main():
    """Main entry point for adk-playground."""
    import uvicorn
    # Import after path setup
    from backend.main import app
    
    # Get port from environment or default to 8080
    port = int(os.environ.get("ADK_PLAYGROUND_PORT", "8080"))
    host = os.environ.get("ADK_PLAYGROUND_HOST", "0.0.0.0")
    
    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    main()

