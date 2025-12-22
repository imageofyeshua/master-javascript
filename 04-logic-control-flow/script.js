console.log("### Truthy & Falsy ###");

const email = "text@test.com";

if (email) {
  console.log("You passed in an email");
}

console.log(Boolean(email));

/*
Falsy Values:
- false
- 0
- "" or '' (Empty string)
- null
- undefined
- NaN
*/

const x = NaN;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and Falsy Caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = ["Post One", "Post Two"];
console.log(posts.length);

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts to List");
}

// Checking for empty objects
const user = {
  name: "John",
};

if (Object.keys(user).length) {
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
