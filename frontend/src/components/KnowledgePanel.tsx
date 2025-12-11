import { useState, useEffect, useCallback } from 'react';
import { 
  Search, Plus, Trash2, Upload, Database, FileText, 
  RefreshCw, AlertCircle, CheckCircle, Brain, Sparkles
} from 'lucide-react';

interface KnowledgeEntry {
  id: string;
  text: string;
  full_text?: string;
  source: string;
  created_at: number;
  metadata: Record<string, any>;
  has_embedding: boolean;
  score?: number;
}

interface KnowledgeStats {
  total_entries: number;
  has_embeddings: boolean;
  model_name: string;
  storage_path: string;
  sources: Record<string, number>;
}

interface SearchResult {
  id: string;
  text: string;
  score: number;
  source: string;
  created_at: number;
}

const API_BASE = '/api';

export default function KnowledgePanel() {
  const [entries, setEntries] = useState<KnowledgeEntry[]>([]);
  const [stats, setStats] = useState<KnowledgeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Add entry form
  const [newText, setNewText] = useState('');
  const [newSource, setNewSource] = useState('manual');
  const [adding, setAdding] = useState(false);
  
  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const [searching, setSearching] = useState(false);
  
  // View mode
  const [viewMode, setViewMode] = useState<'list' | 'search'>('list');
  
  // Selected entry for detail view
  const [selectedEntry, setSelectedEntry] = useState<KnowledgeEntry | null>(null);
  
  const loadEntries = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/knowledge`);
      const data = await response.json();
      setEntries(data.entries || []);
    } catch (err) {
      setError('Failed to load knowledge entries');
      console.error(err);
    }
  }, []);
  
  const loadStats = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/knowledge/stats`);
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  }, []);
  
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await Promise.all([loadEntries(), loadStats()]);
      setLoading(false);
    };
    load();
  }, [loadEntries, loadStats]);
  
  const handleAddEntry = async () => {
    if (!newText.trim()) return;
    
    setAdding(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE}/knowledge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: newText.trim(),
          source: newSource,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add entry');
      }
      
      setNewText('');
      await Promise.all([loadEntries(), loadStats()]);
    } catch (err) {
      setError('Failed to add knowledge entry');
      console.error(err);
    } finally {
      setAdding(false);
    }
  };
  
  const handleDeleteEntry = async (id: string) => {
    if (!confirm('Delete this knowledge entry?')) return;
    
    try {
      await fetch(`${API_BASE}/knowledge/${id}`, { method: 'DELETE' });
      await Promise.all([loadEntries(), loadStats()]);
      if (selectedEntry?.id === id) {
        setSelectedEntry(null);
      }
    } catch (err) {
      setError('Failed to delete entry');
      console.error(err);
    }
  };
  
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }
    
    setSearching(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE}/knowledge/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuery.trim(),
          top_k: 10,
          min_score: 0.0,
        }),
      });
      
      const data = await response.json();
      setSearchResults(data.results || []);
      setViewMode('search');
    } catch (err) {
      setError('Search failed');
      console.error(err);
    } finally {
      setSearching(false);
    }
  };
  
  const handleClearAll = async () => {
    if (!confirm('Delete ALL knowledge entries? This cannot be undone.')) return;
    
    try {
      await fetch(`${API_BASE}/knowledge`, { method: 'DELETE' });
      await Promise.all([loadEntries(), loadStats()]);
      setSelectedEntry(null);
    } catch (err) {
      setError('Failed to clear knowledge base');
      console.error(err);
    }
  };
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'var(--success)';
    if (score >= 0.6) return 'var(--accent-primary)';
    if (score >= 0.4) return 'var(--warning)';
    return 'var(--text-muted)';
  };
  
  if (loading) {
    return (
      <div className="knowledge-loading">
        <RefreshCw className="spin" size={24} />
        <span>Loading knowledge base...</span>
        <style>{`
          .knowledge-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 60px;
            color: var(--text-muted);
          }
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  
  return (
    <div className="knowledge-panel">
      <style>{`
        .knowledge-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 1400px;
        }
        
        .knowledge-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .knowledge-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .knowledge-title svg {
          color: var(--accent-primary);
        }
        
        .stats-bar {
          display: flex;
          gap: 20px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        
        .stat-value {
          font-weight: 600;
          color: var(--accent-primary);
        }
        
        .stat-label {
          color: var(--text-muted);
        }
        
        .embedding-status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 500;
        }
        
        .embedding-status.enabled {
          background: rgba(46, 204, 113, 0.15);
          color: var(--success);
        }
        
        .embedding-status.disabled {
          background: rgba(231, 76, 60, 0.15);
          color: var(--error);
        }
        
        .main-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 20px;
        }
        
        @media (max-width: 1200px) {
          .main-layout {
            grid-template-columns: 1fr;
          }
        }
        
        .entries-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        
        .search-bar {
          display: flex;
          gap: 8px;
          flex: 1;
          max-width: 500px;
        }
        
        .search-bar input {
          flex: 1;
        }
        
        .view-toggle {
          display: flex;
          gap: 4px;
        }
        
        .view-toggle button {
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        
        .view-toggle button:hover {
          background: var(--bg-hover);
        }
        
        .view-toggle button.active {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .entries-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .entry-card {
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .entry-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-tertiary);
        }
        
        .entry-card.selected {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 1px var(--accent-primary);
        }
        
        .entry-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .entry-source {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .entry-score {
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 600;
          background: var(--bg-tertiary);
        }
        
        .entry-text {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary);
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .entry-text.truncated {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .entry-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }
        
        .entry-date {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .entry-actions {
          display: flex;
          gap: 4px;
        }
        
        .entry-actions button {
          padding: 4px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }
        
        .entry-actions button:hover {
          color: var(--error);
          background: rgba(231, 76, 60, 0.1);
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .add-section {
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }
        
        .add-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .add-section h3 svg {
          color: var(--accent-secondary);
        }
        
        .add-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .add-form textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .add-form-row {
          display: flex;
          gap: 8px;
        }
        
        .detail-section {
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }
        
        .detail-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .detail-content {
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .detail-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          text-align: center;
          color: var(--text-muted);
        }
        
        .empty-state svg {
          opacity: 0.5;
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(231, 76, 60, 0.1);
          border: 1px solid var(--error);
          border-radius: var(--radius-md);
          color: var(--error);
          font-size: 14px;
        }
        
        .actions-row {
          display: flex;
          gap: 8px;
        }
      `}</style>
      
      {/* Header */}
      <div className="knowledge-header">
        <h1 className="knowledge-title">
          <Brain size={28} />
          Knowledge Base
        </h1>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => Promise.all([loadEntries(), loadStats()])}
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>
      
      {/* Stats */}
      {stats && (
        <div className="stats-bar">
          <div className="stat-item">
            <Database size={16} />
            <span className="stat-value">{stats.total_entries}</span>
            <span className="stat-label">entries</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Model:</span>
            <span className="stat-value">{stats.model_name}</span>
          </div>
          <div className={`embedding-status ${stats.has_embeddings ? 'enabled' : 'disabled'}`}>
            {stats.has_embeddings ? (
              <>
                <Sparkles size={14} />
                Vector embeddings enabled
              </>
            ) : (
              <>
                <AlertCircle size={14} />
                Embeddings unavailable
              </>
            )}
          </div>
          {Object.keys(stats.sources).length > 0 && (
            <div className="stat-item">
              <span className="stat-label">Sources:</span>
              <span className="stat-value">
                {Object.entries(stats.sources)
                  .map(([src, count]) => `${src} (${count})`)
                  .join(', ')}
              </span>
            </div>
          )}
        </div>
      )}
      
      {/* Error */}
      {error && (
        <div className="error-banner">
          <AlertCircle size={18} />
          {error}
          <button onClick={() => setError(null)} style={{ marginLeft: 'auto' }}>×</button>
        </div>
      )}
      
      {/* Main Layout */}
      <div className="main-layout">
        {/* Entries Section */}
        <div className="entries-section">
          <div className="section-header">
            <div className="search-bar">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search knowledge base..."
              />
              <button 
                className="btn btn-primary" 
                onClick={handleSearch}
                disabled={searching}
              >
                <Search size={16} />
                {searching ? 'Searching...' : 'Search'}
              </button>
            </div>
            <div className="view-toggle">
              <button 
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => {
                  setViewMode('list');
                  setSearchResults(null);
                }}
              >
                All Entries
              </button>
              {searchResults && (
                <button 
                  className={viewMode === 'search' ? 'active' : ''}
                  onClick={() => setViewMode('search')}
                >
                  Results ({searchResults.length})
                </button>
              )}
            </div>
          </div>
          
          <div className="entries-list">
            {viewMode === 'search' && searchResults ? (
              searchResults.length === 0 ? (
                <div className="empty-state">
                  <Search size={48} />
                  <div>No results found for "{searchQuery}"</div>
                </div>
              ) : (
                searchResults.map((result) => (
                  <div 
                    key={result.id} 
                    className={`entry-card ${selectedEntry?.id === result.id ? 'selected' : ''}`}
                    onClick={() => {
                      const entry = entries.find(e => e.id === result.id);
                      if (entry) setSelectedEntry(entry);
                    }}
                  >
                    <div className="entry-header">
                      <div className="entry-source">
                        <FileText size={14} />
                        {result.source || 'unknown'}
                      </div>
                      <div 
                        className="entry-score"
                        style={{ color: getScoreColor(result.score) }}
                      >
                        {(result.score * 100).toFixed(1)}% match
                      </div>
                    </div>
                    <div className="entry-text truncated">{result.text}</div>
                    <div className="entry-footer">
                      <span className="entry-date">{formatDate(result.created_at)}</span>
                    </div>
                  </div>
                ))
              )
            ) : entries.length === 0 ? (
              <div className="empty-state">
                <Database size={48} />
                <div>No knowledge entries yet</div>
                <div style={{ fontSize: 13 }}>Add some knowledge to get started</div>
              </div>
            ) : (
              entries.map((entry) => (
                <div 
                  key={entry.id} 
                  className={`entry-card ${selectedEntry?.id === entry.id ? 'selected' : ''}`}
                  onClick={() => setSelectedEntry(entry)}
                >
                  <div className="entry-header">
                    <div className="entry-source">
                      <FileText size={14} />
                      {entry.source || 'unknown'}
                    </div>
                    {entry.has_embedding && (
                      <div className="entry-score" style={{ color: 'var(--success)' }}>
                        <Sparkles size={12} /> embedded
                      </div>
                    )}
                  </div>
                  <div className="entry-text truncated">{entry.text}</div>
                  <div className="entry-footer">
                    <span className="entry-date">{formatDate(entry.created_at)}</span>
                    <div className="entry-actions">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteEntry(entry.id);
                        }}
                        title="Delete entry"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {entries.length > 0 && (
            <div className="actions-row">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleClearAll}
                style={{ color: 'var(--error)' }}
              >
                <Trash2 size={14} />
                Clear All
              </button>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="sidebar">
          {/* Add Entry */}
          <div className="add-section">
            <h3>
              <Plus size={18} />
              Add Knowledge
            </h3>
            <div className="add-form">
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Enter knowledge text to add...

You can add facts, documentation, context, or any information you want agents to be able to reference."
              />
              <div className="add-form-row">
                <input
                  type="text"
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  placeholder="Source (e.g., docs, manual)"
                  style={{ flex: 1 }}
                />
                <button 
                  className="btn btn-primary"
                  onClick={handleAddEntry}
                  disabled={adding || !newText.trim()}
                >
                  <Plus size={16} />
                  {adding ? 'Adding...' : 'Add'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Selected Entry Detail */}
          {selectedEntry && (
            <div className="detail-section">
              <h3>
                <FileText size={18} />
                Entry Details
              </h3>
              <div className="detail-content">
                {selectedEntry.full_text || selectedEntry.text}
              </div>
              <div className="detail-meta">
                <div><strong>ID:</strong> {selectedEntry.id}</div>
                <div><strong>Source:</strong> {selectedEntry.source || 'unknown'}</div>
                <div><strong>Created:</strong> {formatDate(selectedEntry.created_at)}</div>
                <div><strong>Has embedding:</strong> {selectedEntry.has_embedding ? 'Yes' : 'No'}</div>
                {Object.keys(selectedEntry.metadata || {}).length > 0 && (
                  <div>
                    <strong>Metadata:</strong>
                    <pre style={{ fontSize: 11, marginTop: 4 }}>
                      {JSON.stringify(selectedEntry.metadata, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
              <div className="actions-row" style={{ marginTop: 12 }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleDeleteEntry(selectedEntry.id)}
                  style={{ color: 'var(--error)' }}
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

