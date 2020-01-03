
/// <reference types="Cypress" />

describe('More failing testa', function() {
	it('fails on google', function() {
		cy.visit('https://google.com').then(()=>{
		expect(true).to.be.false		
		})     
	})
 })