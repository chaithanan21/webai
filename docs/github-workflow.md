# Git and GitHub Workflow

## Branch Strategy

- `main`: production-ready branch
- `feature/<name>`: new work
- `fix/<name>`: bug fixes
- `chore/<name>`: maintenance work

## Delivery Flow

1. Start with `meeting-explorer` or `ai-team-orchestrator`.
2. Define scope with `business-analyst`.
3. Lock design with `solution-architect` when the change is non-trivial.
4. Implement on a feature branch.
5. Review with `qa-engineer`.
6. Open a pull request using the PR template.
7. Merge only when tests and review are complete.

## Recommended Branch Examples

- `feature/auth-login`
- `feature/user-profile-api`
- `fix/payment-timeout`
- `chore/update-ci`

## Pull Request Rules

- Keep pull requests small.
- Include a real test plan.
- Call out migrations, env vars, and rollback steps.
- Do not mix unrelated refactors into one PR.

## Release Readiness

Before merge or deploy:

- Acceptance criteria are met
- Risks are documented
- Manual and automated checks are done
- Rollback plan is known
- Required approvals are complete
