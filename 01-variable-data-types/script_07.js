console.log("### Coercion ###");

let x;

x = 5 + "5";
x = 5 + Number("5");
x = 5 * "5";
x = 5 + null; // null coerced to 0

x = Number(null);
x = Number(false);
x = Number(true);

x = 5 + true;
x = 5 + false;

x = 5 + undefined;

console.log(x, typeof x);
