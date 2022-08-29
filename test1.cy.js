/// <reference types="cypress" />

//it('google search',()=>
//{cy.visit('https://google.com/')})

it('Google Search', function(){
cy.visit('https://google.com')

cy.get('.gLFyf').type('Klika{Enter}')
cy.get('[href="https://klika.us/"] > .LC20lb').click()

// cy.contains('Google Pretraživanje').click()
})