let cx;
let cy;
function setup() {
  createCanvas(400, 400);
  cx=width/2;
  cy=height/2;
}

function draw() {
  background(220);
if (mouseX <=cx){
  circle(cx,cy,width/5);
}
 else if(mouseX>cx){
    rect(0,height/3,width,height/3);
  }
}
