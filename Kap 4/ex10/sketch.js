let fx;
let fy;
let fl;
let cx;
let cy;
let cd;
function setup() {
  createCanvas(400, 400);
  fx=width/4;
  fy=height/4;
  fl=width/10;
  cx=3*width/4;
  cy=3*height/4;
  cd=width/10;
}

function draw() {
  background(220);
  rect(fx,fy,fl,fl);
  circle(cx,cy,cd);
  if (keyIsPressed==true){
    if (keyIsDown(LEFT_ARROW)){
    fx--;
  }
  if (keyIsDown(RIGHT_ARROW)){
    fx++;
  }
  if (keyIsDown(UP_ARROW)){
    fy--;
  }
  if (keyIsDown(DOWN_ARROW)){
    fy++;
  }
  if (keyIsDown(65)){
    cx--;
  }
  if (keyIsDown(68)){
    cx++;
  }
  if (keyIsDown(87)){
    cy--;
  }
  if (keyIsDown(83)){
    cy++;
  }
  }
    
}
