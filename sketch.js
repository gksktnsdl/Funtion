function setup()
{
  createCanvas(800,600);
  

}

function draw()
{
  background(0);
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,100,100);

  drawDonut1(142,109,153,100,100);
  drawDonut1(89,69,96,300,100);
  drawDonut1(61,48,66,400,200);
  drawDonut1(37,29,40,500,300);
}




function drawDonut1(r,g,b,x,y)
{ 
    
   fill(r,g,b)
   ellipse(x,y,200,200);
   fill(0);
   ellipse(x,y,120,120);


   
}
   






