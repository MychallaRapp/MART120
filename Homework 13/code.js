var characterx = 50;
var charactery = 50;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

shapex = 55;
shapey = 75;

var shapeX = [];
var shapeY = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseshapex = 10;
var mouseshapey = 20;


function setup()
{
  createCanvas(500,600);
  for (var i = 0; i < 50; i++)
    {
     shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shapeX[i] = getRandomNumber(500);
     shapeY[i] = getRandomNumber(600);
     diameters[i] = getRandomNumber(30);
    }
   createCharacter(200,350);
}

function draw()
{
  background(0,250,241);
  stroke(0);
  fill(0);
  createBorders(); 
  createCharacter();
  characterMovement();
  enemyMovement();
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

 function enemyMovement()
  {
    fill(218,0,250);
    
   for (var i = 0; i < shapeX.length; i++)
   { 
     circle(shapeX[i],shapeY[i],diameters[i]);
     shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shapeX[i] += shapeXSpeeds[i];
     shapeY[i] += shapeYSpeeds[i];
   
   if(shapeX[i] > width)
    {
     shapeX[i] = 0
    }
   if(shapeX[i] < 0)
    {
     shapeX[i] = width;
    }
   if(shapeY[i] > height)
    {
     shapeY[i] = 0;
    }
   if(shapeY[i] < 0)
    {
     shapeY[i] = height;
    }
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
 function getRandomNumber(number)
  {
   return Math.floor(Math.random() * number) + 5;
  }