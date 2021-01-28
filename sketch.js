const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas;
var engine,world;
var box1,box2,ground1;

                                       
function setup() {
 	canvas = createCanvas(400,400);
  	engine=Engine.create();
  	world=engine.world;

	 box1 = new box(200,300,50,50);
	 box2 = new box (230,100,50,100);
	 ground1 = new ground(200,height,400,50);  
	 	
 }

function draw() {
  	background(0);
	  Engine.update(engine);
	 box1.display();
	 box2.display();
	 ground1.display();
}
