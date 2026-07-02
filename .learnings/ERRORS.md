# Errors

命令失败、集成异常与排障记录。

---

## [ERR-20260702-001] shell

**Logged**: 2026-07-02T10:58:26+08:00
**Priority**: low
**Status**: pending
**Area**: tooling

### Summary
Repository inspection hit two avoidable shell issues: zsh glob expansion on unquoted patterns and a fragile awk one-liner.

### Details
While analyzing `public/share`, a `find` command with unquoted `vite.config.*` triggered `zsh: no matches found`, and a compact awk grouping command failed with a syntax error. Both were read-only inspection attempts and did not affect project files or conclusions.

### Suggested Action
Quote glob patterns in zsh commands and keep portable awk snippets simple; for quick directory grouping, prefer `find ... | sed ... | sort | uniq -c`.

## [ERR-20260702-002] figma-ui-restore

**Logged**: 2026-07-02T11:05:35+08:00
**Priority**: medium
**Status**: pending
**Area**: tooling

### Summary
Figma UI restore verification hit environment failures after node data was available.

### Details
Figma MCP successfully returned the target node data for `public/share`, but direct shell access to the Figma image export endpoint failed with DNS resolution errors. Playwright's bundled Chromium was missing, and launching the system Chrome in headless mode aborted in this sandbox. The implementation used the exact Figma vector path from MCP node data and verified with `npm run generate`.

### Suggested Action
For this environment, prefer Figma MCP node geometry as the reliable source for vector-only assets. Use build verification when browser automation is blocked, and avoid printing local config values while searching for tool credentials.
