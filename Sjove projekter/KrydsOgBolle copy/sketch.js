let i=0;
let box=[];
let valg=[];
let playing;
let t=0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  strokeWeight(2);
  line(1/3*width,0,1/3*width,height);
  line(2/3*width,0,2/3*width,height);
  line(0,1/3*height,width,1/3*height);
  line(0,2/3*height,width,2/3*height);
  i=0;
  for(let j=0;j<10;j++){
    box[j]=3;
    valg[j]=1;
  }
  playing=true;
}
function mousePressed(){
  if(playing==false){
    setup();
  }else{
 //Box1
  if (mouseX>0&&mouseX<1/3*windowWidth&&mouseY>0&&mouseY<1/3*windowHeight){
    if (box[1]!=1){
    if (i%2<1){
    line(0,0,windowWidth*1/3,windowHeight*1/3);
    line(0,windowHeight*1/3,windowWidth*1/3,0);
    i++;
    box[1]=true;
    valg[1]=2;
  }else{
    circle(1/6*windowWidth,1/6*windowHeight,1/6*windowHeight);
    i++;
    box[1]=true;
    valg[1]=3;
  }
}
}
//Box2
if (mouseX>1/3*windowWidth&&mouseX<2/3*windowWidth&&mouseY>0&&mouseY<1/3*windowHeight){
  if (box[2]!=1){
  if (i%2<1){
  line(windowWidth*1/3,0,windowWidth*2/3,windowHeight*1/3);
  line(windowWidth*1/3,windowHeight*1/3,windowWidth*2/3,0);
  i++;
  box[2]=true;
  valg[2]=2;
}else{
  circle(1/2*windowWidth,1/6*windowHeight,1/6*windowHeight);
  i++;
  box[2]=true;
  valg[2]=3;
}
}
}
//Box3
if (mouseX>2/3*windowWidth&&mouseX<windowWidth&&mouseY>0&&mouseY<1/3*windowHeight){
  if (box[3]!=1){
  if (i%2<1){
  line(windowWidth*2/3,0,windowWidth,windowHeight*1/3);
  line(windowWidth*2/3,windowHeight*1/3,windowWidth,0);
  i++;
  box[3]=true;
  valg[3]=2;
}else{
  circle(5/6*windowWidth,1/6*windowHeight,1/6*windowHeight);
  i++;
  box[3]=true;
  valg[3]=3;
}
}
}
 //Box4
 if (mouseX>0&&mouseX<1/3*windowWidth&&mouseY>1/3*windowHeight&&mouseY<2/3*windowHeight){
  if (box[4]!=1){
  if (i%2<1){
  line(0,windowHeight*1/3,windowWidth*1/3,windowHeight*2/3);
  line(0,windowHeight*2/3,windowWidth*1/3,windowHeight*1/3);
  i++;
  box[4]=true;
  valg[4]=2;
}else{
  circle(1/6*windowWidth,3/6*windowHeight,1/6*windowHeight);
  i++;
  box[4]=true;
  valg[4]=3;
}
}
}
//Box5
if (mouseX>1/3*windowWidth&&mouseX<2/3*windowWidth&&mouseY>windowHeight*1/3&&mouseY<2/3*windowHeight){
if (box[5]!=1){
if (i%2<1){
line(windowWidth*1/3,windowHeight*1/3,windowWidth*2/3,windowHeight*2/3);
line(windowWidth*1/3,windowHeight*2/3,windowWidth*2/3,windowHeight*1/3);
i++;
box[5]=true;
valg[5]=2;
}else{
circle(1/2*windowWidth,1/2*windowHeight,1/6*windowHeight);
i++;
box[5]=true;
valg[5]=3;
}
}
}
//Box6
if (mouseX>2/3*windowWidth&&mouseX<windowWidth&&mouseY>windowHeight*1/3&&mouseY<2/3*windowHeight){
if (box[6]!=1){
if (i%2<1){
line(windowWidth*2/3,windowHeight*1/3,windowWidth,windowHeight*2/3);
line(windowWidth*2/3,windowHeight*2/3,windowWidth,windowHeight*1/3);
i++;
box[6]=true;
valg[6]=2;
}else{
circle(5/6*windowWidth,1/2*windowHeight,1/6*windowHeight);
i++;
box[6]=true;
valg[6]=3;
}
}
} 
//Box7
if (mouseX>0&&mouseX<1/3*windowWidth&&mouseY>windowHeight*2/3&&mouseY<windowHeight){
  if (box[7]!=1){
  if (i%2<1){
  line(0,windowHeight*2/3,windowWidth*1/3,windowHeight);
  line(0,windowHeight,windowWidth*1/3,windowHeight*2/3);
  i++;
  box[7]=true;
  valg[7]=2;
}else{
  circle(1/6*windowWidth,5/6*windowHeight,1/6*windowHeight);
  i++;
  box[7]=true;
  valg[7]=3;
}
}
}
//Box8
if (mouseX>1/3*windowWidth&&mouseX<2/3*windowWidth&&mouseY>windowHeight*2/3&&mouseY<windowHeight){
if (box[8]!=1){
if (i%2<1){
line(windowWidth*1/3,windowHeight*2/3,windowWidth*2/3,windowHeight);
line(windowWidth*1/3,windowHeight,windowWidth*2/3,windowHeight*2/3);
i++;
box[8]=true;
valg[8]=2;
}else{
circle(1/2*windowWidth,5/6*windowHeight,1/6*windowHeight);
i++;
box[8]=true;
valg[8]=3;
}
}
}
//Box9
if (mouseX>2/3*windowWidth&&mouseX<windowWidth&&mouseY>windowHeight*2/3&&mouseY<windowHeight){
if (box[9]!=1){
if (i%2<1){
line(windowWidth*2/3,windowHeight*2/3,windowWidth,windowHeight);
line(windowWidth*2/3,windowHeight,windowWidth,windowHeight*2/3);
i++;
box[9]=true;
valg[9]=2;
}else{
circle(5/6*windowWidth,5/6*windowHeight,1/6*windowHeight);
i++;
box[9]=true;
valg[9]=3;
}
}
}
check();
}
}
function check(){
 //Øverst vandret
 if(valg[1]!=1&&valg[1]==valg[2]&&valg[1]==valg[3]){
  strokeWeight(20);
  line(0,1/6*windowHeight,windowWidth,1/6*windowHeight);
  playing=false;
}
//Midterst vandret
if(valg[4]!=1&&valg[4]==valg[5]&&valg[4]==valg[6]){
  strokeWeight(20);
  line(0,1/2*windowHeight,windowWidth,1/2*windowHeight);
  playing=false;
}
//Midterst vandret
if(valg[7]!=1&&valg[7]==valg[8]&&valg[7]==valg[9]){
  strokeWeight(20);
  line(0,5/6*windowHeight,windowWidth,5/6*windowHeight);
  playing=false;
}
//Venstre lodret
if(valg[1]!=1&&valg[1]==valg[4]&&valg[1]==valg[7]){
  strokeWeight(20);
  line(windowWidth*1/6,0,windowWidth*1/6,windowHeight);
  playing=false;
}
//Midt lodret
if(valg[2]!=1&&valg[2]==valg[5]&&valg[2]==valg[8]){
  strokeWeight(20);
  line(windowWidth*1/2,0,windowWidth*1/2,windowHeight);
  playing=false;
}
//Højre lodret
if(valg[3]!=1&&valg[3]==valg[6]&&valg[3]==valg[9]){
  strokeWeight(20);
  line(windowWidth*5/6,0,windowWidth*5/6,windowHeight);
  playing=false;
}
//Top venstre til bund højre
if(valg[1]!=1&&valg[1]==valg[5]&&valg[1]==valg[9]){
  strokeWeight(20);
line(0,0,windowWidth,windowHeight);
playing=false;
}
//Top højre til bund venstre
if(valg[3]!=1&&valg[3]==valg[5]&&valg[3]==valg[7]){
  strokeWeight(20);
line(windowWidth,0,0,windowHeight);
playing=false;
  }
 
  }