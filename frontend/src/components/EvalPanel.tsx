import { useState } from 'react';
import { Plus, Play, FolderTree, FileCheck, Trash2, ChevronRight, ChevronDown, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import { useStore } from '../hooks/useStore';

interface TestCase {
  id: string;
  name: string;
  description: string;
  input_message: string;
  expected_output?: string;
  expected_tool_calls: string[];
  expected_state: Record<string, any>;
}

interface TestGroup {
  id: string;
  name: string;
  description: string;
  tests: TestCase[];
  children: TestGroup[];
}

interface TestResult {
  test_id: string;
  passed: boolean;
  error?: string;
  duration_ms: number;
}

function generateId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export default function EvalPanel() {
  const { project } = useStore();
  const [testGroups, setTestGroups] = useState<TestGroup[]>([
    {
      id: 'root',
      name: 'All Tests',
      description: 'Root test group',
      tests: [],
      children: []
    }
  ]);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('root');
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [results, setResults] = useState<Map<string, TestResult>>(new Map());
  const [running, setRunning] = useState<Set<string>>(new Set());
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['root']));
  
  if (!project) return null;
  
  // Find group by id
  function findGroup(groups: TestGroup[], id: string): TestGroup | null {
    for (const group of groups) {
      if (group.id === id) return group;
      const found = findGroup(group.children, id);
      if (found) return found;
    }
    return null;
  }
  
  // Update group by id
  function updateGroup(groups: TestGroup[], id: string, updates: Partial<TestGroup>): TestGroup[] {
    return groups.map(group => {
      if (group.id === id) {
        return { ...group, ...updates };
      }
      return { ...group, children: updateGroup(group.children, id, updates) };
    });
  }
  
  const selectedGroup = findGroup(testGroups, selectedGroupId);
  const selectedTest = selectedGroup?.tests.find(t => t.id === selectedTestId);
  
  function toggleExpand(id: string) {
    const next = new Set(expandedGroups);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedGroups(next);
  }
  
  function addTestGroup(parentId: string) {
    const newGroup: TestGroup = {
      id: generateId(),
      name: 'New Group',
      description: '',
      tests: [],
      children: []
    };
    
    setTestGroups(prev => {
      if (parentId === 'root' && prev[0]?.id === 'root') {
        return [{ ...prev[0], children: [...prev[0].children, newGroup] }];
      }
      return updateGroup(prev, parentId, {
        children: [...(findGroup(prev, parentId)?.children || []), newGroup]
      });
    });
    
    setSelectedGroupId(newGroup.id);
    setExpandedGroups(prev => new Set([...prev, parentId]));
  }
  
  function addTest(groupId: string) {
    const newTest: TestCase = {
      id: generateId(),
      name: 'New Test',
      description: '',
      input_message: '',
      expected_tool_calls: [],
      expected_state: {}
    };
    
    setTestGroups(prev => {
      const group = findGroup(prev, groupId);
      if (!group) return prev;
      return updateGroup(prev, groupId, {
        tests: [...group.tests, newTest]
      });
    });
    
    setSelectedTestId(newTest.id);
  }
  
  function updateTest(groupId: string, testId: string, updates: Partial<TestCase>) {
    setTestGroups(prev => {
      const group = findGroup(prev, groupId);
      if (!group) return prev;
      return updateGroup(prev, groupId, {
        tests: group.tests.map(t => t.id === testId ? { ...t, ...updates } : t)
      });
    });
  }
  
  function deleteTest(groupId: string, testId: string) {
    setTestGroups(prev => {
      const group = findGroup(prev, groupId);
      if (!group) return prev;
      return updateGroup(prev, groupId, {
        tests: group.tests.filter(t => t.id !== testId)
      });
    });
    if (selectedTestId === testId) {
      setSelectedTestId(null);
    }
  }
  
  async function runTest(test: TestCase) {
    setRunning(prev => new Set([...prev, test.id]));
    const startTime = Date.now();
    
    // Simulate running test (would connect to backend in production)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const passed = Math.random() > 0.3; // Simulated result
    const result: TestResult = {
      test_id: test.id,
      passed,
      duration_ms: Date.now() - startTime,
      error: passed ? undefined : 'Expected output did not match'
    };
    
    setResults(prev => new Map(prev).set(test.id, result));
    setRunning(prev => {
      const next = new Set(prev);
      next.delete(test.id);
      return next;
    });
  }
  
  async function runGroup(group: TestGroup) {
    // Run all tests in this group and children
    for (const test of group.tests) {
      await runTest(test);
    }
    for (const child of group.children) {
      await runGroup(child);
    }
  }
  
  function getGroupStats(group: TestGroup): { total: number; passed: number; failed: number; pending: number } {
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    function countTests(g: TestGroup) {
      for (const test of g.tests) {
        total++;
        const result = results.get(test.id);
        if (result) {
          if (result.passed) passed++;
          else failed++;
        }
      }
      for (const child of g.children) {
        countTests(child);
      }
    }
    
    countTests(group);
    return { total, passed, failed, pending: total - passed - failed };
  }
  
  function renderTestTree(groups: TestGroup[], depth = 0): React.ReactNode {
    return groups.map(group => {
      const isExpanded = expandedGroups.has(group.id);
      const stats = getGroupStats(group);
      const hasTests = group.tests.length > 0 || group.children.length > 0;
      
      return (
        <div key={group.id} className="test-tree-item">
          <div 
            className={`tree-group ${selectedGroupId === group.id ? 'selected' : ''}`}
            style={{ paddingLeft: 8 + depth * 16 }}
            onClick={() => setSelectedGroupId(group.id)}
          >
            <button 
              className="expand-btn"
              onClick={(e) => { e.stopPropagation(); toggleExpand(group.id); }}
            >
              {hasTests ? (isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />) : <span style={{ width: 14 }} />}
            </button>
            <FolderTree size={14} style={{ color: 'var(--accent-secondary)' }} />
            <span className="group-name">{group.name}</span>
            {stats.total > 0 && (
              <span className="group-stats">
                {stats.passed > 0 && <span className="stat-passed">{stats.passed}</span>}
                {stats.failed > 0 && <span className="stat-failed">{stats.failed}</span>}
                {stats.pending > 0 && <span className="stat-pending">{stats.pending}</span>}
              </span>
            )}
            <button 
              className="run-btn"
              onClick={(e) => { e.stopPropagation(); runGroup(group); }}
              title="Run all tests in this group"
            >
              <Play size={12} />
            </button>
          </div>
          
          {isExpanded && (
            <div className="tree-children">
              {group.tests.map(test => {
                const result = results.get(test.id);
                const isRunning = running.has(test.id);
                
                return (
                  <div
                    key={test.id}
                    className={`tree-test ${selectedTestId === test.id ? 'selected' : ''}`}
                    style={{ paddingLeft: 24 + depth * 16 }}
                    onClick={() => { setSelectedGroupId(group.id); setSelectedTestId(test.id); }}
                  >
                    {isRunning ? (
                      <Clock size={14} className="spinning" style={{ color: 'var(--warning)' }} />
                    ) : result ? (
                      result.passed ? (
                        <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                      ) : (
                        <XCircle size={14} style={{ color: 'var(--error)' }} />
                      )
                    ) : (
                      <FileCheck size={14} style={{ color: 'var(--text-muted)' }} />
                    )}
                    <span className="test-name">{test.name}</span>
                    <button 
                      className="run-btn"
                      onClick={(e) => { e.stopPropagation(); runTest(test); }}
                      disabled={isRunning}
                    >
                      <Play size={12} />
                    </button>
                  </div>
                );
              })}
              {renderTestTree(group.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  }
  
  return (
    <div className="eval-panel">
      <style>{`
        .eval-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .eval-sidebar {
          width: 320px;
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
        
        .test-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .tree-group, .tree-test {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .tree-group:hover, .tree-test:hover {
          background: var(--bg-tertiary);
        }
        
        .tree-group.selected, .tree-test.selected {
          background: var(--bg-hover);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .group-name, .test-name {
          flex: 1;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .group-stats {
          display: flex;
          gap: 4px;
        }
        
        .group-stats span {
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
        
        .tree-group:hover .run-btn, .tree-test:hover .run-btn {
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
        
        .test-editor {
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
        }
        
        .form-section textarea {
          width: 100%;
          min-height: 80px;
          font-family: var(--font-mono);
          font-size: 13px;
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
          margin-bottom: 8px;
        }
        
        .result-header.passed {
          color: var(--success);
        }
        
        .result-header.failed {
          color: var(--error);
        }
        
        .result-error {
          padding: 8px;
          background: rgba(255, 107, 107, 0.1);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--error);
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
      `}</style>
      
      <aside className="eval-sidebar">
        <div className="sidebar-header">
          <h3>Evaluation Tests</h3>
          <div className="header-actions">
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={() => addTestGroup(selectedGroupId)}
              title="Add test group"
            >
              <FolderTree size={14} />
            </button>
            <button 
              className="btn btn-primary btn-sm" 
              onClick={() => addTest(selectedGroupId)}
              title="Add test"
            >
              <Plus size={14} />
              Test
            </button>
          </div>
        </div>
        <div className="test-tree">
          {renderTestTree(testGroups)}
        </div>
      </aside>
      
      <div className="test-editor">
        {selectedTest ? (
          <>
            <div className="editor-header">
              <FileCheck size={20} style={{ color: 'var(--accent-primary)' }} />
              <input
                type="text"
                value={selectedTest.name}
                onChange={(e) => updateTest(selectedGroupId, selectedTest.id, { name: e.target.value })}
                placeholder="Test name"
              />
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => runTest(selectedTest)}
                disabled={running.has(selectedTest.id)}
              >
                <Play size={14} />
                Run
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => deleteTest(selectedGroupId, selectedTest.id)}
              >
                <Trash2 size={14} />
              </button>
            </div>
            
            <div className="editor-content">
              <div className="form-section">
                <h4>Description</h4>
                <textarea
                  value={selectedTest.description}
                  onChange={(e) => updateTest(selectedGroupId, selectedTest.id, { description: e.target.value })}
                  placeholder="What does this test verify?"
                  style={{ minHeight: 40 }}
                />
              </div>
              
              <div className="form-section">
                <h4>Input Message</h4>
                <textarea
                  value={selectedTest.input_message}
                  onChange={(e) => updateTest(selectedGroupId, selectedTest.id, { input_message: e.target.value })}
                  placeholder="The message to send to the agent..."
                />
              </div>
              
              <div className="form-section">
                <h4>Expected Output (optional)</h4>
                <textarea
                  value={selectedTest.expected_output || ''}
                  onChange={(e) => updateTest(selectedGroupId, selectedTest.id, { expected_output: e.target.value || undefined })}
                  placeholder="Expected text in the response (partial match)..."
                />
              </div>
              
              <div className="form-section">
                <h4>Expected Tool Calls</h4>
                <textarea
                  value={selectedTest.expected_tool_calls.join('\n')}
                  onChange={(e) => updateTest(selectedGroupId, selectedTest.id, { 
                    expected_tool_calls: e.target.value.split('\n').filter(Boolean) 
                  })}
                  placeholder="Tool names (one per line)..."
                  style={{ minHeight: 60 }}
                />
              </div>
              
              <div className="form-section">
                <h4>Expected State (JSON)</h4>
                <textarea
                  value={JSON.stringify(selectedTest.expected_state, null, 2)}
                  onChange={(e) => {
                    try {
                      const state = JSON.parse(e.target.value);
                      updateTest(selectedGroupId, selectedTest.id, { expected_state: state });
                    } catch {}
                  }}
                  placeholder='{"key": "value"}'
                />
              </div>
            </div>
            
            {results.has(selectedTest.id) && (
              <div className="result-panel">
                <div className={`result-header ${results.get(selectedTest.id)!.passed ? 'passed' : 'failed'}`}>
                  {results.get(selectedTest.id)!.passed ? (
                    <>
                      <CheckCircle size={18} />
                      <strong>Passed</strong>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} />
                      <strong>Failed</strong>
                    </>
                  )}
                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 12 }}>
                    {results.get(selectedTest.id)!.duration_ms}ms
                  </span>
                </div>
                {results.get(selectedTest.id)!.error && (
                  <div className="result-error">
                    {results.get(selectedTest.id)!.error}
                  </div>
                )}
              </div>
            )}
          </>
        ) : selectedGroup ? (
          <div className="editor-content">
            <div className="form-section">
              <h4>Group Name</h4>
              <input
                type="text"
                value={selectedGroup.name}
                onChange={(e) => setTestGroups(prev => updateGroup(prev, selectedGroup.id, { name: e.target.value }))}
              />
            </div>
            <div className="form-section">
              <h4>Description</h4>
              <textarea
                value={selectedGroup.description}
                onChange={(e) => setTestGroups(prev => updateGroup(prev, selectedGroup.id, { description: e.target.value }))}
                placeholder="Description of this test group..."
              />
            </div>
            
            <div style={{ marginTop: 20 }}>
              <button 
                className="btn btn-primary"
                onClick={() => runGroup(selectedGroup)}
              >
                <Play size={16} />
                Run All Tests in Group
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <FileCheck size={48} />
            <p>Select a test to edit<br />or create a new one</p>
          </div>
        )}
      </div>
    </div>
  );
}

