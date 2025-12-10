#!/bin/bash
# Setup script for ADK Playground

set -e

echo "Setting up ADK Playground..."

# Check Python version
PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}' | cut -d'.' -f1,2)
REQUIRED_VERSION="3.10"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$PYTHON_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "Warning: Python 3.10+ is recommended. You have Python $PYTHON_VERSION"
    echo "The application may not work correctly."
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Create virtual environment
if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
else
    echo "Virtual environment already exists."
fi

# Activate virtual environment
echo "Activating virtual environment..."
source .venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "Installing dependencies..."
echo ""
echo "Note: If google-adk is not available on PyPI, you may need to install it separately."
echo "For example, from the parent adk-python repository: pip install -e ."
echo ""
echo "Installing from pyproject.toml..."
pip install -e .

# Install frontend dependencies if package.json exists
if [ -f "frontend/package.json" ]; then
    echo "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi

echo ""
echo "Setup complete!"
echo ""
echo "To activate the virtual environment, run:"
echo "  source .venv/bin/activate"
echo ""
echo "To start both servers:"
echo "  ./start.sh"
echo ""
echo "Or start them separately:"
echo "  Backend:  cd backend && source ../.venv/bin/activate && uvicorn main:app --port 8080 --host 0.0.0.0"
echo "  Frontend: cd frontend && npm run dev"
echo ""

