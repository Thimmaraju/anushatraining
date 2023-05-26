///<reference types="cypress"/>

describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {


        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');

        cy.xpath("//table[@class='dataTable']/tbody/tr").should('have.length', '30');


        cy.xpath("//table[@class='dataTable']/tbody/tr[1]/td").should('have.length', '6');


        ////Get row data and Validate column text

        cy.xpath('//table[@class="dataTable"]/tbody/tr[3]').within(() => {

            cy.get('td').eq(2).then((ele) => {

                var text = ele.text()

                cy.log(text)

                expect(text).to.equal("5947.90")
            })

            cy.get('td').eq(0).should('contain.text', 'Bajaj Finance')

        })



       //Validate data based on Cell Values 

        cy.get('.dataTable >tbody').contains('Titan Company Ltd.').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev price: "+ ele.text())
            })
        })

       // Get entire Table Data
        cy.get('.dataTable >tbody tr')
            .each((rows) => {

                cy.wrap(rows).within((celldata) => {

                    cy.log(celldata.text())
                })
            })

    })

})
