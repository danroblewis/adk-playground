import React from 'react';
import { ModelAutocomplete } from './ModelAutocomplete';
import './ModelConfigForm.css';

export type ModelProvider = 'gemini' | 'anthropic' | 'openai' | 'groq' | 'litellm';

export interface ModelConfigValues {
  model_name?: string;
  provider?: ModelProvider;
  api_base?: string;
  temperature?: number;
  max_output_tokens?: number;
  top_p?: number;
  top_k?: number;
}

interface ModelConfigFormProps {
  projectId: string;
  values: ModelConfigValues;
  onChange: (updates: Partial<ModelConfigValues>) => void;
  className?: string;
}

const PROVIDERS: { value: ModelProvider; label: string }[] = [
  { value: 'gemini', label: 'Gemini' },
  { value: 'anthropic', label: 'Anthropic' },
  { value: 'openai', label: 'OpenAI' },
  { value: 'groq', label: 'Groq' },
  { value: 'litellm', label: 'LiteLLM / Other' },
];

/**
 * Helper to detect provider from model ID format
 */
function detectProvider(modelId: string, currentProvider?: string): ModelProvider {
  if (modelId.startsWith('openai/')) return 'openai';
  if (modelId.startsWith('groq/')) return 'groq';
  if (modelId.startsWith('ollama/')) return 'litellm';
  if (modelId.startsWith('claude-')) return 'anthropic';
  if (modelId.startsWith('gemini-')) return 'gemini';
  if (modelId.includes('/')) return 'litellm';
  return (currentProvider as ModelProvider) || 'gemini';
}

/**
 * Reusable model configuration form with autocomplete, temperature, tokens, etc.
 * Used in both App configurator and Agent configurator.
 */
export function ModelConfigForm({
  projectId,
  values,
  onChange,
  className = '',
}: ModelConfigFormProps) {
  return (
    <div className={`model-config-form ${className}`}>
      <div className="model-config-row">
        <div className="model-config-field" style={{ flex: 1 }}>
          <label>Provider</label>
          <select
            value={values.provider || 'gemini'}
            onChange={(e) => onChange({ provider: e.target.value as ModelProvider })}
          >
            {PROVIDERS.map(p => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
        <div className="model-config-field" style={{ flex: 3 }}>
          <label>Model</label>
          <ModelAutocomplete
            projectId={projectId}
            value={values.model_name || ''}
            provider={values.provider}
            onChange={(modelId, provider) => {
              const detectedProvider = detectProvider(modelId, provider);
              onChange({ 
                model_name: modelId,
                provider: detectedProvider,
              });
            }}
            placeholder="Search models..."
          />
        </div>
        {values.provider === 'litellm' && (
          <div className="model-config-field" style={{ flex: 2 }}>
            <label>API Base</label>
            <input
              type="text"
              value={values.api_base || ''}
              onChange={(e) => onChange({ api_base: e.target.value || undefined })}
              placeholder="http://localhost:11434"
            />
          </div>
        )}
      </div>
      <div className="model-config-row">
        <div className="model-config-field">
          <label>Temperature</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="2"
            value={values.temperature ?? ''}
            onChange={(e) => onChange({ temperature: e.target.value ? parseFloat(e.target.value) : undefined })}
            placeholder="Default"
          />
        </div>
        <div className="model-config-field">
          <label>Max Tokens</label>
          <input
            type="number"
            min="1"
            value={values.max_output_tokens ?? ''}
            onChange={(e) => onChange({ max_output_tokens: e.target.value ? parseInt(e.target.value) : undefined })}
            placeholder="Default"
          />
        </div>
        <div className="model-config-field">
          <label>Top P</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="1"
            value={values.top_p ?? ''}
            onChange={(e) => onChange({ top_p: e.target.value ? parseFloat(e.target.value) : undefined })}
            placeholder="Default"
          />
        </div>
        <div className="model-config-field">
          <label>Top K</label>
          <input
            type="number"
            min="1"
            value={values.top_k ?? ''}
            onChange={(e) => onChange({ top_k: e.target.value ? parseInt(e.target.value) : undefined })}
            placeholder="Default"
          />
        </div>
      </div>
    </div>
  );
}

