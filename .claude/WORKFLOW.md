# Workflow Orchestration Guidelines

## Core Principles

### 1. Plan Mode Default
Use plan mode for complex tasks. Before diving into implementation:
- Outline the approach
- Identify dependencies
- Break into manageable steps
- Consider edge cases

### 2. Subagent Strategy
Delegate to subagents for clean context:
- Spawn subagents for isolated, well-defined tasks
- Keep main session context focused
- Use subagents for research, boilerplate generation, testing

### 3. Self-Improvement Loop
Update lessons.md after corrections:
- Document what went wrong
- Record the fix
- Note patterns to avoid
- Build institutional knowledge

### 4. Verification Before Done
Test and prove work is complete:
- Run the code
- Check all requirements met
- Verify edge cases handled
- Don't mark done until verified

### 5. Demand Elegance
Seek elegant solutions, avoid hacky fixes:
- If it feels wrong, it probably is
- Refactor rather than patch
- Clean code > quick code
- Technical debt compounds

### 6. Autonomous Bug Fixing
Fix bugs independently when possible:
- Read error messages carefully
- Check logs and stack traces
- Research similar issues
- Implement and test fix
- Only escalate if truly stuck

## Development Workflow

### Starting a Feature
1. Read relevant docs in `.claude/docs/`
2. Plan the implementation
3. Create branch: `feature/feature-name`
4. Implement with tests
5. Verify locally
6. Commit with clear message

### Code Standards
- TypeScript strict mode
- ESLint + Prettier
- Component-per-file
- Descriptive naming
- Comments for why, not what

### Commit Messages
```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting
- refactor: code restructure
- test: adding tests
- chore: maintenance
```
