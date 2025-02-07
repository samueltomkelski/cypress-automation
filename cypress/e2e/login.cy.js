/// <reference types="cypress" />
import loginPage from '../support/pages/loginPage';
import menuPage from '../support/pages/menuPage';
import productPage from '../support/pages/productPage';

describe('Validate the login', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.fixture('users').as('users')
    loginPage.visit()
  })

  it('Should login successfully with VALID credentials', function () {
    loginPage.login(this.users.validUser.username, this.users.validUser.password)
    productPage.validateProductTitleFound()
    menuPage.openMenu()
    menuPage.logout()
  })

  it('Should fail login with INVALID credentials', function() {
    loginPage.login(this.users.invalidUser.username, this.users.invalidUser.password)
    loginPage.validateLoginErrorMessage()
  })
})