import login from "../../pageobjects/loginpage.po"
import dashboard from '../../pageobjects/dashboard.po'
import data from '../../fixtures/login.json'

describe('Verify add Pay grades functionality', () => {

    it('Verify add pay grades with valid details', () => {

        cy.visit('/web/index.php/auth/login')

        cy.xpath(login.usernameInput()).type(data.Validusername)
  
        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.xpath(login.passwordInput()).type(data.Validpassword)
  
        cy.get(login.loginbutton()).click()
  
        //assertions
  
        cy.url().should("eq",data.dashboardfullurl)
  
        //or
  
        cy.url().should("include",data.partialdashboardurl)
  
        //or
  
        cy.contains(dashboard.dashboardmenu()).should('be.visible')

        cy.contains("Admin").click()
        cy.contains('Job').click()
        cy.contains('Pay Grades').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('input[class="oxd-input oxd-input--active"]').last().type("Grade Z")

        cy.get('button[type="submit"]').click()

        cy.contains("Successfully Saved").should("be.visible")


    })


  })