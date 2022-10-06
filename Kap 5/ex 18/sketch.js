let liste = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
let picked = 0;
fjern = 0;
let j = 0;
function setup() {
  createCanvas(400, 400);
  console.log("Start list = ", liste);
}
function draw() {
  if (liste.length > 0) {
    for (let i = 0; i < liste.length; i++) {
      if (picked < liste[i]) {
        picked = liste[i];
        fjern = i;
      }
    }
    for (let i = 0; i < liste.length; i++) {
      if (i == fjern) {
        console.log("Highest number = ", liste[i]);
        continue;
      }
      liste[j] = liste[i];
      j++;
    }
    j = 0;
    liste.pop();
    console.log("New list = ", liste);
    picked = 0;
  }
}
