describe('Positive Dashboard Page functionality', () => {
  before(() => {
    // Visit the login page
    cy.visit(`${Cypress.env('baseUrl')}/login`);

    // Perform login by entering email and password
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();

    // Optionally, wait for a period of time to ensure that the login session is established
    cy.wait(60000);  // Wait for 1 minute (60,000 ms) before running the tests

    // Visit the homepage after successful login
    cy.visit(`${Cypress.env('baseUrl')}/home`);
  });

  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}/home`);  // Visit the homepage
  });

  it('Displays the correct web title', () => {
    cy.title().should('eq', 'Web Title | Home');
  });
  it('should display the navigation bar', () => {
        cy.get('header#topnav').should('be.visible');
  });
});
