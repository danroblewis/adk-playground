import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { ChevronRight } from 'lucide-react';
import type { AgentConfig, RunEvent } from '../utils/types';

interface AgentGraphProps {
  agents: AgentConfig[];
  events: RunEvent[];
  selectedEventIndex: number | null;
}

interface GraphNode {
  id: string;
  name: string;
  type: 'LlmAgent' | 'SequentialAgent' | 'LoopAgent' | 'ParallelAgent';
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

// Agent type colors matching the AgentsPanel
const AGENT_COLORS: Record<string, string> = {
  'LlmAgent': '#6366f1',
  'SequentialAgent': '#7b2cbf',
  'LoopAgent': '#ffd93d',
  'ParallelAgent': '#ff6b6b',
};

export default function AgentGraph({ agents, events, selectedEventIndex }: AgentGraphProps) {
  const [isOpen, setIsOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  // Store node positions to preserve layout across updates
  const nodePositionsRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  // Store the last zoom transform
  const lastTransformRef = useRef<d3.ZoomTransform | null>(null);
  
  // Calculate the active agent and transitions up to the selected event
  const { activeAgent, transitions, visitedAgents } = useMemo(() => {
    // If no event selected, use the most recent event
    const effectiveIndex = selectedEventIndex !== null ? selectedEventIndex : events.length - 1;
    
    if (effectiveIndex < 0 || events.length === 0) {
      return { activeAgent: null, transitions: new Map<string, number>(), visitedAgents: new Set<string>() };
    }
    
    const eventsUpToSelection = events.slice(0, effectiveIndex + 1);
    const transitionMap = new Map<string, number>();
    const visited = new Set<string>();
    
    // Always include system node
    visited.add('system');
    
    // Use a stack to track the agent hierarchy
    // When agent_start happens, the transition is from the current top of stack (parent) to the new agent
    // When agent_end happens, we pop the stack
    // Start with 'system' as the initial parent
    const agentStack: string[] = ['system'];
    
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
      }
    }
    
    // Current active agent is top of stack (or null if only system remains)
    const currentAgent = agentStack.length > 1 ? agentStack[agentStack.length - 1] : null;
    
    return { activeAgent: currentAgent, transitions: transitionMap, visitedAgents: visited };
  }, [events, selectedEventIndex]);
  
  // Build graph data - only include agents that have been seen in events
  const graphData = useMemo(() => {
    const agentByName = new Map(agents.map(a => [a.name, a]));
    
    // Start with visited agent nodes
    const nodes: GraphNode[] = agents
      .filter(agent => visitedAgents.has(agent.name))
      .map(agent => {
        // Restore previous position if available
        const prevPos = nodePositionsRef.current.get(agent.id);
        return {
          id: agent.id,
          name: agent.name,
          type: agent.type,
          isActive: agent.name === activeAgent,
          wasActive: true, // All nodes in graph have been visited
          // Use previous position or undefined (D3 will assign random)
          x: prevPos?.x,
          y: prevPos?.y,
        };
      });
    
    // Add system node if we have any events
    if (visitedAgents.has('system')) {
      const prevPos = nodePositionsRef.current.get('system');
      nodes.unshift({
        id: 'system',
        name: 'system',
        type: 'LlmAgent', // Use LlmAgent type for coloring, but we'll override it
        isActive: false,
        wasActive: true,
        x: prevPos?.x,
        y: prevPos?.y,
      });
    }
    
    // Build name to id map including system
    const nameToId = new Map<string, string>();
    nameToId.set('system', 'system');
    agents.forEach(a => nameToId.set(a.name, a.id));
    
    const nodeIds = new Set(nodes.map(n => n.id));
    const links: GraphLink[] = [];
    
    // Debug: log what we have
    console.log('=== AgentGraph Debug ===');
    console.log('agents prop:', agents.map(a => ({ name: a.name, id: a.id, type: a.type })));
    console.log('visitedAgents:', [...visitedAgents]);
    console.log('agents matching visitedAgents:', agents.filter(a => visitedAgents.has(a.name)).map(a => a.name));
    console.log('transitions:', [...transitions.entries()]);
    console.log('nodeIds:', [...nodeIds]);
    console.log('nameToId:', [...nameToId.entries()]);
    
    // Only add transition links from events (these represent actual execution flow)
    for (const [key, count] of transitions) {
      const [fromName, toName] = key.split('->');
      
      // Handle system node specially - it uses 'system' as both name and id
      const fromId = fromName === 'system' ? 'system' : nameToId.get(fromName);
      const toId = toName === 'system' ? 'system' : nameToId.get(toName);
      
      console.log(`Link ${key}: fromId=${fromId} (in nodes: ${nodeIds.has(fromId || '')}), toId=${toId} (in nodes: ${nodeIds.has(toId || '')})`);
      
      // Only add link if both nodes are in the graph
      if (fromId && toId && nodeIds.has(fromId) && nodeIds.has(toId)) {
        links.push({
          source: fromId,
          target: toId,
          type: 'transition',
          count,
        });
        console.log('  -> Added link!');
      } else {
        console.log('  -> SKIPPED - missing node');
      }
    }
    
    console.log('Final result:', links.length, 'links,', nodes.length, 'nodes');
    
    return { nodes, links };
  }, [agents, activeAgent, visitedAgents, transitions]);
  
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
    
    // Setup zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        // Save transform for next render
        lastTransformRef.current = event.transform;
      });
    
    svg.call(zoom);
    
    // Restore last transform immediately if we have one
    if (lastTransformRef.current) {
      svg.call(zoom.transform, lastTransformRef.current);
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
    
    // Apply transform smoothly (used on tick for continuous centering)
    const applyTransformSmooth = (transform: d3.ZoomTransform) => {
      lastTransformRef.current = transform;
      svg.call(zoom.transform, transform);
    };
    
    
    // Check if all nodes have saved positions
    const allNodesHavePositions = graphData.nodes.every(n => n.x !== undefined && n.y !== undefined);
    
    // Create simulation
    const simulation = d3.forceSimulation<GraphNode>(graphData.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(graphData.links)
        .id(d => d.id)
        .distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(35));
    
    // If all nodes have positions, reduce initial alpha for minimal movement
    if (allNodesHavePositions) {
      simulation.alpha(0.1).alphaDecay(0.05);
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
    
    // Node circles
    node.append('circle')
      .attr('r', d => d.name === 'system' ? 14 : 18)
      .attr('fill', d => d.name === 'system' ? '#71717a' : (AGENT_COLORS[d.type] || '#6366f1'))
      .attr('stroke', d => d.isActive ? '#fff' : d.wasActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)')
      .attr('stroke-width', d => d.isActive ? 3 : 1.5)
      .attr('opacity', d => d.wasActive ? 1 : 0.5)
      .attr('class', d => d.isActive ? 'active-node' : '');
    
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
      
      // Continuously re-center and zoom every few ticks
      tickCount++;
      if (tickCount % 5 === 0) {
        const transform = calculateFitTransform();
        if (transform) {
          applyTransformSmooth(transform);
        }
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
      `}</style>
      
      <div className={`agent-graph-container ${isOpen ? '' : 'closed'}`}>
        <div className="agent-graph-panel">
          <div className="agent-graph-content">
            <svg ref={svgRef} className="agent-graph-svg" />
            <div className="agent-graph-legend">
              <div className="legend-item">
                <div className="legend-line" style={{ background: '#22c55e' }} />
                <span>execution flow</span>
              </div>
            </div>
          </div>
          <button className="agent-graph-toggle" onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

