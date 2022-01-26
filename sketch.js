
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var floor,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restituition:0.03,
		friction:0,
		density:1.2
	}
	var options={
		isStatic:true,
		restituition:0
	}

	//Create the Bodies Here.
	ball = Bodies.circle(150,100,30,ball_options);
	World.add(world,ball);

	
	floor = Bodies.rectangle(400,695,800,10,options);
	World.add(world,floor);

	wall1 = Bodies.rectangle(500,635,5,100,options);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(700,635,5,100,options);
	World.add(world,wall2);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill(248, 247, 248);
  ellipse(ball.position.x,ball.position.y,30);
  fill(250, 255, 9);
  rect(floor.position.x,floor.position.y,800,40);
  rect(wall1.position.x,wall1.position.y,10,100);
  rect(wall2.position.x,wall2.position.y,10,100);

  if (keyDown(UP_ARROW)) {
	Body.applyForce(ball,{x:0, y:0},{x:30,y:-70})
  }
  
  drawSprites();
}



