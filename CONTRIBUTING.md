# Contributing

## Delivery Workflow

1. Open an issue using the appropriate GitHub form.
2. Clarify scope and acceptance criteria before implementation.
3. Create a feature or fix branch from `main`.
4. Keep changes small and reviewable.
5. Run local verification before opening a pull request.
6. Fill in the pull request template completely.
7. Merge only after CI is green and risks are understood.

## Branch Naming

- `feature/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`

## Local Checks

Run these before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
```

## Pull Request Expectations

- Link the related issue when one exists.
- Explain the user impact and main risks.
- Include real verification evidence.
- Call out deployment steps, env vars, and rollback notes.
