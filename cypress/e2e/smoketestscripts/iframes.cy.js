describe('Automation - Working With Iframe', function () {



    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('#radio-2').check()
     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then((raju) =>{

           let x = raju.contents().find('label[for="radio-1"]')

           cy.wrap(x).click()
        })

       cy.contains("Download").click()
   })


  })
  
