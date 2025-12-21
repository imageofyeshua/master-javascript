console.log("### Function Basics ###");

function sayHello() {
  console.log("Hello, Daniel");
}

sayHello();

function add(num1, num2) {
  console.log("sum: ", num1 + num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

add(5, 10);

const result = subtract(22, 10);
console.log(result);
console.log(subtract(34, 11));
