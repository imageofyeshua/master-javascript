console.log("### Object Literals ###");

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "Lacey",
    state: "WA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.city;
x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

delete person.age;

// Add new property
person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const man = {
  first_name: "Daniel",
  last_name: "Park",
};

x = man["first_name"];

console.log(x);
