// NoahTheCorgi, Collatz Conjecture Visualization V1
function setup() {
  createCanvas(400, 400); // default
  background(255); // white
}

let color = 0; // black

// utility
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    loop();
    console.log("loop() called, resume drawing...");
  } else if (keyCode == LEFT_ARROW) {
    noLoop();
    console.log("noLoop() called, pause drawing...");
  }
}

function collatz(n) {
  if (n % 2 === 0) {
    return Math.floor(n / 2);
  } else {
    return 3 * n + 1;
  }
}

let n = 1;
function draw() {
  fill(color);
  let helper = n;
  let previous = helper;
  while (helper != 1) {
    // small circles as paint brush
    if (n % 2 === 0) {
      ellipse(n, previous, 10, 10);
    } else {
      ellipse(previous, n, 10, 10);
    }
    previous = helper;
    helper = collatz(helper);
  }
  color += 5;
  color %= 200;
  n += 1;
  // terminate process
  if (n > height) {
    noLoop();
    console.log("noLoop() called, drawing completed.");
  }
}
