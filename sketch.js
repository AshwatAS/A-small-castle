const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var engine,world;
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(30,280,50,230);
  box2=new Box(70,320,20,150);
  box3=new Box(110,320,20,150);
  box4=new Box(150,320,20,150);
  box5=new Box(190,320,20,150);
  box6=new Box(230,320,20,150);
  box7=new Box(270,320,20,150);
  box8=new Box(310,320,20,150);
  box9=new Box(350,280,50,230);
  box10=new Box(190,235,260,20);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display();
  box6.display();  
  box7.display();
  box8.display();  
  box9.display();
  box10.display();
  drawSprites();
}