import { useState, useEffect } from 'react';
import { Copy, Download, Check, Code, RefreshCw, AlertCircle } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import Editor from '@monaco-editor/react';
import { getProjectCode } from '../utils/api';

export default function CodePanel() {
  const { project } = useStore();
  const [copied, setCopied] = useState(false);
  const [pythonCode, setPythonCode] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch code from backend whenever project changes
  useEffect(() => {
    if (!project) {
      setPythonCode('');
      return;
    }
    
    let cancelled = false;
    
    async function fetchCode() {
      setLoading(true);
      setError(null);
      
      try {
        const code = await getProjectCode(project!.id);
        if (!cancelled) {
          setPythonCode(code);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to generate code');
          setPythonCode('# Error generating code. See error message above.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    
    fetchCode();
    
    return () => {
      cancelled = true;
    };
  }, [project]);
  
  if (!project) return null;
  
  function handleCopy() {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  
  function handleDownload() {
    const blob = new Blob([pythonCode], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name}_agent.py`;
    a.click();
    URL.revokeObjectURL(url);
  }
  
  async function handleRefresh() {
    setLoading(true);
    setError(null);
    
    try {
      const code = await getProjectCode(project!.id);
      setPythonCode(code);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate code');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="code-panel">
      <style>{`
        .code-panel {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 180px);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .code-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .code-title h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .code-title .badge {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(167, 139, 250, 0.15);
          color: var(--accent-primary);
          border-radius: 999px;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 999px;
        }
        
        .status-badge.success {
          background: rgba(0, 245, 212, 0.15);
          color: var(--success);
        }
        
        .status-badge.loading {
          background: rgba(167, 139, 250, 0.15);
          color: var(--accent-primary);
        }
        
        .status-badge.error {
          background: rgba(255, 100, 100, 0.15);
          color: #ff6464;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
        }
        
        .code-editor {
          flex: 1;
          min-height: 0;
        }
        
        .code-info {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .code-info p {
          margin-bottom: 8px;
        }
        
        .code-info code {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }
      `}</style>
      
      <div className="code-header">
        <div className="code-title">
          <Code size={16} />
          <h3>Python Code</h3>
          <span className="badge">Generated</span>
          {loading && (
            <span className="status-badge loading">
              <RefreshCw size={12} className="spin" />
              Loading...
            </span>
          )}
          {copied && (
            <span className="status-badge success">
              <Check size={12} />
              Copied!
            </span>
          )}
          {error && (
            <span className="status-badge error" title={error}>
              <AlertCircle size={12} />
              Error
            </span>
          )}
        </div>
        <div className="code-actions">
          <button 
            className="btn btn-secondary btn-sm" 
            onClick={handleRefresh} 
            title="Refresh code"
            disabled={loading}
          >
            <RefreshCw size={14} className={loading ? 'spin' : ''} />
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleCopy} title="Copy to clipboard" disabled={loading || !!error}>
            <Copy size={14} />
            Copy
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleDownload} title="Download Python file" disabled={loading || !!error}>
            <Download size={14} />
            Download
          </button>
        </div>
      </div>
      
      <div className="code-editor">
        <Editor
          height="100%"
          language="python"
          theme="vs-dark"
          value={pythonCode}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            padding: { top: 12 },
            wordWrap: 'on',
          }}
        />
      </div>
      
      <div className="code-info">
        <p>
          <strong>This is the exact code that the runtime executes.</strong> 
          All callbacks and tools are included inline.
        </p>
        <p>
          To run this code yourself, save it as <code>agent.py</code> in a directory, 
          then run: <code>adk run .</code> or <code>adk web .</code>
        </p>
        <p>
          For custom storage, use CLI options: <code>adk run . --session_service_uri sqlite://./sessions.db</code>
        </p>
      </div>
    </div>
  );
}

