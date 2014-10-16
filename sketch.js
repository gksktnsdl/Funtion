function setup()
 {
  createCanvas(800, 600);
  
  stroke(255,255,255,50);
}

  function draw()
{
  background(174,138,184);
  fill(255,255,255,50);
 if (mouseX < 100) {
  rect(50, 100, 100,100);} else if (mouseX < 200){
  rect(150, 200,200,200);} else if (mouseX < 300){
 rect(250, 100, 200,200);} else if (mouseX < 400){
  rect(350,100, 100,200);} else if (mouseX < 500){
  rect(450,100, 200,100);} else {
  rect(500,500,100,100);}



}