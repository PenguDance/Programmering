function setup() {
  createCanvas(400, 400);
}
function draw() {
  for (let i = 0; i < 30; i++) {
    circle(width / 2, height / 2, i * 3 + 1);
    console.log(i);
  }
}
