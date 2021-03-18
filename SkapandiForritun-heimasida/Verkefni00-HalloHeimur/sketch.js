// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(300,300);
    background(255,0,0);
    fill(150);
    ellipse(100,100,50,50);
    fill(0);
    textSize(20);
    text("Halló heimur",150,40);
}
function setup() {
  createCanvas(400, 400);
  background(255,200,0);
  frameRate(4);
}

function draw() {
  fill(random(0,255));
  ellipse(200,200,50,50);
}
