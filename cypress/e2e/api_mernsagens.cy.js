describe('Api Adopet', ()=>{
    //const tempoEpserado = Math.random() * 1000

    it('Mensagens da API', ()=>{
        cy.request({
            method: 'GET' ,
            url:'[url de quem está fazendo a requisição' ,
            headers: Cypress.env(),

        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            //expect(res.duration).to.be.lte(tempoEpserado) //flaky test

        })


    })


})