#!/bin/bash
# Build script for ADK Playground
# Builds the frontend for production deployment

set -e

echo "Building ADK Playground for production..."
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "Error: frontend/ directory not found. Run this script from the project root."
    exit 1
fi

# Build frontend
echo "Building frontend..."
cd frontend

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo "Running production build (skipping TypeScript checks)..."
# Use build without TypeScript check for now (can use build:check for full type checking)
npm run build

cd ..

echo ""
echo "✅ Build complete!"
echo ""
echo "Frontend assets are in frontend/dist/"
echo ""
echo "To run in production mode:"
echo "  export ADK_PLAYGROUND_MODE=production"
echo "  cd backend && source ../.venv/bin/activate && uvicorn main:app --port 8080 --host 0.0.0.0"
echo ""

