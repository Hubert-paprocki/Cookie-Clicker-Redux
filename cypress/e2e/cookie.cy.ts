describe('Cookie Clicker App', () => {
  it('should increase the cookie count when the cookie is clicked', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="cookie-button"]').click()
    cy.get('[data-testid="cookie-number"]').should('have.text', '1');

  })
})