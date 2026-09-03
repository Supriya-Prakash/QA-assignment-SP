# QA Automation Assignment

## Overview
The project demonstrates an automated solution for the application's login functionality. The solution focuses on functional test coverage, accessibility tests, maintainable test design, cross-browser execution, Docker-based test execution and CI/CD pipeline integration.

## Tech Stack

- Cypress
- TypeScript
- Cucumber / Gherkin
- Page Object Model
- Mochawesome
- Docker
- GitHub Actions
- Vue.js / Vite
- cypress-axe

## Running Tests Locally

### Prerequisites

- Node.js
- npm
- Docker (optional)

### Install Dependencies

```bash
npm install
```

### Install Application Dependencies

```bash
cd app
npm install
```

### Start the Application
From the `app` directory:
```bash
npm run dev
```
The application runs on host `http://localhost:5173`.

### Run Cypress
From the project root:
```bash
npx cypress open
```

For headless execution:
```bash
npx cypress run
```

### Run on a Specific Browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

### Run Tests by Tag
Cucumber tags can be used to run specific groups of tests:

```bash
npx cypress run --env tags="@accessibility"
npx cypress run --env tags="@negative and @boundary"
npx cypress run --env tags="not @accessibility"
```

Available tags:

```
@smoke
@negative
@credentials
@boundary
@format
@recovery
@session
@accessibility
```

## Test Coverage
The test suite contains **23 automated tests**:
- **21 functional tests**
  - Successful login
  - Invalid and boundary credentials
  - Invalid email format
  - Login recovery scenarios
  - Session persistence
  - Logout behaviour
  - End-to-end user journey
- **2 accessibility tests**
  - Login page
  - Home page

## Docker
The setup uses a single container containing both the application and Cypress test runner.

### Build the Docker image

```bash
docker build -f Dockerfile.combined -t qa-assignment-sp .
```

### Run Functional Tests

Chrome:
```bash
docker run --rm \
  -e BROWSER=chrome \
  -e CYPRESS_TAGS="not @accessibility" \
  qa-assignment-sp
```

Firefox:
```bash
docker run --rm \
  -e BROWSER=firefox \
  -e CYPRESS_TAGS="not @accessibility" \
  qa-assignment-sp
```

### Run Accessibility Tests

Chrome:
```bash
docker run --rm \
  -e BROWSER=chrome \
  -e CYPRESS_TAGS="@accessibility" \
  qa-assignment-sp
```

## CI/CD
GitHub Actions is used to run the automated tests.

The pipeline:
- Builds the Docker image
- Runs functional tests on Chrome and Firefox
- Executes the browser jobs in parallel
- Uploads screenshots when tests fail
- Uploads Mochawesome reports as CI artifacts
- Provides an option to manually run accessibility tests

Functional tests run automatically on configured pushes and pull requests.
Accessibility tests can be included through the manually triggered workflow option.

## Framework Design
The framework uses:
- **Page Object Model** to separate UI interactions from test scenarios
- **Centralized selectors** to maintain locators
- **Fixtures** for test data
- **Cucumber/Gherkin** to describe test behaviour
- **Tags** to allow selective test execution

## Accessibility
Accessibility testing uses `cypress-axe` and checks:
- WCAG 2.0 Level A
- WCAG 2.0 Level AA
- WCAG 2.1 Level A
- WCAG 2.1 Level AA

Automated checks are complemented by manual checks covering:
- Keyboard navigation
- Focus visibility
- Tab order
- Zoom behaviour

Known accessibility findings are documented in `docs/bugs.md`.

## Reporting
Mochawesome is used for test reporting.
CI artifacts include:
- Test execution reports
- Failure screenshots

Reports and screenshots are excluded from version control.

## Known Bugs / Findings
Application and accessibility findings identified during testing are documented here: `docs/bugs.md`