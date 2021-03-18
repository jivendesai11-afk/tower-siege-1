const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var stand1,stand2;
function preload() {
  //  background = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
Engine.run(engine)

    ground = new Ground(450,390,900,20);
    stand1=new Stand(390,300,250,10)
    stand2=new Stand(700,200,200,10)
}
function draw() {
    background("blue")
    ground.display()
    stand1.display()
    stand2.display()
}