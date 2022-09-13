function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //Checker om en tast er trykket
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } /*Tjekker om tasten er "h" eller "H" og laver en linje der
  laver en en lige streg*/
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } /*Tjekker om tasten er "n" eller "N" og laver en linje der
  laver en en skrå streg*/
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); //Laver 2 lodrette parralle streger
} 