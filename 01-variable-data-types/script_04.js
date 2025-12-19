console.log("Primitive vs. Reference");

// Primitive values : stored on the stack
const name = "John";
const age = 30;

// Reference values : stored on the heap
const person = {
  name: "Daniel",
  age: 50,
};

let newName = name;
newName = "Jonathan";
console.log(name, newName);

let newPerson = person;
newPerson.name = "Bradley";
console.log(person, newPerson);
