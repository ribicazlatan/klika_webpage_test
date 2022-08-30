/// <reference types="cypress"/>
it('Klika Praksa', function(){
    cy.visit('https://klika-doo-sarajevo.breezy.hr/')

    cy.get(':nth-child(5) > :nth-child(1) > a > .button-right').click()
    
    cy.get('.actions > :nth-child(1) > .polygot-parent').click()
    
    cy.get('.name').type('Zlatan Ribica')

    cy.get('.email-address').type('zlatan@mail.com')
        
    cy.get('.phone-number').type('+12345678')

    cy.get('.file-input-container > .polygot-parent').click()
   
  
    
    })