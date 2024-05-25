const Animal = require('./Animal');

class Gato extends Animal {
    falar() {
        console.log(`${this.especie} diz: Miau miau`);
    }

    comer() {
        console.log(`${this.especie} come ração de gato`);
    }

    dormir() {
        console.log(`${this.especie} dorme em qualquer lugar`);
    }
}

module.exports = Gato;
