// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };

// window.addEventListener("load", () => {
//   document.querySelector("h1").textContent = "Hello World";
// });

window.addEventListener("load", () => {
  console.log("Page Loaded");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
});

document.querySelector("h1").innerText = "Hello Daniel";

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} X ${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "gray";
  });
});
