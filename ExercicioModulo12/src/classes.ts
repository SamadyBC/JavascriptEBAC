class UserAccount {
  id: number;
  name: string;

  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }

  logUser(): void {
    console.log(`O usuario ${this.name} recebeu o identificador ${this.id}`);
  }
}

const user2 = new UserAccount("Jaozinho", 1);
user2.logUser();

const user3 = new UserAccount("Pedrinho", 2);
user3.logUser();
