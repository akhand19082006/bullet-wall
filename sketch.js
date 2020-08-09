var bullet, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
weight = random(30,52);
thickness= random(22,83);
bullet = createSprite(50, 200, 70, 40);
  wall = createSprite(1500,200,thickness,height/2);
wall . shapeColor=color(80,80,80)
bullet.velocityX= speed;


}

function draw() {
  background("black");

if(hascollided(wall,bullet))
{
var damage = 0.5 * weight * speed* speed/(thickness *thickness* thickness);

if(damage>10)

{
wall.shapeColor=color(225,0,0);


}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);

}

}

drawSprites();

}
 function hascollided(object1,object2){
  if(object1.x-object2.x < (object2.width+object1.width)/2)                                              
  {
  
  
    object2.velocityX = 0;
  
  }




 }