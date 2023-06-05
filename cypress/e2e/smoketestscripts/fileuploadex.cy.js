///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('addemployee.json');
      
     //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it.only('Cypress Test Case - Understanding upload file - Select file', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('C:/Users/Raju/Documents/AnushaCypress/cypress/fixtures/addemployee.json');
      
      //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it.only('Cypress Test Case - Understanding download file ', function () {
  
      cy.downloadFile("https://www.tajmahalinagra.com/wp-content/uploads/2023/01/One-Day.jpg", "cypress/downloads", "tajmahal.jpg")
      cy.readFile('cypress/downloads/tajmahal.jpg').should('exist')
    })

  })