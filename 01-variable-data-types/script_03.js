// String
const firstName = "Eunice";
const output = firstName;

console.log(output, typeof firstName);

// Number
const age = 50;
const temp = 98.9;

console.log(age, typeof temp);

// Boolean
const hasKids = true;
const really = hasKids;

console.log(really, typeof hasKids);

// Null
const aptNumber = null;
const object = aptNumber;

console.log(object, typeof aptNumber);

// Undefined
let score;
const notyet = score;
const stillnot = undefined;

console.log(score, typeof notyet);

// Symbol
const id = Symbol("id");
const sym = id;

console.log(id, typeof sym);

// BigInt
const n = 900545399231234356n;
const biggy = n;

console.log(n, typeof biggy);

// Reference Types
const numbers = [1, 2, 3, 4, 5];
const ref = numbers;

const person = {
  name: "Daniel",
};

function sayHello() {
  console.log("Hello");
}

console.log(numbers, typeof ref);
console.log(person, typeof person);
console.log(sayHello, typeof sayHello);
