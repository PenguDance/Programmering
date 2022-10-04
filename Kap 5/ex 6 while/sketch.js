let i = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  while (i < 10) {
    x = random(0, width);
    x2 = random(0, width);
    y = random(0, height);
    y2 = random(0, height);
    ellipse(x, y, x2, y2);
    i++;
  }
}
