var characterx = 50;
var charactery = 50;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapex = 55;
var shapey = 95;
var shapexspeed;
var shapeyspeed;

var shapetwox = 75;
var shapetwoy = 95;
var shapetwoxspeed;
var shapetwoyspeed;

var mouseshapex = 10;
var mouseshapey = 20;


function setup()
{
  createCanvas(500,600);
  shapexspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapeyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapetwoxspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapetwoyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
  background(0,250,241);
  stroke(0);
  fill(0);
  createBorders(); 
  createCharacter();
  characterMovement();
  shapeoneMovement();
  shapetwoMovement();
  victoryMessage();
  mouseShape();
}
function mouseClicked()
 {
  mouseshapex = mouseX;
  mouseshapey = mouseY;
 }
function createBorders()
  {
   rect(0,0,width,10);
  rect(0,0,10,height);
  rect(0,height-10,width,10);
  rect(width-10,0,10,height-50);
  textSize(19);
  text("EXIT",width-50,height-50);
  }
 function createCharacter()
  {
    fill(42,221,0);
  circle(characterx,charactery,30);
  }
 function characterMovement()
  {
    if(keyIsDown(w))
   {
    charactery -= 5;
   }
  if(keyIsDown(s))
   {
    charactery += 5;
   }
  if(keyIsDown(a))
   {
    characterx -= 5;
   }
  if(keyIsDown(d))
   {
    characterx += 5;
   }
  }
 function shapeoneMovement()
  {
    fill(218,0,250);
  square(shapex,shapey,20);
  square(shapex,shapey,30);
  shapexspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapeyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapex += shapexspeed;
  shapey += shapeyspeed;
  if(shapex > width)
   {
    shapex = 0
   }
  if(shapex < 0)
   {
    shapex = width;
   }
  if(shapey > height)
   {
    shapey = 0;
   }
  if(shapey < 0)
   {
    shapey = height;
   }
  }
 function shapetwoMovement()
  {
    fill(252,184,1);
  square(shapetwox,shapetwoy,20);
  square(shapetwox,shapetwoy,30);
  shapetwoxspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapetwoyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapetwox += shapetwoxspeed;
  shapetwoy += shapetwoyspeed;
  if(shapetwox > width)
   {
    shapetwox = 0
   }
  if(shapetwox < 0)
   {
    shapetwox = width;
   }
  if(shapetwoy > height)
   {
    shapetwoy = 0;
   }
  if(shapetwoy < 0)
   {
    shapetwoy = height;
   }
  }
 function victoryMessage()
  {
   
  if(characterx > width && charactery > width - 50)
   {
    fill(0);
    stroke(10);
    textSize(30);
    text("You Win!", width/2-50, height/2-50);
   }
  }
 function mouseShape()
  {
   fill(250,0,18);
  ellipse(mouseshapex,mouseshapey, 30,15);
  }