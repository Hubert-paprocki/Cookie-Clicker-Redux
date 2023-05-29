describe('Cookie Clicker App', () => {
  it('should increase the cookie count when the cookie is clicked', () => {
    cy.visit('https://cookieclicker-hp.web.app/')
    cy.get('[data-testid="cookie-button"]').click()
    cy.get('[data-testid="cookie-number"]').should('have.text', '1');
    cy.get('[data-testid="cookie-button"]').click()
    cy.get('[data-testid="cookie-number"]').should('have.text', '2');

  })
})