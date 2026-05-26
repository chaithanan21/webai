# AI Team Workspace

This workspace scaffolds a daily AI delivery team for programming work in Cursor.

## Included Roles

- `ai-team-orchestrator`: kickoff, explore, planning, routing, status
- `meeting-explorer`: daily kickoff, repo exploration, meeting summary
- `business-analyst`: requirements, user stories, acceptance criteria
- `solution-architect`: architecture, data flow, technical decisions
- `backend-developer`: services, data, jobs, integration
- `api-developer`: API contracts, endpoints, validation, errors
- `frontend-developer`: UI flows, state, integration, UX details
- `qa-engineer`: test strategy, bug reporting, release readiness
- `github-devops`: branch, PR, CI/CD, deploy checklist

## Recommended Daily Flow

1. Start with `ai-team-orchestrator`.
2. Use `meeting-explorer` when you need a fast kickoff or repo discovery pass.
3. Let `business-analyst` convert the request into clear scope and acceptance criteria.
4. Let `solution-architect` design the implementation slices.
5. Use the relevant developer role for code work.
6. Run `qa-engineer` before merge or release.
7. Use `github-devops` for branches, pull requests, CI, and deployment steps.

## Example Prompts

- "Use `ai-team-orchestrator` to explore this repo and create today's plan."
- "Use `meeting-explorer` to summarize the current repo and today's likely work."
- "Use `business-analyst` to turn this feature into user stories and acceptance criteria."
- "Use `solution-architect` to propose the backend, API, and frontend design."
- "Use `backend-developer` to implement the service layer for this feature."
- "Use `api-developer` to define the API contract and add the endpoint."
- "Use `frontend-developer` to build the UI and wire it to the API."
- "Use `qa-engineer` to create a test plan and review release readiness."
- "Use `github-devops` to prepare branch strategy, PR notes, and deploy checklist."

## GitHub Workflow

- Keep work in small branches.
- Open small reviewable pull requests.
- Require QA review before merge.
- Let CI validate build and tests.
- Deploy only after the change is merge-ready.

## Included Docs

- `docs/github-workflow.md`: branch and PR process
- `docs/github-setup.md`: connect this local repo to GitHub
