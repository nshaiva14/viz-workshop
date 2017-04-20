
function setup() {
  createCanvas(640, 480);
}

function draw() {
  var red = random(255);
  var green = random(255);
  var blue = random(255);

  if (mouseIsPressed) {
    fill(0);
} else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
    stroke(255, 255, 255, 25);
}
  rect(mouseX, mouseY, 80, 80);
}
