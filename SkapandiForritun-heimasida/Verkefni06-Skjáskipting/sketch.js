var x;

function setup() {
  createCanvas(1250,570);
  rectMode(CENTER)
  frameRate(70);
  x = 30;

}
//Niðri hægra meigin
function draw() {
  background(255);
  fill(236,36,94);
  if(mouseY > height/2 && mouseX > width/2){
    ellipse(mouseX,mouseY,30,30);
    fill(0);
    for(var i = 1; i< 50;i = i+1) {
      rect(random(width/2,width), random(height/2,height), random(30), random(50));
    }
  }
  fill(236,36,94);
  if(mouseY > height/2 && mouseX > width/2 && mouseIsPressed){
    rect(mouseX,mouseY,35,35);
  }
  //Uppi hægra meigin
  fill(0,250,137);
  if(mouseY < height/2 && mouseX > width/2){
    ellipse(mouseX,mouseY,30,30);
    fill(0);
    for(var i = 1; i< 50;i = i+1) {
      ellipse(random(width/2,width), random(height/2), random(30), random(50));
    }
  }
  fill(0,250,137);
  if(mouseY < height/2 && mouseX > width/2 && mouseIsPressed){
    rect(mouseX,mouseY,35,35);
  }
  //Uppi vinstra meigin
  fill(0,69,255);
  if(mouseY < height/2 && mouseX < width/2){
    ellipse(mouseX,mouseY,30,30);
    fill(0);
    for(var i = 1; i< 50;i = i+1) {
      rect(random(width/2), random(height/2), random(30), random(50));
    }
  }
  fill(0,69,255);
  if(mouseY < height/2 && mouseX < width/2 && mouseIsPressed){
    rect(mouseX,mouseY,35,35);
  }
  //Niðri vinstra meigin
  fill(255,255,0);
  if(mouseY > height/2 && mouseX < width/2){
    ellipse(mouseX,mouseY,30,30);
    fill(0);
    for(var i = 1; i< 50;i = i+1) {
      ellipse(random(width/2), random(height/2,height), random(30), random(50));
    }
  }
  fill(255,255,0);
  if(mouseY > height/2 && mouseX < width/2 && mouseIsPressed){
    rect(mouseX,mouseY,35,35);
  }
  function keyPressed() {
  if(keyCode == 32){
    x = x + 10;
   }
  }
}
