let speed;
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  speed=sqrt((mouseX-pmouseX)**2 + (mouseY-pmouseY)**2);
  print(mouseX,mouseY,pmouseX,pmouseY);
  print(speed);
 }
