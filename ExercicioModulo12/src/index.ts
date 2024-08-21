// Boolean

let isSet: boolean = false;
isSet = true;

// Numbers

let decimal: number = 6;
let hexadecimal: number = 0xff0000;
let binary: number = 0b0101;

// String

let color: string = "blue";
color = "red";
color = "green";

// Array
let lista: number[] = [0, 2, 4, 6];
let list2: Array<number> = [1, 3, 5, 7];

//Tuple

let user: [string, number];
user = ["Marcelo", 1];

//Alias
type User = {
  name: string;
  age: number;
  id: number;
  city: string;
};

let user1: User;

type pet = "Dog" | "Cat";

let pet1: pet = "Dog";

function sum(n1: number | string, n2: number | string) {
  let v1 = typeof n1 === "string" ? +n1 : n1;
  let v2 = typeof n2 === "string" ? +n2 : n2;
  console.log(v1 + v2);
}

sum(20, "20");
sum(50, "50");
sum(10, "true");
