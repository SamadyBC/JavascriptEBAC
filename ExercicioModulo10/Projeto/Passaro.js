const Animal = require('./Animal');

class Passaro extends Animal {
    falar() {
        console.log(`${this.especie} canta`);
    }

    comer() {
        console.log(`${this.especie} come sementes`);
    }

    dormir() {
        console.log(`${this.especie} dorme no poleiro`);
    }
}

module.exports = Passaro;
