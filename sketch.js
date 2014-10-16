function setup()
{
  createCanvas(800,600);
  

}

function draw()
{
  background(0);
  fill(255);
  ellipse(mouseX,mouseY,100,100);

  drawDonut1(100,100);
  drawDonut1(300,100);
  drawDonut1(400,200);
  drawDonut1(500,300);
}




function drawDonut1(x,y)
{ 
    
   fill(255);
   ellipse(x,y,200,200);
   fill(0);
   ellipse(x,y,120,120);


   
}
   






