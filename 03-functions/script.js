console.log("### Execution Context ###");

/*
## Execution Context Phases
1. Create the global object(browser = window, Node.js = global)
2. Create the 'this' object and bint it to the global object
3. Setup memory heap for storing variables and function references
4. Store functions and variables in global execution context and set to "undefined"

## Execution Phase
1. Execute code line by line
2. Create a new execution context for each function call
*/

const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);

// CallStack

function first() {
  console.log("first...");
  second();
}

function second() {
  console.log("second...");
  third();
}

function third() {
  console.log("third...");
}

first();
