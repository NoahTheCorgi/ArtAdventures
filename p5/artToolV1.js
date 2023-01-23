function setup() {
  // put setup code here
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

function draw() {
  if (mouseIsPressed) {
    fill(color);
  } else {
    fill(255); // white
  }
  ellipse(mouseX, mouseY, 100, 100);
  color += 5;
  color %= 256;
}
