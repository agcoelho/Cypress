describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome').type('Afonso Coelho');
    cy.get('input[name="email').type('afonsogcoelho@gmail.com');
    cy.get('input[name="password').type('Baby123');
    cy.get('input[name="confirm_password').type('Baby123');
    cy.contains('button', 'Cadastrar').click();
  })
})