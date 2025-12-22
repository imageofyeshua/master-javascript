console.log("### Switch Statement ###");

const d = new Date("December 17, 1995 03:24:00");
const month = d.getMonth();
console.log(month);

switch (month) {
  case month >= 1 && month <= 3:
    console.log("Its Cold");
    break;
  case month >= 4 && month <= 6:
    console.log("Its Warm");
    break;
  case month >= 7 && month <= 9:
    console.log("Its Hot");
    break;
  default:
    console.log("It's Chilly");
}
