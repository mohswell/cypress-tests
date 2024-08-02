describe('Positive Dashboard Page functionality', () => {
    before(() => {
        // Visit the login page
        cy.visit('https://app.solutechlabs.com/login');
    
        // Perform login by entering email and password
        cy.get('input[name="email"]').type('muhammad@solutech.co.ke');
        cy.get('input[name="password"]').type('0787934996');
        cy.get('button[type="submit"]').click();
    
        // Optionally, wait for a period of time to ensure that the login session is established
        cy.wait(60000);  // Wait for 1 minute (60,000 ms) before running the tests
    
        // Visit the homepage after successful login
        cy.visit('https://app.solutechlabs.com/home');
      });
    
      beforeEach(() => {
        cy.visit('https://app.solutechlabs.com/home');  // Visit the homepage
      });

    it('Displays the correct web title', () => {
        cy.title().should('eq', 'SIRAI LIMITED | Solutech SA')
    });

    // it('should display the navigation bar', () => {
    //     cy.get('header#topnav').should('be.visible');
    // });

    // it('Loads the solutech web app with the correct elements', () => {
        
    // });

});