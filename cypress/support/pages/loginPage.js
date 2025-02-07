class loginPage{
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    validateLoginErrorMessage() {
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match')
    }

    login(username, password){
        this.fillUsername(username)
        this.fillPassword(password)
        this.clickLogin()
    }
}
export default new loginPage()