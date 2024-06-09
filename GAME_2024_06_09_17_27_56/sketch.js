let basket;
let objects = [];
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  basket = new Basket();
  for (let i = 0; i < 10; i++) {
    objects.push(new FallingObject());
  }
}

function draw() {
  if (!gameOver) {
    background(200);

    basket.move();
    basket.display();

    for (let i = objects.length - 1; i >= 0; i--) {
      objects[i].fall();
      objects[i].display();

      if (basket.catch(objects[i])) {
        objects.splice(i, 1);
        objects.push(new FallingObject());
        score++;
      } else if (objects[i].offScreen()) {
        gameOver = true;
      }
    }

    fill(1);
    textSize(24);
    text('Score: ' + score, 10, 30);
  } else {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Game Over!', width / 2, height / 2);
    textSize(24);
    text('Score: ' + score, width / 2, height / 2 + 40);
  }
}

class Basket {
  constructor() {
    this.width = 100;
    this.height = 20;
    this.x = width / 2;
    this.y = height - this.height;
  }

  move() {
    this.x = mouseX;
  }

  display() {
    fill(2, 75, 0);
    rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  catch(object) {
    if (
      object.x > this.x - this.width / 2 &&
      object.x < this.x + this.width / 2 &&
      object.y > this.y - this.height / 2 &&
      object.y < this.y + this.height / 2
    ) {
      return true;
    }
    return false;
  }
}

class FallingObject {
  constructor() {
    this.size = 20;
    this.x = random(this.size, width - this.size);
    this.y = 0 - this.size;
    this.speed = random(2, 5);
  }

  fall() {
    this.y += this.speed;
  }

  display() {
    fill(20, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }

  offScreen() {
    return this.y > height + this.size;
  }
}
