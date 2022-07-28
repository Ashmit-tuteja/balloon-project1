var balloon,balloon_img;
var bg_img,bg;




function preload()
{
  balloon_img = loadImage("./images/ballon123.png");
  bg_img = loadImage("./images/bg.jpg");
}

function setup() {
  createCanvas(1000,700);
  

  balloon = createSprite(100,50,30,30);
  balloon.addImage(balloon_img);
   balloon.scale = 0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10
}
  drawSprites();
}


