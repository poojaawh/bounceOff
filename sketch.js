var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
  rect1 = createSprite(100, 100, 50, 80);
  rect2 = createSprite( 1000, 100, 50, 80);
  rect1.velocityX = 2;
  rect2.velocityX = -2;
}

function draw() {
  background(0,0,0);  

 bounceOff(rect1, rect2);

  drawSprites();
}
