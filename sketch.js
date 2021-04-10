var ball, edge1, edge2, edge3, edge4;

var T1, T2, T3, T4;

var edges;

var soun;

function preload(){
  soun = loadSound("music.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();  

  T1 = createSprite(170, height - 60, 390, 40);
  T1.shapeColor = "red";

  T2 = createSprite(570, height - 60, 390, 40);
  T2.shapeColor = "white";

  T3 = createSprite(970, height - 60, 390, 40);
  T3.shapeColor = "orange";

  T4 = createSprite(1370, height - 60, 390, 40);
  T4.shapeColor = "green";

  ball = createSprite(width / 2, height / 2, 40, 40);
  ball.velocityY = +8;
  ball.velocityX = +5;

  ball.x = Math.round(random(20, width - 20));

}

function draw() {

  background(0, 0,255);

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  if(T1.isTouching(ball) && ball.bounceOff(T1)){
    ball.shapeColor = "red";
  }

  if(T2.isTouching(ball) && ball.bounceOff(T2)){
    ball.shapeColor = "white";
    soun.play();
  }

  if(T3.isTouching(ball) && ball.bounceOff(T3)){
    ball.shapeColor = "orange";
    soun.stop();
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  if(T4.isTouching(ball) && ball.bounceOff(T4)){
    ball.shapeColor = "green";
  }

drawSprites();

}