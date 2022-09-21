let mx; //m Betyder mus, og mx betyder derved musens x koordinat
let my;
let ma; //a er farten på x-aksen
let mb; //b er farten på y-aksen
let k1x; //k1 betyder kat 1
let k1y;
let k1a;
let k1b;
let k2x; //k2 betyder kat 2
let k2y;
let k2a;
let k2b;
let mus; //"mus" er navnet på selve musen
let w; //w er bredden på musen og kattene
let h; //h er højden på musen og kattene
let kat1; //"kat1" er navnet på kat nummer 1
let kat2; //"kat2" er navnet på kat nummer 2
let cs = [-10, -9, -7, -6, -5, 5, 6, 7, 8, 9, 10]; //cs er en liste der angiver mulige startværdier for kattenes hastigheder
function preload() {
  //Henter filer fra mappen, og derefter angiver billederne til de forskellige dyr
  mus = loadImage("Picture/Veigar.png");
  kat1 = loadImage("Picture/Nidalee1.png");
  kat2 = loadImage("Picture/Rengar.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 100;
  h = 150;
  mx = random(0, windowWidth - w); //Gør at dyrene starter et tilfældgigt sted på lærredet uden at de starter ude i kanten
  my = random(0, windowHeight - h);
  k1x = random(0, windowWidth - w);
  k1y = random(0, windowHeight - h);
  k2x = random(0, windowWidth - w);
  k2y = random(0, windowHeight - h);
  let speed = 10; //Speed er musens hastighed
  ma = speed; //Siger at musen starter med at bevæge sig til højre
  mb = 0;
  k1a = random(cs); //Giver kattene tilfældige hastigheder i de 2 retninger
  k1b = random(cs);
  k2a = random(cs);
  k2b = random(cs);
}

function draw() {
  background(220);
  borderCheck(); //Kører funktionen "borderCheck"
  image(mus, mx, my, w, h); //Sætter dyrene ind, og angiver deres placering og størrelse
  image(kat1, k1x, k1y, w, h);
  image(kat2, k2x, k2y, w, h);
  if (mx < k1x + w && mx + w > k1x && my < k1y + h && my + h > k1y) {
    /*Tjekker om musen har kollideret med kat 1, 
  ved at tjekke om musens x-koordinat er mindre end kattens x-koordinat lagt sammen med bredden, derefter tjekker den om
  musens x-koordinat lagt sammen med bredden er større end kattens x-koordinat
  Derefter gør den det samme, bare med y-koordinater og højden*/
    speed = 0; //Hvis betingelsen er udført, så sætter den alle hastigheder til 0
    ma = 0;
    mb = 0;
    k1a = 0;
    k1b = 0;
    k2a = 0;
    k2b = 0;
  }
  if (mx < k2x + w && mx + w > k2x && my < k2y + h && my + h > k2y) {
    //Samme som før, bare kat 2 i stedet for kat 1
    speed = 0;
    ma = 0;
    mb = 0;
    k1a = 0;
    k1b = 0;
    k2a = 0;
    k2b = 0;
  }
  if (k1a > 0) {
    /*Forøger x-hastigheden på katten, ved først at tjekke hvilken retning den har på x-aksen 
   og derefter ligger den lidt fart til */
    k1a += 1 / 100;
  } else if (k1a < 0) {
    k1a -= 1 / 100;
  }
  if (k1b > 0) {
    //samme som før bare y-aksen
    k1b += 1 / 100;
  } else if (k1b < 0) {
    k1b -= 1 / 100;
  }
  if (k2a > 0) {
    //samme som kat 1
    k2a += 1 / 100;
  } else if (k2a < 0) {
    k2a -= 1 / 100;
  }
  if (k2b > 0) {
    k2b += 1 / 100;
  } else if (k2b < 0) {
    k2b -= 1 / 100;
  }
}
function keyPressed() {
  //Tjekker om der er trykket på en knap
  if (keyCode == DOWN_ARROW) {
    //hvis den sidst trykkede knap er Pil-ned, så bevæger musen sig ned ad
    mb = speed;
    ma = 0;
  }
  if (keyCode == UP_ARROW) {
    //Samme som før bare opad
    mb = -speed;
    ma = 0;
  }
  if (keyCode == LEFT_ARROW) {
    //Til venstre
    ma = -speed;
    mb = 0;
  }
  if (keyCode == RIGHT_ARROW) {
    //Til højre
    ma = speed;
    mb = 0;
  }
  if (keyCode == 13) {
    //Tjekker om Enter tasten er trykket
    setup(); //Kører funktionen setup(), og starter derved det hele forfra
  }
}
function borderCheck() {
  if (mx <= 0 || mx >= windowWidth - w) {
    //Tjekker om musens x-koordinat rammer venstre væg, eller om x+bredden rammer højre
    ma *= -1; //skifter fortegn på x-hastigheden
  }
  if (my <= 0 || my >= windowHeight - h) {
    //Samme som før, bare y-koordinat og top og bund i stedet
    mb *= -1;
  }
  mx += ma; //Rykker musens koordinater så lang som speeden er
  my += mb;
  if (k1x <= 0 || k1x >= windowWidth - w) {
    //Samme som med musen, bare kat 1
    k1a *= -1;
  }
  if (k1y <= 0 || k1y >= windowHeight - h) {
    k1b *= -1;
  }
  k1x += k1a;
  k1y += k1b;
  if (k2x <= 0 || k2x >= windowWidth - w) {
    //Kat 2
    k2a *= -1;
  }
  if (k2y <= 0 || k2y >= windowHeight - h) {
    k2b *= -1;
  }
  k2x += k2a;
  k2y += k2b;
}
