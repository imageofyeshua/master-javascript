console.log("### Function Expressions ###");

// Hoisting
console.log(addDollarSign(100));

// Function Declaration
function addDollarSign(value) {
  return "$" + value;
}

// Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));

// function add(a, b) {
//   return a + b;
// }

// Arrow Function Syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

const double = (a) => a * 2;

// Returning an Object
const createObj = () => ({
  name: "Daniel",
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num ** 2);
});

numbers.forEach((n) => console.log(n * 2));

console.log(add(1, 2));
console.log(subtract(10, 2));
console.log(double(3));
console.log(createObj());

// IIFE (Immediately Invoked Function Expression)
(function () {
  const user = "Park";
  console.log(user);

  const hello = () => console.log("Hello from the IIFFE");
  hello();
})();

(function (name) {
  console.log("Hello " + name);
})("Shawn");

(function hello() {
  console.log("Hello");
})();

// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => Math.floor(((f - 32) * 5) / 9);

console.log(Math.floor(getCelsius(98)));

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // console.log("Min:", min);
  // console.log("Max:", max);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5]));

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(20, 10);
