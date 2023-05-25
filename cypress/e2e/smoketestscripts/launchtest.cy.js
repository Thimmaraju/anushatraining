///<reference types="cypress"/>

describe('template spec', () => {

  it('passes', () => {
    var fisrtiutemvalue = "120"

    var seconditemvalue = "60"
    
    var total = "180"
    
    var k = Number(fisrtiutemvalue)+Number(seconditemvalue)
    //k=180
    
    cy.log(k)

    expect(k).to.equal(Number(total))

  })


})