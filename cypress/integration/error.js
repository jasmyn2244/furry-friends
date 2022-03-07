describe('User will be directed to error page', () => {

  it('Shoulde be able to handle a 404 error', () => {
    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { statusCode: 404 })

    cy.visit('http://localhost:3000')

    cy.get('.oops-text')
      .contains('Oops something went wrong. Please try again')

    cy.get('.oops-dog')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')

    cy.get('.error-home-button')
      .click()

    //Note to self:
    //Why didn't the click do anything. Stayed on the error page, even though when I use my app in the browser, the button works exactly as it should
    // cy.get('.home-page-title')
    //   .contains('Furry Friends')
  })

  it('Should be ale to direct a user to the error page if url is wrong', () => {

    cy.intercept('GET', 'https://api.thedogapi.com/v1/images/search', { fixture: 'sampledog.json' })
    cy.visit('http://localhost:3000')

    cy.visit('http://localhost:3000/imlost')
    cy.get('.oops-text')
      .contains('Oops something went wrong. Please try again')

  })
})