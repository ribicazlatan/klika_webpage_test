/// <reference types="cypress"/>
it('Klika Praksa', function(){
    cy.visit('https://klika-doo-sarajevo.breezy.hr/')

    cy.get(':nth-child(5) > :nth-child(1) > a > .button-right').click()
    
    cy.get('.actions > :nth-child(1) > .polygot-parent').click()
    
    cy.get('.name').type('Zlatan Ribica')

    cy.get('.email-address').type('ribica.zlatan7@gmail.com')
        
    cy.get('.phone-number').type('+38762576875')

    cy.get('.file-input-container > .polygot-parent').click()
   
  
    
    })