const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1 , d1,d2,d3 , ground;


function setup() {

	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(50,370,10)

	ground = new Box(600,390,1200,10)

	d1 = new Box(1000,375,200,20)
	d2 = new Box(890,335,20,100)
	d3 = new Box(1110,335,20,100)
  
}


function draw() {

  background(0);

  keyPressed();

  ball1.display()

  ground.display()

  d1.display()
  d2.display()
  d3.display()

 Engine.update(engine)
}

function keyPressed(){
	if( keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-1});
	}
}



