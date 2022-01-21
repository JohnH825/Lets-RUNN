var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var o1, o2, o3, o4, o5, o6;

var newImage;

function preload(){
  trex_running = loadAnimation("donut.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("donut.png");
  
  cloudImage = loadImage("donut.png");
 
  o1 = loadImage("donut.png");
  o2 = loadImage("donut.png");
  o3 = loadImage("donut.png");
  o4 = loadImage("donut.png");
  o5 = loadImage("donut.png");
  o6 = loadImage("donut.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  trex.scale = 0.5;
}

function draw() {
  background("pink");
  
  
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  if(keyDown("w")&& ("e")) {
    trex.velocityY = -10;
  }
  
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  trex.scale = 0.5;
  //spawn the clouds
  spawnClouds();
  spawnObstacle();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 1 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,200))
    cloud.scale = 0.10;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

 function spawnObstacle(){
   if (frameCount % 60 === 0){
     var obstacle = createSprite(600, 165, 10, 40);
     obstacle.velocityX = -6;
     var rand = Math.round(random(1, 6));
     switch(rand){
       case 1: obstacle.addImage(o1)
       break;
       case 2: obstacle.addImage(o2)
       break;
       case 3: obstacle.addImage(o3)
       break;
       case 4: obstacle.addImage(o4)
       break;
       case 5: obstacle.addImage(o5)
       break;
       case 6: obstacle.addImage(o6)
       break;
       default:break;
     }
     obstacle.scale = 0.5;
     obstacle.lifetime = 100; 

   }
 }

