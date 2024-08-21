"use strict";
// Descrevem estruturas de objetos
const filme1 = {
    id: 1,
    title: "Joaozinho no barco de fogo",
    description: "Joao luta contra a caveira do mar num barco de fogo",
    platform: ["Netflix", "Prime Video"],
    genre: ["Action", "Drama", "Sex"],
    actors: ["Barchiqueira", "Caveiraman"],
    getRecommendations: (title) => {
        console.log(`Filme ${title} recomendado para pessoas de espirito forte`);
    },
};
console.log(filme1.genre);
filme1.getRecommendations("Jonas, o caveiraman");
//# sourceMappingURL=interfaces.js.map