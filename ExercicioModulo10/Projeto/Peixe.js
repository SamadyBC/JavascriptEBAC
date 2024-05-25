const Animal = require('./Animal');

class Peixe extends Animal {
    falar() {
        console.log(`${this.especie} não faz som`);
    }

    comer() {
        console.log(`${this.especie} come flocos de peixe`);
    }

    dormir() {
        console.log(`${this.especie} dorme nadando`);
    }
}

module.exports = Peixe;
