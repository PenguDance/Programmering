function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0);
  for (let i = 0; i < 100; i++) {
    g = i % 2;
    if (g == 0) {
      text(i, random(width), random(height));
    }
  }
}
