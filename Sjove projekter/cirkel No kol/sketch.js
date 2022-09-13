let cx1;let cx2;let cx3;let cx4;
let cx5;let cx6;let cx7;let cx8;

let cy1;let cy2;let cy3;let cy4;
let cy5;let cy6;let cy7;let cy8;

let dia1;let dia2;let dia3;let dia4;
let dia5;let dia6;let dia7;let dia8;

let xspeed1;let xspeed2;let xspeed3;let xspeed4;
let xspeed5;let xspeed6; let xspeed7; let xspeed8;

let yspeed1;let yspeed2;let yspeed3;let yspeed4;
let yspeed5;let yspeed6; let yspeed7; let yspeed8;

let pxspeed1;let pxspeed2;let pxspeed3;let pxspeed4;
let pxspeed5;let pxspeed6;let pxspeed7;let pxspeed8;

let pyspeed1;let pyspeed2;let pyspeed3;let pyspeed4;
let pyspeed5;let pyspeed6;let pyspeed7;let pyspeed8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dia1=random(50,200);dia2=random(50,200);dia3=random(50,200);dia4=random(50,200);
  dia5=random(50,200);dia6=random(50,200);dia7=random(50,200);dia8=random(50,200);
  
  cx1=random(dia1,1/4*width);cx2=random(1/4*width,2/4*width);
  cx3=random(2/4*width,3/4*width);cx4=random(3/4*width,width-dia4);
  cx5=random(dia1,1/4*width);cx6=random(1/4*width,2/4*width);
  cx7=random(2/4*width,3/4*width);cx8=random(3/4*width,width-dia4);
  
  cy1=height/3;cy2=cy1;cy3=cy1;cy4=cy1;
  cy5=2*height/3;cy6=cy5;cy7=cy5;cy8=cy5;
  
  xspeed1=random(-5,5);xspeed2=random(-5,5);xspeed3=random(-5,5);xspeed4=random(-5,5);
  xspeed5=random(-5,5);xspeed6=random(-5,5);xspeed7=random(-5,5);xspeed8=random(-5,5);
  
  yspeed1=random(-5,5);yspeed2=random(-5,5);yspeed3=random(-5,5);yspeed4=random(-5,5);
  yspeed5=random(-5,5);yspeed6=random(-5,5);yspeed7=random(-5,5);yspeed8=random(-5,5);
}

function draw() {
  move();
  background(220);
  if (sqrt(((cx1-cx2)**2)+((cy1-cy2)**2)) <=(dia1+dia2)/2){ //1 og 2
    xspeed1=pxspeed2;
    yspeed1=pyspeed2;
    xspeed2=pxspeed1;
    yspeed2=pyspeed1;
  }
  if (sqrt(((cx1-cx3)**2)+((cy1-cy3)**2)) <=(dia1+dia3)/2){ //1 og 3
    xspeed1=pxspeed3;
    yspeed1=pyspeed3;
    xspeed3=pxspeed1;
    yspeed3=pyspeed1;
  }
  if (sqrt(((cx1-cx4)**2)+((cy1-cy4)**2)) <=(dia1+dia4)/2){ //1 og 4
    xspeed1=pxspeed4;
    yspeed1=pyspeed4;
    xspeed4=pxspeed1;
    yspeed4=pyspeed1;
  }
  if (sqrt(((cx1-cx5)**2)+((cy1-cy5)**2)) <=(dia1+dia5)/2){ //1 og 5
    xspeed1=pxspeed5;
    yspeed1=pyspeed5;
    xspeed5=pxspeed1;
    yspeed5=pyspeed1;
  }
  if (sqrt(((cx1-cx6)**2)+((cy1-cy6)**2)) <=(dia1+dia6)/2){ //1 og 6
    xspeed1=pxspeed6;
    yspeed1=pyspeed6;
    xspeed6=pxspeed1;
    yspeed6=pyspeed1;
  }
  if (sqrt(((cx1-cx7)**2)+((cy1-cy7)**2)) <=(dia1+dia7)/2){ //1 og 7
    xspeed1=pxspeed7;
    yspeed1=pyspeed7;
    xspeed7=pxspeed1;
    yspeed7=pyspeed1;
  }
  if (sqrt(((cx1-cx8)**2)+((cy1-cy8)**2)) <=(dia1+dia8)/2){ //1 og 8
    xspeed1=pxspeed8;
    yspeed1=pyspeed8;
    xspeed8=pxspeed1;
    yspeed8=pyspeed1;
  }
  if (sqrt(((cx2-cx3)**2)+((cy2-cy3)**2)) <=(dia2+dia3)/2){ //2 og 3
    xspeed2=pxspeed3;
    yspeed2=pyspeed3;
    xspeed3=pxspeed2;
    yspeed3=pyspeed2;
  }
  if (sqrt(((cx2-cx4)**2)+((cy2-cy4)**2)) <=(dia2+dia4)/2){ //2 og 4
    xspeed2=pxspeed4;
    yspeed2=pyspeed4;
    xspeed4=pxspeed2;
    yspeed4=pyspeed2;
  }
  if (sqrt(((cx2-cx5)**2)+((cy2-cy5)**2)) <=(dia2+dia5)/2){ //2 og 5
    xspeed2=pxspeed5;
    yspeed2=pyspeed5;
    xspeed5=pxspeed2;
    yspeed5=pyspeed2;
  }
  if (sqrt(((cx2-cx6)**2)+((cy2-cy6)**2)) <=(dia2+dia6)/2){ //2 og 6
    xspeed2=pxspeed6;
    yspeed2=pyspeed6;
    xspeed6=pxspeed2;
    yspeed6=pyspeed2;
  }
  if (sqrt(((cx2-cx7)**2)+((cy2-cy7)**2)) <=(dia2+dia7)/2){ //2 og 7
    xspeed2=pxspeed7;
    yspeed2=pyspeed7;
    xspeed7=pxspeed2;
    yspeed7=pyspeed2;
  }
  if (sqrt(((cx2-cx8)**2)+((cy2-cy8)**2)) <=(dia2+dia8)/2){ //2 og 8
    xspeed2=pxspeed8;
    yspeed2=pyspeed8;
    xspeed8=pxspeed2;
    yspeed8=pyspeed2;
  }
  if (sqrt(((cx3-cx4)**2)+((cy3-cy4)**2)) <=(dia3+dia4)/2){ //3 og 4
    xspeed3=pxspeed4;
    yspeed3=pyspeed4;
    xspeed4=pxspeed3;
    yspeed4=pyspeed3;
  }
  if (sqrt(((cx3-cx5)**2)+((cy3-cy5)**2)) <=(dia3+dia5)/2){ //3 og 5
    xspeed3=pxspeed5;
    yspeed3=pyspeed5;
    xspeed5=pxspeed3;
    yspeed5=pyspeed3;
  }
  if (sqrt(((cx3-cx6)**2)+((cy3-cy6)**2)) <=(dia3+dia6)/2){ //3 og 6
    xspeed3=pxspeed6;
    yspeed3=pyspeed6;
    xspeed6=pxspeed3;
    yspeed6=pyspeed3;
  }
  if (sqrt(((cx3-cx7)**2)+((cy3-cy7)**2)) <=(dia3+dia7)/2){ //3 og 7
    xspeed3=pxspeed7;
    yspeed3=pyspeed7;
    xspeed7=pxspeed3;
    yspeed7=pyspeed3;
  }
  if (sqrt(((cx3-cx8)**2)+((cy3-cy8)**2)) <=(dia3+dia8)/2){ //3 og 8
    xspeed3=pxspeed8;
    yspeed3=pyspeed8;
    xspeed8=pxspeed3;
    yspeed8=pyspeed3;
  }
  if (sqrt(((cx4-cx5)**2)+((cy4-cy5)**2)) <=(dia4+dia5)/2){ //4 og 5
    xspeed4=pxspeed5;
    yspeed4=pyspeed5;
    xspeed5=pxspeed4;
    yspeed5=pyspeed4;
  }
  if (sqrt(((cx4-cx6)**2)+((cy4-cy6)**2)) <=(dia4+dia6)/2){ //4 og 6
    xspeed4=pxspeed6;
    yspeed4=pyspeed6;
    xspeed6=pxspeed4;
    yspeed6=pyspeed4;
  }
  if (sqrt(((cx4-cx7)**2)+((cy4-cy7)**2)) <=(dia4+dia7)/2){ //4 og 7
    xspeed4=pxspeed7;
    yspeed4=pyspeed7;
    xspeed7=pxspeed4;
    yspeed7=pyspeed4;
  }
  if (sqrt(((cx4-cx8)**2)+((cy4-cy8)**2)) <=(dia4+dia8)/2){ //4 og 8
    xspeed4=pxspeed8;
    yspeed4=pyspeed8;
    xspeed8=pxspeed4;
    yspeed8=pyspeed4;
  }
  if (sqrt(((cx5-cx6)**2)+((cy5-cy6)**2)) <=(dia5+dia6)/2){ //5 og 6
    xspeed5=pxspeed6;
    yspeed5=pyspeed6;
    xspeed6=pxspeed5;
    yspeed6=pyspeed5;
  }
  if (sqrt(((cx5-cx7)**2)+((cy5-cy7)**2)) <=(dia5+dia7)/2){ //5 og 7
    xspeed5=pxspeed7;
    yspeed5=pyspeed7;
    xspeed7=pxspeed5;
    yspeed7=pyspeed5;
  }
  if (sqrt(((cx5-cx8)**2)+((cy5-cy8)**2)) <=(dia5+dia8)/2){ //5 og 8
    xspeed5=pxspeed8;
    yspeed5=pyspeed8;
    xspeed8=pxspeed5;
    yspeed8=pyspeed5;
  }
  if (sqrt(((cx6-cx7)**2)+((cy6-cy7)**2)) <=(dia6+dia7)/2){ //6 og 7
    xspeed6=pxspeed7;
    yspeed6=pyspeed7;
    xspeed7=pxspeed6;
    yspeed7=pyspeed6;
  }
  if (sqrt(((cx6-cx8)**2)+((cy6-cy8)**2)) <=(dia6+dia8)/2){ //6 og 8
    xspeed6=pxspeed8;
    yspeed6=pyspeed8;
    xspeed8=pxspeed6;
    yspeed8=pyspeed6;
  }
  if (sqrt(((cx7-cx8)**2)+((cy7-cy8)**2)) <=(dia7+dia8)/2){ //7 og 8
    xspeed7=pxspeed8;
    yspeed7=pyspeed8;
    xspeed8=pxspeed7;
    yspeed8=pyspeed7;
  }
  fill(0);circle(cx1,cy1,dia1);fill(255);circle(cx2,cy2,dia2);
  fill(255,0,0);circle(cx3,cy3,dia3);fill(0,255,0);circle(cx4,cy4,dia4);
  fill(0,0,255);circle(cx5,cy5,dia5);fill(120,120,120);circle(cx6,cy6,dia6);
  fill(255,0,255);circle(cx7,cy7,dia7);fill(255,120,40);circle(cx8,cy8,dia8);
}
function move(){
  cx1+=xspeed1;cx2+=xspeed2;cx3+=xspeed3;cx4+=xspeed4;
  cx5+=xspeed5;cx6+=xspeed6;cx7+=xspeed7;cx8+=xspeed8;

  cy1+=yspeed1;cy2+=yspeed2;cy3+=yspeed3;cy4+=yspeed4;
  cy5+=yspeed5;cy6+=yspeed6;cy7+=yspeed7;cy8+=yspeed8;

  if(cx1<dia1/2||cx1>width-dia1/2){xspeed1*=-1;}
  if(cx2<dia2/2||cx2>width-dia2/2){xspeed2*=-1;}
  if(cx3<dia3/2||cx3>width-dia3/2){xspeed3*=-1;}
  if(cx4<dia4/2||cx4>width-dia4/2){xspeed4*=-1;}
  if(cx5<dia5/2||cx5>width-dia5/2){xspeed5*=-1;}
  if(cx6<dia6/2||cx6>width-dia6/2){xspeed6*=-1;}
  if(cx7<dia7/2||cx7>width-dia7/2){xspeed7*=-1;}
  if(cx8<dia8/2||cx8>width-dia8/2){xspeed8*=-1;}
  
  if(cy1<dia1/2||cy1>height-dia1/2){yspeed1*=-1;}
  if(cy2<dia2/2||cy2>height-dia2/2){yspeed2*=-1;}
  if(cy3<dia3/2||cy3>height-dia3/2){yspeed3*=-1;}
  if(cy4<dia4/2||cy4>height-dia4/2){yspeed4*=-1;}
  if(cy5<dia5/2||cy5>height-dia5/2){yspeed5*=-1;}
  if(cy6<dia6/2||cy6>height-dia6/2){yspeed6*=-1;}
  if(cy7<dia7/2||cy7>height-dia7/2){yspeed7*=-1;}
  if(cy8<dia8/2||cy8>height-dia8/2){yspeed8*=-1;}

  pxspeed1=xspeed1;pxspeed2=xspeed2;pxspeed3=xspeed3;pxspeed4=xspeed4;
  pxspeed5=xspeed5;pxspeed6=xspeed6;pxspeed7=xspeed7;pxspeed8=xspeed8;

  pyspeed1=yspeed1;pyspeed2=yspeed2;pyspeed3=yspeed3;pyspeed4=yspeed4;
  pyspeed5=yspeed5;pyspeed6=yspeed6;pyspeed7=yspeed7;pyspeed8=yspeed8;
}

