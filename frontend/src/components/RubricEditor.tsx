import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Edit3, Sparkles, Loader } from 'lucide-react';
import { improveRubric } from '../utils/api';

interface RubricEditorProps {
  value: string;
  onChange: (value: string) => void;
  onDelete?: () => void;
  placeholder?: string;
  projectId: string;
}

export default function RubricEditor({ 
  value, 
  onChange, 
  placeholder = 'Enter rubric criteria...',
  projectId
}: RubricEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      // Minimum 60px, maximum 400px
      textarea.style.height = `${Math.min(Math.max(scrollHeight, 60), 400)}px`;
    }
  };

  // Adjust height when value changes or when entering edit mode
  useEffect(() => {
    if (isEditing) {
      adjustTextareaHeight();
    }
  }, [value, isEditing]);

  // Focus textarea when entering edit mode
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      // Move cursor to end
      const len = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(len, len);
    }
  }, [isEditing]);

  function handleClickOutside(e: MouseEvent) {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsEditing(false);
    }
  }

  useEffect(() => {
    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isEditing]);

  async function handleImprove() {
    if (!value.trim() || isImproving) return;
    
    setIsImproving(true);
    try {
      const result = await improveRubric(projectId, value);
      if (result.success && result.rubric) {
        onChange(result.rubric);
      } else {
        console.error('Failed to improve rubric:', result.error);
      }
    } catch (e) {
      console.error('Error improving rubric:', e);
    } finally {
      setIsImproving(false);
    }
  }

  // Calculate preview height based on content lines
  const getPreviewHeight = () => {
    if (!value) return 60;
    const lines = value.split('\n').length;
    const calculatedHeight = Math.max(60, Math.min(lines * 24 + 32, 400));
    return calculatedHeight;
  };

  return (
    <div ref={containerRef} className="rubric-editor">
      <style>{`
        .rubric-editor {
          position: relative;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-primary);
        }
        
        .rubric-preview {
          padding: 12px;
          min-height: 60px;
          max-height: 400px;
          overflow-y: auto;
          cursor: text;
          position: relative;
        }
        
        .rubric-preview:hover {
          background: var(--bg-tertiary);
        }
        
        .rubric-preview:hover .rubric-actions {
          opacity: 1;
        }
        
        .rubric-actions {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.15s;
        }
        
        .rubric-action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .rubric-action-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        
        .rubric-action-btn.improving {
          pointer-events: none;
        }
        
        .rubric-placeholder {
          color: var(--text-muted);
          font-style: italic;
          font-size: 13px;
        }
        
        .rubric-content {
          font-size: 13px;
          line-height: 1.5;
        }
        
        .rubric-content p {
          margin: 0 0 0.5em 0;
        }
        
        .rubric-content p:last-child {
          margin-bottom: 0;
        }
        
        .rubric-content ul, .rubric-content ol {
          margin: 0.25em 0;
          padding-left: 1.25em;
        }
        
        .rubric-content li {
          margin: 0.15em 0;
        }
        
        .rubric-content code {
          background: var(--bg-tertiary);
          padding: 1px 4px;
          border-radius: 3px;
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        
        .rubric-content strong {
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .rubric-textarea-wrapper {
          position: relative;
        }
        
        .rubric-textarea {
          width: 100%;
          min-height: 60px;
          max-height: 400px;
          padding: 12px;
          padding-right: 90px;
          font-size: 13px;
          line-height: 1.5;
          font-family: inherit;
          background: var(--bg-primary);
          border: none;
          resize: none;
          overflow-y: auto;
        }
        
        .rubric-textarea:focus {
          outline: none;
        }
        
        .rubric-textarea::placeholder {
          color: var(--text-muted);
          font-style: italic;
        }
        
        .rubric-improve-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--accent-primary);
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .rubric-improve-btn:hover:not(:disabled) {
          background: rgba(0, 245, 212, 0.1);
        }
        
        .rubric-improve-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .rubric-improve-btn .spin {
          animation: rubric-spin 1s linear infinite;
        }
        
        @keyframes rubric-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      {isEditing ? (
        <div className="rubric-textarea-wrapper">
          <textarea
            ref={textareaRef}
            className="rubric-textarea"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              adjustTextareaHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsEditing(false);
              }
            }}
            placeholder={placeholder}
          />
          <button
            className="rubric-improve-btn"
            onClick={handleImprove}
            disabled={!value.trim() || isImproving}
            title="Improve this rubric using AI"
          >
            {isImproving ? (
              <>
                <Loader size={12} className="spin" />
                Improving...
              </>
            ) : (
              <>
                <Sparkles size={12} />
                Improve
              </>
            )}
          </button>
        </div>
      ) : (
        <div 
          className="rubric-preview" 
          onClick={() => setIsEditing(true)}
          style={{ minHeight: getPreviewHeight() }}
        >
          <div className="rubric-actions">
            <button
              className="rubric-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              <Edit3 size={12} />
              Edit
            </button>
            {value.trim() && (
              <button
                className={`rubric-action-btn ${isImproving ? 'improving' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleImprove();
                }}
                disabled={isImproving}
              >
                {isImproving ? (
                  <>
                    <Loader size={12} className="spin" />
                    Improving...
                  </>
                ) : (
                  <>
                    <Sparkles size={12} />
                    Improve
                  </>
                )}
              </button>
            )}
          </div>
          {value ? (
            <div className="rubric-content">
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          ) : (
            <div className="rubric-placeholder">{placeholder}</div>
          )}
        </div>
      )}
    </div>
  );
}
