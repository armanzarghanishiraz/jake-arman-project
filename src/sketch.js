//sets up window
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//draw function calls animations to the screen
function draw() {
  ellipse(50, 50, 80, 80);
}

//resizes window every time it changes
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}