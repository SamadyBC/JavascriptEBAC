"use strict";
// Boolean
let isSet = false;
isSet = true;
// Numbers
let decimal = 6;
let hexadecimal = 0xff0000;
let binary = 0b0101;
// String
let color = "blue";
color = "red";
color = "green";
// Array
let lista = [0, 2, 4, 6];
let list2 = [1, 3, 5, 7];
//Tuple
let user;
user = ["Marcelo", 1];
let user1;
let pet1 = "Dog";
function sum(n1, n2) {
    let v1 = typeof n1 === "string" ? +n1 : n1;
    let v2 = typeof n2 === "string" ? +n2 : n2;
    console.log(v1 + v2);
}
sum(20, "20");
sum(50, "50");
sum(10, "true");
//# sourceMappingURL=index.js.map