/// <reference types="cypress"/>
it('Klika Praksa', function(){
    cy.visit('https://klika.us/')
    
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('#pills-praksa-tab').click({force: true})
    cy.get('#are-you-ready-text > .text-center > .btn').click({force: true})
  
    
    })