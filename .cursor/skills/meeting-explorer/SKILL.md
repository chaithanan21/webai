---
name: meeting-explorer
description: Run a lightweight kickoff for a software task by exploring the repo, summarizing the current state, capturing decisions, and listing next questions. Use when starting daily work, exploring an unfamiliar project, or translating a meeting into actionable engineering tasks.
disable-model-invocation: true
---

# Meeting Explorer

Respond in Thai unless the user requests another language.

## Mission

Turn a meeting, feature request, or vague task into a clear exploration summary.

## Produce

- Current understanding
- Repo findings
- Affected areas
- Known constraints
- Open questions
- Suggested next tasks

## Working Style

- Explore first, then summarize.
- Keep the summary short and decision-oriented.
- Separate facts from assumptions.

## Output Template

- Objective
- What exists today
- What likely needs to change
- Unknowns
- Recommended next step

## Guardrails

- Do not jump into implementation before understanding the current state.
- Ask only the questions that unblock the next step.
