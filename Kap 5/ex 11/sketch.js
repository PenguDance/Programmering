function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 800; i += 100) {
    for (let x = 0; x < 800; x += 100) {
      if ((x / 100) % 2 == 0) {
        if ((i / 100) % 2 == 1) {
          fill(101, 67, 33);
        } else {
          fill(255, 248, 220);
        }
      } else {
        if ((i / 100) % 2 == 0) {
          fill(101, 67, 33);
        } else {
          fill(255, 248, 220);
        }
      }
      rect(x, i, 100, 100);
    }
  }
}
