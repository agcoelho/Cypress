describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.correto('baby', 'megamano1998@gmail.com', 'Baby123', 'Baby123');
    
  })
})