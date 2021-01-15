const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var glass1, glass2, glass3, glass4;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);

  glass1 = new Glass(700, 240, 50, 50);
  glass2 = new Glass(920, 240, 50, 50);
  glass3 = new Glass(700, 240, 50, 50);
  glass4 = new Glass(920, 240, 50, 50);
  pig3 = new Pig(810, 220);


  box5 = new Box(810, 160, 70, 70);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
  box2.display();
  ground.display();
 // hill.display();
  pig1.display();
 // log1.display();

  glass1.display();
  glass2.display();
  glass3.display();
  glass4.display();
  pig3.display();
 // log3.display();

  box5.display();
//  log4.display();

    
}

