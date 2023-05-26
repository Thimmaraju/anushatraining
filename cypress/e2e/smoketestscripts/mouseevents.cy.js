///<reference types="cypress"/>

describe('Automation - Working Mouse events', function () {


    it('Cypress Test Case - Understanding Right click, Mouse over, doubleclick', function () {

      
  
      cy.visit('https://www.programsbuzz.com/');

      cy.contains('Start Learning').rightclick();

      cy.wait(2000),

      cy.log("check the context menu")

      cy.contains('Tutorials').trigger('mouseover');
      
      cy.log("Hovering on Tutorials")
      
      cy.wait(2000),
      cy.contains('Contact').dblclick();
    })

  })