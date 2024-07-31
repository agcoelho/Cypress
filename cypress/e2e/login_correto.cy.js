describe('Página de Cadastro', () => {
    beforeEach(() => {  
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })


    it('Preencher os campos incorretamente e exibir para o usuário', () => {
      
      cy.get('[data-test="input-loginEmail"]').type('afonsogcoelho@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Baby123');
      cy.get('[data-test="submit-button"]').click()
    })
  })