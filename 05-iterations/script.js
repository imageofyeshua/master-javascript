console.log("### Array Reduce ###");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 20);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};

console.log(sum);
console.log(sum2);
console.log(sum3());

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 190 },
  { id: 3, name: "Product 3", price: 370 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

// Short version
const total2 = cart.reduce((acc, prod) => acc + prod.price, 0);

console.log(total);
console.log(total2);

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

const nums = [2, -30, 50, 20, -12, -9, 7];

// Add all of the positive numbers in the array
const positiveTotal = nums
  .filter((number) => number > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveTotal);

const words = ["coder", "programmer", "developer"];

const capitalized = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(capitalized);
