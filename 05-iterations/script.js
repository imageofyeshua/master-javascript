console.log("### For of & in Loop ###");

let users = ["Daniel", "Jason", "Eunice", "Issac"];
let items = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Jason" },
  { id: 3, name: "Eunice" },
];

for (user of users) {
  console.log(user);
}

for (item of items) {
  console.log(`${item.id} : ${item.name}`);
}

let str = "Hallowed Be Thy Name";

// Loop over string
for (letter of str) {
  console.log(letter);
}

// Loop over map
const map = new Map();

map.set("name", "John");
map.set("id", 12);
map.set("age", 52);

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

const colorObj = {
  color1: "red",
  color2: "orange",
  color3: "blue",
  color4: "green",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "green", "blue", "yellow"];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
