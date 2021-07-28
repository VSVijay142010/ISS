

var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function setup() {
  createCanvas(700, 600);
 
  
  astronaut = createSprite(350,250);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}



function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym11.png","gym12.png","gym12.png");
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
 move = loadAnimation("move1.png","move1.png","move2.png","move2.png");
}


function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",500, 500);
  textSize(15);
  text("Up Arrow for Brushing",500, 515);
  text("Down Arrow for Gymming",500, 530);
  text("Left Arrow for Eating",500, 545);
  text("Right Arrow for Bathing",500, 560);
  text("m key for Moving",500, 575);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}