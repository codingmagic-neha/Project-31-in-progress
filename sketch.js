
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;  




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(100,height,20,700);




}

function draw() {
  background(255,255,255);  
  Engine.update(engine);``
  
  
  drawSprites();



}