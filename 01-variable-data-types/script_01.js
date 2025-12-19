console.log("### Comments ###");

// This is a single line of code
console.log(100);

console.log("Hello World");

console.log(20, "hello", true);

/*
Multi-line comment
const x = 144000;

console.log(x);

console.error("Alert");

console.warn("Warning");
*/

console.table([
  { name: "Daniel", email: "daniel@test.com" },
  { name: "Jason", email: "jason@test.com" },
]);

console.group("simple");
console.log(x);
console.error("Hey");
console.warn("Please");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello Daniel", styles);
