describe('cy_visit_test', function() {
    it('finds the content "type"', function() {
      cy.visit('https://rpguia.surge.sh')
  
      cy.contains('hype')
    })
  })