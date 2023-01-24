function setup() {
  createCanvas(400, 400);
  background(125);
}

let color = 0; // black

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    loop();
  } else if (keyCode == LEFT_ARROW) {
    noLoop();
  }
}

let counter = 0;

function draw() {
  if (mouseIsPressed) {
    fill(color);
  } else {
    fill(255); // white
  }
  ellipse(mouseX, mouseY, 100 + (counter - 15), 100 - (counter - 15));
  color += 5;
  color %= 256;
  counter += 1;
  counter %= 31;
}
