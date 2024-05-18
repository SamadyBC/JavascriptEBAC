const { Cachorro, Gato, Passaro, Peixe, Cavalo, OperacoesMatematicas, Movimentacao, Registro } = require('./index');

// Criando instâncias de cada animal
const cachorro = new Cachorro('Cachorro');
const gato = new Gato('Gato');
const passaro = new Passaro('Pássaro');
const peixe = new Peixe('Peixe');
const cavalo = new Cavalo('Cavalo');

// Usando os métodos de cada instância de animal
cachorro.falar();  // Saída: Cachorro diz: Au au au
cachorro.comer();  // Saída: Cachorro come ração
cachorro.dormir(); // Saída: Cachorro dorme o dia todo

gato.falar();  // Saída: Gato diz: Miau miau
gato.comer();  // Saída: Gato come ração de gato
gato.dormir(); // Saída: Gato dorme em qualquer lugar

passaro.falar();  // Saída: Pássaro canta
passaro.comer();  // Saída: Pássaro come sementes
passaro.dormir(); // Saída: Pássaro dorme no poleiro

peixe.falar();  // Saída: Peixe não faz som
peixe.comer();  // Saída: Peixe come flocos de peixe
peixe.dormir(); // Saída: Peixe dorme nadando

cavalo.falar();  // Saída: Cavalo relincha
cavalo.comer();  // Saída: Cavalo come feno
cavalo.dormir(); // Saída: Cavalo dorme em pé

// Criando instância da classe OperacoesMatematicas
const operacoes = new OperacoesMatematicas();
let notas = [9, 8, 7, 10];

// Usando os métodos da classe OperacoesMatematicas
console.log(operacoes.calcularMedia(notas)); // Saída: 8.5
console.log(operacoes.aprovacao(notas)); // Saída: Média: 8.5 - Resultado: aprovado
operacoes.contagemRegressiva(5); // Saída: 5, 4, 3, 2, 1

// Criando instâncias da classe Movimentacao
const mov1 = new Movimentacao('Banco A', 'Conta Corrente', 1000);
const mov2 = new Movimentacao('Banco B', 'Poupança', 2000);
const mov3 = new Movimentacao('Banco A', 'Salário', 3000);
const mov4 = new Movimentacao('Banco A', 'Investimento', 1500);
const mov5 = new Movimentacao('Banco A', 'Imposto de Renda', -500); // Imposto (valor negativo)
const mov6 = new Movimentacao('Banco B', 'Taxa Bancária', -150); // Taxa (valor negativo)
const mov7 = new Movimentacao('Banco B', 'Imposto Municipal', -300); // Imposto (valor negativo)
const mov8 = new Movimentacao('Banco A', 'Transferência', 750);
const mov9 = new Movimentacao('Banco A', 'Multa', -100); // Multa (valor negativo)
const mov10 = new Movimentacao('Banco B', 'Bônus', 500);

const movimentacoesGerais = [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8, mov9, mov10];
//movimentacoesGerais.map(mov => console.log(mov));
// Criando instância da classe Registro
const registro = new Registro(18, 5, 2024);

// Adicionando movimentações ao registro
registro.novaMovimentacao(...movimentacoesGerais);

// Obtendo o resumo das movimentações
console.log('Resumo das Movimentações:', registro.resumo()); // Saída: Resumo das Movimentações: 3000

// Adicionando todas as movimentações a um vetor de valores

const valoresMovimentacoes = movimentacoesGerais.map(mov => mov.valor);

// Exibindo o vetor de valores das movimentações
console.log('Valores das Movimentações:', valoresMovimentacoes);
// Exibindo a media do valor das movimentacoes
console.log('Media das Movimentações:', operacoes.calcularMedia(valoresMovimentacoes));
// Exibindo se o credito foi aprovado
console.log(operacoes.aprovacao(valoresMovimentacoes));
//console.log(operacoes.normalizacao(valoresMovimentacoes))