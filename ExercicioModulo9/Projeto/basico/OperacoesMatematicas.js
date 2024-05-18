class OperacoesMatematicas {
    constructor() {
        console.log('Uma nova instância de OperacoesMatematicas foi criada.');
    }

    calcularMedia(valores) {
        let soma = 0;
        for (let c = 0; c < valores.length; c++) {
            soma += valores[c];
        }
        let media = soma / valores.length;
        return media;
    }

    normalizacao(valores) {
            
        let valMax = Math.max(...valores);
        let valMin = Math.min(...valores);
        let normalizedVector = [];

        for (let i = 0; i < valores.length; i++){
            normalizedVector.push((valores[i] - valMin) / (valMax - valMin));
        }
        console.log("Vetor Normalizado: ", normalizedVector);
        return normalizedVector;
    }

    aprovacao(valores) {
        let media = this.calcularMedia(valores); // Usando o método da classe
        let condicao = media >= 8 ? "aprovado" : "reprovado";
        return 'Média: ' + media + ' - Resultado: ' + condicao;
    }

    contagemRegressiva(numero) {
        // Função Recursiva
        console.log(numero);
        let proximoNumero = numero - 1;
        if (proximoNumero > 0) {
            this.contagemRegressiva(proximoNumero); // Chamada recursiva do método da classe
        }
        return;
    }


}

// Exporta a classe para que possa ser usada em outros arquivos
module.exports = OperacoesMatematicas;
