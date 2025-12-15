import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { ChevronRight } from 'lucide-react';
import type { AgentConfig, RunEvent } from '../utils/types';

interface AgentGraphProps {
  agents: AgentConfig[];
  events: RunEvent[];
  selectedEventIndex: number | null;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

interface GraphNode {
  id: string;
  name: string;
  type: 'LlmAgent' | 'SequentialAgent' | 'LoopAgent' | 'ParallelAgent' | 'Tool' | 'System';
  isActive: boolean;
  wasActive: boolean;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  type: 'sub_agent' | 'tool' | 'transition';
  count: number; // For multiple transitions
}

// Agent color palette - MUST match RunPanel exactly for consistency
const AGENT_COLOR_PALETTE = [
  { bg: '#0e7490', fg: '#e0f2fe' },  // Cyan (muted)
  { bg: '#6d28d9', fg: '#ede9fe' },  // Purple (muted)
  { bg: '#047857', fg: '#d1fae5' },  // Emerald (muted)
  { bg: '#b91c1c', fg: '#fee2e2' },  // Red (muted)
  { bg: '#b45309', fg: '#fef3c7' },  // Amber (muted)
  { bg: '#1d4ed8', fg: '#dbeafe' },  // Blue (muted)
  { bg: '#be185d', fg: '#fce7f3' },  // Pink (muted)
  { bg: '#4d7c0f', fg: '#ecfccb' },  // Lime (muted)
  { bg: '#7c3aed', fg: '#ede9fe' },  // Violet (muted)
  { bg: '#0f766e', fg: '#ccfbf1' },  // Teal (muted)
  { bg: '#c2410c', fg: '#ffedd5' },  // Orange (muted)
  { bg: '#4338ca', fg: '#e0e7ff' },  // Indigo (muted)
];

// Cache for agent name -> color mapping
const agentColorCache = new Map<string, { bg: string; fg: string }>();

// Get a consistent color for an agent name (matches RunPanel)
function getAgentColor(agentName: string): { bg: string; fg: string } {
  // Special cases for system agents (must match RunPanel)
  if (agentName === 'sandbox' || agentName === 'system') {
    return { bg: '#374151', fg: '#9ca3af' };  // Gray for system
  }
  
  // Check cache
  const cached = agentColorCache.get(agentName);
  if (cached) return cached;
  
  // Generate hash from name for consistent color
  let hash = 0;
  for (let i = 0; i < agentName.length; i++) {
    hash = ((hash << 5) - hash) + agentName.charCodeAt(i);
    hash = hash & hash;
  }
  const colorIndex = Math.abs(hash) % AGENT_COLOR_PALETTE.length;
  const color = AGENT_COLOR_PALETTE[colorIndex];
  agentColorCache.set(agentName, color);
  
  return color;
}

// Special colors for tools
const TOOL_COLOR = { bg: '#14b8a6', fg: '#ccfbf1' }; // Teal for tools

export default function AgentGraph({ agents, events, selectedEventIndex, isOpen: controlledIsOpen, onOpenChange }: AgentGraphProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // Support both controlled and uncontrolled modes
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = (value: boolean) => {
    if (onOpenChange) {
      onOpenChange(value);
    } else {
      setInternalIsOpen(value);
    }
  };
  const [tooltip, setTooltip] = useState<{ x: number; y: number; node: GraphNode } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  // Store node positions to preserve layout across updates
  const nodePositionsRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  // Store the last zoom transform
  const lastTransformRef = useRef<d3.ZoomTransform | null>(null);
  
  // Calculate the active agent, transitions, visited agents, and tool calls up to the selected event
  const { activeAgent, activeTool, transitions, visitedAgents, toolCalls } = useMemo(() => {
    // If no event selected, use the most recent event
    const effectiveIndex = selectedEventIndex !== null ? selectedEventIndex : events.length - 1;
    
    if (effectiveIndex < 0 || events.length === 0) {
      return { 
        activeAgent: null,
        activeTool: null,
        transitions: new Map<string, number>(), 
        visitedAgents: new Set<string>(),
        toolCalls: new Map<string, number>() // Map of "agent->tool" to count
      };
    }
    
    const eventsUpToSelection = events.slice(0, effectiveIndex + 1);
    const transitionMap = new Map<string, number>();
    const toolCallMap = new Map<string, number>(); // Track agent->tool calls
    const visited = new Set<string>();
    const visitedTools = new Set<string>();
    
    // Always include system node
    visited.add('system');
    
    // Use a stack to track the agent hierarchy
    // When agent_start happens, the transition is from the current top of stack (parent) to the new agent
    // When agent_end happens, we pop the stack
    // Start with 'system' as the initial parent
    const agentStack: string[] = ['system'];
    
    // Track currently executing tool (between tool_call and tool_result)
    let currentTool: string | null = null;
    
    for (const event of eventsUpToSelection) {
      if (event.event_type === 'agent_start') {
        const agentName = event.agent_name;
        visited.add(agentName);
        
        // Transition is from current active agent (top of stack) to this new agent
        if (agentStack.length > 0) {
          const parentAgent = agentStack[agentStack.length - 1];
          if (parentAgent !== agentName) {
            const key = `${parentAgent}->${agentName}`;
            transitionMap.set(key, (transitionMap.get(key) || 0) + 1);
          }
        }
        
        // Push new agent onto stack
        agentStack.push(agentName);
      } else if (event.event_type === 'agent_end') {
        // Pop the ended agent from stack (but never pop 'system')
        if (agentStack.length > 1) {
          agentStack.pop();
        }
      } else if (event.event_type === 'tool_call') {
        // Track tool calls from the current agent
        const toolName = event.data?.tool_name;
        if (toolName && agentStack.length > 0) {
          const callingAgent = agentStack[agentStack.length - 1];
          visitedTools.add(toolName);
          const key = `${callingAgent}->tool:${toolName}`;
          toolCallMap.set(key, (toolCallMap.get(key) || 0) + 1);
          // Tool is now executing
          currentTool = toolName;
        }
      } else if (event.event_type === 'tool_result') {
        // Tool finished executing
        currentTool = null;
      }
    }
    
    // Add visited tools to visited set with a prefix to distinguish them
    visitedTools.forEach(tool => visited.add(`tool:${tool}`));
    
    // Current active agent is top of stack (or null if only system remains)
    const currentAgent = agentStack.length > 1 ? agentStack[agentStack.length - 1] : null;
    
    return { 
      activeAgent: currentAgent, 
      activeTool: currentTool,
      transitions: transitionMap, 
      visitedAgents: visited, 
      toolCalls: toolCallMap 
    };
  }, [events, selectedEventIndex]);
  
  // Build graph data - create nodes for any agent seen in events
  const graphData = useMemo(() => {
    // Build a lookup map from agent name to config (if available)
    const agentConfigByName = new Map(agents.map(a => [a.name, a]));
    
    const nodes: GraphNode[] = [];
    const nameToId = new Map<string, string>();
    
    // Create nodes for all visited agents (from events)
    for (const agentName of visitedAgents) {
      // Skip tool entries (they start with "tool:")
      if (agentName.startsWith('tool:')) continue;
      
      const config = agentConfigByName.get(agentName);
      const id = config?.id || agentName; // Use config id if available, otherwise use name as id
      const prevPos = nodePositionsRef.current.get(id);
      
      nodes.push({
        id,
        name: agentName,
        type: agentName === 'system' ? 'System' : (config?.type || 'LlmAgent'),
        isActive: agentName === activeAgent,
        wasActive: true,
        x: prevPos?.x,
        y: prevPos?.y,
      });
      
      nameToId.set(agentName, id);
    }
    
    // Create nodes for tools
    for (const agentName of visitedAgents) {
      if (!agentName.startsWith('tool:')) continue;
      
      const toolName = agentName.slice(5); // Remove "tool:" prefix
      const id = `tool:${toolName}`;
      const prevPos = nodePositionsRef.current.get(id);
      
      nodes.push({
        id,
        name: toolName,
        type: 'Tool',
        isActive: toolName === activeTool, // Tool is active if currently executing
        wasActive: true,
        x: prevPos?.x,
        y: prevPos?.y,
      });
      
      nameToId.set(agentName, id);
    }
    
    const nodeIds = new Set(nodes.map(n => n.id));
    const links: GraphLink[] = [];
    
    // Add transition links from events (these represent actual execution flow)
    for (const [key, count] of transitions) {
      const [fromName, toName] = key.split('->');
      const fromId = nameToId.get(fromName);
      const toId = nameToId.get(toName);
      
      // Only add link if both nodes are in the graph
      if (fromId && toId && nodeIds.has(fromId) && nodeIds.has(toId)) {
        links.push({
          source: fromId,
          target: toId,
          type: 'transition',
          count,
        });
      }
    }
    
    // Add tool call links
    for (const [key, count] of toolCalls) {
      const [fromName, toName] = key.split('->');
      const fromId = nameToId.get(fromName);
      const toId = nameToId.get(toName); // toName is already "tool:toolName"
      
      // Only add link if both nodes are in the graph
      if (fromId && toId && nodeIds.has(fromId) && nodeIds.has(toId)) {
        links.push({
          source: fromId,
          target: toId,
          type: 'tool',
          count,
        });
      }
    }
    
    return { nodes, links };
  }, [agents, activeAgent, activeTool, visitedAgents, transitions, toolCalls]);
  
  // D3 force simulation
  useEffect(() => {
    if (!svgRef.current || !isOpen) return;
    
    const svg = d3.select(svgRef.current);
    const width = 300;
    const height = 400;
    
    // Clear previous content
    svg.selectAll('*').remove();
    
    // Create container group for zoom/pan
    const g = svg.append('g');
    
    // Track current scale for boundary calculation (mutable reference)
    const scaleRef = { current: lastTransformRef.current?.k || 1 };
    
    // Setup zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        // Save transform for next render
        lastTransformRef.current = event.transform;
        // Update scale for boundary force
        scaleRef.current = event.transform.k;
      });
    
    svg.call(zoom);
    
    // Restore last transform immediately if we have one
    if (lastTransformRef.current) {
      svg.call(zoom.transform, lastTransformRef.current);
      scaleRef.current = lastTransformRef.current.k;
    }
    
    // Function to calculate the ideal transform to fit graph to view
    const calculateFitTransform = () => {
      if (graphData.nodes.length === 0) return null;
      
      // Calculate bounds
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      graphData.nodes.forEach((d: any) => {
        if (d.x !== undefined && d.y !== undefined) {
          minX = Math.min(minX, d.x);
          maxX = Math.max(maxX, d.x);
          minY = Math.min(minY, d.y);
          maxY = Math.max(maxY, d.y);
        }
      });
      
      if (minX === Infinity) return null;
      
      const padding = 60;
      const graphWidth = maxX - minX + padding * 2;
      const graphHeight = maxY - minY + padding * 2;
      
      const scale = Math.min(
        width / graphWidth,
        height / graphHeight,
        1.5 // Max zoom
      ) * 0.85; // Leave some margin
      
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      
      return d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(scale)
        .translate(-centerX, -centerY);
    };
    
    // LERP helper for smooth interpolation
    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
    
    // Apply transform smoothly using LERP (used on tick for continuous centering)
    const applyTransformSmooth = (targetTransform: d3.ZoomTransform) => {
      const current = lastTransformRef.current;
      
      if (!current) {
        // No previous transform, apply directly
        lastTransformRef.current = targetTransform;
        scaleRef.current = targetTransform.k;
        svg.call(zoom.transform, targetTransform);
        return;
      }
      
      // LERP factor - lower = smoother but slower, higher = faster but jumpier
      const t = 0.15;
      
      // Interpolate between current and target transforms
      const newX = lerp(current.x, targetTransform.x, t);
      const newY = lerp(current.y, targetTransform.y, t);
      const newK = lerp(current.k, targetTransform.k, t);
      
      const interpolatedTransform = d3.zoomIdentity.translate(newX, newY).scale(newK);
      
      lastTransformRef.current = interpolatedTransform;
      scaleRef.current = interpolatedTransform.k;
      svg.call(zoom.transform, interpolatedTransform);
    };
    
    
    // Check if all nodes have saved positions
    const allNodesHavePositions = graphData.nodes.every(n => n.x !== undefined && n.y !== undefined);
    
    // Custom boundary force to keep nodes within the circular area
    // The visible radius in screen pixels (accounting for the rounded panel shape)
    const visibleRadiusPixels = 140; // Approximate radius of usable area
    
    const boundaryForce = () => {
      // Boundary radius in simulation coordinates = screen radius / zoom scale
      const boundaryRadius = visibleRadiusPixels / scaleRef.current;
      
      for (const node of graphData.nodes) {
        if (node.x === undefined || node.y === undefined) continue;
        
        const dist = Math.sqrt(node.x * node.x + node.y * node.y);
        if (dist > boundaryRadius) {
          // Push node back toward center
          const scale = boundaryRadius / dist;
          node.x *= scale;
          node.y *= scale;
        }
      }
    };
    
    // Create simulation with stronger forces and slower decay for better spreading
    const simulation = d3.forceSimulation<GraphNode>(graphData.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(graphData.links)
        .id(d => d.id)
        .distance(100)) // Increased from 80 for more spread
      .force('charge', d3.forceManyBody().strength(-400)) // Increased from -200 for stronger repulsion
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(40)) // Increased from 35
      .force('boundary', boundaryForce)
      .alphaDecay(0.01); // Much slower decay (default is ~0.0228)
    
    // If all nodes have positions, use lower alpha but still let it spread
    if (allNodesHavePositions) {
      simulation.alpha(0.3); // Higher than before (was 0.1) to allow more movement
    } else {
      simulation.alpha(1); // Full energy for new graphs
    }
    
    simulationRef.current = simulation;
    
    // Create links
    const link = g.append('g')
      .selectAll('path')
      .data(graphData.links)
      .join('path')
      .attr('stroke', d => d.type === 'transition' ? '#22c55e' : d.type === 'sub_agent' ? '#6366f1' : '#f59e0b')
      .attr('stroke-width', d => d.type === 'transition' ? Math.min(d.count * 1.5 + 1, 6) : 1.5)
      .attr('stroke-opacity', d => d.type === 'transition' ? 0.8 : 0.4)
      .attr('stroke-dasharray', d => d.type === 'tool' ? '4,2' : 'none')
      .attr('fill', 'none');
    
    // Create nodes
    const node = g.append('g')
      .selectAll('g')
      .data(graphData.nodes)
      .join('g')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));
    
    // Helper to get node radius
    const getNodeRadius = (d: GraphNode) => {
      if (d.type === 'System') return 14;
      if (d.type === 'Tool') return 12;
      return 18;
    };
    
    // Node circles
    node.append('circle')
      .attr('r', d => getNodeRadius(d))
      .attr('fill', d => d.type === 'Tool' ? TOOL_COLOR.bg : getAgentColor(d.name).bg)
      .attr('stroke', d => d.isActive ? '#fff' : d.wasActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)')
      .attr('stroke-width', d => d.isActive ? 3 : 1.5)
      .attr('opacity', d => d.wasActive ? 1 : 0.5)
      .attr('class', d => d.isActive ? 'active-node' : '')
      .style('cursor', 'pointer')
      .on('mouseenter', function(event, d) {
        // Get container position for tooltip placement
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;
        
        // Get mouse position relative to container
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;
        
        setTooltip({ x, y, node: d });
        
        // Highlight effect
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', getNodeRadius(d) + 6);
      })
      .on('mouseleave', function(event, d) {
        setTooltip(null);
        
        // Remove highlight
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', getNodeRadius(d));
      });
    
    // Node labels
    node.append('text')
      .text(d => d.name.length > 10 ? d.name.slice(0, 8) + '…' : d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', 32)
      .attr('font-size', 10)
      .attr('fill', '#e4e4e7')
      .attr('font-weight', d => d.isActive ? 600 : 400);
    
    // Track tick count for throttled updates
    let tickCount = 0;
    
    // Curved links for multiple transitions
    simulation.on('tick', () => {
      link.attr('d', (d: any) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * (d.type === 'transition' ? 1.5 : 2);
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });
      
      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
      
      // Save positions for next render
      graphData.nodes.forEach((d: any) => {
        if (d.x !== undefined && d.y !== undefined) {
          nodePositionsRef.current.set(d.id, { x: d.x, y: d.y });
        }
      });
      
      // Continuously re-center and zoom every tick for smooth LERP
      tickCount++;
      const transform = calculateFitTransform();
      if (transform) {
        applyTransformSmooth(transform);
      }
    });
    
    // Initial fit
    const initialTransform = calculateFitTransform();
    if (initialTransform) {
      applyTransformSmooth(initialTransform);
    }
    
    return () => {
      simulation.stop();
    };
  }, [graphData, isOpen]);
  
  return (
    <>
      <style>{`
        .agent-graph-container {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          transition: transform 0.3s ease;
        }
        
        .agent-graph-container.closed {
          transform: translateY(-50%) translateX(-300px);
        }
        
        .agent-graph-panel {
          display: flex;
          align-items: stretch;
        }
        
        .agent-graph-content {
          width: 300px;
          height: 400px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 0 200px 200px 0;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          box-shadow: 4px 0 20px rgba(0,0,0,0.4);
          overflow: hidden;
          position: relative;
        }
        
        .agent-graph-toggle {
          width: 32px;
          height: 64px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          border-radius: 0 8px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #a5b4fc;
          transition: all 0.2s ease;
          align-self: center;
        }
        
        .agent-graph-toggle:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #c7d2fe;
        }
        
        .agent-graph-toggle svg {
          transition: transform 0.3s ease;
        }
        
        .agent-graph-container.closed .agent-graph-toggle svg {
          transform: rotate(0deg);
        }
        
        .agent-graph-container:not(.closed) .agent-graph-toggle svg {
          transform: rotate(180deg);
        }
        
        .agent-graph-svg {
          width: 100%;
          height: 100%;
        }
        
        .agent-graph-legend {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 9px;
          color: #a1a1aa;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .legend-line {
          width: 16px;
          height: 2px;
        }
        
        .active-node {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 4px rgba(255,255,255,0.5));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 12px rgba(255,255,255,0.8));
            transform: scale(1.08);
          }
        }
        
        .agent-graph-tooltip {
          position: absolute;
          pointer-events: none;
          background: rgba(15, 15, 25, 0.95);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 8px;
          padding: 8px 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          min-width: 100px;
          animation: tooltipFadeIn 0.15s ease;
        }
        
        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .agent-graph-tooltip-name {
          font-size: 13px;
          font-weight: 600;
          color: #f4f4f5;
          margin-bottom: 4px;
        }
        
        .agent-graph-tooltip-type {
          font-size: 11px;
          color: #a1a1aa;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .agent-graph-tooltip-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .agent-graph-tooltip-active {
          font-size: 10px;
          color: #22c55e;
          margin-top: 4px;
          font-weight: 500;
        }
      `}</style>
      
      <div className={`agent-graph-container ${isOpen ? '' : 'closed'}`}>
        <div className="agent-graph-panel">
          <div className="agent-graph-content" ref={containerRef}>
            <svg ref={svgRef} className="agent-graph-svg" />
            <div className="agent-graph-legend">
              <div className="legend-item">
                <div className="legend-line" style={{ background: '#22c55e' }} />
                <span>agent flow</span>
              </div>
              <div className="legend-item">
                <div className="legend-line" style={{ background: '#f59e0b', borderStyle: 'dashed' }} />
                <span>tool call</span>
              </div>
            </div>
            {tooltip && (
              <div 
                className="agent-graph-tooltip"
                style={{ 
                  left: Math.min(tooltip.x + 15, 180), 
                  top: Math.max(tooltip.y - 20, 10) 
                }}
              >
                <div className="agent-graph-tooltip-name">{tooltip.node.name}</div>
                <div className="agent-graph-tooltip-type">
                  <div 
                    className="agent-graph-tooltip-dot" 
                    style={{ 
                      background: tooltip.node.type === 'Tool' 
                        ? TOOL_COLOR.bg 
                        : getAgentColor(tooltip.node.name).bg 
                    }}
                  />
                  {tooltip.node.type}
                </div>
                {tooltip.node.isActive && (
                  <div className="agent-graph-tooltip-active">● Currently executing</div>
                )}
              </div>
            )}
          </div>
          <button className="agent-graph-toggle" onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

