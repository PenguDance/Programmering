let i = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  while (i < 10) {
    x = random(0, width);
    x2 = random(1, width - x);
    y = random(0, height);
    y2 = random(1, height - y);
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    rect(x, y, x2, y2);
    i++;
  }
}
