const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var button,ball,ground,aim;
var score = 0;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(width / 2 , height / 2 - 80, 80, 80);
  ground = new Ground(500,480,1000,20);
  ground2 = new Ground(10,250,20,500);
  ground3 = new Ground(990,250,20,500);
  ground4 = new Ground(500,20,1000,20);
  aim = new Aim(650,250,45,45)
  aim2 = new Aim(340,250,45,45)
  button = createImg('button.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(fly);

  obstacle1 = new obstacles(400,80,100,30);
  
  
  
  
}

function draw() {
  background(59);
  Engine.update(engine);

  ball.show();
  aim.show();
  aim2.show()
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  obstacle1.display();

  if(score<0){
    gameOver();
  }


 textSize(18);
  fill("white");
  text("Score:" +score,50,225); 
  
  var collision = Matter.SAT.collides(ball.body, aim.body);
        if (collision.collided) {
          score = score +1
        }
        var collision = Matter.SAT.collides(ball.body, aim2.body);
        if (collision.collided) {
          score = score +1
        }

        if(score>=10){
          textSize(25);
          fill("blue");
          text("YOU WIN!!",450,150);
        }
  

    var collision = Matter.SAT.collides(obstacle1.body,ball.body);
    if(collision.collided){
      score = score -2
    }
   

  
  drawSprites()
}
function fly(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: -0.05, y: 0.05 });
}


function gameOver(){
     swal({
    title: `YOU LOST !!`,
    text: "CLICK ON REFRESH TO PLAY AGAIN",
    imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize: "100x100",
    confirmButtonText: "REFRESH"
  });
}