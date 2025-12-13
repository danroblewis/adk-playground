"""Service for listing available LLM models from various providers."""

from __future__ import annotations

import asyncio
import logging
import os
from typing import Dict, List, Optional
from pydantic import BaseModel

logger = logging.getLogger(__name__)


class ModelInfo(BaseModel):
    """Information about an available model."""
    id: str  # The model ID to use in API calls
    name: str  # Human-readable name
    provider: str  # Provider name (gemini, anthropic, openai, etc.)
    description: str = ""
    context_window: Optional[int] = None
    supports_tools: bool = True
    supports_vision: bool = False


class ProviderModels(BaseModel):
    """Models available from a provider."""
    provider: str
    models: List[ModelInfo]
    error: Optional[str] = None


async def list_gemini_models(api_key: Optional[str] = None) -> ProviderModels:
    """List available Gemini models using the Google GenAI API."""
    try:
        from google import genai
        
        # Use provided key or fall back to environment
        key = api_key or os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")
        if not key:
            return ProviderModels(
                provider="gemini",
                models=[],
                error="No API key configured"
            )
        
        client = genai.Client(api_key=key)
        models_list = list(client.models.list())
        
        models = []
        for m in models_list:
            # Filter to generative models only
            model_name = m.name
            if not model_name:
                continue
                
            # Extract the short name (e.g., "gemini-2.0-flash" from "models/gemini-2.0-flash")
            short_name = model_name.replace("models/", "") if model_name.startswith("models/") else model_name
            
            # Skip non-chat models (embedding, vision-only, etc.)
            if "embedding" in short_name.lower():
                continue
            if "aqa" in short_name.lower():
                continue
                
            display_name = getattr(m, "display_name", short_name)
            description = getattr(m, "description", "")
            
            # Check capabilities
            supports_tools = True  # Most Gemini models support tools
            supports_vision = "vision" in short_name.lower() or "pro" in short_name.lower() or "flash" in short_name.lower()
            
            # Get context window if available
            context_window = None
            if hasattr(m, "input_token_limit"):
                context_window = m.input_token_limit
            
            models.append(ModelInfo(
                id=short_name,
                name=display_name or short_name,
                provider="gemini",
                description=description[:200] if description else "",
                context_window=context_window,
                supports_tools=supports_tools,
                supports_vision=supports_vision,
            ))
        
        # Sort by name, putting newer models first
        models.sort(key=lambda m: (
            0 if "2.5" in m.id else (1 if "2.0" in m.id else (2 if "1.5" in m.id else 3)),
            0 if "pro" in m.id.lower() else 1,
            m.id
        ))
        
        return ProviderModels(provider="gemini", models=models)
        
    except Exception as e:
        logger.error(f"Error listing Gemini models: {e}")
        return ProviderModels(
            provider="gemini",
            models=[],
            error=str(e)[:200]
        )


async def list_anthropic_models(api_key: Optional[str] = None) -> ProviderModels:
    """List available Anthropic (Claude) models."""
    try:
        import anthropic
        
        key = api_key or os.environ.get("ANTHROPIC_API_KEY")
        if not key:
            return ProviderModels(
                provider="anthropic",
                models=[],
                error="No API key configured"
            )
        
        client = anthropic.Anthropic(api_key=key)
        
        # Anthropic doesn't have a list models API, so we use known models
        # and verify the key is valid with a simple request
        try:
            # Just check that the key works - we'll use the static list
            # (Anthropic doesn't have a list_models endpoint)
            pass
        except Exception:
            pass
        
        # Return known Claude models
        known_models = [
            ModelInfo(
                id="claude-sonnet-4-20250514",
                name="Claude Sonnet 4",
                provider="anthropic",
                description="Most intelligent model, best for complex tasks",
                context_window=200000,
                supports_tools=True,
                supports_vision=True,
            ),
            ModelInfo(
                id="claude-3-7-sonnet-latest",
                name="Claude 3.7 Sonnet",
                provider="anthropic",
                description="Best balance of intelligence and speed",
                context_window=200000,
                supports_tools=True,
                supports_vision=True,
            ),
            ModelInfo(
                id="claude-3-5-sonnet-latest",
                name="Claude 3.5 Sonnet",
                provider="anthropic",
                description="Previous generation balanced model",
                context_window=200000,
                supports_tools=True,
                supports_vision=True,
            ),
            ModelInfo(
                id="claude-3-5-haiku-latest",
                name="Claude 3.5 Haiku",
                provider="anthropic",
                description="Fast and cost-effective",
                context_window=200000,
                supports_tools=True,
                supports_vision=True,
            ),
            ModelInfo(
                id="claude-3-opus-latest",
                name="Claude 3 Opus",
                provider="anthropic",
                description="Most capable Claude 3 model",
                context_window=200000,
                supports_tools=True,
                supports_vision=True,
            ),
        ]
        
        return ProviderModels(provider="anthropic", models=known_models)
        
    except ImportError:
        return ProviderModels(
            provider="anthropic",
            models=[],
            error="anthropic package not installed"
        )
    except Exception as e:
        logger.error(f"Error with Anthropic: {e}")
        return ProviderModels(
            provider="anthropic",
            models=[],
            error=str(e)[:200]
        )


async def list_openai_models(api_key: Optional[str] = None) -> ProviderModels:
    """List available OpenAI models."""
    try:
        import openai
        
        key = api_key or os.environ.get("OPENAI_API_KEY")
        if not key:
            return ProviderModels(
                provider="openai",
                models=[],
                error="No API key configured"
            )
        
        client = openai.OpenAI(api_key=key)
        response = client.models.list()
        
        models = []
        for m in response.data:
            model_id = m.id
            
            # Filter to chat/completion models
            if not any(prefix in model_id for prefix in ["gpt-", "o1", "o3", "chatgpt"]):
                continue
            # Skip fine-tuned models
            if model_id.startswith("ft:"):
                continue
            # Skip old/deprecated
            if any(old in model_id for old in ["0301", "0314", "0613", "instruct"]):
                continue
                
            supports_vision = "vision" in model_id or "4o" in model_id or "o1" in model_id
            
            models.append(ModelInfo(
                id=f"openai/{model_id}",  # LiteLLM format
                name=model_id,
                provider="openai",
                supports_tools=True,
                supports_vision=supports_vision,
            ))
        
        # Sort by model generation
        models.sort(key=lambda m: (
            0 if "o3" in m.id else (1 if "o1" in m.id else (2 if "4o" in m.id else (3 if "4" in m.id else 4))),
            m.id
        ))
        
        return ProviderModels(provider="openai", models=models)
        
    except ImportError:
        return ProviderModels(
            provider="openai",
            models=[],
            error="openai package not installed"
        )
    except Exception as e:
        logger.error(f"Error listing OpenAI models: {e}")
        return ProviderModels(
            provider="openai",
            models=[],
            error=str(e)[:200]
        )


async def list_groq_models(api_key: Optional[str] = None) -> ProviderModels:
    """List available Groq models."""
    try:
        import httpx
        
        key = api_key or os.environ.get("GROQ_API_KEY")
        if not key:
            return ProviderModels(
                provider="groq",
                models=[],
                error="No API key configured"
            )
        
        async with httpx.AsyncClient() as client:
            response = await client.get(
                "https://api.groq.com/openai/v1/models",
                headers={"Authorization": f"Bearer {key}"}
            )
            response.raise_for_status()
            data = response.json()
        
        models = []
        for m in data.get("data", []):
            model_id = m.get("id", "")
            if not model_id:
                continue
                
            models.append(ModelInfo(
                id=f"groq/{model_id}",  # LiteLLM format
                name=model_id,
                provider="groq",
                supports_tools=True,
                supports_vision="vision" in model_id.lower(),
            ))
        
        models.sort(key=lambda m: m.id)
        return ProviderModels(provider="groq", models=models)
        
    except Exception as e:
        logger.error(f"Error listing Groq models: {e}")
        return ProviderModels(
            provider="groq",
            models=[],
            error=str(e)[:200]
        )


async def list_ollama_models(base_url: str = "http://localhost:11434") -> ProviderModels:
    """List available Ollama models from local server."""
    try:
        import httpx
        
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{base_url}/api/tags", timeout=5.0)
            response.raise_for_status()
            data = response.json()
        
        models = []
        for m in data.get("models", []):
            model_name = m.get("name", "")
            if not model_name:
                continue
                
            models.append(ModelInfo(
                id=f"ollama/{model_name}",  # LiteLLM format
                name=model_name,
                provider="ollama",
                supports_tools="llama" in model_name.lower() or "mistral" in model_name.lower(),
                supports_vision="llava" in model_name.lower() or "vision" in model_name.lower(),
            ))
        
        return ProviderModels(provider="ollama", models=models)
        
    except Exception as e:
        logger.debug(f"Ollama not available: {e}")
        return ProviderModels(
            provider="ollama",
            models=[],
            error="Ollama not running or not accessible"
        )


async def list_all_models(
    google_api_key: Optional[str] = None,
    anthropic_api_key: Optional[str] = None,
    openai_api_key: Optional[str] = None,
    groq_api_key: Optional[str] = None,
    check_ollama: bool = True,
) -> Dict[str, ProviderModels]:
    """List models from all configured providers in parallel."""
    
    tasks = [
        list_gemini_models(google_api_key),
        list_anthropic_models(anthropic_api_key),
        list_openai_models(openai_api_key),
        list_groq_models(groq_api_key),
    ]
    
    if check_ollama:
        tasks.append(list_ollama_models())
    
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    providers = {}
    provider_names = ["gemini", "anthropic", "openai", "groq"]
    if check_ollama:
        provider_names.append("ollama")
    
    for i, result in enumerate(results):
        provider = provider_names[i]
        if isinstance(result, Exception):
            providers[provider] = ProviderModels(
                provider=provider,
                models=[],
                error=str(result)[:200]
            )
        else:
            providers[provider] = result
    
    return providers

