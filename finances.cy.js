

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
    });
    it('Cadastrar uma entrada', () => {

        criarTransacao("Salário", 900)

        cy.get("tbody tr td.description").should("have.text", "Salário")
    });

    it('Cadastrar uma saída', () => {

        criarTransacao("Compras", -200)

        cy.get("tbody tr td.description").should("have.text", "Compras")

    });

    it('Excluir Transação', () => {

        criarTransacao("Salário", 900)
        criarTransacao("Venda de flores", 25)
        criarTransacao("Venda de roupas", 150)
        
        cy.contains(".description", "Salário")
            .parent()
            .find('img')
            .click()

            //.siblings()
            //.children('img')
            //.click()

        cy.get('tbody tr').should('have.length', 2)
    });

});


function criarTransacao(descricao, valor) {
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-10-24")
    cy.get('button').click()
}