let cx;
let cy;
let dia;
let p=1
function setup() {
  createCanvas(400, 400);
  cx=width/2;
  cy=height/2;
  dia=width/4;
}

function draw() {
  background(220);
  text(p,50,50,50,50);  
  if (mouseIsPressed){
  if (sqrt(((cx-mouseX)**2)+((cy-mouseY)**2)) <=dia/2){
    cx=random(0,width);
    cy=random(0,height);
    p++;
  } 
}
  circle(cx,cy,dia);
}
