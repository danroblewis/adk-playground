# ADK Playground Run Section Improvements

## Todo List

### 1. Session State Visualization
- [ ] **State Panel Sidebar** - Add a collapsible sidebar showing current session state as a live-updating JSON tree
- [ ] **State Diff Highlighting** - When state changes occur, highlight the changed keys with a flash animation
- [ ] **State History Timeline** - Show state snapshots at each point in time, allow clicking timeline to see state at that moment
- [ ] **State Key Badges** - Show which state keys each agent reads/writes as colored badges in the agent header

### 2. Tool Call Visualization
- [ ] **Tool Call Cards** - Display tool calls as distinct visual cards with:
  - Tool name prominently displayed with icon
  - Parameters shown in a formatted key-value table (not raw JSON)
  - Expandable/collapsible response section (collapsed by default)
  - Duration badge showing how long the tool took
  - Status indicator (success/failure/pending)
- [ ] **Tool Call Syntax Highlighting** - Color-code parameter values by type (string, number, boolean)
- [ ] **Tool Response Preview** - Show first 100 chars of response, expand for full
- [ ] **Copy Buttons** - Add copy-to-clipboard for tool args and responses

### 3. Agent Activity Indicators
- [ ] **Agent Status Header** - Show what each agent is currently doing:
  - "Thinking..." when waiting for LLM
  - "Calling tool: X" when executing a tool
  - "Waiting for sub-agent: Y" when delegating
  - "Complete" with checkmark when done
- [ ] **Agent Timing Breakdown** - Show time spent in: LLM calls, tool execution, sub-agent calls
- [ ] **Agent Decision Points** - Highlight moments where agent chose between options (tool selection, transfer decisions)

### 4. Timeline Bar Improvements
- [ ] **Visual Timeline** - Replace simple slider with a visual bar showing:
  - Color-coded segments for each agent
  - Segment width proportional to time spent
  - Icons for key events (tool calls, state changes, transfers)
- [ ] **Hover Details** - Hovering over timeline segment shows tooltip with:
  - Agent name
  - Event type
  - Duration
  - Click to scroll to that event
- [ ] **Zoom Controls** - Add zoom in/out for timeline to see detail or overview
- [ ] **Playback Controls** - Add play/pause/speed controls to replay the run animated

### 5. Event Filtering & Search
- [ ] **Event Type Filters** - Toggle buttons to show/hide: model calls, tool calls, state changes, transfers
- [ ] **Agent Filter** - Dropdown to show events from specific agents only
- [ ] **Search Box** - Search through event content (tool names, parameters, responses)
- [ ] **Bookmarks** - Allow marking important events for later reference

### 6. Model Call Improvements
- [ ] **Prompt Preview** - Show system instruction and recent conversation context
- [ ] **Token Visualization** - Show token count as a visual bar (used vs limit)
- [ ] **Model Response Streaming** - Show response as it streams in (if using streaming)
- [ ] **Thought/Reasoning Display** - Special formatting for model's chain-of-thought

### 7. Error & Warning Handling
- [ ] **Error Highlighting** - Red banner for failed tool calls or agent errors
- [ ] **Retry Indicators** - Show when ReflectAndRetryToolPlugin kicks in
- [ ] **Warning Badges** - Warn about high token usage, long-running tools, etc.

### 8. Export & Sharing
- [ ] **Export Run as JSON** - Download full run data for debugging
- [ ] **Export as Markdown** - Generate human-readable report of the run
- [ ] **Share Run Link** - Create shareable link to view a past run

### 9. Real-time Improvements
- [ ] **Live Updates** - Events appear with smooth animation as they happen
- [ ] **Progress Indicator** - Show overall progress through agent workflow
- [ ] **Estimated Time Remaining** - Based on similar past runs

### 10. Layout Improvements
- [ ] **Split View Option** - Side-by-side: events on left, state on right
- [ ] **Density Toggle** - Compact view vs expanded view
- [ ] **Dark/Light Mode** - Ensure all visualizations work in both themes
- [ ] **Responsive Design** - Work well on different screen sizes

---

## Testing Requirements

> **IMPORTANT**: After implementing each feature, use the browser MCP tools to verify behavior:

```
1. Navigate to the Run tab: mcp_cursor-ide-browser_browser_navigate
2. Take a snapshot to verify UI: mcp_cursor-ide-browser_browser_snapshot
3. Enter a test query and click Run
4. Wait for events to appear
5. Take screenshot for visual verification: mcp_cursor-ide-browser_browser_take_screenshot
6. Click on expand/collapse buttons to test interactions
7. Verify state changes are visible
8. Test timeline slider functionality
9. Check that tool calls display correctly
10. Verify token counts are accurate
```

### Test Scenarios to Run:
1. **Simple agent** - Single LlmAgent with no tools (verify model calls display)
2. **Agent with tools** - Agent using exit_loop tool (verify tool call display)
3. **LoopAgent workflow** - Author/critic loop (verify multiple agent sections, state changes)
4. **State-heavy workflow** - Agent that writes to output_key (verify state visualization)
5. **Error case** - Agent that fails (verify error display)

---

## Priority Order

### Phase 1 (High Impact, Medium Effort)
1. Tool Call Cards with collapsible responses
2. State Panel Sidebar with live updates
3. Agent Status Headers
4. Event Type Filters

### Phase 2 (High Impact, Higher Effort)  
5. Visual Timeline Bar
6. State Diff Highlighting
7. Error Highlighting
8. Token Visualization

### Phase 3 (Polish)
9. Export capabilities
10. Playback controls
11. Search and bookmarks
12. Responsive improvements

---

## Implementation Notes

- Use CSS transitions for smooth animations
- Consider using `framer-motion` or CSS keyframes for event appearance animations
- Store run data in Zustand store for persistence across tab switches
- Use `requestAnimationFrame` for smooth timeline scrubbing
- Consider virtualization for very long event lists (hundreds of events)

