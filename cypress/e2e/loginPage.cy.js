describe('Positive Login Page functionality', () => {
  
  beforeEach(() => {
    cy.visit('https://app.solutechlabs.com/')
  });

  it('Loads the solutech web app with the correct elements', () => {
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('input[type="checkbox"][name="remember"]').should('exist');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Displays the correct web title', () => {
    cy.title().should('eq', 'Solutech SAT SIRAI LIMITED')
  });

  it('should show password when eye icon is clicked', () => {
    cy.get('#password').type('password123');
    cy.get('button[type="button"]').click();

    // Assert that the type attribute of the password field is now 'text'
    cy.get('#password').should('have.attr', 'type', 'text');
  });

  it('should hide password when eye icon is clicked again', () => {
    cy.get('#password').type('password');
    cy.get('button[type="button"]').click();
    cy.get('button[type="button"]').click();

    // Assert that the type attribute of the password field is now 'password'
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('should allow toggling the Remember me checkbox', () => {
    cy.get('input[type="checkbox"][name="remember"]').check().should('be.checked');
  
    // Uncheck to verify unchecking works as expected
    cy.get('input[type="checkbox"][name="remember"]').uncheck().should('not.be.checked');
  });


  it('Logs in a user with valid credentials', () => {
    cy.get('#email').type('muhammad@solutech.co.ke');
    cy.get('#password').type('0787934996');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/home');
  });

  it('Should redirect the user to the forgot password page', () => {
    cy.get('a[href="https://app.solutechlabs.com/password/reset"]').click();
    cy.url().should('include', '/password/reset');
    cy.get('#email').type('muhammad@solutech.co.ke');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('We have e-mailed your password reset link!');
    });
  });

}); 

describe('Negative Login Page functionality', () => {

  beforeEach(() => {
    cy.visit('https://app.solutechlabs.com/')
  });


  it('should show an error message with invalid email(Same as user is not existent)', () => {
    cy.get('#email').type('kipchumba.murkomen@solutech.co.ke');
    cy.get('#password').type('0787934996');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('User not found!!');
    });
  });


  it('should show an error message with invalid password', () => {
    cy.get('#email').type('nakhumicha@solutech.co.ke');
    cy.get('#password').type('8082765367654356');
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
    cy.get('#email').type('kuria@solutech.co.ke');
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
    cy.get('#email').type('kindiki@solutech.co.ke');
    cy.get('#password').type('incorrect passwrd');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Invalid credentials.');
    });
  });

});