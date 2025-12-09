import { create } from 'zustand';
import type { Project, AgentConfig, CustomToolDefinition, MCPServerConfig, BuiltinTool, RunEvent } from '../utils/types';

// Watch result snapshot
export interface WatchResultSnapshot {
  eventIndex: number;
  timestamp: number;
  result?: any;
  error?: string;
}

// Watch expression type for Tool Watch panel
export interface WatchExpression {
  id: string;
  serverName: string;
  toolName: string;
  args: Record<string, any>;
  transform?: string;
  result?: any;  // Current/latest result
  error?: string;
  isLoading?: boolean;
  lastRun?: number;
  history: WatchResultSnapshot[];  // History of results at each event
}

interface Store {
  // Current project
  project: Project | null;
  setProject: (project: Project | null) => void;
  
  // Selected items
  selectedAgentId: string | null;
  setSelectedAgentId: (id: string | null) => void;
  
  selectedToolId: string | null;
  setSelectedToolId: (id: string | null) => void;
  
  // Reference data
  mcpServers: MCPServerConfig[];
  setMcpServers: (servers: MCPServerConfig[]) => void;
  
  builtinTools: BuiltinTool[];
  setBuiltinTools: (tools: BuiltinTool[]) => void;
  
  // Runtime
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  
  runEvents: RunEvent[];
  addRunEvent: (event: RunEvent) => void;
  clearRunEvents: () => void;
  
  // Tool Watch (persisted across tab switches)
  watches: WatchExpression[];
  setWatches: (watches: WatchExpression[]) => void;
  updateWatch: (id: string, updates: Partial<WatchExpression>) => void;
  addWatch: (watch: WatchExpression) => void;
  removeWatch: (id: string) => void;
  clearWatchHistories: () => void;
  
  // UI state
  activeTab: 'app' | 'agents' | 'tools' | 'run' | 'eval' | 'yaml' | 'code';
  setActiveTab: (tab: 'app' | 'agents' | 'tools' | 'run' | 'eval' | 'yaml' | 'code') => void;
  
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (has: boolean) => void;
  
  // Run agent selection (for opening Run with specific agent)
  runAgentId: string | null;
  setRunAgentId: (agentId: string | null) => void;
  
  // Current session ID (for saving to memory)
  currentSessionId: string | null;
  setCurrentSessionId: (sessionId: string | null) => void;
  
  // Actions
  updateProject: (updates: Partial<Project>) => void;
  addAgent: (agent: AgentConfig) => void;
  updateAgent: (id: string, updates: Partial<AgentConfig>) => void;
  removeAgent: (id: string) => void;
  addCustomTool: (tool: CustomToolDefinition) => void;
  updateCustomTool: (id: string, updates: Partial<CustomToolDefinition>) => void;
  removeCustomTool: (id: string) => void;
}

export const useStore = create<Store>((set, get) => ({
  // State
  project: null,
  selectedAgentId: null,
  selectedToolId: null,
  mcpServers: [],
  builtinTools: [],
  isRunning: false,
  runEvents: [],
  watches: [],
  activeTab: 'app',
  sidebarOpen: true,
  hasUnsavedChanges: false,
  runAgentId: null,
  currentSessionId: null,
  
  // Setters
  setProject: (project) => {
    // When loading a project, also load its watches (with empty runtime state)
    const watches = project?.watches?.map(w => ({
      ...w,
      result: undefined,
      error: undefined,
      isLoading: false,
      lastRun: undefined,
      history: [],
    })) || [];
    set({ project, watches });
  },
  setSelectedAgentId: (id) => set({ selectedAgentId: id }),
  setSelectedToolId: (id) => set({ selectedToolId: id }),
  setMcpServers: (servers) => set({ mcpServers: servers }),
  setBuiltinTools: (tools) => set({ builtinTools: tools }),
  setIsRunning: (running) => set({ isRunning: running }),
  addRunEvent: (event) => set((state) => ({ runEvents: [...state.runEvents, event] })),
  clearRunEvents: () => set({ runEvents: [] }),
  setWatches: (watches) => set({ watches }),
  updateWatch: (id, updates) => set((state) => {
    const newWatches = state.watches.map(w => w.id === id ? { ...w, ...updates } : w);
    // Check if this is a config update (not just runtime state like result/error)
    const isConfigUpdate = 'serverName' in updates || 'toolName' in updates || 
                           'args' in updates || 'transform' in updates;
    if (isConfigUpdate && state.project) {
      const projectWatches = newWatches.map(({ id, serverName, toolName, args, transform }) => 
        ({ id, serverName, toolName, args, transform })
      );
      return { 
        watches: newWatches, 
        project: { ...state.project, watches: projectWatches },
        hasUnsavedChanges: true 
      };
    }
    return { watches: newWatches };
  }),
  addWatch: (watch) => set((state) => {
    const newWatches = [...state.watches, watch];
    // Also update project.watches for persistence
    const { project } = state;
    if (project) {
      const projectWatches = newWatches.map(({ id, serverName, toolName, args, transform }) => 
        ({ id, serverName, toolName, args, transform })
      );
      return { 
        watches: newWatches, 
        project: { ...project, watches: projectWatches },
        hasUnsavedChanges: true 
      };
    }
    return { watches: newWatches };
  }),
  removeWatch: (id) => set((state) => {
    const newWatches = state.watches.filter(w => w.id !== id);
    // Also update project.watches for persistence
    const { project } = state;
    if (project) {
      const projectWatches = newWatches.map(({ id, serverName, toolName, args, transform }) => 
        ({ id, serverName, toolName, args, transform })
      );
      return { 
        watches: newWatches, 
        project: { ...project, watches: projectWatches },
        hasUnsavedChanges: true 
      };
    }
    return { watches: newWatches };
  }),
  clearWatchHistories: () => set((state) => ({
    watches: state.watches.map(w => ({ ...w, history: [], result: undefined, error: undefined }))
  })),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setHasUnsavedChanges: (has) => set({ hasUnsavedChanges: has }),
  setRunAgentId: (agentId) => set({ runAgentId: agentId }),
  setCurrentSessionId: (sessionId) => set({ currentSessionId: sessionId }),
  
  // Complex actions
  updateProject: (updates) => {
    const { project } = get();
    if (project) {
      set({ project: { ...project, ...updates } });
    }
  },
  
  addAgent: (agent) => {
    const { project } = get();
    if (project) {
      set({
        project: {
          ...project,
          agents: [...project.agents, agent],
        },
      });
    }
  },
  
  updateAgent: (id, updates) => {
    const { project } = get();
    if (project) {
      set({
        project: {
          ...project,
          agents: project.agents.map((a) =>
            a.id === id ? { ...a, ...updates } : a
          ) as AgentConfig[],
        },
      });
    }
  },
  
  removeAgent: (id) => {
    const { project, selectedAgentId } = get();
    if (project) {
      set({
        project: {
          ...project,
          agents: project.agents.filter((a) => a.id !== id),
        },
        selectedAgentId: selectedAgentId === id ? null : selectedAgentId,
      });
    }
  },
  
  addCustomTool: (tool) => {
    const { project } = get();
    if (project) {
      set({
        project: {
          ...project,
          custom_tools: [...project.custom_tools, tool],
        },
      });
    }
  },
  
  updateCustomTool: (id, updates) => {
    const { project } = get();
    if (project) {
      set({
        project: {
          ...project,
          custom_tools: project.custom_tools.map((t) =>
            t.id === id ? { ...t, ...updates } : t
          ),
        },
      });
    }
  },
  
  removeCustomTool: (id) => {
    const { project, selectedToolId } = get();
    if (project) {
      set({
        project: {
          ...project,
          custom_tools: project.custom_tools.filter((t) => t.id !== id),
        },
        selectedToolId: selectedToolId === id ? null : selectedToolId,
      });
    }
  },
}));

