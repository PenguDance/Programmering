function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(10);
  frameRate(20);
}
