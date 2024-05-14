let button = document.getElementById("button");
let background = document.getElementById("background");
let r = [];
let g = [];
let b = [];

button.addEventListener("click", changebg);

function changebg() {
  background.style.backgroundColor = "rgb(0,255, 255)";
}
