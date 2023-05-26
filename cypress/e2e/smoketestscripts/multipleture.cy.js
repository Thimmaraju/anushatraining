describe('Multiple ', () => {
 
    it('Multiple elememts click', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//button[text()='ADD TO CART']").click()

        cy.wait(5000)

        cy.get(".increment").click({multiple : true})
    })
  })