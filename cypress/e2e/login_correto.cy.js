describe('Página de Cadastro', () => {
    beforeEach(() => {  
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })


    it('Preencher os campos incorretamente e exibir para o usuário', () => {

        cy.login('afonsogcoelho@gmail.com', 'Baby123');
      
      
    })
  })