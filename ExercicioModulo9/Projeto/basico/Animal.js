class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    falar() {
        console.log(`${this.especie} faz um som.`);
    }

    comer() {
        console.log(`${this.especie} está comendo.`);
    }

    dormir() {
        console.log(`${this.especie} está dormindo.`);
    }
}

module.exports = Animal;
