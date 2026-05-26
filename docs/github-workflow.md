# Git and GitHub Workflow

## Branch Strategy

- `main`: production-ready branch
- `feature/<name>`: new work
- `fix/<name>`: bug fixes
- `chore/<name>`: maintenance work

## Delivery Flow

1. Start with `meeting-explorer` or `ai-team-orchestrator`.
2. Open or refine an issue using the GitHub issue forms.
3. Define scope with `business-analyst`.
4. Lock design with `solution-architect` when the change is non-trivial.
5. Implement on a feature branch.
6. Review with `qa-engineer`.
7. Open a pull request using the PR template.
8. Wait for CI to pass, including Docker build validation.
9. Merge only when tests, review, and deployment notes are complete.

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
- Fill every required PR section or the PR quality workflow will fail.

## Issue Intake Rules

- Use `Feature request` for new capabilities.
- Use `Bug report` for defects with reproduction steps.
- Use `Delivery task` for scoped engineering work connected to a parent issue or PR.
- Capture business value, acceptance criteria, and validation scope early.

## Release Readiness

Before merge or deploy:

- Acceptance criteria are met
- Risks are documented
- Manual and automated checks are done
- Rollback plan is known
- Required approvals are complete
