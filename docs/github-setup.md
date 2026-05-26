# GitHub Setup

## Current State

- Local git repository is initialized
- Default branch is `main`
- GitHub CLI is not installed on this machine

## Option A: Connect an Existing GitHub Repository

```powershell
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Option B: Create a New GitHub Repository in the Browser

1. Create a new empty repository on GitHub.
2. Copy the repository URL.
3. Run:

```powershell
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Option C: Create a New Repository with GitHub CLI

Install GitHub CLI first, then run:

```powershell
gh auth login
gh repo create
git push -u origin main
```

## Before First Push

- Review `.gitignore`
- Check that no secrets are tracked
- Confirm repository name and visibility
