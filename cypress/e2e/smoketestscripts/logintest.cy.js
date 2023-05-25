import login from '../../PageObjects/Login/loginpage.po'

import logindata from '../../fixtures/login.json'

describe('Verify login functionality', () => {

    it('Verify login with Valid credntials', function () {

        cy.visit("/web/index.php/auth/login")
        login.loginwithcreds(logindata.username, logindata.password)
     

    })

    it('Verify login with valid username and invalid password', () => {

        cy.visit("/web/index.php/auth/login")

        //actions 
        login.loginwithcreds(logindata.username, logindata.wrongpassword)

        //assertion 

        cy.contains(login.errormessage()).should("be.visible")

    })

    it('Verify login with invalid username and valid password', () => {


        cy.visit("/web/index.php/auth/login")

        //actions 
        login.loginwithcreds(logindata.wrongusername, logindata.password)

        //assertion 

        cy.contains(login.errormessage()).should("be.visible")
    })


    it('Verify login with invalid username and invalid password', () => {

        cy.visit("/web/index.php/auth/login")

        //actions 
        login.loginwithcreds(logindata.wrongusername, logindata.wrongpassword)

        //assertion 

        cy.contains(login.errormessage()).should("be.visible")

    })



})