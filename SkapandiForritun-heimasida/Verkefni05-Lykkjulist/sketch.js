function setup() {
  createCanvas(768,768);
  background(0);
  fill(0);
  colorMode(HSL);
  frameRate(2);
  rectMode(CENTER);
}

function draw(){
    fill(random(90,145),random(70,100),random(50,65));
    strokeWeight(2);
    for(var x = 0; x < 20 ; x = x + 1) {
       fill(random(90,145),random(70,100),random(50,65));
       strokeWeight(2);
       for(var y = 0; y < 20 ; y = y + 1) {
          ellipse(10 + x*19, 10 + y*19, 15, 15);
      }
   }
   fill(random(90,145),random(70,100),random(50,65));
   strokeWeight(2);
   for(var o = 20; o < 40 ; o = o + 1) {
     fill(random(90,145),random(70,100),random(50,65));
     strokeWeight(2);
      for(var l = 20; l < 40 ; l = l + 1) {
         ellipse(10 + o*19, 10 + l*19, 15, 15);
     }
  }
  fill(random(325,360),random(70,100),random(50,65));
  strokeWeight(2);
  for(var z = 0; z < 20 ; z = z + 1) {
     fill(random(325,360),random(70,100),random(50,65));
     strokeWeight(2);
     for(var j = 20; j < 40 ; j = j + 1) {
        rect(10 + z*19, 10 + j*19, 15, 15);
    }
 }
 fill(random(325,360),random(70,100),random(50,65));
 strokeWeight(2);
 for(var u = 20; u < 40 ; u = u + 1) {
    fill(random(325,360),random(70,100),random(50,65));
    strokeWeight(2);
    for(var k = 0; k < 20 ; k = k + 1) {
       rect(10 + u*19, 10 + k*19, 15, 15);
   }
 }
}
