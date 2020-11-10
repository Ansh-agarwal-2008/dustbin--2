
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball1;
var log1,log2,log3;

function setup() {
	createCanvas(800, 400);
 

	engine = Engine.create();

	world = engine.world;

	log1 = new log(600,390,100,10);
	log2 = new ground(550,370,10,100);
	log3 = new ground(650,370,10,100);
	ground1 = new ground(400,400,800,10);
	ball1 = new ball(200,280,50,50);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)

  
  log2.display();
  log3.display();
  log1.display();
  ground1.display();
  ball1.display();

}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:195,y:-200});
	 }
	 }



