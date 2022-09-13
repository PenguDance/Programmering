let cx1;
let cx2;
let cy1;
let cy2;
let dia1;
let dia2;

function setup() {
  createCanvas(400, 400);
  cx1=random(1/3*width,2/3*width)
  cx2=random(1/3*width,2/3*width)
  cy1=random(1/3*width,2/3*width)
  cy2=random(1/3*width,2/3*width)
  dia1=random(20,100);
  dia2=random(20,100);
  print(cx1,cx2,cy1,cy2,dia1,dia2);
}

function draw() {
  background(220);
  if (sqrt(((cx1-cx2)**2)+((cy1-cy2)**2)) <=(dia1+dia2)/2){
    fill(0,255,0);
  } else {fill(255,0,0);}
  circle(cx1,cy1,dia1);
  circle(cx2,cy2,dia2);
}
