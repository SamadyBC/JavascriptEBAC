const Animal = require('./Animal');

class Cavalo extends Animal {
    falar() {
        console.log(`${this.especie} relincha`);
    }

    comer() {
        console.log(`${this.especie} come feno`);
    }

    dormir() {
        console.log(`${this.especie} dorme em pé`);
    }
}

module.exports = Cavalo;
