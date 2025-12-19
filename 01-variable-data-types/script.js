console.log("### Strings ###");

let x;

const name = "Daniel";
const age = 50;

x = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
const s = new String("Hello World");

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("W");

x = s.substring(1, 5);
x = s.substring(7);

x = s.slice(-11, -6);

x = "         Hello World       ";
x = s.trim();

x = s.replace("World", "Daniel");

x = s.includes("Hello");

x = s.valueOf();

x = s.split("");

console.log(x);
