let fx;
let fy;
let fcx;
let fcy;
let fl;
let fh;
let ox;
let oy;
let od;
let kol;
let frx;
let fdy;
function setup() {
  createCanvas(windowWidth, windowHeight);
  fx = width / 4;
  fy = height / 4;
  fl = width / 6;
  fh = height / 8;
  frx = fx + fl;
  fdy = fy + fh;
  cd = width / 10;
  od = width / 5;
  or = od / 2;
  ox = random(od, width - od);
  oy = random(od, height - od);
  textSize(20);
}

function draw() {
  background(220);
  rect(fx, fy, fl, fh);
  fcx = fx + fl / 2;
  fcy = fy + fh / 2;
  circle(ox, oy, od);
  if (keyIsPressed == true) {
    move();
  }
  
  koll();
}
function move() {
  if (keyIsDown(LEFT_ARROW)) {
    fx--;
    fx--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    fx++;
    fx++;
  }
  if (keyIsDown(UP_ARROW)) {
    fy--;
    fy--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    fy++;
    fy++;
  }
}
function koll() {
  if (kol == true) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
}

