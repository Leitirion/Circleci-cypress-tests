/// <reference types="Cypress" />

describe('Smokes', function () {
  it('site should have title', function () {
    cy.visit(Cypress.env('URL1')).title().should('eq', "Google")
  })
})