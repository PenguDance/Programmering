function setup() {
  createCanvas(400, 400);
  strokeWeight(90);
}

function draw() {
  background(220);
  if (keyIsPressed){
    if (key=='a'||key=='A'){
    A();
  }
    if (key=='v'||key=='V'){
      V();
    }
}
}
function A(){
  line(width/2,0,0,height);
  line(width/2,0,width,height);
  line(width/4,200,3*width/4,200)
}
function V(){
  line(0,0,width/2,height);
  line(width,0,width/2,height);
}