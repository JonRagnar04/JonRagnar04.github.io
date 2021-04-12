// Hér kemur kóðinn þinn:

var bukur = 150;
var augabrúnir = 122;
var augu = 20

function setup() {
  createCanvas(1275,574);
  rectMode(CENTER);
}
function draw() {
  background(255,200,0);
  // Búkur
  fill(255,217,182);
  ellipse(mouseX, mouseY,bukur,bukur);
  // Höfuð
  fill(255,217,182);
  ellipse(mouseX, mouseY - bukur/1.5, 80,80);
  // Augu
  fill(255);
  ellipse (mouseX - 25, mouseY - bukur/1.4, 40,20);
  ellipse (mouseX + 25, mouseY - bukur/1.4, 40,20);
  fill(0);
  ellipse (mouseX - augu, mouseY - bukur/1.45, 10,10);
  ellipse (mouseX + augu, mouseY - bukur/1.45, 10,10);
  // Fætur
  line (mouseX - 20, mouseY + bukur/2 - 3, mouseX - 20, mouseY + bukur/2 + 50);
  line (mouseX + 20, mouseY + bukur/2 - 3, mouseX + 20, mouseY + bukur/2 + 50);
  line (mouseX + 20, mouseY + bukur/2 + 50, mouseX + 40, mouseY + bukur/2 + 50);
  line (mouseX - 20, mouseY + bukur/2 + 50, mouseX - 40, mouseY + bukur/2 + 50);
  // Hendur
  line (mouseX + bukur/2 - 5, mouseY - 29, mouseX + bukur/2 + 30, mouseY - 35);
  line (mouseX - bukur/2 + 5, mouseY - 29, mouseX - bukur/2 - 30, mouseY - 35);
  // Augabrúnir
  line (mouseX + 12, mouseY - augabrúnir, mouseX + 30, mouseY - 122);
  line (mouseX - 12, mouseY - augabrúnir, mouseX - 30, mouseY - 122);
}
function mousePressed() {
	augabrúnir = random (115,129);
  augu = random (20,30);
}
