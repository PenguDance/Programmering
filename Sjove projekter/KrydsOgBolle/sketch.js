let box=[];
let selected;
let i=0;
let shape;
let kryds;
let bolle;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop;
}

function draw() {
  background(220);
  line(1/3*width,0,1/3*width,height);
  line(2/3*width,0,2/3*width,height);
  line(0,1/3*height,width,1/3*height);
  line(0,2/3*height,width,2/3*height);
  mousePressed();
}
function clicked(){
  if(selected!=kryds||selected!=bolle){
if (i%2<1){
selected=kryds;
} else{shape=bolle;}
i++;
}
}
function mousePressed(){
  if(mouseX>0&&mouseX<1/3*width){
    if(mouseY>0&&mouseY<1/3*height){
      selected=box[0];
      clicked();
      box[0]=selected;
      
      if(box[0]==kryds){
        line(0,0,1/3*width,1/3*height);
        line(0,1/3*height,1/3*width,0);
      }
    } else if(mouseY>1/3*height&&mouseY<2/3*height){
      box[3]=selected;
      clicked();
    } else if(mouseY>2/3*height&&mouseY<height){
      box[6]=selected;
      clicked();
    }
  } else  if(mouseX>1/3*width&&mouseX<2/3*width){
    if(mouseY>0&&mouseY<1/3*height){
      box[1]=selected;
      clicked();
    } else if(mouseY>1/3*height&&mouseY<2/3*height){
      box[4]=selected;
      clicked();
    } else if(mouseY>2/3*height&&mouseY<height){
      box[7]=selected;
    }
  }else  if(mouseX>2/3*width&&mouseX<width){
    if(mouseY>0&&mouseY<1/3*height){
      box[2]=selected;
    } else if(mouseY>1/3*height&&mouseY<2/3*height){
      box[5]=selected;
    } else if(mouseY>2/3*height&&mouseY<height){
      box[8]=selected;
    }
  }
}