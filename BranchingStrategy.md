# Branching Strategy

## Core Branches

We maintain the following core branches:

* `main`
* `prod`
* `pre-prod`
* `staging`
* `uat`

---

## Development Workflow

### 1. Create an Issue

* Before starting any feature or fix, create an issue in the repository.
* Link all development work to this issue.

### 2. Create a Feature Branch

* Pull the latest code from `pre-prod`.
* Create a new feature branch associated with the issue.

### 3. Development & Testing

* Implement the required changes in your feature branch.
* Test your code in the `staging` environment to ensure correctness.

### 4. Commit Changes

* Add and commit your changes with meaningful commit messages.

### 5. Sync with UAT

* Pull the latest changes from `uat`.
* Resolve any merge conflicts locally.

### 6. Push to UAT

* Push your updated feature branch changes to the `uat` branch.

### 7. Deployment Process

* Request the admin for deployment.
* The admin will review and promote changes from `uat` to `prod`.

---

## Notes

* Always ensure your branch is up to date before pushing.
* Resolve conflicts carefully to avoid breaking existing functionality.
* Follow consistent naming conventions for branches (e.g., `feature/issue-id-description`).
* Ensure proper testing before requesting deployment.