function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(5);
  for (let x = 0; x < width; x += width / 10) {
    y = random(height / 3, height / 2 - 5);
    fill(random(255), random(255), random(255));
    l = random(width);
    h = random(height / 2 - y + 5, height / 2);
    rect(x, y, l, h);
  }
  line(0, height / 2, width, height / 2);
}
