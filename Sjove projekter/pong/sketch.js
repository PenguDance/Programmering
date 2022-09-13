let p1y;
let p2y;
let by;
let bx;
let vy;
let minvy=1;
let rh=150;
let p1p=0;
let p2p=0;
let vx;
let minvx=5;
let maxvx=200;
function setup() {
  createCanvas(700, 700);
  background(220);
  strokeWeight(5);
  bx=width/2;
  by=bx
  p1y=(height/2)-rh;
  p2y=p1y
  fill(0);
  textSize(100)
  vx=minvx;
  vy=minvy;
}

function draw() {
  background(220);
  text(p1p,100,10,50,100); 
  text(p2p,550,10,50,100); 
  circle(bx,by,20);
 rect(5,p1y,10,rh); 
 rect(width-16,p2y,10,rh); 
 if (keyIsPressed){
  if (keyIsDown(87) && p1y != 0){
    p1y=p1y-5;
  }
  if (keyIsDown(83) && p1y != height - rh){
    p1y=p1y+5;
  }
  if (keyIsDown(UP_ARROW)&& p2y != 0){
    p2y=p2y-5;
  }
   if (keyIsDown(DOWN_ARROW) && p2y != height -rh){
    p2y=p2y+5;
  }
 }
 bx+=vx;
 by+=vy;
 if (by<10||by>height-10){
  vy*=-1;
 }
 if (bx>=width-25){
  if (by>=p2y && by<=p2y+rh){
    if (vx <= maxvx)
    {vx=vx*1.1;}
    vx=-vx;
  }else {
    p1p++;
    bx=width/2;
    by=bx;
    p1y=(height/2)-rh;
    p2y=p1y
    fill(0);
    vx=minvx;
    vy=minvy+random(-2,2);
  }
 }
if (bx<=25){
  if (by>=p1y && by<=p1y+rh){
    if (vx >= -maxvx)
    {vx=vx*1.1;}
    vx=-(vx);
  } else {
    p2p++;
    bx=width/2;
    by=bx;
    p1y=(height/2)-rh;
    p2y=p1y
    fill(0);
    vx=minvx;
    vy=minvy+random(-2,2);
  }
 }
}
