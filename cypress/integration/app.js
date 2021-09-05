describe('Meme app', () => {
  it('front page can be opened, shows title, dedication and any meme img exist', () => {
    cy.visit('http://localhost:8000')

    cy.get('[data-cy=title]').should('contain', 'Memes app CI-CD')
    cy.get('[data-cy=dedication]').should('contain', 'With ♥ to Rynxe')

    cy.get('[data-cy=meme]').should('exist')
  })
})