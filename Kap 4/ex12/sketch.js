let fx;
let fy;
let fcx;
let fcy;
let fl;
let cx;
let cy;
let cd;
let pf = 0;
let pc = 0;
let ox;
let oy;
let od;
function setup() {
  createCanvas(400, 400);
  fx = width / 4;
  fy = height / 4;
  fl = width / 10;
  cx = (3 * width) / 4;
  cy = (3 * height) / 4;
  cd = width / 10;
  od = width / 5;
  ox = random(od, width - od);
  oy = random(od, height - od);
  textSize(20);
}

function draw() {
  background(220);
  text(pf, 50, 0, 50, 50);
  text(pc, width - 50, 0, 400, 50);
  rect(fx, fy, fl, fl);
  fcx = fx + fl / 2;
  fcy = fy + fl / 2;
  circle(cx, cy, cd);
  circle(ox, oy, od);
  if (keyIsPressed == true) {
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
    if (keyIsDown(65)) {
      cx--;
    }
    if (keyIsDown(68)) {
      cx++;
    }
    if (keyIsDown(87)) {
      cy--;
    }
    if (keyIsDown(83)) {
      cy++;
    }
  }
  if (sqrt((cx - ox) ** 2 + (cy - oy) ** 2) <= (cd + od) / 2) {
    pc++;
    eaten();
  }
  if (
    Math.abs(fcx - ox) <= (fl + od) / 2 &&
    Math.abs(fcy - oy) <= (fl + od) / 2
  ) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
}
function eaten() {
  ox = random(od, width - od);
  oy = random(od, height - od);
}
