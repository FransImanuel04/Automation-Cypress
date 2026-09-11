///<reference types="cypress"/>

describe('Login feature', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('successfully logs in with valid credentials', () => {
    cy.get('#username').clear().type('tomsmith')
    cy.get('#password').clear().type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/secure')
    cy.contains('You logged into a secure area!').should('be.visible')
    cy.contains('Logout').should('be.visible')
  })

  it('shows an error message for invalid credentials', () => {
    cy.get('#username').clear().type('wronguser')
    cy.get('#password').clear().type('wrongpass')
    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!').should('be.visible')
    cy.url().should('include', '/login')
  })
})

// Catatan:
// 1. Ganti selector dan credential sesuai halaman login aplikasi Anda.
// 2. Jika halaman login tidak sama, sesuaikan selector seperti #username, #password, dan tombol submit.
// 3. Contoh ini bisa dipakai sebagai template untuk aplikasi login nyata.