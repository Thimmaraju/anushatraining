///<reference types="cypress"/>

import data from "../fixtures/register.json"

describe('Fixture example 1', () => {

    it('Fixture 1', () => {

        cy.visit("https://shop.demoqa.com/my-account/")

        cy.get('#reg_username').type(data.username)

        cy.get('#reg_email').type(data.emailaddress);
        cy.get('#reg_password').type(data.weakpassword)

        //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior

        // cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
        cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
        //or
        cy.get('.woocommerce-Button').should('be.disabled');

        // Clicking on to register on the Website by entering new password 
        cy.wait(10000)

        // cy.get('#reg_password').clear();
        // cy.wait(10000)

        cy.get('#reg_password').clear().type(data.strongpassword);

        cy.wait(10000)
        cy.get('.woocommerce-Button').click();

        //Checking whether the Registration is successful and whether UserName is populated under login section
        
        cy.get('#username').should('have.attr', 'value', data.username);

        //or 
        cy.get('#username').should('have.value', data.username);

        cy.contains("An account is already registered with your email address").should('be.visible')





    })


})