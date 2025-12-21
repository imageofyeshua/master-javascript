console.log("### Object Methods ###");

let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Butter";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 43.23434,
      lng: -54.3423,
    },
  },
};

x = person.address.coords.lat;

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: "Buy Butter" },
  { id: 2, name: "Pickup Kids" },
  { id: 3, name: "Takeout Trash" },
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("name");

const firstName = "Daniel";
const lastName = "Park";
const age = 50;

const man = {
  firstName,
  lastName,
  age,
};

// Destructuring
const willdo = {
  id: 1,
  title: "Go forward",
  user: {
    name: "Jason",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = willdo;

console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 53, 11, 22];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
