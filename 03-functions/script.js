console.log("### Scopes ###");

// alert("Ohh");
// console.log(window.innerHeight);

const x = 100;

console.log(x, "in global");

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();

if (true) {
  const y = 200;
  console.log(x, "in block");
  console.log(x + y);
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// var is not block scope
// var varaible is added into window object
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

function run() {
  var d = 144;
  console.log(d);
}

run();

const foo = 1;
var bar = 2;

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

if (true) {
  const x = 123;

  if (x === 123) {
    const y = 456;
    console.log(x + y);
  }
}
