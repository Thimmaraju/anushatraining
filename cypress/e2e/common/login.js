import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Then('User should get error messge', () => {
   
    cy.contains("Invalid credentials").should("be.visible")
})
