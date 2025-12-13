import React, { useState, useEffect, useRef, useCallback } from 'react';
import { api } from '../utils/api';
import './ModelAutocomplete.css';

interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  description?: string;
  context_window?: number;
  supports_tools?: boolean;
  supports_vision?: boolean;
}

interface ProviderModels {
  provider: string;
  models: ModelInfo[];
  error?: string;
}

interface ModelAutocompleteProps {
  projectId: string;
  value: string;
  provider?: string;
  onChange: (modelId: string, provider: string) => void;
  placeholder?: string;
}

// Cache for models by project
const modelsCache: Record<string, { providers: Record<string, ProviderModels>; timestamp: number }> = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function ModelAutocomplete({
  projectId,
  value,
  provider,
  onChange,
  placeholder = "Search models...",
}: ModelAutocompleteProps) {
  const [query, setQuery] = useState(value || '');
  const [isOpen, setIsOpen] = useState(false);
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch models from API
  const fetchModels = useCallback(async () => {
    // Check cache first
    const cached = modelsCache[projectId];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      const allModels: ModelInfo[] = [];
      Object.values(cached.providers).forEach(p => {
        allModels.push(...p.models);
      });
      setModels(allModels);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await api.get<{ providers: Record<string, ProviderModels> }>(
        `/models/${projectId}`
      );
      
      // Cache the response
      modelsCache[projectId] = {
        providers: response.providers,
        timestamp: Date.now(),
      };
      
      // Flatten all models
      const allModels: ModelInfo[] = [];
      Object.values(response.providers).forEach(p => {
        if (p.models && p.models.length > 0) {
          allModels.push(...p.models);
        }
      });
      
      setModels(allModels);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch models');
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  // Fetch models on mount and when projectId changes
  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  // Sync query with value prop
  useEffect(() => {
    setQuery(value || '');
  }, [value]);

  // Filter models based on query (match any part) and provider
  const filteredModels = models.filter(m => {
    // Filter by provider if one is selected (but allow litellm to show all)
    if (provider && provider !== 'litellm') {
      // Map provider names: openai models come back as "openai", groq as "groq", etc.
      const providerMatch = m.provider.toLowerCase() === provider.toLowerCase();
      if (!providerMatch) return false;
    }
    
    const searchTerm = query.toLowerCase();
    return (
      m.id.toLowerCase().includes(searchTerm) ||
      m.name.toLowerCase().includes(searchTerm) ||
      m.provider.toLowerCase().includes(searchTerm)
    );
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        setHighlightedIndex(i => Math.min(i + 1, filteredModels.length - 1));
        e.preventDefault();
        break;
      case 'ArrowUp':
        setHighlightedIndex(i => Math.max(i - 1, 0));
        e.preventDefault();
        break;
      case 'Enter':
        if (highlightedIndex >= 0 && highlightedIndex < filteredModels.length) {
          selectModel(filteredModels[highlightedIndex]);
        }
        e.preventDefault();
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const selectModel = (model: ModelInfo) => {
    setQuery(model.id);
    onChange(model.id, model.provider);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
    // Also update the parent with the raw value in case they type a custom model
    onChange(e.target.value, provider || 'gemini');
  };

  const getProviderBadgeClass = (provider: string) => {
    switch (provider.toLowerCase()) {
      case 'gemini': return 'provider-gemini';
      case 'anthropic': return 'provider-anthropic';
      case 'openai': return 'provider-openai';
      case 'groq': return 'provider-groq';
      case 'ollama': return 'provider-ollama';
      default: return 'provider-other';
    }
  };

  return (
    <div className="model-autocomplete">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="model-autocomplete-input"
      />
      
      {isOpen && (
        <div ref={dropdownRef} className="model-autocomplete-dropdown">
          {loading && (
            <div className="model-autocomplete-loading">Loading models...</div>
          )}
          
          {error && (
            <div className="model-autocomplete-error">{error}</div>
          )}
          
          {!loading && !error && filteredModels.length === 0 && (
            <div className="model-autocomplete-empty">
              {query ? 'No matching models' : 'No models available'}
            </div>
          )}
          
          {!loading && filteredModels.length > 0 && (
            <div className="model-autocomplete-list">
              {filteredModels.slice(0, 50).map((model, index) => (
                <div
                  key={`${model.provider}-${model.id}`}
                  className={`model-autocomplete-item ${
                    index === highlightedIndex ? 'highlighted' : ''
                  }`}
                  onClick={() => selectModel(model)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  <span className={`provider-badge ${getProviderBadgeClass(model.provider)}`}>
                    {model.provider}
                  </span>
                  <span className="model-id">{model.id}</span>
                  {model.context_window && (
                    <span className="model-context">
                      {Math.round(model.context_window / 1000)}K
                    </span>
                  )}
                  {model.supports_vision && (
                    <span className="model-feature" title="Supports vision">👁️</span>
                  )}
                </div>
              ))}
              {filteredModels.length > 50 && (
                <div className="model-autocomplete-more">
                  +{filteredModels.length - 50} more...
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Hook to invalidate the cache
export function invalidateModelsCache(projectId?: string) {
  if (projectId) {
    delete modelsCache[projectId];
  } else {
    Object.keys(modelsCache).forEach(key => delete modelsCache[key]);
  }
}

