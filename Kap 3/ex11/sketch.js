function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyCode==70){
    square(mouseX,mouseY,50);
  } else if (keyCode==67) {
    circle(mouseX,mouseY,50);
  } else if (keyCode==69){
    ellipse(mouseX,mouseY,20,30);
  } 
}
