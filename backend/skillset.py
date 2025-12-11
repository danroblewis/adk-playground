"""SkillSet - A toolset that provides knowledge-based tools for agents.

The SkillSet is a subclass of BaseToolset that provides:
1. search_knowledge - A tool for agents to search the knowledge base
2. Knowledge preloading via process_llm_request - Automatically injects
   relevant knowledge into the agent's instructions before each LLM call
"""

from __future__ import annotations

import logging
from typing import Any, Dict, List, Optional, TYPE_CHECKING

from google.adk.tools.base_tool import BaseTool
from google.adk.tools.base_toolset import BaseToolset
from google.adk.tools.function_tool import FunctionTool
from google.genai import types

if TYPE_CHECKING:
    from google.adk.agents.readonly_context import ReadonlyContext
    from google.adk.models.llm_request import LlmRequest
    from google.adk.tools.tool_context import ToolContext

from knowledge_service import get_knowledge_service, KnowledgeService

logger = logging.getLogger(__name__)


class SearchKnowledgeTool(BaseTool):
    """Tool for searching the knowledge base."""
    
    def __init__(
        self,
        knowledge_service: KnowledgeService,
        top_k: int = 5,
        min_score: float = 0.3,
    ):
        super().__init__(
            name="search_knowledge",
            description=(
                "Search the knowledge base for relevant information. "
                "Use this when you need to find specific facts, context, or "
                "background information to answer a question."
            ),
        )
        self.knowledge_service = knowledge_service
        self.top_k = top_k
        self.min_score = min_score
    
    def _get_declaration(self) -> types.FunctionDeclaration:
        return types.FunctionDeclaration(
            name=self.name,
            description=self.description,
            parameters=types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "query": types.Schema(
                        type=types.Type.STRING,
                        description="The search query to find relevant knowledge",
                    ),
                    "max_results": types.Schema(
                        type=types.Type.INTEGER,
                        description="Maximum number of results to return (default: 5)",
                    ),
                },
                required=["query"],
            ),
        )
    
    async def run_async(
        self,
        *,
        args: Dict[str, Any],
        tool_context: "ToolContext",
    ) -> Dict[str, Any]:
        """Execute the search."""
        query = args.get("query", "")
        max_results = args.get("max_results", self.top_k)
        
        if not query:
            return {"error": "Query is required", "results": []}
        
        results = self.knowledge_service.search(
            query=query,
            top_k=max_results,
            min_score=self.min_score,
        )
        
        return {
            "query": query,
            "results": [
                {
                    "text": r.entry.text,
                    "score": round(r.score, 3),
                    "source": r.entry.source,
                    "id": r.entry.id,
                }
                for r in results
            ],
            "count": len(results),
        }


class KnowledgePreloader:
    """Handles preloading knowledge into LLM requests.
    
    This is similar to PreloadMemoryTool but uses vector embeddings
    for semantic search instead of keyword matching.
    """
    
    def __init__(
        self,
        knowledge_service: KnowledgeService,
        top_k: int = 3,
        min_score: float = 0.4,
        enabled: bool = True,
    ):
        self.knowledge_service = knowledge_service
        self.top_k = top_k
        self.min_score = min_score
        self.enabled = enabled
    
    def get_query_from_context(self, tool_context: "ToolContext") -> Optional[str]:
        """Extract a query string from the current context.
        
        Tries multiple sources:
        1. The latest user message
        2. The last model response (for follow-up context)
        """
        # Try user content first
        if tool_context.user_content and tool_context.user_content.parts:
            for part in tool_context.user_content.parts:
                if hasattr(part, 'text') and part.text:
                    return part.text
        
        return None
    
    async def process_llm_request(
        self,
        tool_context: "ToolContext",
        llm_request: "LlmRequest",
    ) -> None:
        """Inject relevant knowledge into the LLM request."""
        if not self.enabled:
            return
        
        # Get query from context
        query = self.get_query_from_context(tool_context)
        if not query:
            logger.debug("No query found for knowledge preloading")
            return
        
        # Search knowledge base
        results = self.knowledge_service.search(
            query=query,
            top_k=self.top_k,
            min_score=self.min_score,
        )
        
        if not results:
            logger.debug(f"No knowledge found for query: {query[:50]}...")
            return
        
        # Build knowledge context
        knowledge_lines = []
        for i, result in enumerate(results, 1):
            source_info = f" (from: {result.entry.source})" if result.entry.source else ""
            knowledge_lines.append(
                f"{i}. {result.entry.text}{source_info}"
            )
        
        knowledge_text = "\n".join(knowledge_lines)
        
        # Inject as system instruction
        instruction = f"""The following relevant knowledge has been retrieved to help you answer the user's query:

<KNOWLEDGE_BASE>
{knowledge_text}
</KNOWLEDGE_BASE>

Use this information when relevant, but don't reference the knowledge base explicitly unless asked."""
        
        llm_request.append_instructions([instruction])
        logger.info(f"Preloaded {len(results)} knowledge entries for query: {query[:50]}...")


class SkillSet(BaseToolset):
    """A toolset that provides knowledge-based capabilities to agents.
    
    Features:
    - search_knowledge tool: Allows agents to explicitly search the knowledge base
    - Knowledge preloading: Automatically injects relevant knowledge into 
      agent instructions before each LLM call
    
    Usage:
        # Create a shared skillset
        skillset = SkillSet(
            preload_enabled=True,
            preload_top_k=3,
        )
        
        # Add to agents
        agent1 = Agent(
            name="assistant",
            tools=[skillset],  # SkillSet is a toolset
        )
    """
    
    def __init__(
        self,
        *,
        knowledge_service: Optional[KnowledgeService] = None,
        # Tool configuration
        search_enabled: bool = True,
        search_top_k: int = 5,
        search_min_score: float = 0.3,
        # Preload configuration
        preload_enabled: bool = True,
        preload_top_k: int = 3,
        preload_min_score: float = 0.4,
        # BaseToolset options
        tool_filter=None,
        tool_name_prefix: Optional[str] = None,
    ):
        super().__init__(
            tool_filter=tool_filter,
            tool_name_prefix=tool_name_prefix,
        )
        
        self.knowledge_service = knowledge_service or get_knowledge_service()
        
        # Search tool
        self.search_enabled = search_enabled
        self._search_tool = SearchKnowledgeTool(
            knowledge_service=self.knowledge_service,
            top_k=search_top_k,
            min_score=search_min_score,
        ) if search_enabled else None
        
        # Preloader
        self._preloader = KnowledgePreloader(
            knowledge_service=self.knowledge_service,
            top_k=preload_top_k,
            min_score=preload_min_score,
            enabled=preload_enabled,
        )
    
    async def get_tools(
        self,
        readonly_context: Optional["ReadonlyContext"] = None,
    ) -> List[BaseTool]:
        """Return all tools in the skillset."""
        tools = []
        
        if self._search_tool:
            tools.append(self._search_tool)
        
        return tools
    
    async def process_llm_request(
        self,
        *,
        tool_context: "ToolContext",
        llm_request: "LlmRequest",
    ) -> None:
        """Process LLM request to inject knowledge.
        
        This is called before each LLM call, allowing us to inject
        relevant knowledge into the agent's context.
        """
        await self._preloader.process_llm_request(tool_context, llm_request)
    
    # Convenience methods for knowledge management
    
    def add_knowledge(
        self,
        text: str,
        metadata: Optional[Dict[str, Any]] = None,
        source: str = "manual",
    ):
        """Add knowledge to the knowledge base."""
        return self.knowledge_service.add(text, metadata, source)
    
    def search_knowledge(
        self,
        query: str,
        top_k: int = 5,
    ):
        """Search the knowledge base."""
        return self.knowledge_service.search(query, top_k)
    
    def clear_knowledge(self):
        """Clear all knowledge entries."""
        return self.knowledge_service.clear()
    
    def get_stats(self):
        """Get knowledge base statistics."""
        return self.knowledge_service.stats()


# Factory function for easy creation
def create_skillset(
    preload_enabled: bool = True,
    search_enabled: bool = True,
    **kwargs,
) -> SkillSet:
    """Create a SkillSet with default configuration.
    
    Args:
        preload_enabled: Whether to automatically preload knowledge
        search_enabled: Whether to provide the search_knowledge tool
        **kwargs: Additional arguments passed to SkillSet
        
    Returns:
        A configured SkillSet instance
    """
    return SkillSet(
        preload_enabled=preload_enabled,
        search_enabled=search_enabled,
        **kwargs,
    )

