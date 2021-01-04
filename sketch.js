
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;
var ball;
var ground;
var world;
var bin,binImg;

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball = new Ball(200,450,70);
	ground = new Ground(width/2,640,width,20);
	side1 = new Side(1200,510,20,200);
	side2 = new Side(1000,510,20,200);
	side3 = new Side(1100,600,200,20);
	binImg = loadImage("untitled folder/dustbingreen.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  bin = createSprite(1100,520,20,20);
  bin.addImage(binImg);
  bin.scale = 0.8;
	
  ground.display();
  ball.display();
  bin.display();
 // side1.display();
  //side2.display();
  //side3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});

  
	}
}



