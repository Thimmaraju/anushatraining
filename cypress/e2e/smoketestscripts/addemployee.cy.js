import login from "../../pageobjects/loginpage.po"
import dashboard from '../../pageobjects/dashboard.po'

import data from '../../fixtures/login.json'

import addemployeedata from '../../fixtures/addemployee.json'

describe('Verify add employee functionality', () => {

    

    it('Verify add employee with valid details', () => {

        cy.visit('/web/index.php/auth/login')

        cy.get(login.usernameInput()).type(Cypress.env("username"))
  
        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.get(login.passwordInput()).type(Cypress.env("password"))
  
        cy.get(login.loginbutton()).click()
  
        //assertions
  
        cy.url().should("eq",data.dashboardfullurl)
  
        //or
  
        cy.url().should("include",data.partialdashboardurl)
  
        //or
  
        cy.contains(dashboard.dashboardmenu()).should('be.visible')

        cy.contains('PIM').click()
        cy.url().should('include', "/web/index.php/pim/viewEmployeeList") 

        cy.contains('Add Employee').click()

        cy.url().should("include", "/web/index.php/pim/addEmployee")  

        cy.get('input[name="firstName"]').type(addemployeedata.firstname)

        cy.get('input[name="lastName"]').type(addemployeedata.lastname)

        cy.get('button[type="submit"]').click()

        cy.contains("Successfully Saved").should("be.visible")
    })


    it('Verify add employee by creating credentails ', () => {

        cy.visit('/web/index.php/auth/login')

        cy.get(login.usernameInput()).type(data.Validusername)
  
        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.get(login.passwordInput()).type(data.Validpassword)
  
        cy.get(login.loginbutton()).click()
  
        //assertions
  
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  
        //or
  
        cy.url().should("include","web/index.php/dashboard/index")
  
        //or
  
        cy.contains(dashboard.dashboardmenu()).should('be.visible')

        cy.contains('PIM').click()
        cy.url().should('include', "/web/index.php/pim/viewEmployeeList") 

        cy.contains('Add Employee').click()

        cy.url().should("include", "/web/index.php/pim/addEmployee")  

        cy.get('input[name="firstName"]').type(addemployeedata.firstname)

        cy.get('input[name="lastName"]').type(addemployeedata.lastname)

        cy.get('span[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()

       // let randomchars = (Math.random() + 1).toString(36).substring(7);

        const date = new Date();
        let   time= date.getTime()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(2).type(addemployeedata.username+time)


        // cy.get('button[type="submit"]').click()

        // cy.contains("Successfully Saved").should("be.visible")
    })


  })