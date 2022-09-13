function setup() {
    createCanvas(800, 800);
    noStroke();
  fill(0);
  }
  var x = 2;
  function draw() {
    background(121,10,10);
  x++;
  if (x%2==true){
  background(0)
  }
    else { 
  background(255)}
  }