///<reference types="cypress"/>

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://my.umn.ac.id/')
//     cy.get('[name="userid"]').type('frans.imanuel1@student.umn.ac.id{enter}')
//     cy.get('[name="pwd"]').type('Namasayafrans1312{enter}')
//     //cy.get('[name="q"]').type('Indonesia{enter}')
//   })
// })

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it('clicks the link "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})