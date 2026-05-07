# Git Branching Strategy

## Purpose

This document defines the Git branching strategy, naming conventions, and development workflow used across the project.

The goals of this strategy are:

- Maintain stable production releases
- Keep development workflow simple
- Enable controlled releases
- Improve collaboration and traceability
- Support CI/CD pipelines and automated deployments

---

# Branch Overview

| Branch | Purpose |
|---|---|
| `main` | Production-ready stable code |
| `dev` | Active development and integration branch |

---

# Permanent Branches

## `main`

The `main` branch always represents:

- Stable production-ready code
- Deployable releases
- Tagged versions/releases

### Rules

- No direct commits
- Only merge from:
  - `dev`
  - `hotfix/*`
- Protected branch recommended
- Every production release should be tagged

---

## `dev`

The `dev` branch is the primary integration branch.

All feature development, tasks, UI work, testing, and configurations are merged into `dev` before being promoted to production.

### Rules

- Developers branch from `dev`
- Pull requests target `dev`
- CI validation must pass before merge

---

# Temporary Working Branches

All work should be done using short-lived branches created from `dev`.

---

# Branch Naming Convention

Format:

```text
<type>/<issue-id>-<short-description>
````

Example:

```text
feature/52-user-report-system
```

---

# Branch Types

| Type        | Purpose                                |
| ----------- | -------------------------------------- |
| `feature/*` | New features                           |
| `hotfix/*`  | Production bug fixes                   |
| `task/*`    | Refactoring/internal engineering tasks |
| `config/*`  | Infrastructure/configuration changes   |
| `ui/*`      | Frontend/UI/page-related work          |
| `test/*`    | Testing-related tasks                  |

---

# Examples

## Feature

```text
feature/52-user-report-system
```

## Hotfix

```text
hotfix/81-post-deletion-bug
```

## UI Work

```text
ui/34-profile-page-redesign
```

## Refactor Task

```text
task/91-auth-service-refactor
```

## Config Change

```text
config/15-nginx-production-config
```

## Testing Task

```text
test/45-auth-integration-tests
```

---

# Development Workflow

## 1. Create Branch

Always branch from `dev`.

```bash
git checkout dev
git pull origin dev

git checkout -b feature/52-user-report-system
```

---

## 2. Development

Commit changes using meaningful commit messages.

### Recommended Commit Prefixes

| Prefix      | Purpose             |
| ----------- | ------------------- |
| `feat:`     | New feature         |
| `fix:`      | Bug fix             |
| `refactor:` | Refactoring         |
| `test:`     | Testing             |
| `docs:`     | Documentation       |
| `chore:`    | Miscellaneous tasks |

---

# Commit Examples

```text
feat: add user reporting API
fix: resolve moderation deletion issue
refactor: optimize auth middleware
```

---

## 3. Push Branch

```bash
git push origin feature/52-user-report-system
```

---

## 4. Open Pull Request

### Target Branch

```text
dev
```

### CI Requirements

The following validations must pass before merge:

* Linting
* Type checking
* Tests
* Build validation
* Accessibility checks (frontend)

---

## 5. Merge Into `dev`

After approval and successful CI:

```text
feature/* -> dev
```

---

# Release Workflow

When `dev` becomes stable and ready for production:

```text
dev -> main
```

---

# Production Release Process

## Merge Into Main

```bash
git checkout main
git merge dev
```

---

## Create Release Tag

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

# Release Versioning

The project follows semantic versioning.

Format:

```text
vMAJOR.MINOR.PATCH
```

Example:

```text
v1.2.0
```

---

# Version Meaning

| Version Part | Meaning            |
| ------------ | ------------------ |
| MAJOR        | Breaking changes   |
| MINOR        | New features       |
| PATCH        | Bug fixes/hotfixes |

---

# Hotfix Workflow

Hotfixes are created from `main`.

---

## 1. Create Hotfix Branch

```bash
git checkout main
git pull origin main

git checkout -b hotfix/81-post-deletion-bug
```

---

## 2. Fix Issue

Commit and push normally.

---

## 3. Merge Into Main

```text
hotfix/* → main
```

---

## 4. Merge Back Into Dev

IMPORTANT:

Every hotfix merged into `main` must also be merged back into `dev`.

This prevents:

* branch divergence
* bug reintroduction
* inconsistent releases

---

# CI/CD Strategy

## Pull Request CI

Runs on:

* PRs to `dev`
* PRs to `main`

Validates:

* linting
* tests
* type checking
* build
* accessibility

---

## Development Deployment

Runs on:

```text
push -> dev
```

Deploys:

* development environment
* latest integration build

---

## Release Pipeline

Runs on:

```text
git tag v*
```

Builds:

* production Docker images
* immutable release artifacts

---

# Docker Tagging Strategy

## Mutable Tags

| Tag          | Purpose                          |
| ------------ | -------------------------------- |
| `dev-latest` | Latest development build         |
| `latest`     | Latest stable production release |

---

## Immutable Tags

| Tag      | Purpose                   |
| -------- | ------------------------- |
| `v1.0.0` | Official release version  |
| `sha-*`  | Exact commit traceability |

---