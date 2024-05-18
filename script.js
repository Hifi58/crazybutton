// Variables
let button = document.getElementById("button");
let background = document.getElementById("background");
let r = [];
let g = [];
let b = [];

// Fills the array with number 0 to 255
r = Array.from({ length: 256 }, (e, i) => i);
g = Array.from({ length: 256 }, (e, i) => i);
b = Array.from({ length: 256 }, (e, i) => i);

let randomR = r[Math.floor(Math.random() * 256)];
let randomG = g[Math.floor(Math.random() * 256)];
let randomB = b[Math.floor(Math.random() * 256)];

console.log(r.indexOf(randomR));
console.log(g.indexOf(randomG));
console.log(b.indexOf(randomB));

// Listener
button.addEventListener("click", changebg);
button.addEventListener("mouseenter", changecolor);
button.addEventListener("mouseleave", changecoloragain);

// functions
function changebg() {
  background.style.backgroundColor = "rgb(0,255, 255)";
}

function changecolor() {
  button.style.color = "red";
}

function changecoloragain() {
  button.style.color = "black";
}
