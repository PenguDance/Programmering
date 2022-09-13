let x;
let y;
let dia=50;
let speed=10;
function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  fill(0);
  x=width/2;
  y=height/2;
}

function draw() {
  background(220);
  circle(x,y,dia);
  if(y<dia){
    speed*=-1;
  }
  if(y>height-dia){
    speed*=-1
  }
  y+=speed;
}
