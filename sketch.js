var garden,rabbit;
var gardenImg,rabbitImg;
var apple,rabbit
var appleImg,appleImg
var leaf,rabbit
var leafImg,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  appleandleaf();
  drawSprites();

  rabbit.x = mouseX;
}
function appleandleaf(){

  if (frameCount % 80 === 0){
    apple = createSprite(random(50, 350), 40, 10, 10);

    var select_sprites = Math.round(random(1,2));
    if(select_sprites === 1){
      apple.addImage(appleImg);
    }
    else {
      apple.addImage(leafImg);
    }
    apple.scale = 0.1
    apple.velocityY = 5
  }
}




