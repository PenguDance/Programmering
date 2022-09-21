let fx;
let fy;
let fcx;
let fcy;
let fl;
let ox;
let oy;
let od;
function setup() {
  createCanvas(windowWidth, windowHeight);
  fx = width / 4;
  fy = height / 4;
  fl = width / 4;
  cd = width / 10;
  od = width / 5;
  ox = random(od, width - od);
  oy = random(od, height - od);
  textSize(20);
}

function draw() {
  background(220);
  rect(fx, fy, fl, fl);
  fcx = fx + fl / 2;
  fcy = fy + fl / 2;
  circle(ox, oy, od);
  if (keyIsPressed == true) {
    move();
  }
  if (
    Math.abs(fcx - ox) <= (fl + od) / 2 &&
    Math.abs(fcy - oy) <= (fl + od) / 2
  ) {
    if (sqrt(((fcx - ox)**2) + ((fcy - oy)**2)) <= sqrt((((fl / 2)**2)*2)) + od/2) {
      fill(0, 255, 0);
    }else {
      fill(255, 0, 0);
    }
  } else {
    fill(255, 0, 0);
  }
}
function move() {
  if (keyIsDown(LEFT_ARROW)) {
    fx--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    fx++;
  }
  if (keyIsDown(UP_ARROW)) {
    fy--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    fy++;
  }
}
function dist() {
  if (sqrt((fcx - ox) ** 2 + (fcy - oy) ** 2) < sqrt(((fl/2) ** 2)*2) + od) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
}
