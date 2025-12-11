"""Knowledge Service - Vector database for semantic search.

This service provides a simple vector database for storing and retrieving
knowledge entries using semantic similarity search.
"""

from __future__ import annotations

import hashlib
import json
import logging
import os
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np

logger = logging.getLogger(__name__)

# Try to import sentence_transformers for embeddings
try:
    from sentence_transformers import SentenceTransformer
    EMBEDDINGS_AVAILABLE = True
except ImportError:
    EMBEDDINGS_AVAILABLE = False
    logger.warning(
        "sentence-transformers not installed. "
        "Run: pip install sentence-transformers"
    )


@dataclass
class KnowledgeEntry:
    """A single entry in the knowledge base."""
    id: str
    text: str
    embedding: List[float] = field(default_factory=list)
    metadata: Dict[str, Any] = field(default_factory=dict)
    created_at: float = field(default_factory=time.time)
    source: str = ""  # e.g., "file:document.txt" or "manual"
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "text": self.text,
            "embedding": self.embedding,
            "metadata": self.metadata,
            "created_at": self.created_at,
            "source": self.source,
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "KnowledgeEntry":
        return cls(
            id=data["id"],
            text=data["text"],
            embedding=data.get("embedding", []),
            metadata=data.get("metadata", {}),
            created_at=data.get("created_at", time.time()),
            source=data.get("source", ""),
        )


@dataclass
class SearchResult:
    """A search result with similarity score."""
    entry: KnowledgeEntry
    score: float  # Cosine similarity, 0-1


class KnowledgeService:
    """Vector database service for semantic search.
    
    Uses sentence-transformers for embeddings and numpy for similarity search.
    Persists to a JSON file for simplicity.
    """
    
    def __init__(
        self,
        storage_path: str = "~/.adk-playground/knowledge",
        model_name: str = "all-MiniLM-L6-v2",
    ):
        self.storage_path = Path(storage_path).expanduser()
        self.storage_path.mkdir(parents=True, exist_ok=True)
        self.model_name = model_name
        
        self._entries: Dict[str, KnowledgeEntry] = {}
        self._model: Optional[SentenceTransformer] = None
        self._embedding_dim: int = 384  # Default for all-MiniLM-L6-v2
        
        # Load existing entries
        self._load()
    
    def _get_model(self) -> Optional[SentenceTransformer]:
        """Lazy-load the embedding model."""
        if not EMBEDDINGS_AVAILABLE:
            return None
        if self._model is None:
            logger.info(f"Loading embedding model: {self.model_name}")
            self._model = SentenceTransformer(self.model_name)
            self._embedding_dim = self._model.get_sentence_embedding_dimension()
        return self._model
    
    def _generate_id(self, text: str) -> str:
        """Generate a unique ID for text content."""
        return hashlib.sha256(text.encode()).hexdigest()[:16]
    
    def _embed(self, text: str) -> List[float]:
        """Generate embedding for text."""
        model = self._get_model()
        if model is None:
            # Return empty embedding if model not available
            return []
        embedding = model.encode(text, convert_to_numpy=True)
        return embedding.tolist()
    
    def _embed_batch(self, texts: List[str]) -> List[List[float]]:
        """Generate embeddings for multiple texts."""
        model = self._get_model()
        if model is None:
            return [[] for _ in texts]
        embeddings = model.encode(texts, convert_to_numpy=True)
        return embeddings.tolist()
    
    def _cosine_similarity(
        self, 
        query_embedding: List[float], 
        entry_embeddings: np.ndarray
    ) -> np.ndarray:
        """Compute cosine similarity between query and all entries."""
        if len(query_embedding) == 0 or len(entry_embeddings) == 0:
            return np.array([])
        
        query = np.array(query_embedding)
        query_norm = np.linalg.norm(query)
        if query_norm == 0:
            return np.zeros(len(entry_embeddings))
        
        # Normalize query
        query = query / query_norm
        
        # Normalize entries (row-wise)
        norms = np.linalg.norm(entry_embeddings, axis=1, keepdims=True)
        norms[norms == 0] = 1  # Avoid division by zero
        normalized = entry_embeddings / norms
        
        # Compute dot products (cosine similarity for normalized vectors)
        similarities = np.dot(normalized, query)
        return similarities
    
    def _load(self) -> None:
        """Load entries from disk."""
        index_file = self.storage_path / "index.json"
        if index_file.exists():
            try:
                with open(index_file, "r") as f:
                    data = json.load(f)
                    for entry_data in data.get("entries", []):
                        entry = KnowledgeEntry.from_dict(entry_data)
                        self._entries[entry.id] = entry
                logger.info(f"Loaded {len(self._entries)} knowledge entries")
            except Exception as e:
                logger.error(f"Failed to load knowledge index: {e}")
    
    def _save(self) -> None:
        """Save entries to disk."""
        index_file = self.storage_path / "index.json"
        try:
            data = {
                "entries": [e.to_dict() for e in self._entries.values()],
                "model_name": self.model_name,
                "updated_at": time.time(),
            }
            with open(index_file, "w") as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            logger.error(f"Failed to save knowledge index: {e}")
    
    def add(
        self,
        text: str,
        metadata: Optional[Dict[str, Any]] = None,
        source: str = "manual",
        entry_id: Optional[str] = None,
    ) -> KnowledgeEntry:
        """Add a text entry to the knowledge base.
        
        Args:
            text: The text content to add
            metadata: Optional metadata dict
            source: Source identifier (e.g., "file:doc.txt")
            entry_id: Optional specific ID (generated if not provided)
            
        Returns:
            The created KnowledgeEntry
        """
        if entry_id is None:
            entry_id = self._generate_id(text)
        
        embedding = self._embed(text)
        
        entry = KnowledgeEntry(
            id=entry_id,
            text=text,
            embedding=embedding,
            metadata=metadata or {},
            source=source,
        )
        
        self._entries[entry_id] = entry
        self._save()
        
        logger.info(f"Added knowledge entry: {entry_id[:8]}...")
        return entry
    
    def add_batch(
        self,
        texts: List[str],
        metadata_list: Optional[List[Dict[str, Any]]] = None,
        source: str = "manual",
    ) -> List[KnowledgeEntry]:
        """Add multiple text entries in batch (more efficient)."""
        if not texts:
            return []
        
        embeddings = self._embed_batch(texts)
        metadata_list = metadata_list or [{} for _ in texts]
        
        entries = []
        for i, (text, embedding, metadata) in enumerate(
            zip(texts, embeddings, metadata_list)
        ):
            entry_id = self._generate_id(text)
            entry = KnowledgeEntry(
                id=entry_id,
                text=text,
                embedding=embedding,
                metadata=metadata,
                source=source,
            )
            self._entries[entry_id] = entry
            entries.append(entry)
        
        self._save()
        logger.info(f"Added {len(entries)} knowledge entries in batch")
        return entries
    
    def remove(self, entry_id: str) -> bool:
        """Remove an entry by ID.
        
        Returns:
            True if entry was removed, False if not found
        """
        if entry_id in self._entries:
            del self._entries[entry_id]
            self._save()
            logger.info(f"Removed knowledge entry: {entry_id}")
            return True
        return False
    
    def get(self, entry_id: str) -> Optional[KnowledgeEntry]:
        """Get an entry by ID."""
        return self._entries.get(entry_id)
    
    def list_all(self) -> List[KnowledgeEntry]:
        """List all entries."""
        return list(self._entries.values())
    
    def search(
        self,
        query: str,
        top_k: int = 5,
        min_score: float = 0.0,
    ) -> List[SearchResult]:
        """Search for entries similar to the query.
        
        Args:
            query: The search query
            top_k: Maximum number of results
            min_score: Minimum similarity score (0-1)
            
        Returns:
            List of SearchResult sorted by similarity (highest first)
        """
        if not self._entries:
            return []
        
        # Get query embedding
        query_embedding = self._embed(query)
        if not query_embedding:
            # Fallback to simple text matching if embeddings unavailable
            return self._fallback_search(query, top_k)
        
        # Build embedding matrix
        entry_list = list(self._entries.values())
        entry_embeddings = np.array([e.embedding for e in entry_list])
        
        # Filter out entries without embeddings
        valid_mask = np.array([len(e.embedding) > 0 for e in entry_list])
        if not np.any(valid_mask):
            return self._fallback_search(query, top_k)
        
        valid_entries = [e for e, valid in zip(entry_list, valid_mask) if valid]
        valid_embeddings = entry_embeddings[valid_mask]
        
        # Compute similarities
        similarities = self._cosine_similarity(query_embedding, valid_embeddings)
        
        # Create results
        results = []
        for entry, score in zip(valid_entries, similarities):
            if score >= min_score:
                results.append(SearchResult(entry=entry, score=float(score)))
        
        # Sort by score (descending) and limit
        results.sort(key=lambda r: r.score, reverse=True)
        return results[:top_k]
    
    def _fallback_search(self, query: str, top_k: int) -> List[SearchResult]:
        """Simple keyword-based fallback search."""
        query_words = set(query.lower().split())
        results = []
        
        for entry in self._entries.values():
            text_words = set(entry.text.lower().split())
            overlap = len(query_words & text_words)
            if overlap > 0:
                score = overlap / max(len(query_words), len(text_words))
                results.append(SearchResult(entry=entry, score=score))
        
        results.sort(key=lambda r: r.score, reverse=True)
        return results[:top_k]
    
    def clear(self) -> int:
        """Clear all entries.
        
        Returns:
            Number of entries removed
        """
        count = len(self._entries)
        self._entries.clear()
        self._save()
        logger.info(f"Cleared {count} knowledge entries")
        return count
    
    def stats(self) -> Dict[str, Any]:
        """Get statistics about the knowledge base."""
        entries = list(self._entries.values())
        sources = {}
        for e in entries:
            sources[e.source] = sources.get(e.source, 0) + 1
        
        return {
            "total_entries": len(entries),
            "has_embeddings": EMBEDDINGS_AVAILABLE,
            "model_name": self.model_name,
            "storage_path": str(self.storage_path),
            "sources": sources,
        }


# Singleton instance for the service
_knowledge_service: Optional[KnowledgeService] = None


def get_knowledge_service() -> KnowledgeService:
    """Get the singleton knowledge service instance."""
    global _knowledge_service
    if _knowledge_service is None:
        _knowledge_service = KnowledgeService()
    return _knowledge_service

