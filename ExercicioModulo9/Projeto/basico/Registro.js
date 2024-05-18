class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.movimentacoes = [];
    }

    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(lancamento => this.movimentacoes.push(lancamento));
    }

    resumo() {
        let valorAtualizado = 0;
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.valor;
        });
        return valorAtualizado;
    }
}

module.exports = Registro;
