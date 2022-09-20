function setup() {
  createCanvas(400, 400);
  //2-dim array med 3 tal i det inderste array svarende til
  //centrum (x,y) og radius r
  //Eks første array beskriver en cirkel med centrum i (50,50) og radius lig 30
  let cirkler = [
    [50, 50, 30],
    [100, 120, 80],
    [250, 120, 100],
  ];

  // til gå anden cirkels koordinater og radius
  let x1 = cirkler[1][0];
  let y1 = cirkler[1][1];
  let r1 = cirkler[1][2];
  // Tegne cirkler med en for-løkke
  for (let i = 0; i < 3; i++) {
    circle(cirkler[i][0], cirkler[i][1], cirkler[i][2]);
  }
  console.log(x1);
  console.log(y1);
  console.log(r1);
}
