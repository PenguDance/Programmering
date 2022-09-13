let cx;
let cy;
let yspeed=10;
let dia;
function setup() {
  createCanvas(400, 400);
  cx=width/2;
  dia=width/8;
  cy=height/2;
}

function draw() {
  background(220);
  fill(255)
  circle(cx,cy,dia);
  if (cy<=dia || cy>=height-dia/2){
    yspeed*=-1;
  }
  cy+=yspeed;
}
