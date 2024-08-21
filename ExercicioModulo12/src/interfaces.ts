// Descrevem estruturas de objetos

interface Movie {
  id: number;
  title: string;
  description: string;
  platform: Array<string>;
  genre: Array<string>;
  actors: Array<string>;

  getRecommendations: (title: string) => void;
}

const filme1: Movie = {
  id: 1,
  title: "Joaozinho no barco de fogo",
  description: "Joao luta contra a caveira do mar num barco de fogo",
  platform: ["Netflix", "Prime Video"],
  genre: ["Action", "Drama", "Sex"],
  actors: ["Barchiqueira", "Caveiraman"],
  getRecommendations: (title: string) => {
    console.log(`Filme ${title} recomendado para pessoas de espirito forte`);
  },
};

console.log(filme1.genre);
filme1.getRecommendations("Jonas, o caveiraman");
