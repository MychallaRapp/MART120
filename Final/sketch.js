
var size = 24;
var count = 0;
var eyeonex = 175;
var eyetwox = 275;
var movement = 1;
var circley = 220;
var rectx = 150;
var recty = 85;

function setup()
{
  createCanvas(500,600);
}

function draw()
{
  background(120);
  //hair
  fill(210,158,0);
  circle(230,circley,250);
 
  
  //head
  fill(254,223,178);
  ellipse(230,225,250,275);
  
  fill(210,158,0);
  rect(rectx,recty,150,50);

  //eyes
  fill(252,252,252);
  ellipse(175,200,20,25);
  fill(41,191,254);
  ellipse(eyeonex,200,15,20);
 
   fill(252,252,252);
  ellipse(275,200,20,25);
  fill(41,191,254);
  ellipse(eyetwox,200,15,20);
 
  point(175,200);
  point(275,200);
  //nose
  fill(210,158,0);
  triangle(225,225,220,250,225,250);
  //body
  fill(0,250,241);
  rect(155,360,150,200);
  line(75,300,155,360);
  line(350,300,305,360);
  //name
  fill(250,0,0);
    textSize(size);
 
    text("Mychalla Rapp",305,500 );
  
}