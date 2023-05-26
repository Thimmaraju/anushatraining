describe('Example to demo conditional testing in cypress', () => {
    beforeEach(() => {
        cy.visit('https://wikipedia.org')
    })

    it.only('Check that if you find WikiVoyage on the page, then click on it and validate (Go to If)', () => {
        cy.title().should('eq', 'Wikipedia')
        cy.wait(3000)
        cy.get('body').then(($body) => {
            if ($body.find('span[data-jsl10n="wikivoyage.name"]').length > 0) {

          
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.wait(3000)
                cy.title().should('eq', 'Wikivoyage')
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
                cy.wait(3000)
                cy.title().should('eq', 'Wiktionary')
            }
        })    
    })

    it.only('Check that if you dont find WikiVoyage in the page, then click on Wiktionary and validate (Go to Else)', () => {
        cy.title().should('eq', 'Wikipedia')
        cy.wait(3000)
        cy.get('body').then((body) => {
            if (body.find('span[data-jsl10n="wikivoyage.raju"]').length > 0) {
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.wait(3000)
                cy.title().should('eq', 'Wikivoyage')
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
                cy.wait(3000)
                cy.title().should('eq', 'Wiktionary')
            }
        })
       
    })
})


// cy.get('[data-jsl10n="wiktionary.name"]').invoke('text').then((text) => {

//     cy.writeFile('cypress/fixtures/test4.json', { extractedtxt: text })
//     cy.writeFile('cypress/fixtures/module1/test7.txt', text)

// })