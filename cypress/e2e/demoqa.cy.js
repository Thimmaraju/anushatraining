describe('Demo Qa functionality', () => {
    it('Edit box Atuomation', () => {

        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
          
      cy.visit('https://demoqa.com/text-box')
      cy.xpath('//input[@placeholder="Full Name"]').type('Yashaswini')
      cy.get('#userEmail').type('Yashswini@gmail.com')
      cy.get('#currentAddress').type('Bangalore')
      cy.get('#permanentAddress').type('Sira')
      cy.get('#submit').click()

    })

    it('Edit box Atuomation - 2', () => {

        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
          
      cy.visit('https://demoqa.com/text-box')
      cy.get('#userName').type('Yashaswini')
      cy.get('#currentAddress').type('Bangalore')
      cy.get('#permanentAddress').type('Sira')
      cy.get('#submit').click()

    })
  })