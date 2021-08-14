const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var snow = []

function  preload() {
  bg = loadImage("snow1.jpg")
}
  

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,395,800,10)
  
}

function draw() {
  background(bg);  
  Engine.update(engine)

  ground.display();

  if(frameCount%40===0){
    snow.push(new Snow(random(0,800),0))
  }

  for(var k = 0 ; k< snow.length; k++ ){
    snow[k].display();
  }

  
  drawSprites();

}

