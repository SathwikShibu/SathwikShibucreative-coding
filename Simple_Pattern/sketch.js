function setup() {
  createCanvas(400, 400);
  background(210);
  drawPattern();
}

function drawPattern() {
  let cols = 10;
  let rows = 5;
  let width = 50;
  let height = 50;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * width;
      let y = j * height;
      
      if ((i + j) % 2 === 0) {
        fill(34, 139, 34); // Green color
      } else {
        fill(128, 0, 128); // Purple color
      }
      
      rect(x, y, width, height);
    }
  }
}

function draw() {
  // Nothing needed here for now
}
