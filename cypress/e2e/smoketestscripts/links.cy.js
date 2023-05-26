
describe('Automation - Working With Links', function () {
  
  it('Cypress Test Case - Understanding Links and how to work with Links', function () {
    cy.visit('https://www.wikipedia.org/');
    cy.get('a').contains('Raju').click();
    cy.origin('https://commons.wikimedia.org', () => {
      cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")
      cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');
      cy.get('a').should('have.length', 684)
      cy.get('a').its('length').then((elelength) => {
        var lengthcount = elelength
        cy.log(lengthcount)
        expect(lengthcount).to.equal(684)
      })
      cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength) => {
        cy.log(elelength)
        expect(elelength).to.equal(5)
      })
      cy.get('.vector-menu-content-list').eq(5).find('a').then((txt) => {
        var x = txt.text()
        cy.log(x)
      })

    })

  })

})