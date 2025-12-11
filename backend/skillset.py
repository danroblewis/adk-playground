# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""SkillSet - A vector database toolset for ADK agents."""

from __future__ import annotations

import logging
from typing import Any, Optional

from google.adk.agents.readonly_context import ReadonlyContext
from google.adk.tools.base_tool import BaseTool
from google.adk.tools.base_toolset import BaseToolset
from google.adk.tools.tool_context import ToolContext
from google.adk.models.llm_request import LlmRequest
from google.genai import types

from .knowledge_service import KnowledgeServiceManager

logger = logging.getLogger(__name__)


class SearchSkillSetTool(BaseTool):
    """Tool for searching a SkillSet."""
    
    def __init__(
        self,
        skillset_id: str,
        project_id: str,
        manager: KnowledgeServiceManager,
        model_name: str,
        top_k: int = 10,
        min_score: float = 0.4,
    ):
        super().__init__(
            name=f"search_{skillset_id}",
            description=(
                f"Search the {skillset_id} knowledge base. "
                "Use this to find relevant information based on a query."
            ),
        )
        self.skillset_id = skillset_id
        self.project_id = project_id
        self.manager = manager
        self.model_name = model_name
        self.top_k = top_k
        self.min_score = min_score
    
    def _get_declaration(self) -> Optional[types.FunctionDeclaration]:
        """Get the function declaration for this tool."""
        return types.FunctionDeclaration(
            name=self.name,
            description=self.description,
            parameters=types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "query": types.Schema(
                        type=types.Type.STRING,
                        description="The search query string",
                    ),
                },
                required=["query"],
            ),
        )
    
    async def run_async(
        self, *, args: dict[str, Any], tool_context: ToolContext
    ) -> str:
        """Execute the search."""
        query = args.get("query", "")
        if not query:
            return "Error: No query provided"
        
        try:
            store = self.manager.get_store(
                self.project_id,
                self.skillset_id,
                self.model_name,
            )
            results = store.search(
                query=query,
                top_k=self.top_k,
                min_score=self.min_score,
            )
            
            if not results:
                return f"No relevant information found for query: {query}"
            
            # Format results
            formatted = [
                f"[Score: {r.score:.2f}] {r.entry.text}"
                for r in results
            ]
            return "\n\n".join(formatted)
            
        except Exception as e:
            logger.error(f"Search failed: {e}")
            return f"Error searching knowledge base: {e}"


class SkillSet(BaseToolset):
    """A vector database toolset for ADK agents.
    
    Provides both explicit search tools and automatic knowledge preloading
    into agent instructions.
    """
    
    def __init__(
        self,
        *,
        skillset_id: str,
        project_id: str,
        manager: KnowledgeServiceManager,
        model_name: str = "text-embedding-004",
        search_enabled: bool = True,
        preload_enabled: bool = True,
        search_top_k: int = 10,
        search_min_score: float = 0.4,
        preload_top_k: int = 3,
        preload_min_score: float = 0.5,
        **kwargs,
    ):
        """Initialize the SkillSet toolset.
        
        Args:
            skillset_id: The ID of the SkillSet
            project_id: The project ID
            manager: The KnowledgeServiceManager
            model_name: The embedding model name
            search_enabled: Whether to include the search tool
            preload_enabled: Whether to preload knowledge into instructions
            search_top_k: Number of results for explicit search
            search_min_score: Minimum score for explicit search
            preload_top_k: Number of results for preloading
            preload_min_score: Minimum score for preloading
            **kwargs: Additional arguments for BaseToolset
        """
        super().__init__(**kwargs)
        self.skillset_id = skillset_id
        self.project_id = project_id
        self.manager = manager
        self.model_name = model_name
        self.search_enabled = search_enabled
        self.preload_enabled = preload_enabled
        self.search_top_k = search_top_k
        self.search_min_score = search_min_score
        self.preload_top_k = preload_top_k
        self.preload_min_score = preload_min_score
        
        # Create search tool if enabled
        self._search_tool: Optional[SearchSkillSetTool] = None
        if search_enabled:
            self._search_tool = SearchSkillSetTool(
                skillset_id=skillset_id,
                project_id=project_id,
                manager=manager,
                model_name=model_name,
                top_k=search_top_k,
                min_score=search_min_score,
            )
    
    async def get_tools(
        self,
        readonly_context: Optional[ReadonlyContext] = None,
    ) -> list[BaseTool]:
        """Return the search tool if enabled."""
        if self._search_tool:
            return [self._search_tool]
        return []
    
    async def process_llm_request(
        self, *, tool_context: ToolContext, llm_request: LlmRequest
    ) -> None:
        """Preload relevant knowledge into agent instructions.
        
        This method is called before the LLM request is sent.
        It searches the knowledge base and injects relevant information
        into the system instructions.
        """
        if not self.preload_enabled:
            return
        
        # Get the last user message as the query
        query = None
        for content in reversed(llm_request.contents):
            if content.role == "user":
                # Extract text from the content
                for part in content.parts:
                    if hasattr(part, "text") and part.text:
                        query = part.text
                        break
                if query:
                    break
        
        if not query:
            logger.debug("No user query found for preloading")
            return
        
        try:
            store = self.manager.get_store(
                self.project_id,
                self.skillset_id,
                self.model_name,
            )
            results = store.search(
                query=query,
                top_k=self.preload_top_k,
                min_score=self.preload_min_score,
            )
            
            if not results:
                logger.debug(f"No relevant knowledge found for: {query[:50]}...")
                return
            
            # Format knowledge for injection
            knowledge_text = "\n\n".join([
                f"--- Relevant Knowledge (Score: {r.score:.2f}) ---\n{r.entry.text}"
                for r in results
            ])
            
            preload_instruction = (
                f"\n\n# Knowledge Base Context\n\n"
                f"The following information from the {self.skillset_id} "
                f"knowledge base may be relevant to the user's query:\n\n"
                f"{knowledge_text}\n"
            )
            
            # Append to system instructions
            if llm_request.system_instructions:
                llm_request.system_instructions.append(
                    types.Part.from_text(text=preload_instruction)
                )
            else:
                llm_request.system_instructions = [
                    types.Part.from_text(text=preload_instruction)
                ]
            
            logger.info(
                f"Preloaded {len(results)} knowledge entries "
                f"from {self.skillset_id}"
            )
            
        except Exception as e:
            logger.error(f"Knowledge preloading failed: {e}")

