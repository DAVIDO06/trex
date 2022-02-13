

var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png");
ground1=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("rex",trex_running);
 trex.scale=0.5;
 ground=createSprite(200,180,400,20)
 ground.addAnimation("floor",ground1);
}

function draw(){
  background("blue")
  if(keyDown("space")){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
trex.collide(ground);



  drawSprites();

}
