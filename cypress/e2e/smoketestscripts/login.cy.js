import login from "../../pageobjects/loginpage.po"

import dashboard from "../../pageobjects/dashboard.po"

import logindata from '../../fixtures/login.json'

describe('Verify login functionality', () => {

    it('Login with valid creds', () => {

        cy.visit('/web/index.php/auth/login')

        cy.xpath(login.usernameInput()).type(Cypress.env("username"))

        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.xpath(login.passwordInput()).type(Cypress.env("password"))

        cy.get(login.loginbutton()).click()

        //assertions

        cy.url().should("eq", logindata.dashboardfullurl)

        //or

        cy.url().should("include", logindata.partialdashboardurl)

        //or

        cy.contains(dashboard.dashboardmenu()).should('be.visible')

    })

    it('Login with invalid username and valid password', () => {
        cy.visit('/web/index.php/auth/login')

        cy.xpath(login.usernameInput()).type(logindata.Wrongusername)

        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.xpath(login.passwordInput()).type(logindata.Validpassword)

        cy.get(login.loginbutton()).click()

        cy.contains(login.errormessage()).should('be.visible')
        cy.contains(dashboard.dashboardmenu()).should('not.exist')

    })

    it('Login with valid username and invalid password', () => {
        cy.visit('/web/index.php/auth/login')

        cy.xpath(login.usernameInput()).type(logindata.Validusername)

        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.xpath(login.passwordInput()).type(logindata.Wrongpassword)

        cy.get(login.loginbutton()).click()

        cy.contains(login.errormessage()).should('be.visible')
        cy.contains(dashboard.dashboardmenu()).should('not.exist')
    })


    it('Login with invalid username and invalid password', () => {
        cy.visit('/web/index.php/auth/login')

        cy.xpath(login.usernameInput()).type(logindata.Wrongusername)

        //cy.get('input[name="password"]').type("admin123{enter}")
        cy.xpath(login.passwordInput()).type(logindata.Wrongpassword)

        cy.get(login.loginbutton()).click()

        cy.contains(login.errormessage()).should('be.visible')
        cy.contains(dashboard.dashboardmenu()).should('not.exist')
    })


})