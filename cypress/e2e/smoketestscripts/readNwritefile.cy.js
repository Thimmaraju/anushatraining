///<reference types="cypress"/>

import login from '../pageobjects/Login/loginpage.po'

import logindata from '../fixtures/logincreds.json'

import dashboard from '../pageobjects/Dashboard/dashboeardpage.po'

describe('Automation - Write file and Read file ', function () {

    it('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Raju\n")
     
    })

    it('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test6.json', { firstname: 'G', lastname: 'Raju'});
     
    })

    it('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/Arunregisterdata.json').should('exist')

        cy.readFile('cypress/fixtures/logincreds.json').its('password').should('eq','admin123')

         cy.readFile('cypress/fixtures/module2/test6.json').its('firstname').should('eq','G')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Raju');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Raju\nCypress Trainer')       
    })


    it.only('Cypress Test Case - Capture Text ', function () {
        
        cy.visit("/")
        cy.xpath(login.Orangehrmlogo).should("be.visible")
        //actions
        cy.login(logindata.username, logindata.password)
    
        //Assertions
    
        cy.url().should("eq", logindata.dashboardurl)
    
        cy.url().should("include", logindata.partialdashurl)
    
        //or
        cy.contains(dashboard.dashboardpageheader()).should("be.visible")

        cy.contains("Buzz").click()
    
       cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })
    })

  })