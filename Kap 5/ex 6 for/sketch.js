function setup() {
  createCanvas(400, 400);
  background(220);
  for(let i=0;i<10;i++){
    x=random(0,width);
    x2=random(0,width);
    y=random(0,height);
    y2=random(0,height);
    ellipse(x,y,x2,y2);
  }
}


