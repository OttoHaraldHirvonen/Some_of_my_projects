// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Body = Matter.Body;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80,80,{render:{sprite:{texture:'A:/Javascript/Epämääräistä/Matter js/wizard.png',
						xScale: 0.2,
                        yScale: 0.2,}}});
var boxB = Bodies.rectangle(450, 50, 80, 80,{render:{sprite:{texture:'A:/Javascript/Epämääräistä/Matter js/wizard 2.png',
						xScale: 0.2,
                        yScale: 0.2,}}});
var ground = Bodies.rectangle(400, 400, 810, 60, { isStatic: true });
var topWall = Bodies.rectangle(400, 10, 800, 20, { isStatic: true });
var leftWall = Bodies.rectangle(10, 200, 20, 400, { isStatic: true });
var rightWall = Bodies.rectangle(790, 200, 20, 400, { isStatic: true });


var xCordA = boxA.position.x;
var yCordA = boxA.position.y;
var xCordB = boxB.position.x;
var yCordB = boxB.position.y;

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "32") {
        Body.setVelocity( boxA, {x: 0, y: -20});
    }
     if (evt.keyCode == "39") {
        Body.setVelocity( boxA, {x: 30, y: 10});
    }   
     if (evt.keyCode == "37") {
        Body.setVelocity( boxA, {x: -30, y: 10});
	}
	 if (evt.keyCode == "70") {
	 	var xCordA = boxA.position.x;
		var yCordA = boxA.position.y;

		var ball = function () {

			var fireBall = Bodies.circle(xCordA, yCordA, 23, {
		        density: 0.0005,
		        frictionAir: 0.06,
		        restitution: 0.3,
		        friction: 0.01,
		        render: {
		            sprite: {
		             
		            }
		        }
		    })
    Matter.Body.setVelocity(fireBall,{x:30, y:0});
	setInterval(function(){ World.remove(engine.world, [fireBall]); }, 500);

	var xFireCord = fireBall.position.x;
var yFireCord = fireBall.position.y;

if(xFireCord <= xCordB + 70 && xFireCord >= xCordB - 70){
	World.remove(engine.world, [boxB]);;
}
 	return fireBall;
}
        World.add(engine.world, ball());
        console.log(xCordA,yCordA);
	}
    if (evt.keyCode == "87") {
    Body.setVelocity( boxB, {x: 0, y: -20});
	}
 if (evt.keyCode == "68") {
    Body.setVelocity( boxB, {x: 30, y: 10});
	}   
 if (evt.keyCode == "65") {
    Body.setVelocity( boxB, {x: -30, y: 10});
	}

}




// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, leftWall, rightWall, topWall]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);