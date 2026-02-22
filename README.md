# web-test-automation-cypress

A structured end-to-end test automation framework built with **Cypress**, covering real-world test scenarios with GitHub Actions CI/CD integration.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Cypress on Your Machine](#setup-cypress-on-your-machine)
- [Folder Structure](#folder-structure)
- [Running Cypress from the Command Line](#running-cypress-from-the-command-line)
- [GitHub Integration & CI/CD with GitHub Actions](#github-integration--cicd-with-github-actions)

---

## Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Setup Cypress on Your Machine

### 1. Clone the Repository

```bash
git clone https://github.com/asmaanewigy32/CypressPractice.git
cd CypressPractice
```

### 2. Install Dependencies

```bash
npm install
```

This will install Cypress and all other dependencies listed in `package.json`.

### 3. Verify Cypress Installation

```bash
npx cypress verify
```

### 4. Open Cypress Test Runner (GUI)

```bash
npx cypress open
```

---

## Folder Structure

```
CypressPractice/
│
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline configuration
│
├── cypress/
│   ├── e2e/                # End-to-end test files
│   │   ├── todo.cy.js      # Test suite for Todo functionality
│   │   └── user.cy.js      # Test suite for User functionality
│   │
│   ├── fixtures/           # Static test data (JSON files used as mock data)
│   │
│   └── support/
│       ├── commands.js     # Custom Cypress commands (reusable actions)
│       └── e2e.js          # Global configuration loaded before every test file
│
├── node_modules/           # Installed npm packages (auto-generated, not committed)
├── .gitignore              # Files and folders excluded from Git tracking
├── cypress.config.js       # Cypress configuration (baseUrl, timeouts, etc.)
├── package-lock.json       # Exact dependency tree lock file
├── package.json            # Project metadata and npm scripts
└── README.md               # Project documentation
```

### Key Files Explained

| File / Folder | Purpose |
|---|---|
| `cypress/e2e/todo.cy.js` | Contains test cases for Todo-related scenarios |
| `cypress/e2e/user.cy.js` | Contains test cases for User-related scenarios |
| `cypress/fixtures/` | Holds JSON data files used as test data inputs |
| `cypress/support/commands.js` | Defines custom commands to avoid code repetition across tests |
| `cypress/support/e2e.js` | Runs before every spec file; imports global setup and custom commands |
| `cypress.config.js` | Main Cypress configuration file (base URL, viewport, spec patterns, etc.) |
| `.github/workflows/` | YAML files that define the GitHub Actions CI pipeline |

---

## Running Cypress from the Command Line

Instead of using the Cypress GUI runner, you can run tests headlessly from the terminal — ideal for CI pipelines or quick execution.

### Run All Tests (Headless Mode)

```bash
npx cypress run
```

### Run a Specific Test File

```bash
npx cypress run --spec "cypress/e2e/todo.cy.js"
```

```bash
npx cypress run --spec "cypress/e2e/user.cy.js"
```

### Run Tests in a Specific Browser

```bash
npx cypress run --browser chrome
```

```bash
npx cypress run --browser firefox
```

### Run Tests in Headed Mode (Browser Visible)

```bash
npx cypress run --headed
```

### Run Tests with a Specific Environment

```bash
npx cypress run --env environment=staging
```

---

## GitHub Integration & CI/CD with GitHub Actions

This project is integrated with **GitHub Actions** to automatically run tests on every push or pull request.

### Step 1 – Push Your Code to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/asmaanewigy32/CypressPractice.git
git push -u origin main
```

### Step 2 – GitHub Actions Workflow

The CI pipeline is defined inside `.github/workflows/`. GitHub Actions automatically picks up any `.yml` file placed in that directory.

A typical Cypress workflow file looks like this:

```yaml
name: Cypress Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          browser: chrome
          headed: false
```

### Step 3 – Monitor Pipeline Results

After pushing, navigate to your repository on GitHub → **Actions** tab → select the workflow run to view test results, logs, and any failures.

---

## Notes

- The `node_modules/` folder is excluded from Git via `.gitignore` — always run `npm install` after cloning.
- Fixtures in `cypress/fixtures/` can be used inside tests via `cy.fixture('filename')`.
- Custom commands defined in `cypress/support/commands.js` are globally available across all spec files without the need to import them manually.
