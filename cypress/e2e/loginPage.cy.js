describe('Positive Login Page functionality', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Loads the web app with the correct elements', () => {
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('input[type="checkbox"][name="remember"]').should('exist');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Displays the correct web title', () => {
    cy.title().should('eq', 'WEB Title | Home');
  });

  it('should show password when eye icon is clicked', () => {
    cy.get('#password').type('password123');
    cy.get('button[type="button"]').click();
    cy.get('#password').should('have.attr', 'type', 'text');
  });

  it('should hide password when eye icon is clicked again', () => {
    cy.get('#password').type('password');
    cy.get('button[type="button"]').click();
    cy.get('button[type="button"]').click();
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('should allow toggling the Remember me checkbox', () => {
    cy.get('input[type="checkbox"][name="remember"]').check().should('be.checked');
    cy.get('input[type="checkbox"][name="remember"]').uncheck().should('not.be.checked');
  });

  it('Logs in a user with valid credentials', () => {
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/home');
  });

  it('Should redirect the user to the forgot password page', () => {
    cy.get('a[href="/password/reset"]').click();
    cy.url().should('include', '/password/reset');
    cy.get('#email').type(Cypress.env('email'));
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('We have e-mailed your password reset link!');
    });
  });

});

describe('Negative Login Page functionality', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('should show an error message with invalid email (non-existent user)', () => {
    cy.get('#email').type(Cypress.env('invalidEmail'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('User not found!!');
    });
  });

  it('should show an error message with invalid password', () => {
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('invalidPassword'));
    cy.get('button[type="submit"]').click();

    cy.get('.alert').should('be.visible');
  });

  it('Should display an alert if both fields are empty', () => {
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out this field.');
    });
  });

  it('Should display an alert if email field is empty', () => {
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out this field.');
    });
  });

  it('Should display an alert if password field is empty', () => {
    cy.get('#email').type(Cypress.env('email'));
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out this field.');
    });
  });

  it('Should display an alert if email is invalid', () => {
    cy.get('#email').type('brayo');
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Invalid credentials.');
    });
  });

  it('Should display an alert if password is invalid', () => {
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('invalidPassword'));
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Invalid credentials.');
    });
  });

});
