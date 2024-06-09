function setup() {
  createCanvas(800, 400);
  background(220);

  // Title
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont('times new roman');
  fill(0);
  fill(50, 50, 200);
  text('WELCOME TO ', width / 2, height / 4);
  
  
  // Subtitle
  textSize(32);
  textAlign(LEFT, LEFT);
  textFont('times new roman');
  fill(500, 50, 200);
  text('BATHSPA', width / 2, height / 2);

  // Description
  textSize(16);
  textAlign(RIGHT, RIGHT);
  textFont('georgia');
  fill(10);
  text('UNIVERSITY', width / 2, (3 * height) / 4);
}

function draw() {
  // Nothing needed here for now
}