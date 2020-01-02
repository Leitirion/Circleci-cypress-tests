

describe('cy_visit_test', function() {
    it('finds the content "type"', function() {
      cy.visit(Cypress.env('URL'))
      cy.contains('hype')
    })
  })