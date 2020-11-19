const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var log,ball,chain;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball= Bodies.circle(750,300,30,{density: 1});
    World.add(world,ball);
  
    b1= new Box(400,200);
    b2= new Box(400,150);
    b3= new Box(400,100);
    b4=new Box(400,50);
    b5= new Box(450,200);
    b6= new Box(450,150);
    b7= new Box(450,100);
    b8= new Box(450,50);
    b9= new Box(425,0);

    log= Bodies.rectangle(10,250,900,10,{isStatic: true});
    World.add(world,log);
  
    //chain= new Rope(ball.body,{x: 750,y: 10});
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);

  
  
  fill("red");
  ellipse(ball.position.x,ball.position.y,30,30);

  fill("red")
  rect(log.position.x,log.position.y,900,10);

  ball.position.x= mouseX;
  ball.position.y= mouseY;

  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  fill("white");
  text("Move The Ball with the Mouse and hit the building.",900,50);
}
