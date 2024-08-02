// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', () => {
//     cy.request({
//       method: 'GET',
//       url: 'https://app.solutechlabs.com/login', // Visit the login page to get the CSRF token
//     }).then((response) => {
//       const html = document.createElement('html');
//       html.innerHTML = response.body;
//       const token = html.querySelector('input[name="_token"]').getAttribute('value');
  
//       cy.request({
//         method: 'POST',
//         url: 'https://app.solutechlabs.com/login',
//         form: true,
//         body: {
//           email: 'muhammad@solutech.com',
//           password: '0787934996',
//           _token: token,
//         },
//       }).then((res) => {
//         expect(res.status).to.eq(200);
        
//         const cookies = res.headers['set-cookie'];
//         cookies.forEach(cookie => {
//           const parts = cookie.split(';');
//           const [name, value] = parts[0].split('=');
//           cy.setCookie(name, decodeURIComponent(value), { secure: true, httpOnly: true });
//         });
//       });
//     });
// });
