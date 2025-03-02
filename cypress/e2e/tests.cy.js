describe('General-scale tests', () => {
  let email;
  let password;

  before(() => {
    email = `test${Date.now()}@gmail.com`;
    password = `Pass${Math.random().toString(36).slice(-8)}!`;
  });

  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000/');
  });

  function openUserMenu() {
    cy.get('[data-test="userMenu"]')
      .should('be.visible')
      .click({ force: true });
  }

  function registerUser(firstName, lastName, email, password) {
    openUserMenu();
    cy.get('[data-test="Register-Menu"]').click({ force: true });
    cy.url().should('include', '/register');

    cy.get('[data-test="firstName-input"]').type(firstName);
    cy.get('[data-test="lastName-input"]').type(lastName);
    cy.get('[data-test="email-input"]').type(email);
    cy.get('[data-test="password-input"]').type(password);
    cy.get('[data-test="register-button"]').click({ force: true });

    cy.url().should('include', '/profile');
    cy.get('[data-test="profile-title"]').should('be.visible');
  }

  function loginUser(email, password) {
    openUserMenu();
    cy.get('[data-test="Login-Menu"]').click({ force: true });
    cy.url().should('include', '/login');

    cy.get('[data-test="email-area"]').type(email);
    cy.get('[data-test="password-area"]').type(password);
    cy.get('[data-test="submit-button"]').click({ force: true });

    cy.url().should('include', '/profile');
    cy.get('[data-test="profile-title"]').should('be.visible');
  }

  it('First visit test', () => {
    cy.get('[data-test="main-title"]').should('be.visible');
    openUserMenu();
    cy.get('[data-test="Register-Menu"]').should('be.visible');
    cy.get('[data-test="Login-Menu"]').should('be.visible');
    cy.get('[data-test="Profile-Menu"]').should('be.visible');
    cy.get('[data-test="Logout-Menu"]').should('be.visible');
  });

  it('Register button test', () => {
    openUserMenu();
    cy.get('[data-test="Register-Menu"]').click({ force: true });
    cy.url().should('include', '/register');
    cy.get('[data-test="signup-form"]').should('be.visible');

    cy.get('[data-test="sign-in-here"]').click({ force: true });
    cy.url().should('include', '/login');
    cy.get('[data-test="login-form"]').should('be.visible');

    cy.get('[data-test="create-an-account"]').click({ force: true });
    cy.url().should('include', '/register');
  });

  it('Login button test', () => {
    openUserMenu();
    cy.get('[data-test="Login-Menu"]').click({ force: true });
    cy.url().should('include', '/login');
    cy.get('[data-test="login-form"]').should('be.visible');

    cy.get('[data-test="create-an-account"]').click({ force: true });
    cy.url().should('include', '/register');
    cy.get('[data-test="signup-form"]').should('be.visible');

    cy.get('[data-test="sign-in-here"]').click({ force: true });
    cy.url().should('include', '/login');
  });

  it('Profile button test', () => {
    openUserMenu();
    cy.get('[data-test="Profile-Menu"]').click({ force: true });
    cy.url().should('include', '/profile');

    cy.get('[data-test="profile-title"]').should('be.visible');
    cy.get('[data-test="button-3"]').should('be.visible');
    cy.get('[data-test="button-2"]').should('be.visible');
    cy.get('[data-test="button-1"]').should('be.visible');
    cy.get('[data-test="button-0"]')
      .should('be.visible')
      .click({ force: true });

    cy.url().should('include', '/movies');
  });

  it('Create random user test', () => {
    registerUser('Test', 'User', email, password);
  });

  it('Login with random user test', () => {
    loginUser(email, password);
  });
});
