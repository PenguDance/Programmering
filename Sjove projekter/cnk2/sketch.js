const cx=[];
const cy=[];
const dia=[];
const xs=[];
const ys=[];
const pxs=[];
const pys=[];
let circle=4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(255);
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
  console.log(cx[i]);
  console.log(cy[i]);
}
}

function draw() {
  background(220);
for(i=0;i<circle-1;i++){
  pxs[i]=xs[i];
  pys[i]=ys[i];
  for(x=i+1;x<circle,x++;){
    if (sqrt(((cx[i]-cx[x])**2)+((cy[i]-cy[x])**2)) <= (dia[i]+dia[x])/2){
      xs[i]=pxs[x];xs[x]=pxs[i];
      ys[i]=pys[x];ys[x]=pys[i];
    }
  }

}
   for (i=0;i<circle-1;i++){
  circle(cx[i],c[i],dia[i]);
  cx[i]+=xs[i];
  cy[i]+=xy[i];
  if(cx[i]<dia[i]/2||cx[i]>width-dia[i]){xs[i]*=-1;}
  if(cy[i]<dia[i]/2||cy[i]>height-dia[i]){ys[i]*=-1;}
  
}
}