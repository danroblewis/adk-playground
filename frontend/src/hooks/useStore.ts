import { create } from 'zustand';
import type { Project, AgentConfig, CustomToolDefinition, MCPServerConfig, BuiltinTool, RunEvent } from '../utils/types';

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

