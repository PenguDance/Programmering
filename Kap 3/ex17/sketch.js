let rx;
let ry;
let r2x;
let r2y;
let vx;
let vy;
function setup() {
createCanvas(400, 400);
rx=100;
ry=250;
r2x=250;
r2y=100;
vx=1;
vy=1;
strokeWeight(5);
fill(204,102,0);
}

function draw() {
background(220);
  if (rx<= 50){
    vx=1;
  } else if (rx>=350){
    vx=-1;
  } else {
    vx=vx;
  }
  if (r2y<= 50){
    vy=1;
  } else if (r2y>=350){
    vy=-1;
  } else {
    vy=vy;
  }
rect(rx,ry,1,50);
rect(r2x,r2y,50,1);
rx+=vx;
r2y+=vy;
frameRate(60);
}
