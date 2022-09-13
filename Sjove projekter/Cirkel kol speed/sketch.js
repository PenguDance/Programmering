let cx1;
let cx2;
let cx3;
let cy1;
let cy2;
let cy3;
let dia1;
let dia2;
let dia3;
let xspeed1;
let xspeed2;
let xspeed3;
let yspeed1;
let yspeed2;
let yspeed3;
let collission1;
let collission2;
let collission3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx1=random(1/3*width,2/3*width)
  cx2=random(1/3*width,2/3*width)
  cx3=random(1/3*width,2/3*width)
  cy1=random(1/3*height,2/3*height)
  cy2=random(1/3*height,2/3*height)
  cy3=random(1/3*height,2/3*height)
  dia1=random(100,300);
  dia2=random(100,300);
  dia3=random(100,300);
  xspeed1=random(-5,5);
  xspeed2=random(-5,5);
  xspeed3=random(-5,5);
  yspeed1=random(-5,5);
  yspeed2=random(-5,5);
  yspeed3=random(-5,5);
  textSize(50); 
}

function draw() {
  background(220);
  if (sqrt(((cx1-cx2)**2)+((cy1-cy2)**2)) <=(dia1+dia2)/2||sqrt(((cx1-cx3)**2)+((cy1-cy3)**2)) <=(dia1+dia3)/2){
    fill(0,255,0);
    circle(cx1,cy1,dia1);
    collission1="True"
  }else{fill(255,0,0);
    circle(cx1,cy1,dia1);
    collission1="False"
  }
  if (sqrt(((cx1-cx2)**2)+((cy1-cy2)**2)) <=(dia1+dia2)/2||sqrt(((cx2-cx3)**2)+((cy2-cy3)**2)) <=(dia2+dia3)/2){
    fill(0,255,0);
    circle(cx2,cy2,dia2);
    collission2="True"
  }else{fill(255,0,0);
    circle(cx2,cy2,dia2);
    collission2="False"
  }
  if (sqrt(((cx1-cx3)**2)+((cy1-cy3)**2)) <=(dia1+dia3)/2||sqrt(((cx2-cx3)**2)+((cy2-cy3)**2)) <=(dia2+dia3)/2){
    fill(0,255,0);
    circle(cx3,cy3,dia3);
    collission3="True"
  }else{fill(255,0,0);
    circle(cx3,cy3,dia3);
    collission3="False"
  }
  fill(0);
  text(collission1,150,0,300,150);
  text(collission2,300,0,450,150);
  text(collission3,450,0,600,150);
cx1+=xspeed1;
cx2+=xspeed2;
cx3+=xspeed3;
cy1+=yspeed1;
cy2+=yspeed2;
cy3+=yspeed3;
if(cx1<dia1/2||cx1>width-dia1/2){xspeed1*=-1;}
if(cx2<dia2/2||cx2>width-dia2/2){xspeed2*=-1;}
if(cx3<dia2/2||cx3>width-dia3/2){xspeed3*=-1;}
if(cy1<dia1/2||cy1>height-dia1/2){yspeed1*=-1;}
if(cy2<dia2/2||cy2>height-dia1/2){yspeed2*=-1;}
if(cy3<dia3/2||cy3>height-dia3/2){yspeed3*=-1;}
if (keyIsDown(RIGHT_ARROW)){xspeed1*=1.1;xspeed2*=1.1;xspeed3*=1.1;yspeed1*=1.1;yspeed2*=1.1;yspeed3*=1.1;}
if (keyIsDown(LEFT_ARROW)){xspeed1/=1.1;xspeed2/=1.1;xspeed3/=1.1;yspeed1/=1.1;yspeed2/=1.1;yspeed3/=1.1;}
}


