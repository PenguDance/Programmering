var x = 200; //giver x en variabel startværdi
var y = 200; //giver y en variabel startværdi
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);   //Laver en ellipse med centrum i (x,y)
  if (x >= 400){
   x = 0; 
  } //Tjekker om x-værdien er lig med eller højere end 400, hvis den er så laver den x-værdien om til 0

  if (keyCode === UP_ARROW) {
    y = y - 1;  //Hvis den sidst trykkede knap er pil op, så trækker den 1 fra y-værdien. Hvilket vil få ellipsen til at gå op af
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;   //Hvis den sidst trykkede knap er pil ned, så lægger den 1 til y-værdien. Hvilket vil få ellipsen til at gå ned af
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;  //Hvis den sidst trykkede knap er venstre pil, så trækker den 1 fra x-værdien. Hvilket vil få ellipsen til at gå til venstre
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;  //Hvis den sidst trykkede knap er højre pil, så lægger den 1 til x-værdien. Hvilket vil få ellipsen til at gå til højre
  }
}
