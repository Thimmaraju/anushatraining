///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('module1/test4.txt');
      
      //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('D:/LearnCypressB11/cypress/fixtures/module1/test4.txt');
      
      //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it.only('Cypress Test Case - Understanding download file ', function () {
  
      cy.downloadFile("https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTJPFtBAdUsu4YS-P4o_ik1qom-jJPV7J4oi1w8xuvm1uaX81KxDI8iNyk1txlIDCG7eEEHQpHFAoM_l9I", "cypress/Raju", "deer.jpg")
    })

  })