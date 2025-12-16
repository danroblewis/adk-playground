import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { ChevronRight, X } from 'lucide-react';
import type { AgentConfig, RunEvent } from '../utils/types';

interface AgentGraphProps {
  agents: AgentConfig[];
  events: RunEvent[];
  selectedEventIndex: number | null;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  runState?: 'idle' | 'running' | 'completed' | 'failed';
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

export default function AgentGraph({ agents, events, selectedEventIndex, isOpen: controlledIsOpen, onOpenChange, runState = 'idle' }: AgentGraphProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
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
  const expandedSvgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const expandedContainerRef = useRef<HTMLDivElement>(null);
  // Store the last zoom transform for expanded modal
  const expandedTransformRef = useRef<d3.ZoomTransform | null>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  // Store node positions to preserve layout across updates
  const nodePositionsRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  // Store the last zoom transform
  const lastTransformRef = useRef<d3.ZoomTransform | null>(null);
  
  // Calculate active agents (supports parallel execution), transitions, visited agents, and tool calls
  const { activeAgents, activeTools, transitions, visitedAgents, toolCalls, activeBranches } = useMemo(() => {
    // If no event selected, use the most recent event
    const effectiveIndex = selectedEventIndex !== null ? selectedEventIndex : events.length - 1;
    
    if (effectiveIndex < 0 || events.length === 0) {
      return { 
        activeAgents: new Set<string>(),
        activeTools: new Set<string>(),
        transitions: new Map<string, number>(), 
        visitedAgents: new Set<string>(),
        toolCalls: new Map<string, number>(),
        activeBranches: new Set<string>()
      };
    }
    
    // Build lookups for agent types and sequential relationships from config
    const agentTypeByName = new Map(agents.map(a => [a.name, a.type]));
    const agentById = new Map(agents.map(a => [a.id, a]));
    
    // Helper to check if an agent is a sequential type
    const isSequentialAgent = (agentName: string): boolean => {
      const type = agentTypeByName.get(agentName);
      if (!type) return false;
      const normalizedType = type.toLowerCase();
      return normalizedType === 'sequentialagent' || normalizedType === 'sequential';
    };
    
    // Build map: child agent name → parent sequential agent name (from config)
    // Also build ordered sub-agent lists for each sequential agent
    const sequentialParentByChild = new Map<string, string>(); // child name → parent name
    const sequentialSubAgents = new Map<string, string[]>(); // sequential name → ordered child names
    
    for (const agent of agents) {
      if (isSequentialAgent(agent.name) && 'sub_agents' in agent) {
        const subAgentIds = (agent as any).sub_agents as string[];
        // Convert IDs to names
        const subAgentNames = subAgentIds
          .map(id => agentById.get(id)?.name)
          .filter((name): name is string => name !== undefined);
        
        sequentialSubAgents.set(agent.name, subAgentNames);
        
        // Map each child to this sequential parent
        for (const childName of subAgentNames) {
          sequentialParentByChild.set(childName, agent.name);
        }
      }
    }
    
    // Helper to get previous sibling in a sequential agent
    const getPreviousSibling = (agentName: string, seqParent: string): string | null => {
      const siblings = sequentialSubAgents.get(seqParent);
      if (!siblings) return null;
      const myIndex = siblings.indexOf(agentName);
      if (myIndex > 0) {
        return siblings[myIndex - 1];
      }
      return null;
    };
    
    const eventsUpToSelection = events.slice(0, effectiveIndex + 1);
    const transitionMap = new Map<string, number>();
    const toolCallMap = new Map<string, number>();
    const visited = new Set<string>();
    const visitedTools = new Set<string>();
    
    // Always include system node
    visited.add('system');
    
    // Track agent stacks per branch for parallel execution
    // Key: branch name (or '' for main branch), Value: stack of agent names
    const branchStacks = new Map<string, string[]>();
    branchStacks.set('', ['system']); // Main branch starts with system
    
    // Track the root agent (the one directly spawned by system)
    let rootAgent: string | null = null;
    
    // Track currently executing tools per branch
    const branchTools = new Map<string, string | null>();
    
    // Track which transitions we've already created to avoid duplicates
    const createdTransitions = new Set<string>();
    
    // Track the last completed child for each SequentialAgent
    // Key: sequential agent name, Value: last completed child agent name
    const sequentialLastChild = new Map<string, string>();
    
    // Track which SequentialAgent each child agent belongs to
    // Key: child agent name, Value: parent sequential agent name
    const childToSequentialParent = new Map<string, string>();
    
    // Helper to get or create a branch stack
    const getBranchStack = (branch: string | null | undefined): string[] => {
      const key = branch || '';
      if (!branchStacks.has(key)) {
        // New branch - start with system, the actual parent will be determined
        // when we process the agent_start event
        branchStacks.set(key, ['system']);
      }
      return branchStacks.get(key)!;
    };
    
    // Extract parent agent from branch path
    // Branch format: "parent_agent.child_agent" or "grandparent.parent.child"
    const getParentFromBranch = (branch: string | null | undefined, agentName: string): string | null => {
      if (!branch) return null;
      
      // The branch format is like "parallel_agent.sequence_1" where parallel_agent is the parent
      // For nested: "parallel_agent.sequence_1.witch_jokes" - parent of witch_jokes is sequence_1
      const parts = branch.split('.');
      
      // Find where our agent appears in the branch
      const agentIndex = parts.indexOf(agentName);
      if (agentIndex > 0) {
        // The parent is the previous part
        return parts[agentIndex - 1];
      }
      
      // If agent isn't in branch path, the parent might be the last part before the agent
      // This handles cases where branch is "parent.child" and we're processing "child"
      if (parts.length >= 1 && parts[parts.length - 1] === agentName && parts.length >= 2) {
        return parts[parts.length - 2];
      }
      
      return null;
    };
    
    for (const event of eventsUpToSelection) {
      const branch = event.branch || '';
      
      if (event.event_type === 'agent_start') {
        const agentName = event.agent_name;
        visited.add(agentName);
        
        const stack = getBranchStack(branch);
        
        // Determine the parent agent
        let parentAgent: string | null = null;
        
        // First, try to get parent from branch path (most reliable for parallel agents)
        const branchParent = getParentFromBranch(branch, agentName);
        if (branchParent && branchParent !== agentName) {
          parentAgent = branchParent;
          // Ensure parent is in the stack
          if (!stack.includes(branchParent)) {
            // Insert parent before current agent
            stack.push(branchParent);
            visited.add(branchParent);
          }
        } else if (stack.length > 0) {
          // Fall back to top of stack (for non-parallel cases)
          parentAgent = stack[stack.length - 1];
        }
        
        // Check if this agent is a child of a SequentialAgent (from config)
        // If so, chain from previous sibling instead of parent
        let effectiveParent = parentAgent;
        const seqParent = sequentialParentByChild.get(agentName);
        if (seqParent) {
          // This agent is a direct child of a sequential agent
          const prevSibling = getPreviousSibling(agentName, seqParent);
          if (prevSibling) {
            // Chain from previous sibling
            effectiveParent = prevSibling;
          } else {
            // First child - chain from the sequential agent itself
            effectiveParent = seqParent;
          }
          // Track for return link later
          childToSequentialParent.set(agentName, seqParent);
        } else if (parentAgent && isSequentialAgent(parentAgent)) {
          // Fallback: runtime detection
          childToSequentialParent.set(agentName, parentAgent);
          const lastSibling = sequentialLastChild.get(parentAgent);
          if (lastSibling && lastSibling !== agentName) {
            effectiveParent = lastSibling;
          }
        }
        
        // Create transition
        if (effectiveParent && effectiveParent !== agentName) {
          const transitionKey = `${effectiveParent}->${agentName}`;
          // Only count each unique transition once per branch to avoid over-counting
          const branchTransitionKey = `${branch}:${transitionKey}`;
          if (!createdTransitions.has(branchTransitionKey)) {
            transitionMap.set(transitionKey, (transitionMap.get(transitionKey) || 0) + 1);
            createdTransitions.add(branchTransitionKey);
          }
          
          // Track root agent (first agent spawned directly by system on main branch)
          if (effectiveParent === 'system' && branch === '' && !rootAgent) {
            rootAgent = agentName;
          }
        }
        
        // Push new agent onto stack (if not already there)
        if (stack[stack.length - 1] !== agentName) {
          stack.push(agentName);
        }
      } else if (event.event_type === 'agent_end') {
        const agentName = event.agent_name;
        
        // Track for runtime fallback (in case config didn't cover this)
        const sequentialParent = childToSequentialParent.get(agentName);
        if (sequentialParent) {
          sequentialLastChild.set(sequentialParent, agentName);
        }
        
        // If this is a SequentialAgent ending, create a return link from last child
        if (isSequentialAgent(agentName)) {
          // Get the last sub-agent from config
          const subAgents = sequentialSubAgents.get(agentName);
          const lastChild = subAgents && subAgents.length > 0 
            ? subAgents[subAgents.length - 1] 
            : sequentialLastChild.get(agentName);
          
          if (lastChild) {
            const returnKey = `${lastChild}->${agentName}`;
            const branchReturnKey = `${branch}:return:${returnKey}`;
            if (!createdTransitions.has(branchReturnKey)) {
              transitionMap.set(returnKey, (transitionMap.get(returnKey) || 0) + 1);
              createdTransitions.add(branchReturnKey);
            }
          }
          sequentialLastChild.delete(agentName);
        }
        
        // If the root agent is ending, create a return transition to system
        if (agentName === rootAgent) {
          const returnKey = `${agentName}->system`;
          if (!createdTransitions.has(returnKey)) {
            transitionMap.set(returnKey, (transitionMap.get(returnKey) || 0) + 1);
            createdTransitions.add(returnKey);
          }
        }
        
        // Remove the agent from ALL branch stacks
        for (const [, stk] of branchStacks) {
          const agentIndex = stk.lastIndexOf(agentName);
          if (agentIndex > 0) {
            stk.splice(agentIndex, 1);
          }
        }
      } else if (event.event_type === 'tool_call') {
        const toolName = event.data?.tool_name;
        const stack = getBranchStack(branch);
        if (toolName && stack.length > 0) {
          const callingAgent = stack[stack.length - 1];
          visitedTools.add(toolName);
          const key = `${callingAgent}->tool:${toolName}`;
          toolCallMap.set(key, (toolCallMap.get(key) || 0) + 1);
          branchTools.set(branch, toolName);
        }
      } else if (event.event_type === 'tool_result') {
        branchTools.set(branch, null);
      }
    }
    
    // Add visited tools to visited set with a prefix
    visitedTools.forEach(tool => visited.add(`tool:${tool}`));
    
    // Collect all currently active agents across all branches
    const currentActiveAgents = new Set<string>();
    const currentActiveTools = new Set<string>();
    const currentActiveBranches = new Set<string>();
    
    for (const [branch, stack] of branchStacks) {
      if (stack.length > 1) {
        const topAgent = stack[stack.length - 1];
        currentActiveAgents.add(topAgent);
        if (branch) currentActiveBranches.add(branch);
      }
      const tool = branchTools.get(branch);
      if (tool) currentActiveTools.add(tool);
    }
    
    return { 
      activeAgents: currentActiveAgents,
      activeTools: currentActiveTools,
      transitions: transitionMap, 
      visitedAgents: visited, 
      toolCalls: toolCallMap,
      activeBranches: currentActiveBranches
    };
  }, [events, selectedEventIndex, agents]);
  
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
        isActive: activeAgents.has(agentName), // Can have multiple active agents in parallel
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
        isActive: activeTools.has(toolName), // Can have multiple active tools in parallel
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
  }, [agents, activeAgents, activeTools, visitedAgents, transitions, toolCalls]);
  
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
    
    // Initialize positions for new nodes near their connected parent
    if (!allNodesHavePositions) {
      // Build a map of node positions for quick lookup
      const nodePositions = new Map<string, { x: number; y: number }>();
      for (const node of graphData.nodes) {
        if (node.x !== undefined && node.y !== undefined) {
          nodePositions.set(node.id, { x: node.x, y: node.y });
        }
      }
      
      // For each node without position, find its source and place near it
      for (const node of graphData.nodes) {
        if (node.x === undefined || node.y === undefined) {
          // Find a link where this node is the target
          const incomingLink = graphData.links.find(l => {
            const targetId = typeof l.target === 'string' ? l.target : l.target.id;
            return targetId === node.id;
          });
          
          if (incomingLink) {
            const sourceId = typeof incomingLink.source === 'string' ? incomingLink.source : incomingLink.source.id;
            const sourcePos = nodePositions.get(sourceId);
            if (sourcePos) {
              // Place slightly offset from source with some randomness for spread
              const angle = Math.random() * Math.PI * 2;
              const distance = 50 + Math.random() * 30;
              node.x = sourcePos.x + Math.cos(angle) * distance;
              node.y = sourcePos.y + Math.sin(angle) * distance;
              nodePositions.set(node.id, { x: node.x, y: node.y });
            }
          }
          
          // If still no position, use small random offset from center
          if (node.x === undefined || node.y === undefined) {
            node.x = (Math.random() - 0.5) * 50;
            node.y = (Math.random() - 0.5) * 50;
          }
        }
      }
    }
    
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
    
    // Custom force to pull system node toward bottom-left of boundary circle
    const systemPullForce = () => {
      for (const node of graphData.nodes as any[]) {
        if (node.name === 'system' && node.x !== undefined && node.y !== undefined) {
          // Target: bottom-left of boundary circle (225° angle, 75% of radius)
          const boundaryRadius = visibleRadiusPixels / scaleRef.current;
          const targetRadius = boundaryRadius * 0.75; // Inside the boundary
          const angle = (225 * Math.PI) / 180; // 225° = bottom-left
          const targetX = targetRadius * Math.cos(angle);
          const targetY = -targetRadius * Math.sin(angle); // Negative because SVG y is inverted
          const strength = 0.3; // How strongly to pull
          
          // Apply velocity toward target
          node.vx = (node.vx || 0) + (targetX - node.x) * strength;
          node.vy = (node.vy || 0) + (targetY - node.y) * strength;
        }
      }
    };
    
    // Identify leaf nodes (nodes with no outgoing edges)
    const outgoingEdges = new Set<string>();
    for (const link of graphData.links) {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      outgoingEdges.add(sourceId);
    }
    const leafNodeIds = new Set(
      graphData.nodes
        .filter(n => !outgoingEdges.has(n.id) && n.name !== 'system')
        .map(n => n.id)
    );
    
    // Custom force to push leaf nodes towards the edge (radially outward)
    const leafOutwardForce = () => {
      const boundaryRadius = visibleRadiusPixels / scaleRef.current;
      const targetRadius = boundaryRadius * 0.65; // Push towards outer area
      const strength = 0.15; // How strongly to push outward
      
      for (const node of graphData.nodes as any[]) {
        if (leafNodeIds.has(node.id) && node.x !== undefined && node.y !== undefined) {
          // Calculate current distance from center
          const dist = Math.sqrt(node.x * node.x + node.y * node.y) || 1;
          
          // Only push if inside target radius
          if (dist < targetRadius) {
            // Direction away from center (normalized)
            const dx = node.x / dist;
            const dy = node.y / dist;
            
            // Apply outward velocity
            const force = (targetRadius - dist) * strength;
            node.vx = (node.vx || 0) + dx * force;
            node.vy = (node.vy || 0) + dy * force;
          }
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
      .force('systemPull', systemPullForce) // Pull system node to bottom-left
      .force('leafOutward', leafOutwardForce) // Push leaf nodes towards edge
      .alphaDecay(0.01); // Much slower decay (default is ~0.0228)
    
    // If all nodes have positions, use lower alpha but still let it spread
    if (allNodesHavePositions) {
      simulation.alpha(0.3); // Higher than before (was 0.1) to allow more movement
    } else {
      simulation.alpha(1); // Full energy for new graphs
    }
    
    simulationRef.current = simulation;
    
    // Create gradient definitions for each link
    const defs = svg.append('defs');
    
    graphData.links.forEach((link, i) => {
      const gradient = defs.append('linearGradient')
        .attr('id', `link-gradient-${i}`)
        .attr('gradientUnits', 'userSpaceOnUse');
      
      // Colors based on link type
      const colors = link.type === 'transition' 
        ? { start: '#166534', end: '#4ade80' }  // dark green to bright green
        : link.type === 'sub_agent'
        ? { start: '#3730a3', end: '#a5b4fc' }  // dark indigo to bright indigo
        : { start: '#92400e', end: '#fcd34d' }; // dark amber to bright amber
      
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colors.start);
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colors.end);
    });
    
    // Create curved links with gradients
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(graphData.links)
      .join('path')
      .attr('stroke', (_d, i) => `url(#link-gradient-${i})`)
      .attr('stroke-width', d => d.type === 'transition' ? Math.min(d.count + 2, 8) : 1.5)
      .attr('stroke-opacity', d => d.type === 'transition' ? 0.8 : 0.5)
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
        }) as any);
    
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
      .on('mouseleave', function(_event, d) {
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
    
    // Curved links with gradient direction updates
    simulation.on('tick', () => {
      link.attr('d', (d: any) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });
      
      // Update gradient directions to follow the links
      graphData.links.forEach((d: any, i: number) => {
        defs.select(`#link-gradient-${i}`)
          .attr('x1', d.source.x)
          .attr('y1', d.source.y)
          .attr('x2', d.target.x)
          .attr('y2', d.target.y);
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
  
  // D3 force simulation for expanded modal
  useEffect(() => {
    if (!expandedSvgRef.current || !isExpanded) return;
    
    const svg = d3.select(expandedSvgRef.current);
    const container = expandedContainerRef.current;
    if (!container) return;
    
    const size = Math.min(container.clientWidth, container.clientHeight);
    const width = size;
    const height = size;
    
    // Clear previous content
    svg.selectAll('*').remove();
    
    // Create container group for zoom/pan
    const g = svg.append('g');
    
    // Setup zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        expandedTransformRef.current = event.transform;
      });
    
    svg.call(zoom);
    
    // Restore or apply initial transform immediately
    if (expandedTransformRef.current) {
      svg.call(zoom.transform, expandedTransformRef.current);
    } else {
      // Initial center transform
      const initialTransform = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.9);
      svg.call(zoom.transform, initialTransform);
      expandedTransformRef.current = initialTransform;
    }
    
    // Custom boundary force for circular area
    const boundaryRadius = size * 0.35;
    
    const boundaryForce = () => {
      for (const node of graphData.nodes) {
        if (node.x === undefined || node.y === undefined) continue;
        
        const dist = Math.sqrt(node.x * node.x + node.y * node.y);
        if (dist > boundaryRadius) {
          const scale = boundaryRadius / dist;
          node.x *= scale;
          node.y *= scale;
        }
      }
    };
    
    // Identify leaf nodes (nodes with no outgoing edges)
    const outgoingEdges = new Set<string>();
    for (const link of graphData.links) {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      outgoingEdges.add(sourceId);
    }
    const leafNodeIds = new Set(
      graphData.nodes
        .filter(n => !outgoingEdges.has(n.id) && n.name !== 'system')
        .map(n => n.id)
    );
    
    // Custom force to push leaf nodes towards the edge (radially outward)
    const leafOutwardForce = () => {
      const targetRadius = boundaryRadius * 0.75; // Push towards outer area
      const strength = 0.12; // How strongly to push outward
      
      for (const node of graphData.nodes as any[]) {
        if (leafNodeIds.has(node.id) && node.x !== undefined && node.y !== undefined) {
          // Calculate current distance from center
          const dist = Math.sqrt(node.x * node.x + node.y * node.y) || 1;
          
          // Only push if inside target radius
          if (dist < targetRadius) {
            // Direction away from center (normalized)
            const dx = node.x / dist;
            const dy = node.y / dist;
            
            // Apply outward velocity
            const force = (targetRadius - dist) * strength;
            node.vx = (node.vx || 0) + dx * force;
            node.vy = (node.vy || 0) + dy * force;
          }
        }
      }
    };
    
    // Check if all nodes have saved positions
    const allNodesHavePositions = graphData.nodes.every(n => n.x !== undefined && n.y !== undefined);
    
    // Create simulation with forces - use lower alpha if positions exist
    const simulation = d3.forceSimulation<GraphNode>(graphData.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(graphData.links)
        .id(d => d.id)
        .distance(120))
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(50))
      .force('boundary', boundaryForce)
      .force('leafOutward', leafOutwardForce) // Push leaf nodes towards edge
      .alpha(allNodesHavePositions ? 0.1 : 0.8)
      .alphaDecay(0.02);
    
    // Create gradient definitions for each link (expanded view)
    const defs = svg.append('defs');
    
    graphData.links.forEach((link, i) => {
      const gradient = defs.append('linearGradient')
        .attr('id', `exp-link-gradient-${i}`)
        .attr('gradientUnits', 'userSpaceOnUse');
      
      const colors = link.type === 'transition' 
        ? { start: '#166534', end: '#4ade80' }
        : link.type === 'sub_agent'
        ? { start: '#3730a3', end: '#a5b4fc' }
        : { start: '#92400e', end: '#fcd34d' };
      
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colors.start);
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colors.end);
    });
    
    // Create curved links with gradients
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(graphData.links)
      .join('path')
      .attr('stroke', (_d, i) => `url(#exp-link-gradient-${i})`)
      .attr('stroke-width', d => d.type === 'transition' ? Math.min(d.count + 2, 8) : 2)
      .attr('stroke-opacity', d => d.type === 'transition' ? 0.8 : 0.5)
      .attr('stroke-dasharray', d => d.type === 'tool' ? '6,3' : 'none')
      .attr('fill', 'none');
    
    // Helper to get node radius
    const getExpandedNodeRadius = (d: GraphNode) => {
      if (d.type === 'System') return 20;
      if (d.type === 'Tool') return 18;
      return 28;
    };
    
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
        }) as any);
    
    // Node circles
    node.append('circle')
      .attr('r', d => getExpandedNodeRadius(d))
      .attr('fill', d => d.type === 'Tool' ? TOOL_COLOR.bg : getAgentColor(d.name).bg)
      .attr('stroke', d => d.isActive ? '#fff' : d.wasActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)')
      .attr('stroke-width', d => d.isActive ? 4 : 2)
      .attr('opacity', d => d.wasActive ? 1 : 0.5)
      .attr('class', d => d.isActive ? 'active-node' : '')
      .style('cursor', 'grab');
    
    // Node labels
    node.append('text')
      .text(d => d.name.length > 15 ? d.name.slice(0, 13) + '…' : d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', d => getExpandedNodeRadius(d) + 18)
      .attr('font-size', 14)
      .attr('fill', '#e4e4e7')
      .attr('font-weight', d => d.isActive ? 600 : 400);
    
    // Simulation tick
    simulation.on('tick', () => {
      link.attr('d', (d: any) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });
      
      // Update gradient directions
      graphData.links.forEach((d: any, i: number) => {
        defs.select(`#exp-link-gradient-${i}`)
          .attr('x1', d.source.x)
          .attr('y1', d.source.y)
          .attr('x2', d.target.x)
          .attr('y2', d.target.y);
      });

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
      
      // Save positions for next render
      graphData.nodes.forEach((d: any) => {
        if (d.x !== undefined && d.y !== undefined) {
          nodePositionsRef.current.set(d.id, { x: d.x, y: d.y });
        }
      });
    });
    
    return () => {
      simulation.stop();
    };
  }, [graphData, isExpanded]);
  
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
          border-radius: 0 200px 200px 0;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          box-shadow: 4px 0 20px rgba(0,0,0,0.4);
          overflow: hidden;
          position: relative;
          transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        /* Run state backgrounds */
        .agent-graph-content.state-idle,
        .agent-graph-content.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .agent-graph-content.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border-color: rgba(20, 184, 166, 0.4);
          box-shadow: 4px 0 20px rgba(20, 184, 166, 0.15), 4px 0 40px rgba(0,0,0,0.3);
        }
        
        .agent-graph-content.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border-color: rgba(239, 68, 68, 0.35);
          box-shadow: 4px 0 20px rgba(239, 68, 68, 0.15), 4px 0 40px rgba(0,0,0,0.3);
        }
        
        .agent-graph-toggle {
          width: 32px;
          height: 64px;
          border-left: none;
          border-radius: 0 8px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: center;
        }
        
        .agent-graph-toggle.state-idle,
        .agent-graph-toggle.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #a5b4fc;
        }
        
        .agent-graph-toggle.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border: 1px solid rgba(20, 184, 166, 0.4);
          color: #5eead4;
        }
        
        .agent-graph-toggle.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }
        
        .agent-graph-toggle:hover {
          filter: brightness(1.2);
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
        
        /* Expanded modal styles */
        .agent-graph-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.2s ease;
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .agent-graph-modal {
          position: relative;
          width: min(80vh, 80vw);
          height: min(80vh, 80vw);
          border-radius: 50%;
          overflow: hidden;
          animation: modalScaleIn 0.3s ease;
          transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        .agent-graph-modal.state-idle,
        .agent-graph-modal.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(99, 102, 241, 0.4);
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        .agent-graph-modal.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border: 2px solid rgba(20, 184, 166, 0.5);
          box-shadow: 0 0 60px rgba(20, 184, 166, 0.25), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        .agent-graph-modal.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border: 2px solid rgba(239, 68, 68, 0.4);
          box-shadow: 0 0 60px rgba(239, 68, 68, 0.2), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes modalScaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .agent-graph-modal-close {
          position: absolute;
          top: 3%;
          right: 3%;
          width: 60px;
          height: 60px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 2001;
          padding: 0;
          transform: rotate(45deg);
        }
        
        .agent-graph-modal-close-arc {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .agent-graph-modal-close-arc::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          border-radius: 0 0 0 100%;
          box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }
        
        .agent-graph-modal-close:hover .agent-graph-modal-close-arc::before {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          box-shadow: -3px 3px 12px rgba(220, 38, 38, 0.5);
          width: 70px;
          height: 70px;
        }
        
        .agent-graph-modal-close-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          color: white;
          transform: rotate(-45deg);
          transition: transform 0.2s ease;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        }
        
        .agent-graph-modal-close:hover .agent-graph-modal-close-icon {
          transform: rotate(-45deg) scale(1.1);
        }
        
        .agent-graph-modal-svg {
          width: 100%;
          height: 100%;
        }
        
        .agent-graph-content.clickable {
          cursor: pointer;
        }
        
        .agent-graph-content.clickable:hover {
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 4px 0 30px rgba(99, 102, 241, 0.3);
        }
      `}</style>
      
      <div className={`agent-graph-container ${isOpen ? '' : 'closed'}`}>
        <div className="agent-graph-panel">
          <div 
            className={`agent-graph-content clickable state-${runState}`}
            ref={containerRef}
            onClick={() => setIsExpanded(true)}
            title="Click to expand"
          >
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
          <button className={`agent-graph-toggle state-${runState}`} onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Expanded modal view */}
      {isExpanded && (
        <div 
          className="agent-graph-modal-overlay"
          onClick={() => {
            setIsExpanded(false);
            expandedTransformRef.current = null; // Reset so it re-centers next time
          }}
        >
          <div 
            className={`agent-graph-modal state-${runState}`}
            ref={expandedContainerRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="agent-graph-modal-close"
              onClick={() => {
                setIsExpanded(false);
                expandedTransformRef.current = null; // Reset so it re-centers next time
              }}
              title="Close"
            >
              <div className="agent-graph-modal-close-arc">
                <X size={18} className="agent-graph-modal-close-icon" />
              </div>
            </button>
            <svg ref={expandedSvgRef} className="agent-graph-modal-svg" />
          </div>
        </div>
      )}
    </>
  );
}

