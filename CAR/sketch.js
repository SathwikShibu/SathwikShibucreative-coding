function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background color, be sure to call this first.
  background(100, 14, 181);

  // car body
  fill(100, 0, 0); // red color
  rect(50, 230, 150, 70, 20); // wider, rounded corners

  // car front
  fill(300, 10, 0); // orange color
  quad(200, 230, 250, 270, 250, 300, 200, 300); // trapezoid shape

  // left tire
  fill(0); // black color
  ellipse(80, 300, 40, 40); // larger tire

  // right tire
  ellipse(160, 300, 40, 40); // larger tire
}
