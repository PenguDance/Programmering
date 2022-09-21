function setup() {
  createCanvas(400, 400);
  fill(0, 0, 255);
  let i = 0;
  while (i < 100) {
    g = i % 2;
    if (g == 1) {
      text(i, random(width), random(height));
    }
    i += 1;
  }
}
