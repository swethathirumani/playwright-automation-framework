# Playwright Automation Framework – The Law Reporters

## Project Overview

This project contains UI automation test scripts for The Law Reporters website using Playwright with JavaScript. The framework follows the Page Object Model (POM) design pattern and includes CI/CD integration using GitHub Actions.

## Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- GitHub Actions (CI/CD)

## Setup Instructions

1. Clone the repository:
git clone https://github.com/swethathirumani/playwright-automation-framework.git

2. Install dependencies:
npm install

3. Install Playwright browsers:
npx playwright install

## How to Run Tests

Run all tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

Run tests for specific browser:
npx playwright test --project="Desktop Chrome"

## CI/CD Integration

GitHub Actions is configured to automatically run Playwright tests on every push and pull request.

The pipeline:
- Runs in parallel across Desktop Chrome, Firefox, and Webkit
- Generates Playwright HTML reports
- Uploads reports as artifacts

## Future Improvements

- Data-driven testing implementation
- Accessibility testing (WCAG)
- Performance testing
- Visual regression testing
- Docker containerization