function setup(){
  createCanvas(500,500);
  background(250);
}

function draw(){
  //antena
  fill(255,98,242);
  line(255,95,255,65);
  circle(255,65,10);
  
  //body
  fill(200,255,131);
  rect(205,200,100,100);
  
  //head
  fill(200,255,131);
  circle(255,150,110);
  
  //eyes
  fill(20,20,20);
  ellipse(230,150,25,50); // Adjusted size and position
  ellipse(280,150,25,50); // Adjusted size and position
  ellipse(255,125,25,50); // Adjusted size and position for the third eye
  
  //feet
  fill(200,255,131);
  ellipse(216,300,70,30);
  ellipse(288,300,70,30);

  //arms
  fill(200,255,131);
  ellipse(205,240,30,80);
  ellipse(305,240,30,80);
  
  //triangle
  fill(255,98,242); // Adjusted color value to fit within 0-255 range
  triangle(235,236,275,235,255,270);
}
