function setup() {
  createCanvas(384,384);
  background(255, 215, 0);
  fill(0);
  colorMode(HSL);
  frameRate(2);
}

function draw(){
    fill(random(0,175),80,60);
    strokeWeight(2);
    for(var x = 0; x < 20 ; x = x + 1) {
       fill(random(175,360),80,60);
       strokeWeight(2);
       for(var y = 0; y < 20 ; y = y + 1) {
          ellipse(10 + x*19, 10 + y*19, 15, 15);
      }
   }
}
