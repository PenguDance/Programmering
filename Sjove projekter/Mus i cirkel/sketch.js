let cx;
let cy;
let dia;
function setup() {
  createCanvas(400, 400);
  cx=width/2;
  cy=height/2;
  dia=width/4;
}

function draw() {
  background(220);
  if (sqrt(((cx-mouseX)**2)+((cy-mouseY)**2)) <=dia/2){
    fill(0,255,0);
  } else {fill(255,0,0);}
  circle(cx,cy,dia);
}
