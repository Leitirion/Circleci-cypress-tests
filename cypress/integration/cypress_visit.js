const url = Cypress.env("URL");

describe('cy_visit_test', function() {
    it('finds the content "type"', function() {
      cy.visit(url)
      cy.contains('hype')
    })
  })