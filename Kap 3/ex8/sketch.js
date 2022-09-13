function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseButton==LEFT){
    circle(mouseX,mouseY,50);
  } else if (mouseButton==RIGHT) {
  rect(mouseX,mouseY,50,50);
}
}