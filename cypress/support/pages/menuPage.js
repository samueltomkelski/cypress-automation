class menuPage{

    openMenu() {
        cy.get('#react-burger-menu-btn').click()
    }

    logout() {
        cy.get('[data-test="logout-sidebar-link"]').click()
    }
}
export default new menuPage()
