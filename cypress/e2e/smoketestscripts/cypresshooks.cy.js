
describe('Test suite name', () => {

  beforeEach(function () {
    
    cy.log("This is before each")
  })


  before(function () {
    
    cy.log("This is before All Tests")
  })

  afterEach(function () {
    
    cy.log("This is After each")
  })


  after(function () {
    
    cy.log("This is After all All Tests")
  })

  it('Test 1', () => {
    
    cy.log("This is fist test")
  })


  it('Test2', () => {
    cy.log("This is second Test ")
  })


  it('Test3', () => {
    
    cy.log("This is Third test")
  })


  it('Test4', () => {
    cy.log("This is Fourth test")
  })
})