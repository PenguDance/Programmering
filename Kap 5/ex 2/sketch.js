function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  for (let i = 0; i < 100; i++) {
    let x = 0;
    let y = random(windowHeight);
    let r = random(100);
    let g = i % 2;
    console.log(g);
    if (g == 0) {
      x = random(0, windowWidth / 2 - r);
    } else if (g == 1) {
      x = random(windowWidth / 2 + r, windowWidth);
    }
    circle(x, y, r);
    text(i, x, y);
  }
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
}
