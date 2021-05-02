var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 25;
var spadiThykkt = 150;
var spadiY;
var spadiX;


function setup() {
	createCanvas(1275,570);
	spadiX = width - 15;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
    stig = stig - 2;
    fill(255,0,0);
    for(var i = 1; i< 1000;i = i+1) {
      rect(random(width), random(height), random(30), random(50));
    }
  }

  if ((boltiX < 10))  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY > boltiStaerd)) {
    hradiY = hradiY * -1;
  }
   // Snertir gólfið
  if ((boltiY < 560)) {
    hradiY = hradiY * -1;
  }
  // Athuga hvort bolti snertir spaða:
    if(abs(spadiX - boltiX) < boltiStaerd/2 + spadiBreidd/2 && abs(mouseY - boltiY) < boltiStaerd/2 + spadiThykkt/2){
       if(hradiX < 20){
         hradiX = hradiX * -1.2;
         hradiY = hradiY * -1;
       }
       else{
         hradiX = hradiX * -1;
         hradiY = hradiY * -1;
        }
      stig = stig + 1;
}
    if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiBreidd/2 && abs(mouseY - boltiY) < boltiStaerd/2 + spadiThykkt/2){
         if(hradiX < 20){
           hradiX = hradiX * -1.2;
         }
         else{
           hradiX = hradiX * -1;
          }
        stig = stig + 1;
   }
    if((stig > 2)){
        fill(255);
        for(var i = 1; i< 200;i = i+1) {
          rect(random(width), random(height), random(30), random(50));
    }
  }
  // Teikna boltann
  fill(255);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(255);
  rect(spadiX,mouseY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(spadiX, mouseY, 10,10);
	// Teikna stigin
  fill(255);
  text("Stig: " + stig,10,20);
}
