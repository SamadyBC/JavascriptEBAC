"use strict";
class UserAccount {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    logUser() {
        console.log(`O usuario ${this.name} recebeu o identificador ${this.id}`);
    }
}
const user2 = new UserAccount("Jaozinho", 1);
user2.logUser();
const user3 = new UserAccount("Pedrinho", 2);
user3.logUser();
//# sourceMappingURL=classes.js.map