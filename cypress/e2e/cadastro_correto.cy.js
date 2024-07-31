describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('[data-test="input-name"]').type('Afonso Coelho');
    cy.get('[data-test="input-email"]').type('afonsogcoelho@gmail.com');
    cy.get('[data-test="input-password"]').type('Baby123');
    cy.get('[data-test="input-confirm-password"]').type('Baby123');
    cy.contains('button', 'Cadastrar').click();
  })
})