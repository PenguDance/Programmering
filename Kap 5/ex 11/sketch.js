let p = 8;
let size = 600;
function setup() {
  createCanvas(size, size);
  let P = size / p;
  for (let i = 0; i * P <= size; i++) {
    for (let x = 0; x * P <= size; x++) {
      if (x % 2 == 0) {
        if (i % 2 == 1) {
          fill(101, 67, 33);
        } else {
          fill(255, 248, 220);
        }
      } else {
        if (i % 2 == 0) {
          fill(101, 67, 33);
        } else {
          fill(255, 248, 220);
        }
      }
      rect(x * P, i * P, P, P);
    }
  }
}
