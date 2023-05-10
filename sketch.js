var ball;
var solo, solo_options;
var lixeiro
var lixeiro2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
solo_options={
isStatic:true

}
	engine = Engine.create();
	world = engine.world;

solo = Matter.Bodies.rectangle(400,690,800,20,solo_options)
World.add(world, solo);

lixeira = Matter.Bodies.rectangle(500,690,10,260,solo_options)
World.add(world, lixeira);

lixeira2 = Matter.Bodies.rectangle(600,690,10,260,solo_options)
World.add(world, lixeira2);


	//Create the Bodies Here.
    ball = Matter.Bodies.circle(100,100,30,ball_options);
    World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x, ball.position.y, 30)
  rect(solo.position.x, solo.position.y, 800, 20)
  rect(lixeira.position.x, lixeira.position.y, 10, 260)
  rect(lixeira2.position.x, lixeira2.position.y, 10, 260)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == 32){
	console.log(keyCode)
Matter.Body.applyForce(ball, {x:0,y:0}, {x:7,y:-10})
	}
	
}

