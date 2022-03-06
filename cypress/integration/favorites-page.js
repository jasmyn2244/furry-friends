describe('User can visit favorites page, and see the dog images they have favorited', () => {

  // beforeEach(() => {

  // it('Should confirm that true is equal to true', () => {
  //   expect(true).to.equal(true)
  // });

  it('Should be able to favorite images and then see the favorites', () => {

    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog.json' })
    cy.visit('http://localhost:3000')

    cy.get('.fav-icon')
      .click()

    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog2.json' })

    cy.get('.arrow')
      .should('exist')
      .click()

    cy.get('.fav-icon')
      .click()

    cy.get('.favorites-button')
      .click()

    cy.get('.fav-title')
      .contains('Favorites')

    cy.get('img')
      .eq(0)
      .should('have.attr', 'src', 'https://cdn2.thedogapi.com/images/B1IcfgqE7_1280.jpg')

    cy.get('img')
      .eq(1)
      .should('have.attr', 'src', 'https://cdn2.thedogapi.com/images/oCwM2h4LD.jpg')

    cy.get('.home-button')
      .click()

    cy.get('.home-page-title')
      .contains('Furry Friends')

  })
})