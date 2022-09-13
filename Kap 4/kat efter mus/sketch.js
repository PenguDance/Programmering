let x;
let y;
let a;
let b;
let d;
let speed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x=random(0,windowWidth);
  y=random(0,windowHeight);
  d=50;
  speed=10;
  a=speed;
  b=0;
  fill(0,255,200);
}

function draw() {
  background(220);
  if(x<=d/2||x>=windowWidth-(d/2)){a*=-1;}
  if(y<=d/2||y>=windowWidth-(d/2)){b*=-1;}
  x+=a;
  y+=b;
  circle(x,y,d);
}
