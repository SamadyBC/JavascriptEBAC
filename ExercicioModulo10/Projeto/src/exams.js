import months from './months.js';

document.getElementById('main').innerHTML = months;


const filteredMonths = months.filter((months) => {
    return months.dias === 31
})

console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach((month) => {
    toPrint += month.mes
})
// Reduce - executa a funcao com todos os itends do array e devolve um valor unico
let sumMonthDay = filteredMonths.reduce((sum, month) => {
    return {dias: sum.dias + month.dias} //Soma de uma propriedade especifica de um objeto
});

console.log(sumMonthDay);

// Map - funcoes em arrays de multiplos retornos (retornos individuais - cada valor do array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map((cachorro) => {
    return cachorro * 7
})

document.getElementById('main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDay.dias + '<br> Idade humana dos cachorros ' + years + " dias";
