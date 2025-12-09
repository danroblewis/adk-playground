import { create } from 'zustand';
import type { Project, AgentConfig, CustomToolDefinition, MCPServerConfig, BuiltinTool, RunEvent } from '../utils/types';

// Watch expression type for Tool Watch panel
interface WatchExpression {
  id: string;
  serverName: string;
  toolName: string;
  args: Record<string, any>;
  transform?: string;
  result?: any;
  error?: string;
  isLoading?: boolean;
  lastRun?: number;
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
  
  // UI state
  activeTab: 'app' | 'agents' | 'tools' | 'run' | 'eval' | 'yaml';
  setActiveTab: (tab: 'app' | 'agents' | 'tools' | 'run' | 'eval' | 'yaml') => void;
  
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (has: boolean) => void;
  
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
  
  // Setters
  setProject: (project) => set({ project }),
  setSelectedAgentId: (id) => set({ selectedAgentId: id }),
  setSelectedToolId: (id) => set({ selectedToolId: id }),
  setMcpServers: (servers) => set({ mcpServers: servers }),
  setBuiltinTools: (tools) => set({ builtinTools: tools }),
  setIsRunning: (running) => set({ isRunning: running }),
  addRunEvent: (event) => set((state) => ({ runEvents: [...state.runEvents, event] })),
  clearRunEvents: () => set({ runEvents: [] }),
  setWatches: (watches) => set({ watches }),
  updateWatch: (id, updates) => set((state) => ({
    watches: state.watches.map(w => w.id === id ? { ...w, ...updates } : w)
  })),
  addWatch: (watch) => set((state) => ({ watches: [...state.watches, watch] })),
  removeWatch: (id) => set((state) => ({ watches: state.watches.filter(w => w.id !== id) })),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setHasUnsavedChanges: (has) => set({ hasUnsavedChanges: has }),
  
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

