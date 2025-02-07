class productPage{
    validateProductTitleFound() {
        cy.get('[data-test="title"]').should('have.text', 'Products')
    }
}
export default new productPage()
