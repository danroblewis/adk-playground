/**
 * Network Approval Dialog for the Docker sandbox.
 * 
 * Shows when an unknown domain is requested, allowing the user to:
 * - Deny the request
 * - Allow once
 * - Allow with a pattern (and optionally persist)
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  AlertTriangle, X, Shield, Check, Ban, 
  ChevronDown, Clock, TestTube
} from 'lucide-react';
import type { ApprovalRequest, PatternType } from '../../utils/types';
import { PatternTester } from './PatternTester';

interface NetworkApprovalDialogProps {
  request: ApprovalRequest;
  timeout: number;  // seconds
  onApprove: (pattern?: string, patternType?: PatternType, persist?: boolean) => void;
  onDeny: () => void;
  onClose: () => void;
}

// Generate pattern suggestions from URL
function getPatternSuggestions(url: string): Array<{ pattern: string; label: string }> {
  try {
    const parsed = new URL(url);
    const host = parsed.host;
    const path = parsed.pathname;
    
    const suggestions = [
      { pattern: host, label: `${host} (exact domain)` },
      { pattern: `${host}/*`, label: `${host}/* (domain + any path)` },
    ];
    
    // Add subdomain wildcard if applicable
    const parts = host.split('.');
    if (parts.length > 2) {
      const baseDomain = parts.slice(-2).join('.');
      suggestions.push({ 
        pattern: `*.${baseDomain}`, 
        label: `*.${baseDomain} (all subdomains)` 
      });
      suggestions.push({ 
        pattern: `*.${baseDomain}/*`, 
        label: `*.${baseDomain}/* (full wildcard)` 
      });
    }
    
    // Add path-specific pattern
    if (path && path !== '/') {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        suggestions.push({
          pattern: `${host}/${pathParts[0]}/*`,
          label: `${host}/${pathParts[0]}/* (specific path)`,
        });
      }
    }
    
    return suggestions;
  } catch {
    return [{ pattern: url, label: url }];
  }
}

export function NetworkApprovalDialog({
  request,
  timeout,
  onApprove,
  onDeny,
  onClose,
}: NetworkApprovalDialogProps) {
  const [selectedPattern, setSelectedPattern] = useState('');
  const [patternType, setPatternType] = useState<PatternType>('exact');
  const [persist, setPersist] = useState(false);
  const [customPattern, setCustomPattern] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeout);
  
  const suggestions = getPatternSuggestions(request.url);
  
  // Initialize with first suggestion
  useEffect(() => {
    if (suggestions.length > 0 && !selectedPattern) {
      setSelectedPattern(suggestions[0].pattern);
    }
  }, [suggestions, selectedPattern]);
  
  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onDeny();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [onDeny]);
  
  const handleApproveOnce = useCallback(() => {
    onApprove();
  }, [onApprove]);
  
  const handleApprovePattern = useCallback(() => {
    const pattern = showCustom ? customPattern : selectedPattern;
    onApprove(pattern, patternType, persist);
  }, [onApprove, showCustom, customPattern, selectedPattern, patternType, persist]);
  
  // Progress bar percentage
  const progress = (timeLeft / timeout) * 100;
  
  // Parse source info
  const isMCP = request.source.startsWith('mcp:');
  const sourceName = isMCP ? request.source.substring(4) : 'agent';
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#12121a] border border-amber-500/50 rounded-lg shadow-2xl w-[500px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center gap-2 p-3 border-b border-gray-700 bg-amber-900/20">
          <AlertTriangle className="text-amber-400" size={20} />
          <span className="font-semibold text-amber-300">Network Request Approval</span>
          <div className="flex-1" />
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X size={18} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Source info */}
          <div className="text-sm text-gray-400">
            {isMCP ? (
              <>MCP server "<span className="text-cyan-400">{sourceName}</span>" wants to connect to:</>
            ) : (
              <>Agent wants to connect to:</>
            )}
          </div>
          
          {/* Request details */}
          <div className="bg-[#0a0a0f] rounded border border-gray-700 p-3 font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className={`font-bold ${
                request.method === 'POST' ? 'text-green-400' :
                request.method === 'GET' ? 'text-blue-400' :
                'text-gray-400'
              }`}>
                {request.method}
              </span>
              <span className="text-gray-300 break-all">{request.url}</span>
            </div>
            {request.headers && Object.keys(request.headers).length > 0 && (
              <div className="mt-2 text-xs text-gray-500">
                Headers: {Object.keys(request.headers).join(', ')}
              </div>
            )}
          </div>
          
          {/* Pattern selector */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Allow pattern:</label>
            
            {!showCustom ? (
              <div className="relative">
                <select
                  value={selectedPattern}
                  onChange={(e) => {
                    if (e.target.value === '__custom__') {
                      setShowCustom(true);
                      setCustomPattern(selectedPattern);
                    } else {
                      setSelectedPattern(e.target.value);
                    }
                  }}
                  className="w-full px-3 py-2 bg-[#1a1a24] border border-gray-600 rounded text-sm appearance-none pr-8"
                >
                  {suggestions.map((s) => (
                    <option key={s.pattern} value={s.pattern}>{s.label}</option>
                  ))}
                  <option value="__custom__">Custom pattern...</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  value={customPattern}
                  onChange={(e) => setCustomPattern(e.target.value)}
                  placeholder="e.g., *.example.com/*"
                  className="w-full px-3 py-2 bg-[#1a1a24] border border-gray-600 rounded text-sm font-mono"
                />
                <div className="flex gap-4">
                  <label className="flex items-center gap-1 text-xs">
                    <input
                      type="radio"
                      checked={patternType === 'wildcard'}
                      onChange={() => setPatternType('wildcard')}
                    />
                    Wildcard
                  </label>
                  <label className="flex items-center gap-1 text-xs">
                    <input
                      type="radio"
                      checked={patternType === 'regex'}
                      onChange={() => setPatternType('regex')}
                    />
                    Regex
                  </label>
                  <button
                    onClick={() => setShowCustom(false)}
                    className="ml-auto text-xs text-gray-500 hover:text-gray-300"
                  >
                    ← Back to suggestions
                  </button>
                </div>
                
                {/* Pattern tester */}
                {customPattern && (
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                      <TestTube size={12} />
                      <span>Test Pattern</span>
                    </div>
                    <PatternTester
                      pattern={customPattern}
                      patternType={patternType}
                      testUrls={[request.url]}
                      showHelp={true}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Persist checkbox */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={persist}
              onChange={(e) => setPersist(e.target.checked)}
              className="rounded"
            />
            <span className="text-gray-400">Save to project (persists across sessions)</span>
          </label>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2 p-3 border-t border-gray-700 bg-[#0a0a0f]">
          <button
            onClick={onDeny}
            className="px-4 py-2 bg-red-600/20 border border-red-500/50 text-red-400 rounded hover:bg-red-600/30 flex items-center gap-2"
          >
            <Ban size={14} />
            Deny
          </button>
          <button
            onClick={handleApproveOnce}
            className="px-4 py-2 bg-gray-600/20 border border-gray-500/50 text-gray-300 rounded hover:bg-gray-600/30 flex items-center gap-2"
          >
            <Check size={14} />
            Allow Once
          </button>
          <button
            onClick={handleApprovePattern}
            className="px-4 py-2 bg-green-600/20 border border-green-500/50 text-green-400 rounded hover:bg-green-600/30 flex items-center gap-2"
          >
            <Shield size={14} />
            Allow Pattern
          </button>
          
          <div className="flex-1" />
          
          {/* Timeout */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={14} />
            <span>{timeLeft}s</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div 
            className="h-full bg-amber-500 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

