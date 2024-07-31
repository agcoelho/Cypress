describe('Página de Cadastro', () => {
    it('Preencher os campos incorretamente e exibir para o usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Cadastrar').click();
      cy.contains('button', 'Cadastrar').click();
    })
  })