var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,50,30);
  object2 = createSprite(300,100,50,30);
  object3 = createSprite(500,100,50,30);
  object4 = createSprite(700,100,50,30);
  object1.shapeColor = "blue";
  object2.shapeColor = "blue";
  object3.shapeColor = "blue";
  object4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 if( isTouching(object2,movingRect)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "yellow";
 }
 else
 {
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
 }
 if( isTouching(object3,movingRect)){
  movingRect.shapeColor = "red";
  object3.shapeColor = "darkblue";
 }
 else
 {
  movingRect.shapeColor = "green";
  object3.shapeColor = "green";
 }
 if( isTouching(object4,movingRect)){
  movingRect.shapeColor = "red";
  object4.shapeColor = "red";
 }
 else
 {
  movingRect.shapeColor = "green";
  object4.shapeColor = "green";
 }
 if( isTouching(object1,movingRect)){
  movingRect.shapeColor = "red";
  object1.shapeColor = "grey";
 }
 else
 {
  movingRect.shapeColor = "green";
  object1.shapeColor = "green";
 }
 if( isTouching(fixedRect,movingRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "brown";
 }
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  drawSprites();
}

