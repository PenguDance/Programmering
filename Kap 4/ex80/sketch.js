function setup() {
  createCanvas(400, 400);
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
  rect(width/2,height/2,50,50);
}
function V(){
  circle(width/2,height/2,50);
}