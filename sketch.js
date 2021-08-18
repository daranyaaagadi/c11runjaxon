var path,pathImg;
var  boy,boyImg;
var leftBoundary, rightBoundary;

function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boyImg = loadImage("Runner-1.png","Runner-2.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.scale = 1.3;



boy = createSprite(180,340,50,50);
boy.addImage(boyImg);
boy.scale = 0.1;

leftBoundary = createSprite(0,0,100,800);
//leftBoundary.visible = false;

rightBoundary = createSprite(410,0,100,800);
//rightBoundary.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;


  edges = createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);


  if(path.y>400){
    path.y = height/2;

  }



  drawSprites();

}
