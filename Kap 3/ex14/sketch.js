let x; 
let y; 
let xspeed; 
let yspeed; //angiver de forskellige ting som variabler

function setup() { 
  createCanvas(400, 400);
  x = width/2            //Giver x variablen en værdi på halvdelen af lærredets bredde
  y = height/2           //Giver y variablen en værdi på halvdelen af lærredets højde
  xspeed = -1;           //Giver xspeed variablen en værdi på -1
  yspeed = 0.5*xspeed;   //Giver yspeed variablen en værdi på halvdelen af xspeed-værdien
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50);  //Laver en ellipse med (x,y) som centrum
  x+=xspeed; //Angiver en ny x-værdi som den gamle x-værdi + xspeed-værdien -> x = 200 -> x = 200 + -1 -> x = 199 -> x = 198 -> x = ...
  y+=yspeed; //Angiver en ny y-værdi som den gamle y-værdi + yspeed-værdien -> y = 200 -> y = 200 + -0.5 -> y = 199.5 -> y = 199 -> y = ...
}