var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var platform1,platform2,platform3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	platform1 = Bodies.rectangle(400,650,150,20,{isStatic:true});
	World.add(world, platform1);
	platform2 = Bodies.rectangle(330,610,20,100,{isStatic:true});
	World.add(world, platform2);
	platform3 = Bodies.rectangle(470,610,20,100,{isStatic:true});
	World.add(world, platform3);


/* 	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1500,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render); */
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  rect(400,650,150,20)
  rect(330,610,20,100)
  rect(470,610,20,100)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)

    
  }
}



