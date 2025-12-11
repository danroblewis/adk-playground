"""Project management - save/load projects as YAML files."""

from __future__ import annotations

import os
import uuid
from pathlib import Path
from typing import Dict, List, Optional

import yaml

from models import Project, AppConfig, AgentConfig, CustomToolDefinition, CustomCallbackDefinition


class ProjectManager:
    """Manages project persistence using YAML files."""
    
    def __init__(self, projects_dir: str = "./projects"):
        self.projects_dir = Path(projects_dir)
        self.projects_dir.mkdir(parents=True, exist_ok=True)
        self._cache: Dict[str, Project] = {}
    
    def _project_path(self, project_id: str) -> Path:
        return self.projects_dir / f"{project_id}.yaml"
    
    def _tools_dir(self, project_id: str) -> Path:
        tools_dir = self.projects_dir / project_id / "tools"
        tools_dir.mkdir(parents=True, exist_ok=True)
        return tools_dir
    
    def list_projects(self) -> List[Dict[str, str]]:
        """List all projects with basic info."""
        projects = []
        for path in self.projects_dir.glob("*.yaml"):
            try:
                with open(path) as f:
                    data = yaml.safe_load(f)
                    projects.append({
                        "id": data.get("id", path.stem),
                        "name": data.get("name", path.stem),
                        "description": data.get("description", ""),
                    })
            except Exception:
                continue
        return projects
    
    def get_project(self, project_id: str) -> Optional[Project]:
        """Load a project by ID."""
        if project_id in self._cache:
            return self._cache[project_id]
        
        path = self._project_path(project_id)
        if not path.exists():
            return None
        
        try:
            with open(path) as f:
                data = yaml.safe_load(f)
            project = Project.model_validate(data)
            self._cache[project_id] = project
            return project
        except Exception as e:
            print(f"Error loading project {project_id}: {e}")
            return None
    
    def save_project(self, project: Project) -> bool:
        """Save a project to disk."""
        try:
            path = self._project_path(project.id)
            data = project.model_dump(mode="json")
            with open(path, "w") as f:
                yaml.safe_dump(data, f, default_flow_style=False, sort_keys=False)
            self._cache[project.id] = project
            
            # Also save custom tools as separate Python files
            self._save_custom_tools(project)
            # Also save custom callbacks as separate Python files
            self._save_custom_callbacks(project)
            return True
        except Exception as e:
            print(f"Error saving project {project.id}: {e}")
            return False
    
    def create_project(self, name: str, description: str = "") -> Project:
        """Create a new project with defaults."""
        project_id = str(uuid.uuid4())[:8]
        
        app = AppConfig(
            id=f"app_{project_id}",
            name=name,
        )
        
        project = Project(
            id=project_id,
            name=name,
            description=description,
            app=app,
        )
        
        self.save_project(project)
        return project
    
    def delete_project(self, project_id: str) -> bool:
        """Delete a project."""
        try:
            path = self._project_path(project_id)
            if path.exists():
                path.unlink()
            
            # Remove tools directory
            tools_dir = self._tools_dir(project_id)
            if tools_dir.exists():
                import shutil
                shutil.rmtree(tools_dir.parent)
            
            if project_id in self._cache:
                del self._cache[project_id]
            
            return True
        except Exception as e:
            print(f"Error deleting project {project_id}: {e}")
            return False
    
    def _save_custom_tools(self, project: Project) -> None:
        """Save custom tools as Python files for execution."""
        tools_dir = self._tools_dir(project.id)
        
        # Group tools by module path
        modules: Dict[str, List[CustomToolDefinition]] = {}
        for tool in project.custom_tools:
            parts = tool.module_path.rsplit(".", 1)
            if len(parts) == 2:
                module_name = parts[0]
            else:
                module_name = "tools"
            
            if module_name not in modules:
                modules[module_name] = []
            modules[module_name].append(tool)
        
        # Create Python files for each module
        for module_name, tools in modules.items():
            # Convert dots to directory structure
            module_parts = module_name.split(".")
            module_dir = tools_dir
            for part in module_parts[:-1]:
                module_dir = module_dir / part
                module_dir.mkdir(parents=True, exist_ok=True)
                # Create __init__.py
                init_file = module_dir / "__init__.py"
                if not init_file.exists():
                    init_file.write_text("")
            
            # Write the module file
            file_name = f"{module_parts[-1]}.py" if module_parts else "tools.py"
            file_path = module_dir / file_name
            
            code_lines = [
                '"""Auto-generated custom tools module."""',
                "",
                "from google.adk.tools import ToolContext",
                "from typing import Any, Optional",
                "",
            ]
            
            for tool in tools:
                code_lines.append(f"# Tool: {tool.name}")
                code_lines.append(f'# Description: {tool.description}')
                code_lines.append(f"# State keys used: {', '.join(tool.state_keys_used)}")
                code_lines.append("")
                code_lines.append(tool.code)
                code_lines.append("")
            
            file_path.write_text("\n".join(code_lines))
    
    def get_project_yaml(self, project_id: str) -> Optional[str]:
        """Get project as YAML string."""
        project = self.get_project(project_id)
        if not project:
            return None
        return yaml.safe_dump(
            project.model_dump(mode="json"),
            default_flow_style=False,
            sort_keys=False
        )
    
    def update_project_from_yaml(self, project_id: str, yaml_content: str) -> Optional[Project]:
        """Update a project from YAML content."""
        try:
            data = yaml.safe_load(yaml_content)
            data["id"] = project_id  # Preserve the ID
            project = Project.model_validate(data)
            self.save_project(project)
            return project
        except Exception as e:
            print(f"Error updating project from YAML: {e}")
            return None


    def _save_custom_callbacks(self, project: Project) -> None:
        """Save custom callbacks as Python files for execution."""
        callbacks_dir = self.projects_dir / project.id / "callbacks"
        callbacks_dir.mkdir(parents=True, exist_ok=True)
        
        # Group callbacks by module path
        # The module_path format is: "module.path.function_name"
        # We need to extract the module path (everything except the function name)
        modules: Dict[str, List[CustomCallbackDefinition]] = {}
        for callback in project.custom_callbacks:
            # Split module_path to get module and function name
            # e.g., "callbacks.custom" -> module="callbacks", func="custom"
            # But we need to save it so the module can be imported correctly
            parts = callback.module_path.rsplit(".", 1)
            if len(parts) == 2:
                # If module_path is "callbacks.custom", we want to save as "callbacks/custom.py"
                # So the module name for grouping is the full path without the function
                # But actually, we need to save it so "callbacks.custom" can be imported
                # Let's use the first part as the directory and second part as filename
                module_prefix = parts[0]  # "callbacks"
                func_name = parts[1]  # "custom" (but this should match callback.name)
            else:
                # If no dot, assume it's just a function name in the default "callbacks" module
                module_prefix = "callbacks"
                func_name = callback.module_path
            
            # Group by the module prefix (directory)
            if module_prefix not in modules:
                modules[module_prefix] = []
            modules[module_prefix].append(callback)
        
        # Create Python files for each module
        for module_prefix, callbacks_list in modules.items():
            # Create directory structure
            # If module_prefix is "callbacks", files go directly in callbacks_dir
            # If module_prefix is "callbacks.submodule", create submodule directory
            module_parts = module_prefix.split(".")
            if module_parts == ["callbacks"]:
                # Special case: "callbacks" prefix means files go directly in callbacks_dir
                module_dir = callbacks_dir
            else:
                # Create subdirectories for nested modules
                module_dir = callbacks_dir
                for part in module_parts:
                    module_dir = module_dir / part
                    module_dir.mkdir(parents=True, exist_ok=True)
                    # Create __init__.py
                    init_file = module_dir / "__init__.py"
                    if not init_file.exists():
                        init_file.write_text("")
            
            # For each callback, determine the filename from the module_path
            # If module_path is "callbacks.custom", save as "callbacks/custom.py"
            callback_files: Dict[str, List[CustomCallbackDefinition]] = {}
            for callback in callbacks_list:
                parts = callback.module_path.rsplit(".", 1)
                if len(parts) == 2:
                    # Use the last part as the filename (e.g., "callbacks.custom" -> "custom.py")
                    file_key = parts[1]  # This will be the filename without .py
                else:
                    # Fallback to callback name
                    file_key = callback.name
                
                if file_key not in callback_files:
                    callback_files[file_key] = []
                callback_files[file_key].append(callback)
            
            # Create a file for each unique file_key
            for file_key, callbacks_in_file in callback_files.items():
                file_path = module_dir / f"{file_key}.py"
                
                code_lines = [
                    '"""Auto-generated custom callbacks module."""',
                    "",
                    "from google.adk.agents.callback_context import CallbackContext",
                    "from google.adk.models.llm_response import LlmResponse",
                    "from typing import Optional",
                    "",
                ]
                
                for callback in callbacks_in_file:
                    code_lines.append(f"# Callback: {callback.name}")
                    # Handle multi-line descriptions properly - each line must be a comment
                    if callback.description:
                        desc_lines = callback.description.split('\n')
                        for desc_line in desc_lines:
                            # Ensure each line is properly commented
                            code_lines.append(f'# Description: {desc_line}')
                    else:
                        code_lines.append('# Description: (no description)')
                    code_lines.append(f"# State keys used: {', '.join(callback.state_keys_used) if callback.state_keys_used else 'none'}")
                    code_lines.append("")
                    code_lines.append(callback.code)
                    code_lines.append("")
                
                file_path.write_text("\n".join(code_lines))
