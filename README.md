# E2E Testing with Cypress

This repository contains end-to-end (E2E) tests for the a web application using [Cypress](https://www.cypress.io/). These tests cover login functionality, dashboard verification, and error handling on the login page, ensuring that the app behaves as expected.

## Table of Contents
- [Project Overview](#project-overview)
- [Cypress Overview](#cypress-overview)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Files Explanation](#test-files-explanation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Project Overview
This E2E test suite is designed to verify critical user workflows in a web app. These include:
- Logging into the application with valid credentials.
- Handling incorrect login attempts.
- Verifying elements and functionality on the dashboard and login page.

By automating these tests with Cypress, you can ensure that essential features work as expected across various scenarios, from positive logins to incorrect credential handling.

## Cypress Overview
Cypress is a powerful, modern E2E testing framework built for the web. Unlike other testing frameworks, Cypress runs within the same context as your application, enabling fast, reliable, and consistent test results.

### Why Cypress?
- **Fast and Reliable**: Run tests directly in your browser.
- **Real-time Reloading**: Instant feedback while you test.
- **Easy Debugging**: View test results directly from the browser's developer tools.

For more information, visit the [Cypress website](https://www.cypress.io/).

## Installation

To get started with this repository, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (Ensure you have Node.js version >=12 installed)

### Clone the Repository
```bash
git clone https://github.com/mohswell/cypress-tests.git
cd cypress-tests
```

### Install Dependencies
Run the following command to install all dependencies, including Cypress:
```bash
npm install
```

## Running the Tests

### Open Cypress Test Runner
To open the Cypress Test Runner, run the following command:
```bash
npx cypress open
```
This will launch an interactive UI where you can select and run tests manually.

### Run Tests in Headless Mode
If you prefer to run tests in headless mode (without a UI), execute:
```bash
npx cypress run
```
This will run all tests in the background and display the results in your terminal.

### Headless Mode with Specific Browser
To run tests using a specific browser (e.g., Chrome), use:
```bash
npx cypress run --browser chrome
```

## Test Files Explanation

This project contains two key test files that cover both positive and negative scenarios for login and dashboard functionalities.

### 1. `dashboard_spec.js`
This file contains tests related to the dashboard page. It verifies that the user can access the dashboard after successful login, and it checks that critical UI elements like titles are displayed correctly.

#### Key Tests:
- **Correct Web Title Display**: Verifies that the page title matches the expected value.
- **Dashboard Navigation**: Ensures the user can navigate through the dashboard after logging in.

#### Example:
```javascript
it('Displays the correct web title', () => {
  cy.title().should('eq', 'Web Title | Home');
});
```

### 2. `login_spec.js`
This file includes both positive and negative tests for the login functionality, ensuring the app handles valid and invalid login attempts correctly. It checks the login page for correct UI elements, remembers user preferences, and handles invalid credentials gracefully.

#### Key Tests:
- **Successful Login**: Verifies that valid users can log in and access the homepage.
- **Invalid Login Handling**: Tests incorrect email, password, and empty field scenarios to ensure the app provides appropriate error messages.
- **Password Visibility Toggle**: Ensures the "eye" icon works as expected for toggling password visibility.

#### Example:
```javascript
it('Logs in a user with valid credentials', () => {
  cy.get('#email').type(Cypress.env('email'));
  cy.get('#password').type(Cypress.env('password'));
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/home');
});
```

## Environment Variables

Sensitive information such as login credentials should be stored securely using environment variables. In Cypress, we use the `cypress.env.json` file for this purpose. This file allows you to store values like email and password without hardcoding them into your test files.

### Setup
1. **Create `cypress.env.json` file** in the root of your project.
2. **Add your environment variables** as follows:
```json
{
  "email": "email@gmail.com",
  "password": "passWord",
  "baseUrl": "https://websiteUrl.com",
}
```

This file is included in `.gitignore` to ensure that sensitive information does not get committed to version control.

### Using Environment Variables in Tests
You can access environment variables in your tests using `Cypress.env()`:

```javascript
cy.get('#email').type(Cypress.env('email'));
cy.get('#password').type(Cypress.env('password'));
```

By utilizing environment variables, you enhance security and keep your credentials safe.

## Usage

### Running the Login Test
This test checks that the user can successfully log in and handle invalid credentials properly.

1. Run the test suite:
   ```bash
   npx cypress run --spec "cypress/integration/login_spec.js"
   ```
2. Check for the following:
   - The correct elements on the login page are visible.
   - Valid and invalid logins are handled properly.
   - The password toggle feature works correctly.

### Running the Dashboard Test
To verify that the dashboard works correctly post-login:

1. Ensure your login test passes.
2. Run the test suite:
   ```bash
   npx cypress run --spec "cypress/integration/dashboard_spec.js"
   ```