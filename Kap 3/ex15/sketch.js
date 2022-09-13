let msX;
let msY;
let y;
let x;
let bx;
let by;
let xspeed;
let yspeed;
function setup(){
  createCanvas(800,800);
  x=width/2;
  y=height/2;
}

function draw(){
background(220);
circle(x,y,50);
if (keyCode == 32){
  keyCode=0;
  msX=mouseX;msY=mouseY;
  bx=x;by=y;
for (x=x;x!=msX;x=x){
  background(220);
  circle(x,y,50);
  xspeed=(msX-bx)/10;
 yspeed=(msY-by)/10;
 x=x+xspeed;
 y=y+yspeed;
}
}
}