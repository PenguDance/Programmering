let mx;
let my;
let ma;
let mb;
let k1x;
let k1y;
let k1a;
let k1b;
let k2x;
let k2y;
let k2a;
let k2b;
let speed;
let mus;
let w;
let h;
let kat1;
let kat2;
let cs=[-10,-9,-7,-6,-5,5,6,7,8,9,10];
let t=1;
function preload(){
  mus=loadImage('Picture/Veigar.png');
  kat1=loadImage('Picture/Nidalee1.png');
  kat2=loadImage('Picture/Rengar.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  w=100;
  h=150;
  mx=random(0,windowWidth-w);
  my=random(0,windowHeight-h);
  k1x=random(0,windowWidth-w);
  k1y=random(0,windowHeight-h);
  k2x=random(0,windowWidth-w);
  k2y=random(0,windowHeight-h);
  speed=10;
  ma=speed;
  mb=0;
  k1a=random(cs);
  k1b=random(cs);
  k2a=random(cs);
  k2b=random(cs);
  fill(0,255,200);
  frameRate(24);
}

function draw() {
  background(220);
  if(mx<=0||mx>=windowWidth-w){ma*=-1;}
  if(my<=0||my>=windowHeight-h){mb*=-1;}
  mx+=ma;
  my+=mb;
  if(k1x<=0||k1x>=windowWidth-w){k1a*=-1;}
  if(k1y<=0||k1y>=windowHeight-h){k1b*=-1;}
  k1x+=k1a;
  k1y+=k1b;
  if(k2x<=0||k2x>=windowWidth-w){k2a*=-1;}
  if(k2y<=0||k2y>=windowHeight-h){k2b*=-1;}
  k2x+=k2a;
  k2y+=k2b;
image(mus,mx,my,w,h);
image(kat1,k1x,k1y,w,h);
image(kat2,k2x,k2y,w,h);
if (mx<k1x+w && mx+w>k1x && my<k1y+h && my+h>k1y){
  speed=0;
  ma=0;mb=0;k1a=0;k1b=0;k2a=0;k2b=0;
}
if (mx<k2x+w && mx+w>k2x && my<k2y+h && my+h>k2y){
  speed=0;
  ma=0;mb=0;k1a=0;k1b=0;k2a=0;k2b=0;
}
t++;
k1a*=t/10;
k1b*=t/10;
k2a*=t/10;
k2b*=t/10;
}
function keyPressed(){
  if (keyCode==DOWN_ARROW){
    mb=speed;
    ma=0;
  }
  if (keyCode==UP_ARROW){
    mb=-speed;
    ma=0;
  }
  if (keyCode==LEFT_ARROW){
    ma=-speed;
    mb=0;
  }
  if (keyCode==RIGHT_ARROW){
    ma=speed;
    mb=0;
  }
  if (keyCode==13){
    setup();
  }
}
