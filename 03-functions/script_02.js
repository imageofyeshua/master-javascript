console.log("### Params & Arguments ###");

function registerUser(user = "Bot") {
  // Old Syntax
  //   if (!user) {
  //     user = "Bot";
  //   }
  return user + " is registered";
}

console.log(registerUser("John"));
console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 12,
  name: "John",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 7,
    name: "Sarah",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7]);
