// https://docs.cypress.io/api/introduction/api.html

describe('SlideContentVue simple test', () => {
  it('Visits the app root url check contains title', () => {
    cy.visit('/')
    cy.contains('h1', 'SlideContentVue')
  })
  it('Check visible Vue logo', () => {
    cy.get('[alt="Vue logo"]').should('be.visible')
  })
  it('Contains footer with credits', () => {
    cy.get('.footer').should('be.visible')
    cy.get('.footer a').should('have.attr', 'href', 'https://github.com/lucasferreiralimax/slidecontent-vue')
    cy.get('.footer').contains('SlideContentVue@lucasferreiralimax')
  })
})
