// const body = document.querySelector("body");
// const button = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// function changeBackground() {
//   body.style.backgroundColor = `rgb(${random(255)}, ${random(255)},${random(
//     255
//   )})`;
// }
// function displayMessage() {
//   return alert("YAY! YOU DID IT!");
// }

// body.addEventListener("click", changeBackground);
// button.addEventListener("click", displayMessage);

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const paragraph = document.querySelector("p");

function handleSubmit(event) {
  event.preventDefault();
  if (fname.value === "" || lname.value === "") {
    paragraph.textContent = "You need to fill in both names";
  } else {
    console.log(`${fname.value} ${lname.value}`);
    fname.value = "";
    lname.value = "";
  }
}

form.addEventListener("submit", handleSubmit);
