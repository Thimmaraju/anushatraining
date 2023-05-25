///<reference types="cypress"/>

describe('Fixture example 1', function() {

    before(function () {
        cy.fixture('Module1/register').then(function (data) {
          this.data = data;
        })
      })

    it('Fixture 1', function() {

        cy.visit("https://shop.demoqa.com/my-account/")

        cy.get('#reg_username').type(this.data.username)

        cy.get('#reg_email').type(this.data.emailaddress);
        cy.get('#reg_password').type(this.data.weakpassword)

        //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior

        // cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
        cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
        //or
        cy.get('.woocommerce-Button').should('be.disabled');

        // Clicking on to register on the Website by entering new password 
        cy.wait(10000)

        // cy.get('#reg_password').clear();
        // cy.wait(10000)

        cy.get('#reg_password').clear().type(this.data.strongpassword);

        cy.wait(10000)
        cy.get('.woocommerce-Button').click();

        //Checking whether the Registration is successful and whether UserName is populated under login section
        
        cy.get('#username').should('have.attr', 'value', this.data.username);

        //or 
        cy.get('#username').should('have.value', this.data.username);

        cy.contains("An account is already registered with your email address").should('be.visible')





    })


})