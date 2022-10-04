let x;
let x2 = 0;
let y = 0;
let y2;
let r = [];
let g = [];
let b = [];
let j;
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
  }
}

function draw() {
  background(220);
  j = 0;
  for (let x = 0; x < width; x += width / 10) {
    stroke(r[j], g[j], b[j]);
    line(x, y, x + width / 10, y);
    j++;
  }
  y++;
  j = 10;
  for (let y2 = 0; y2 < height; y2 += height / 10) {
    stroke(r[j], g[j], b[j]);
    line(x2, y2, x2, y2 + height / 10);
    j++;
  }
  x2 += 2;
}
