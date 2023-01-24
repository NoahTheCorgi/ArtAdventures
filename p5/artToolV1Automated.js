// NoahTheCorgi, Automation of brush movements

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(255);
  for (let i = 0; i < 10; i++) {
    console.log(100 * Math.random());
  }
}

let color = 0; // black

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    loop();
  } else if (keyCode == LEFT_ARROW) {
    noLoop();
  }
}

function moveX(x) {
  return Math.abs(width * Math.cos(y + 1));
}

function moveY(y) {
  return Math.abs(height * Math.sin(y - 1));
}

let counter = 0;
let x = 0;
let y = 0;

function draw() {
  fill(color);
  ellipse(x, y, 50 + ((counter % 100) - 15), 50 - ((counter % 100) - 15));
  x = moveX(y);
  y = moveY(x);
  color += 5;
  color %= 200;
  counter += 1;
  // terminate process
  if (counter >= 500) {
    noLoop();
  }
}
