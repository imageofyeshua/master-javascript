console.log("### Logical Operators ###");

console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;

console.log(a);

const posts = ["Post One", "Post Two"];
posts.length > 0 && console.log(posts[0]);

// || - Will return first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || "";

console.log(b);

// ?? - Return the right side operand when the left is null or undefined
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = "" ?? 30;

console.log(c);

// ||= assigns the right side value only if the left is a falsy value.

let x = false;

if (!x) {
  x = 10;
}

x = x || 10;

x ||= 10;

console.log(x);

// &&= assigns the right side value only if the left is a truthy value.
let y = 20;

if (y) {
  y = 40;
}

console.log(y);

// ??= assigns the right side value only if the left is null or undefined.
let z = null;

if (z === null || z === undefined) {
  z = 60;
}

z = z ?? 60;

z ??= 60;

console.log(z);
