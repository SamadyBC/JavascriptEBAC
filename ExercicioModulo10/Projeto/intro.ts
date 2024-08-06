// Super set de typescript
// Basicamente permite a tipagem do Javascript
// Exemplos de tipos: array, boolean, string, number, enum
// Para converter typescript para javascript podemos utilizar um comando do node: npx tsc ./src/intro.ts

let title: [number, string];
title: ["1", "Titulo"];
enum Color {
    white = "#ffff"
}

function calc (a:number, b:number){
    return a + b;
}