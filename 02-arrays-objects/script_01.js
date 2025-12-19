console.log("### Creating Arrays ###");

let x;

// Array Literal
const numbers = [12, 45, 66, 33, 23];

// Array Constructor
const fruits = new Array("Orange", "Apple", "Pear");

x = numbers[0];

x = numbers[0] + numbers[2];

x = `My favorite fruit is an ${fruits[1]}`;

x = numbers.length;

fruits[2] = "Grape";
fruits[fruits.length] = "Blueberry";
fruits[fruits.length] = "Peach";

numbers.pop();
numbers.push(100);
numbers.unshift(99);
numbers.shift();
numbers.reverse();

x = numbers.includes(100);
x = numbers.indexOf(33);

x = numbers.slice(1, 4);

// x = numbers.splice(1, 4); // change original array

x = numbers.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
console.log(numbers);
console.log(fruits);
