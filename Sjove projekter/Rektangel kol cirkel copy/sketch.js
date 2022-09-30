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
  frx = fx + fl;
  fdy = fy + fh;
  circle(ox, oy, od);
  if (keyIsPressed == true) {
    move();
  }
  if (ox < fx && ox + or > fx) {
    if (oy < fy && oy + or > fy) {
      if (or > sqrt((fx - ox) ** 2 + (fy - oy) ** 2)) {
        kol = true;
      } else {
        kol = false;
      }
    } else if (oy > fdy && oy - or < fdy) {
      if (or > sqrt((fx - ox) ** 2 + (fdy - oy) ** 2)) {
        kol = true;
      } else {
        kol = false;
      }
    }
  } else if (ox > frx && ox - or < frx) {
    if (oy < fy && oy + or > fy) {
      if (or > sqrt((frx - ox) ** 2 + (fy - oy) ** 2)) {
        kol = true;
      } else {
        kol = false;
      }
    } else if (oy > fdy && oy - or < fdy) {
      if (or > sqrt((frx - ox) ** 2 + (fdy - oy) ** 2)) {
        kol = true;
      } else {
        kol = false;
      }
    } else {
      kol = false;
    }
  } else if (fx < ox && ox < frx) {
    if (fy < oy && oy < fdy) {
      kol = false;
    }
  } else {
    kol = false;
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
