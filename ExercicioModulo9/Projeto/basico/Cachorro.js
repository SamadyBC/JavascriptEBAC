const Animal = require('./Animal');

class Cachorro extends Animal {
    falar() {
        console.log(`${this.especie} diz: Au au au`);
    }

    comer() {
        console.log(`${this.especie} come ração`);
    }

    dormir() {
        console.log(`${this.especie} dorme o dia todo`);
    }
}

module.exports = Cachorro;
