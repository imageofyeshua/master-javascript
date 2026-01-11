// setTimeout(changeText, 2000);

// setTimeout & clearTimeout
// function changeText() {
//   document.querySelector("h1").textContent = "Hello from Daniel";
// }

// const timerId = setTimeout(changeText, 3000);

// document.querySelector("#cancel").addEventListener("click", () => {
//   console.log(timerId);
//   clearTimeout(timerId);
//   console.log("Timer Cancelled");
// });

// setInterval & clearInterval
// const intervalID = setInterval(myCallback, 1000, "Hello");

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("stop").addEventListener("click", stopChange);
document.getElementById("start").addEventListener("click", startChange);
