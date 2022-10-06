lige = [];
ulige = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 1; i < 50; i++) {
    if (i % 2 == 0) {
      lige.push(i);
    } else {
      ulige.push(i);
    }
  }
  background(220);
  for (let i = 0; i < lige.length; i++) {
    text(lige[i], random(width / 2 + 10, width - 5), random(height));
  }
  for (let i = 0; i < ulige.length; i++) {
    text(ulige[i], random(0, width / 2 - 10), random(height));
  }
}
