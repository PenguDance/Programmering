let r = [];
let g = [];
let b = [];
let x;
let y;
function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(10);
  for (let i = 0; i < 10; i++) {
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
  }
  for (let p = 0; p < 10; p++) {
    x = random(width);
    y = random(height);
    stroke(r[p], g[p], b[p]);
    point(x, y);
  }
}
