function setup() {
  createCanvas(400, 400);
  for (let j = 0; j < 1; j++);
  let i = 0;
  while (i < 30) {
    circle(width / 2, height / 2, i * 3 + 1);
    i++;
    setTimeout(10000);
  }
}
