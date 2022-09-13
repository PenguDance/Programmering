const cx=[];
const cy=[];
const dia=[];
const xs=[];
const ys=[];
let circle=4;
function setup() {
  createCanvas(400, 400);
  for (let i=0;i<circle;i++){
    dia[i]=random(50,100);
    xs[i]=random(-10,10);
    ys[i]=random(-10,10);
  console.log(dia[i]);
  console.log(xs[i]);
  console.log(ys[i]);
}
for (i=0;i<circle;i++){
if (i==0){
  cx[i]=random(dia[i],(i/circle)*width);
  cy[i]=random(dia[i],(i/circle)*height);
}else if (i==circle-1){
  cx[i]=random((i/circle)*width,width-dia[i]);
  cy[i]=random((i/circle)*height,height-dia[i]);
}else {
  cx[i]=random((i/circle)*width,((i+1)/circle)*width);
  cy[i]=random((i/circle)*width,((i+1)/circle)*width);
}
console.log();
console.log(cx[i]);
console.log(cy[i]);
}
}

function draw() {
  background(220);
}
