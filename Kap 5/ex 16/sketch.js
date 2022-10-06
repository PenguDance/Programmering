let navne = [
  "Rengar",
  "Gwen",
  "Aatrox",
  "Kayn",
  "Talon",
  "Yasuo",
  "Yone",
  "Mordekaiser",
  "Camille",
  "Jax",
];
let x;
let y;
function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < navne.length; i++) {
    let picked = navne[i];
    let length = picked.length * 3;
    x = random(50, width - 50);
    y = random(50, height - 50);
    textSize(length);
    text(navne[i], x, y);
  }
}
