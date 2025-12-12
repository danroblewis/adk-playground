import { useState, useEffect, useCallback } from 'react';
import { 
  Plus, Play, FolderTree, FileCheck, Trash2, ChevronRight, ChevronDown, 
  CheckCircle, XCircle, Clock, AlertCircle, Settings, Target, Percent,
  MessageSquare, Wrench, RefreshCw
} from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { api } from '../utils/api';

// Types matching backend models
interface ExpectedToolCall {
  name: string;
  args?: Record<string, any>;
  args_match_mode: 'exact' | 'subset' | 'ignore';
}

interface EvalInvocation {
  id: string;
  user_message: string;
  expected_response?: string;
  expected_tool_calls: ExpectedToolCall[];
}

interface EvalCase {
  id: string;
  name: string;
  description: string;
  invocations: EvalInvocation[];
  initial_state: Record<string, any>;
  expected_final_state?: Record<string, any>;
  response_match_threshold: number;
  trajectory_match_type: 'exact' | 'in_order' | 'any_order';
  tags: string[];
}

interface EvalSet {
  id: string;
  name: string;
  description: string;
  eval_cases: EvalCase[];
  default_response_threshold: number;
  default_trajectory_match_type: 'exact' | 'in_order' | 'any_order';
  created_at: number;
  updated_at: number;
}

interface InvocationResult {
  invocation_id: string;
  user_message: string;
  actual_response?: string;
  actual_tool_calls: { name: string; args: Record<string, any> }[];
  expected_response?: string;
  expected_tool_calls: { name: string; args: Record<string, any> }[];
  response_score?: number;
  trajectory_score?: number;
  response_passed?: boolean;
  trajectory_passed?: boolean;
  error?: string;
}

interface EvalCaseResult {
  eval_case_id: string;
  eval_case_name: string;
  session_id: string;
  overall_response_score?: number;
  overall_trajectory_score?: number;
  response_threshold: number;
  trajectory_match_type: string;
  response_passed: boolean;
  trajectory_passed: boolean;
  overall_passed: boolean;
  invocation_results: InvocationResult[];
  duration_ms: number;
  error?: string;
}

interface EvalSetResult {
  id: string;
  eval_set_id: string;
  eval_set_name: string;
  total_cases: number;
  passed_cases: number;
  failed_cases: number;
  error_cases: number;
  response_pass_rate?: number;
  trajectory_pass_rate?: number;
  overall_pass_rate: number;
  avg_response_score?: number;
  avg_trajectory_score?: number;
  case_results: EvalCaseResult[];
  duration_ms: number;
}

function generateId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export default function EvalPanel() {
  const { project } = useStore();
  const [evalSets, setEvalSets] = useState<EvalSet[]>([]);
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [expandedSets, setExpandedSets] = useState<Set<string>>(new Set());
  const [caseResultsMap, setCaseResultsMap] = useState<Map<string, EvalCaseResult>>(new Map());
  const [setResultsMap, setSetResultsMap] = useState<Map<string, EvalSetResult>>(new Map());
  const [running, setRunning] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Quick eval state
  const [quickEvalMessage, setQuickEvalMessage] = useState('');
  const [quickEvalExpectedResponse, setQuickEvalExpectedResponse] = useState('');
  const [quickEvalThreshold, setQuickEvalThreshold] = useState(0.7);
  const [quickEvalResult, setQuickEvalResult] = useState<EvalCaseResult | null>(null);
  
  // Load eval sets when project changes
  useEffect(() => {
    if (project?.id) {
      loadEvalSets();
    }
  }, [project?.id]);
  
  const loadEvalSets = async () => {
    if (!project?.id) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.get(`/projects/${project.id}/eval-sets`);
      setEvalSets(response.eval_sets || []);
      
      // Auto-expand first set if exists
      if (response.eval_sets?.length > 0) {
        setExpandedSets(new Set([response.eval_sets[0].id]));
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load eval sets');
    } finally {
      setLoading(false);
    }
  };
  
  const selectedSet = evalSets.find(s => s.id === selectedSetId);
  const selectedCase = selectedSet?.eval_cases.find(c => c.id === selectedCaseId);
  
  // Create new eval set
  const createEvalSet = async () => {
    if (!project?.id) return;
    
    try {
      const response = await api.post(`/projects/${project.id}/eval-sets`, {
        name: 'New Eval Set',
        description: '',
        default_response_threshold: 0.7,
        default_trajectory_match_type: 'in_order',
      });
      
      setEvalSets(prev => [...prev, response.eval_set]);
      setSelectedSetId(response.eval_set.id);
      setExpandedSets(prev => new Set([...prev, response.eval_set.id]));
    } catch (err: any) {
      setError(err.message || 'Failed to create eval set');
    }
  };
  
  // Create new eval case
  const createEvalCase = async (evalSetId: string) => {
    if (!project?.id) return;
    
    try {
      const response = await api.post(
        `/projects/${project.id}/eval-sets/${evalSetId}/cases`,
        {
          name: 'New Test Case',
          description: '',
          invocations: [{
            id: generateId(),
            user_message: '',
            expected_response: '',
            expected_tool_calls: [],
          }],
          response_match_threshold: 0.7,
          trajectory_match_type: 'in_order',
        }
      );
      
      // Update local state
      setEvalSets(prev => prev.map(set => 
        set.id === evalSetId 
          ? { ...set, eval_cases: [...set.eval_cases, response.eval_case] }
          : set
      ));
      
      setSelectedSetId(evalSetId);
      setSelectedCaseId(response.eval_case.id);
    } catch (err: any) {
      setError(err.message || 'Failed to create eval case');
    }
  };
  
  // Update eval case
  const updateEvalCase = async (evalSetId: string, caseId: string, updates: Partial<EvalCase>) => {
    if (!project?.id) return;
    
    try {
      const response = await api.put(
        `/projects/${project.id}/eval-sets/${evalSetId}/cases/${caseId}`,
        updates
      );
      
      // Update local state
      setEvalSets(prev => prev.map(set => 
        set.id === evalSetId 
          ? {
              ...set,
              eval_cases: set.eval_cases.map(c => 
                c.id === caseId ? response.eval_case : c
              )
            }
          : set
      ));
    } catch (err: any) {
      setError(err.message || 'Failed to update eval case');
    }
  };
  
  // Delete eval case
  const deleteEvalCase = async (evalSetId: string, caseId: string) => {
    if (!project?.id) return;
    
    try {
      await api.delete(`/projects/${project.id}/eval-sets/${evalSetId}/cases/${caseId}`);
      
      // Update local state
      setEvalSets(prev => prev.map(set => 
        set.id === evalSetId 
          ? { ...set, eval_cases: set.eval_cases.filter(c => c.id !== caseId) }
          : set
      ));
      
      if (selectedCaseId === caseId) {
        setSelectedCaseId(null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete eval case');
    }
  };
  
  // Delete eval set
  const deleteEvalSet = async (evalSetId: string) => {
    if (!project?.id) return;
    
    try {
      await api.delete(`/projects/${project.id}/eval-sets/${evalSetId}`);
      
      // Update local state
      setEvalSets(prev => prev.filter(s => s.id !== evalSetId));
      
      if (selectedSetId === evalSetId) {
        setSelectedSetId(null);
        setSelectedCaseId(null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete eval set');
    }
  };
  
  // Run single eval case
  const runEvalCase = async (evalSetId: string, caseId: string) => {
    if (!project?.id) return;
    
    setRunning(prev => new Set([...prev, caseId]));
    
    try {
      const response = await api.post(
        `/projects/${project.id}/eval-sets/${evalSetId}/cases/${caseId}/run`,
        {}
      );
      
      setCaseResultsMap(prev => new Map(prev).set(caseId, response.result));
    } catch (err: any) {
      setError(err.message || 'Failed to run eval case');
    } finally {
      setRunning(prev => {
        const next = new Set(prev);
        next.delete(caseId);
        return next;
      });
    }
  };
  
  // Run entire eval set
  const runEvalSet = async (evalSetId: string) => {
    if (!project?.id) return;
    
    const evalSet = evalSets.find(s => s.id === evalSetId);
    if (!evalSet) return;
    
    // Mark all cases as running
    const caseIds = evalSet.eval_cases.map(c => c.id);
    setRunning(prev => new Set([...prev, evalSetId, ...caseIds]));
    
    try {
      const response = await api.post(
        `/projects/${project.id}/eval-sets/${evalSetId}/run`,
        {}
      );
      
      // Store set result
      setSetResultsMap(prev => new Map(prev).set(evalSetId, response.result));
      
      // Store individual case results
      for (const caseResult of response.result.case_results) {
        setCaseResultsMap(prev => new Map(prev).set(caseResult.eval_case_id, caseResult));
      }
    } catch (err: any) {
      setError(err.message || 'Failed to run eval set');
    } finally {
      setRunning(prev => {
        const next = new Set(prev);
        next.delete(evalSetId);
        caseIds.forEach(id => next.delete(id));
        return next;
      });
    }
  };
  
  // Run quick eval
  const runQuickEval = async () => {
    if (!project?.id || !quickEvalMessage) return;
    
    setRunning(prev => new Set([...prev, 'quick_eval']));
    setQuickEvalResult(null);
    
    try {
      const response = await api.post(`/projects/${project.id}/quick-eval`, {
        user_message: quickEvalMessage,
        expected_response: quickEvalExpectedResponse || undefined,
        expected_tool_calls: [],
        response_threshold: quickEvalThreshold,
        trajectory_match_type: 'in_order',
      });
      
      setQuickEvalResult(response.result);
    } catch (err: any) {
      setError(err.message || 'Failed to run quick eval');
    } finally {
      setRunning(prev => {
        const next = new Set(prev);
        next.delete('quick_eval');
        return next;
      });
    }
  };
  
  // Toggle set expansion
  const toggleExpand = (id: string) => {
    setExpandedSets(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  
  // Get stats for an eval set
  const getSetStats = (evalSet: EvalSet) => {
    let total = evalSet.eval_cases.length;
    let passed = 0;
    let failed = 0;
    let pending = 0;
    
    for (const c of evalSet.eval_cases) {
      const result = caseResultsMap.get(c.id);
      if (result) {
        if (result.overall_passed) passed++;
        else failed++;
      } else {
        pending++;
      }
    }
    
    return { total, passed, failed, pending };
  };
  
  // Format score as percentage
  const formatScore = (score?: number | null) => {
    if (score === null || score === undefined) return '-';
    return `${Math.round(score * 100)}%`;
  };
  
  if (!project) return null;
  
  return (
    <div className="eval-panel">
      <style>{`
        .eval-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .eval-sidebar {
          width: 360px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .header-actions {
          display: flex;
          gap: 4px;
        }
        
        .eval-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .tree-set, .tree-case {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .tree-set:hover, .tree-case:hover {
          background: var(--bg-tertiary);
        }
        
        .tree-set.selected, .tree-case.selected {
          background: var(--bg-hover);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .set-name, .case-name {
          flex: 1;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .set-stats {
          display: flex;
          gap: 4px;
        }
        
        .set-stats span {
          font-size: 11px;
          padding: 1px 5px;
          border-radius: var(--radius-sm);
        }
        
        .stat-passed { background: rgba(0, 245, 212, 0.2); color: var(--success); }
        .stat-failed { background: rgba(255, 107, 107, 0.2); color: var(--error); }
        .stat-pending { background: var(--bg-tertiary); color: var(--text-muted); }
        
        .run-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .tree-set:hover .run-btn, .tree-case:hover .run-btn {
          opacity: 1;
        }
        
        .run-btn:hover {
          color: var(--accent-primary);
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .eval-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .editor-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .editor-header input {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        
        .form-section {
          margin-bottom: 20px;
        }
        
        .form-section h4 {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .form-section textarea {
          width: 100%;
          min-height: 80px;
          font-family: var(--font-mono);
          font-size: 13px;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .form-field {
          flex: 1;
        }
        
        .form-field label {
          display: block;
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 4px;
        }
        
        .form-field input, .form-field select {
          width: 100%;
        }
        
        .invocation-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px;
          margin-bottom: 12px;
        }
        
        .invocation-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .invocation-header h5 {
          flex: 1;
          font-size: 13px;
          font-weight: 600;
        }
        
        .tool-call-row {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          padding: 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .result-panel {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .result-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .result-header.passed {
          color: var(--success);
        }
        
        .result-header.failed {
          color: var(--error);
        }
        
        .result-scores {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .score-card {
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          padding: 12px;
          text-align: center;
        }
        
        .score-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .score-value.passed { color: var(--success); }
        .score-value.failed { color: var(--error); }
        
        .score-label {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        .result-details {
          margin-top: 16px;
        }
        
        .result-details h5 {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .detail-box {
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          font-family: var(--font-mono);
          font-size: 12px;
          white-space: pre-wrap;
          max-height: 150px;
          overflow-y: auto;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          text-align: center;
          padding: 40px;
        }
        
        .empty-state svg {
          margin-bottom: 16px;
          opacity: 0.3;
        }
        
        .quick-eval {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 20px;
        }
        
        .quick-eval h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .coverage-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        
        .coverage-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .coverage-fill.passed { background: var(--success); }
        .coverage-fill.failed { background: var(--error); }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
        }
        
        .tab {
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: all 0.15s ease;
        }
        
        .tab:hover {
          color: var(--accent-primary);
        }
        
        .tab.active {
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }
      `}</style>
      
      <aside className="eval-sidebar">
        <div className="sidebar-header">
          <h3>Evaluation Tests</h3>
          <div className="header-actions">
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={loadEvalSets}
              title="Refresh"
            >
              <RefreshCw size={14} />
            </button>
            <button 
              className="btn btn-primary btn-sm" 
              onClick={createEvalSet}
              title="New eval set"
            >
              <Plus size={14} />
              Set
            </button>
          </div>
        </div>
        
        <div className="eval-tree">
          {loading && <p style={{ color: 'var(--text-muted)', padding: '16px' }}>Loading...</p>}
          
          {error && (
            <div style={{ color: 'var(--error)', padding: '16px', fontSize: '13px' }}>
              {error}
            </div>
          )}
          
          {!loading && evalSets.length === 0 && (
            <div className="empty-state" style={{ padding: '32px' }}>
              <Target size={32} />
              <p>No evaluation sets yet.<br/>Create one to get started.</p>
            </div>
          )}
          
          {evalSets.map(evalSet => {
            const isExpanded = expandedSets.has(evalSet.id);
            const stats = getSetStats(evalSet);
            const isRunning = running.has(evalSet.id);
            
            return (
              <div key={evalSet.id} className="tree-item">
                <div 
                  className={`tree-set ${selectedSetId === evalSet.id && !selectedCaseId ? 'selected' : ''}`}
                  onClick={() => { setSelectedSetId(evalSet.id); setSelectedCaseId(null); }}
                >
                  <button 
                    className="expand-btn"
                    onClick={(e) => { e.stopPropagation(); toggleExpand(evalSet.id); }}
                  >
                    {evalSet.eval_cases.length > 0 ? (
                      isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                    ) : (
                      <span style={{ width: 14 }} />
                    )}
                  </button>
                  <FolderTree size={14} style={{ color: 'var(--accent-secondary)' }} />
                  <span className="set-name">{evalSet.name}</span>
                  {stats.total > 0 && (
                    <span className="set-stats">
                      {stats.passed > 0 && <span className="stat-passed">{stats.passed}</span>}
                      {stats.failed > 0 && <span className="stat-failed">{stats.failed}</span>}
                      {stats.pending > 0 && <span className="stat-pending">{stats.pending}</span>}
                    </span>
                  )}
                  <button 
                    className="run-btn"
                    onClick={(e) => { e.stopPropagation(); runEvalSet(evalSet.id); }}
                    title="Run all tests in this set"
                    disabled={isRunning}
                  >
                    {isRunning ? <Clock size={12} className="spinning" /> : <Play size={12} />}
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="tree-children" style={{ paddingLeft: 16 }}>
                    {evalSet.eval_cases.map(evalCase => {
                      const caseResult = caseResultsMap.get(evalCase.id);
                      const isCaseRunning = running.has(evalCase.id);
                      
                      return (
                        <div
                          key={evalCase.id}
                          className={`tree-case ${selectedCaseId === evalCase.id ? 'selected' : ''}`}
                          onClick={() => { setSelectedSetId(evalSet.id); setSelectedCaseId(evalCase.id); }}
                        >
                          {isCaseRunning ? (
                            <Clock size={14} className="spinning" style={{ color: 'var(--warning)' }} />
                          ) : caseResult ? (
                            caseResult.overall_passed ? (
                              <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                            ) : (
                              <XCircle size={14} style={{ color: 'var(--error)' }} />
                            )
                          ) : (
                            <FileCheck size={14} style={{ color: 'var(--text-muted)' }} />
                          )}
                          <span className="case-name">{evalCase.name}</span>
                          {caseResult && (
                            <span style={{ 
                              fontSize: 11, 
                              color: caseResult.overall_passed ? 'var(--success)' : 'var(--error)' 
                            }}>
                              {formatScore(caseResult.overall_response_score)}
                            </span>
                          )}
                          <button 
                            className="run-btn"
                            onClick={(e) => { e.stopPropagation(); runEvalCase(evalSet.id, evalCase.id); }}
                            disabled={isCaseRunning}
                          >
                            <Play size={12} />
                          </button>
                        </div>
                      );
                    })}
                    
                    <button
                      className="btn btn-secondary btn-sm"
                      style={{ marginTop: 8, marginLeft: 20 }}
                      onClick={() => createEvalCase(evalSet.id)}
                    >
                      <Plus size={12} />
                      Add Test Case
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
      
      <div className="eval-editor">
        {selectedCase ? (
          <EvalCaseEditor
            evalCase={selectedCase}
            evalSetId={selectedSetId!}
            projectId={project.id}
            result={caseResultsMap.get(selectedCase.id)}
            isRunning={running.has(selectedCase.id)}
            onUpdate={(updates) => updateEvalCase(selectedSetId!, selectedCase.id, updates)}
            onDelete={() => deleteEvalCase(selectedSetId!, selectedCase.id)}
            onRun={() => runEvalCase(selectedSetId!, selectedCase.id)}
          />
        ) : selectedSet ? (
          <EvalSetEditor
            evalSet={selectedSet}
            projectId={project.id}
            result={setResultsMap.get(selectedSet.id)}
            isRunning={running.has(selectedSet.id)}
            caseResults={caseResultsMap}
            onUpdate={async (updates) => {
              try {
                const response = await api.put(
                  `/projects/${project.id}/eval-sets/${selectedSet.id}`,
                  updates
                );
                setEvalSets(prev => prev.map(s => 
                  s.id === selectedSet.id ? response.eval_set : s
                ));
              } catch (err: any) {
                setError(err.message);
              }
            }}
            onDelete={() => deleteEvalSet(selectedSet.id)}
            onRun={() => runEvalSet(selectedSet.id)}
          />
        ) : (
          <div className="editor-content">
            <div className="quick-eval">
              <h4><Target size={16} /> Quick Evaluation</h4>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
                Test a single message without creating a full test case.
              </p>
              
              <div className="form-section">
                <label>User Message</label>
                <textarea
                  value={quickEvalMessage}
                  onChange={(e) => setQuickEvalMessage(e.target.value)}
                  placeholder="Enter a message to send to the agent..."
                  style={{ minHeight: 60 }}
                />
              </div>
              
              <div className="form-section">
                <label>Expected Response (for fuzzy matching)</label>
                <textarea
                  value={quickEvalExpectedResponse}
                  onChange={(e) => setQuickEvalExpectedResponse(e.target.value)}
                  placeholder="Expected text in the response (uses ROUGE-1 fuzzy matching)..."
                  style={{ minHeight: 60 }}
                />
              </div>
              
              <div className="form-row">
                <div className="form-field">
                  <label>Response Threshold</label>
                  <input
                    type="number"
                    min={0}
                    max={1}
                    step={0.1}
                    value={quickEvalThreshold}
                    onChange={(e) => setQuickEvalThreshold(parseFloat(e.target.value) || 0.7)}
                  />
                </div>
                <div className="form-field" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button
                    className="btn btn-primary"
                    onClick={runQuickEval}
                    disabled={!quickEvalMessage || running.has('quick_eval')}
                  >
                    {running.has('quick_eval') ? (
                      <><Clock size={14} className="spinning" /> Running...</>
                    ) : (
                      <><Play size={14} /> Run Quick Eval</>
                    )}
                  </button>
                </div>
              </div>
              
              {quickEvalResult && (
                <div className="result-panel" style={{ marginTop: 16, borderRadius: 'var(--radius-md)' }}>
                  <div className={`result-header ${quickEvalResult.overall_passed ? 'passed' : 'failed'}`}>
                    {quickEvalResult.overall_passed ? (
                      <><CheckCircle size={18} /> <strong>Passed</strong></>
                    ) : (
                      <><XCircle size={18} /> <strong>Failed</strong></>
                    )}
                    <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 12 }}>
                      {quickEvalResult.duration_ms.toFixed(0)}ms
                    </span>
                  </div>
                  
                  {quickEvalResult.invocation_results[0] && (
                    <>
                      <div className="result-scores">
                        <div className="score-card">
                          <div className={`score-value ${quickEvalResult.invocation_results[0].response_passed ? 'passed' : 'failed'}`}>
                            {formatScore(quickEvalResult.invocation_results[0].response_score)}
                          </div>
                          <div className="score-label">Response Match (ROUGE-1)</div>
                        </div>
                      </div>
                      
                      <div className="result-details">
                        <h5>Actual Response</h5>
                        <div className="detail-box">
                          {quickEvalResult.invocation_results[0].actual_response || '(no response)'}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="empty-state">
              <FileCheck size={48} />
              <p>Select a test case to edit<br />or create a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Eval Case Editor Component
function EvalCaseEditor({
  evalCase,
  evalSetId: _evalSetId,
  projectId: _projectId,
  result,
  isRunning,
  onUpdate,
  onDelete,
  onRun,
}: {
  evalCase: EvalCase;
  evalSetId: string;
  projectId: string;
  result?: EvalCaseResult;
  isRunning: boolean;
  onUpdate: (updates: Partial<EvalCase>) => void;
  onDelete: () => void;
  onRun: () => void;
}) {
  const [localCase, setLocalCase] = useState(evalCase);
  const [activeTab, setActiveTab] = useState<'invocations' | 'settings'>('invocations');
  
  // Update local state when evalCase changes
  useEffect(() => {
    setLocalCase(evalCase);
  }, [evalCase]);
  
  // Debounced save
  const saveCase = useCallback((updates: Partial<EvalCase>) => {
    const updated = { ...localCase, ...updates };
    setLocalCase(updated);
    onUpdate(updates);
  }, [localCase, onUpdate]);
  
  const addInvocation = () => {
    const newInv: EvalInvocation = {
      id: generateId(),
      user_message: '',
      expected_response: '',
      expected_tool_calls: [],
    };
    saveCase({ invocations: [...localCase.invocations, newInv] });
  };
  
  const updateInvocation = (idx: number, updates: Partial<EvalInvocation>) => {
    const invocations = [...localCase.invocations];
    invocations[idx] = { ...invocations[idx], ...updates };
    saveCase({ invocations });
  };
  
  const removeInvocation = (idx: number) => {
    saveCase({ invocations: localCase.invocations.filter((_, i) => i !== idx) });
  };
  
  const addToolCall = (invIdx: number) => {
    const invocations = [...localCase.invocations];
    invocations[invIdx] = {
      ...invocations[invIdx],
      expected_tool_calls: [
        ...invocations[invIdx].expected_tool_calls,
        { name: '', args: {}, args_match_mode: 'exact' as const },
      ],
    };
    saveCase({ invocations });
  };
  
  const updateToolCall = (invIdx: number, tcIdx: number, updates: Partial<ExpectedToolCall>) => {
    const invocations = [...localCase.invocations];
    const toolCalls = [...invocations[invIdx].expected_tool_calls];
    toolCalls[tcIdx] = { ...toolCalls[tcIdx], ...updates };
    invocations[invIdx] = { ...invocations[invIdx], expected_tool_calls: toolCalls };
    saveCase({ invocations });
  };
  
  const removeToolCall = (invIdx: number, tcIdx: number) => {
    const invocations = [...localCase.invocations];
    invocations[invIdx] = {
      ...invocations[invIdx],
      expected_tool_calls: invocations[invIdx].expected_tool_calls.filter((_, i) => i !== tcIdx),
    };
    saveCase({ invocations });
  };
  
  const formatScore = (score?: number | null) => {
    if (score === null || score === undefined) return '-';
    return `${Math.round(score * 100)}%`;
  };
  
  return (
    <>
      <div className="editor-header">
        <FileCheck size={20} style={{ color: 'var(--accent-primary)' }} />
        <input
          type="text"
          value={localCase.name}
          onChange={(e) => saveCase({ name: e.target.value })}
          placeholder="Test case name"
        />
        <button 
          className="btn btn-primary btn-sm"
          onClick={onRun}
          disabled={isRunning}
        >
          {isRunning ? <Clock size={14} className="spinning" /> : <Play size={14} />}
          Run
        </button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
          <Trash2 size={14} />
        </button>
      </div>
      
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'invocations' ? 'active' : ''}`}
          onClick={() => setActiveTab('invocations')}
        >
          <MessageSquare size={14} style={{ marginRight: 6 }} />
          Invocations ({localCase.invocations.length})
        </div>
        <div 
          className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={14} style={{ marginRight: 6 }} />
          Settings
        </div>
      </div>
      
      <div className="editor-content">
        {activeTab === 'invocations' && (
          <>
            <div className="form-section">
              <h4>Description</h4>
              <textarea
                value={localCase.description}
                onChange={(e) => saveCase({ description: e.target.value })}
                placeholder="What does this test verify?"
                style={{ minHeight: 40 }}
              />
            </div>
            
            <div className="form-section">
              <h4>
                <MessageSquare size={14} />
                Conversation Turns
              </h4>
              
              {localCase.invocations.map((inv, idx) => (
                <div key={inv.id} className="invocation-card">
                  <div className="invocation-header">
                    <h5>Turn {idx + 1}</h5>
                    {localCase.invocations.length > 1 && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeInvocation(idx)}
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                  </div>
                  
                  <div className="form-section">
                    <label>User Message</label>
                    <textarea
                      value={inv.user_message}
                      onChange={(e) => updateInvocation(idx, { user_message: e.target.value })}
                      placeholder="The message to send to the agent..."
                    />
                  </div>
                  
                  <div className="form-section">
                    <label>Expected Response (fuzzy match via ROUGE-1)</label>
                    <textarea
                      value={inv.expected_response || ''}
                      onChange={(e) => updateInvocation(idx, { expected_response: e.target.value || undefined })}
                      placeholder="Expected text in the response (partial match)..."
                    />
                  </div>
                  
                  <div className="form-section">
                    <label>
                      <Wrench size={12} style={{ marginRight: 4 }} />
                      Expected Tool Calls
                    </label>
                    
                    {inv.expected_tool_calls.map((tc, tcIdx) => (
                      <div key={tcIdx} className="tool-call-entry" style={{ marginBottom: 12, padding: 8, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                        <div className="tool-call-row" style={{ display: 'flex', gap: 8, marginBottom: tc.args_match_mode !== 'ignore' ? 8 : 0 }}>
                          <input
                            type="text"
                            value={tc.name}
                            onChange={(e) => updateToolCall(idx, tcIdx, { name: e.target.value })}
                            placeholder="Tool name"
                            style={{ flex: 2 }}
                          />
                          <select
                            value={tc.args_match_mode}
                            onChange={(e) => updateToolCall(idx, tcIdx, { 
                              args_match_mode: e.target.value as 'exact' | 'subset' | 'ignore' 
                            })}
                            style={{ flex: 1 }}
                          >
                            <option value="ignore">Name only</option>
                            <option value="exact">Exact args</option>
                            <option value="subset">Args subset</option>
                          </select>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeToolCall(idx, tcIdx)}
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                        {tc.args_match_mode !== 'ignore' && (
                          <div style={{ marginTop: 4 }}>
                            <label style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 4, display: 'block' }}>
                              {tc.args_match_mode === 'exact' 
                                ? 'Expected args (must match exactly):' 
                                : 'Expected args (these must be present):'}
                            </label>
                            <textarea
                              value={JSON.stringify(tc.args || {}, null, 2)}
                              onChange={(e) => {
                                try {
                                  const args = JSON.parse(e.target.value);
                                  updateToolCall(idx, tcIdx, { args });
                                } catch {
                                  // Invalid JSON, don't update yet
                                }
                              }}
                              onBlur={(e) => {
                                try {
                                  const args = JSON.parse(e.target.value);
                                  updateToolCall(idx, tcIdx, { args });
                                } catch {
                                  // Reset to valid JSON on blur if invalid
                                  e.target.value = JSON.stringify(tc.args || {}, null, 2);
                                }
                              }}
                              placeholder='{"key": "value"}'
                              style={{ 
                                width: '100%', 
                                minHeight: 60, 
                                fontFamily: 'var(--font-mono)',
                                fontSize: 12
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => addToolCall(idx)}
                    >
                      <Plus size={12} /> Add Tool Call
                    </button>
                  </div>
                </div>
              ))}
              
              <button
                className="btn btn-secondary"
                onClick={addInvocation}
              >
                <Plus size={14} /> Add Turn
              </button>
            </div>
          </>
        )}
        
        {activeTab === 'settings' && (
          <>
            <div className="form-row">
              <div className="form-field">
                <label>Response Match Threshold (0.0 - 1.0)</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.1}
                  value={localCase.response_match_threshold}
                  onChange={(e) => saveCase({ response_match_threshold: parseFloat(e.target.value) || 0.7 })}
                />
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                  ROUGE-1 F1 score threshold. 0.7 means 70% word overlap.
                </p>
              </div>
              <div className="form-field">
                <label>Tool Trajectory Match Type</label>
                <select
                  value={localCase.trajectory_match_type}
                  onChange={(e) => saveCase({ 
                    trajectory_match_type: e.target.value as 'exact' | 'in_order' | 'any_order' 
                  })}
                >
                  <option value="exact">Exact (same order, no extras)</option>
                  <option value="in_order">In Order (extras allowed between)</option>
                  <option value="any_order">Any Order (all present, any order)</option>
                </select>
              </div>
            </div>
            
            <div className="form-section">
              <h4>Initial Session State (JSON)</h4>
              <textarea
                value={JSON.stringify(localCase.initial_state, null, 2)}
                onChange={(e) => {
                  try {
                    saveCase({ initial_state: JSON.parse(e.target.value) });
                  } catch {}
                }}
                placeholder='{"key": "value"}'
              />
            </div>
            
            <div className="form-section">
              <h4>Expected Final State (JSON, optional)</h4>
              <textarea
                value={localCase.expected_final_state ? JSON.stringify(localCase.expected_final_state, null, 2) : ''}
                onChange={(e) => {
                  if (!e.target.value) {
                    saveCase({ expected_final_state: undefined });
                  } else {
                    try {
                      saveCase({ expected_final_state: JSON.parse(e.target.value) });
                    } catch {}
                  }
                }}
                placeholder='{"key": "expected_value"}'
              />
            </div>
          </>
        )}
      </div>
      
      {result && (
        <div className="result-panel">
          <div className={`result-header ${result.overall_passed ? 'passed' : 'failed'}`}>
            {result.overall_passed ? (
              <><CheckCircle size={18} /> <strong>Passed</strong></>
            ) : (
              <><XCircle size={18} /> <strong>Failed</strong></>
            )}
            <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 12 }}>
              {result.duration_ms.toFixed(0)}ms
            </span>
          </div>
          
          <div className="result-scores">
            <div className="score-card">
              <div className={`score-value ${result.response_passed ? 'passed' : 'failed'}`}>
                {formatScore(result.overall_response_score)}
              </div>
              <div className="score-label">Response Match</div>
            </div>
            <div className="score-card">
              <div className={`score-value ${result.trajectory_passed ? 'passed' : 'failed'}`}>
                {formatScore(result.overall_trajectory_score)}
              </div>
              <div className="score-label">Tool Trajectory</div>
            </div>
          </div>
          
          {result.invocation_results.map((invRes, idx) => (
            <div key={idx} className="result-details">
              <h5>Turn {idx + 1}: {invRes.user_message.slice(0, 50)}...</h5>
              <div className="detail-box">
                <strong>Actual Response:</strong>{'\n'}
                {invRes.actual_response || '(no response)'}{'\n\n'}
                {invRes.actual_tool_calls.length > 0 && (
                  <>
                    <strong>Tool Calls:</strong>{'\n'}
                    {invRes.actual_tool_calls.map((tc, i) => (
                      `  ${i + 1}. ${tc.name}(${JSON.stringify(tc.args)})\n`
                    )).join('')}
                  </>
                )}
              </div>
            </div>
          ))}
          
          {result.error && (
            <div className="result-details">
              <h5 style={{ color: 'var(--error)' }}>Error</h5>
              <div className="detail-box" style={{ color: 'var(--error)' }}>
                {result.error}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

// Eval Set Editor Component
function EvalSetEditor({
  evalSet,
  projectId: _projectId,
  result,
  isRunning,
  caseResults,
  onUpdate,
  onDelete,
  onRun,
}: {
  evalSet: EvalSet;
  projectId: string;
  result?: EvalSetResult;
  isRunning: boolean;
  caseResults: Map<string, EvalCaseResult>;
  onUpdate: (updates: Partial<EvalSet>) => void;
  onDelete: () => void;
  onRun: () => void;
}) {
  const formatScore = (score?: number | null) => {
    if (score === null || score === undefined) return '-';
    return `${Math.round(score * 100)}%`;
  };
  
  return (
    <>
      <div className="editor-header">
        <FolderTree size={20} style={{ color: 'var(--accent-secondary)' }} />
        <input
          type="text"
          value={evalSet.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          placeholder="Eval set name"
        />
        <button 
          className="btn btn-primary btn-sm"
          onClick={onRun}
          disabled={isRunning}
        >
          {isRunning ? <Clock size={14} className="spinning" /> : <Play size={14} />}
          Run All
        </button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
          <Trash2 size={14} />
        </button>
      </div>
      
      <div className="editor-content">
        <div className="form-section">
          <h4>Description</h4>
          <textarea
            value={evalSet.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="Description of this evaluation set..."
            style={{ minHeight: 40 }}
          />
        </div>
        
        <div className="form-section">
          <h4><Settings size={14} /> Default Settings</h4>
          <div className="form-row">
            <div className="form-field">
              <label>Default Response Threshold</label>
              <input
                type="number"
                min={0}
                max={1}
                step={0.1}
                value={evalSet.default_response_threshold}
                onChange={(e) => onUpdate({ default_response_threshold: parseFloat(e.target.value) || 0.7 })}
              />
            </div>
            <div className="form-field">
              <label>Default Trajectory Match Type</label>
              <select
                value={evalSet.default_trajectory_match_type}
                onChange={(e) => onUpdate({ 
                  default_trajectory_match_type: e.target.value as 'exact' | 'in_order' | 'any_order' 
                })}
              >
                <option value="exact">Exact</option>
                <option value="in_order">In Order</option>
                <option value="any_order">Any Order</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h4><Percent size={14} /> Coverage Summary</h4>
          
          {result ? (
            <>
              <div className="result-scores">
                <div className="score-card">
                  <div className="score-value" style={{ color: 'var(--accent-primary)' }}>
                    {result.passed_cases}/{result.total_cases}
                  </div>
                  <div className="score-label">Cases Passed</div>
                </div>
                <div className="score-card">
                  <div className={`score-value ${result.overall_pass_rate >= 0.8 ? 'passed' : 'failed'}`}>
                    {formatScore(result.overall_pass_rate)}
                  </div>
                  <div className="score-label">Pass Rate</div>
                </div>
                <div className="score-card">
                  <div className="score-value">
                    {formatScore(result.avg_response_score)}
                  </div>
                  <div className="score-label">Avg Response Score</div>
                </div>
                <div className="score-card">
                  <div className="score-value">
                    {formatScore(result.avg_trajectory_score)}
                  </div>
                  <div className="score-label">Avg Trajectory Score</div>
                </div>
              </div>
              
              <div style={{ marginTop: 16 }}>
                <div style={{ marginBottom: 4, fontSize: 12, color: 'var(--text-muted)' }}>
                  Overall Pass Rate
                </div>
                <div className="coverage-bar">
                  <div 
                    className={`coverage-fill ${result.overall_pass_rate >= 0.8 ? 'passed' : 'failed'}`}
                    style={{ width: `${result.overall_pass_rate * 100}%` }}
                  />
                </div>
              </div>
              
              <div style={{ marginTop: 16 }}>
                <h5 style={{ fontSize: 13, marginBottom: 8 }}>Individual Results</h5>
                <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ textAlign: 'left', padding: '8px 4px' }}>Test Case</th>
                      <th style={{ textAlign: 'center', padding: '8px 4px' }}>Response</th>
                      <th style={{ textAlign: 'center', padding: '8px 4px' }}>Trajectory</th>
                      <th style={{ textAlign: 'center', padding: '8px 4px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.case_results.map(cr => (
                      <tr key={cr.eval_case_id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '8px 4px' }}>{cr.eval_case_name}</td>
                        <td style={{ textAlign: 'center', padding: '8px 4px' }}>
                          {formatScore(cr.overall_response_score)}
                        </td>
                        <td style={{ textAlign: 'center', padding: '8px 4px' }}>
                          {formatScore(cr.overall_trajectory_score)}
                        </td>
                        <td style={{ textAlign: 'center', padding: '8px 4px' }}>
                          {cr.overall_passed ? (
                            <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                          ) : cr.error ? (
                            <AlertCircle size={14} style={{ color: 'var(--warning)' }} />
                          ) : (
                            <XCircle size={14} style={{ color: 'var(--error)' }} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '32px', 
              color: 'var(--text-muted)',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-md)'
            }}>
              <Target size={32} style={{ marginBottom: 8, opacity: 0.3 }} />
              <p>Run the evaluation set to see coverage metrics</p>
            </div>
          )}
        </div>
        
        <div className="form-section">
          <h4>Test Cases ({evalSet.eval_cases.length})</h4>
          {evalSet.eval_cases.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              No test cases yet. Add cases to this eval set to start testing.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {evalSet.eval_cases.map(c => {
                const caseResult = caseResults.get(c.id);
                return (
                  <li 
                    key={c.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 12px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 8,
                    }}
                  >
                    {caseResult ? (
                      caseResult.overall_passed ? (
                        <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                      ) : (
                        <XCircle size={14} style={{ color: 'var(--error)' }} />
                      )
                    ) : (
                      <FileCheck size={14} style={{ color: 'var(--text-muted)' }} />
                    )}
                    <span style={{ flex: 1 }}>{c.name}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {c.invocations.length} turn(s)
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
