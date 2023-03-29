const body = document.querySelector("body");
const button = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * number);
}
function changeBackground() {
  body.style.backgroundColor = `rgb(${random(255)}, ${random(255)},${random(
    255
  )})`;
}

body.addEventListener("click", changeBackground);
