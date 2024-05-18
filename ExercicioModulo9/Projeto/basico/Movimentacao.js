class Movimentacao {
    constructor(banco = 'padrao', nome = '', valor = 0) {
        this.banco = banco;
        this.nome = nome;
        this.valor = valor;
    }
}

module.exports = Movimentacao;
