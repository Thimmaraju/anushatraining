import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pageobjects/Login/loginpage.po";

import addemployee from '../../pageobjects/PIM/addemployee.po'

Given('User launch Application', () => {
    cy.visit("/")
  })
  
  When("User enter valid username {string} and Valid password {string}", (username, password) => {
       
       cy.get(login.usernameinput).type(username)
       cy.get(login.passwordInput()).type(password)
  })


  When('user click on Login button', () => {
      cy.get(login.loginBtn()).click()
  })

  Then('User Navigated to dashboard page', () => {
    
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

When('User click on PIM Menu', () => {
 
   cy.contains("PIM").click()

})

When('User click on Add employee sub menu', () => {
 
    cy.contains("Add Employee").click()
 
 })

   
 When("User enter firstname as {string} and last and as {string}", (firstname, lastname) => {
       
    cy.get(addemployee.firstnameInput()).type(firstname)
    cy.get(addemployee.lastname()).type(lastname)
})


When('User click on save button', () => {
 
    cy.get(addemployee.saveBtn()).click()
 
 })

 Then('User should get successfully saved message', () => {
 
    cy.contains("Successfully Saved").should("be.visible")
 
 })

 Then('User should get error for mandatory fileds message', () => {
 
    cy.contains("Required").should("be.visible")
 
 })

 Then('User should get error message', () => {
 
    cy.contains("Should not exceed 30 characters").should("be.visible")
 
 })
