describe('User can visit home page, see random dog, favorite, or see a different dog', () => {

  // beforeEach(() => {

  // it('Should confirm that true is equal to true', () => {
  //   expect(true).to.equal(true)
  // });

  it('Should be able to visit home page and render items', () => {

    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog.json' })
    cy.visit('http://localhost:3000')

    cy.get('.home-page-title')
      .contains('Furry Friends')
    cy.get('.home-page-pic')
      .should('have.attr', 'src', 'https://cdn2.thedogapi.com/images/B1IcfgqE7_1280.jpg')
    cy.get('.fav-icon')
      .click()
    cy.get('.arrow')
      .should('exist')
    cy.get('.favorites-button')
      .contains('Favorites')
  })

  it('Should be able to display a new random dog when arrow is clicked', () => {

    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog.json' })
    cy.visit('http://localhost:3000')


    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog2.json' })
    cy.get('.arrow')
      .should('exist')
      .click()
    cy.get('.home-page-pic')
      .should('have.attr', 'src', 'https://cdn2.thedogapi.com/images/oCwM2h4LD.jpg')
  })
})
