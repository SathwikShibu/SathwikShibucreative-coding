let trails = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200);

  trails.push(createVector(mouseX, mouseY));

  if (trails.length > 100) {
    trails.shift();
  }

  for (let i = 0; i < trails.length; i++) {
    let pos = trails[i];
    let alpha = map(i, 0, trails.length, 0, 255); // Alpha gradient
    fill(255 - alpha, 0, alpha); // Gradient from red to blue
    ellipse(pos.x, pos.y, i / 2);
  }
}
