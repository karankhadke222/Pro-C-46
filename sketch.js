
var player,player_Image;
var edges;

var barricade1;
var barricade2;
var barricade3;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;

var monster1,monster1_Img;
var monster2,monster2_Img;
var monster3,monster3_Img;

var parrot,parrotImg;

var sound;





function preload(){
parrotImg=loadImage("Parrot.png");
player_Image=loadImage("Runner.gif");
monster1_Img=loadImage("Monster1.png");
monster2_Img=loadImage("Monster2.png");
monster3_Img=loadImage("Monster3.png");
sound=loadSound("Netherplace.mp3");
}

function setup() {
  createCanvas(1500,600);

  sound.play();
  
  player=createSprite(40,380,30,30);
  player.addImage(player_Image);
  player.scale=0.2;

  barricade1=createSprite(120,450,100,30);
  barricade1.shapeColor="black";

  barricade2=createSprite(260,370,100,30);
  barricade2.shapeColor="black";

  barricade3=createSprite(340,450,100,30);
  barricade3.shapeColor="black";

  wall1=createSprite(500,600,20,300);
  wall1.shapeColor="brown";

  wall2=createSprite(1000,590,1000,20);
  wall2.shapeColor="brown";

  wall3=createSprite(1000,10,1000,20);
  wall3.shapeColor="brown";

  wall4=createSprite(1490,100,20,1000);
  wall4.shapeColor="brown";

  wall5=createSprite(540,450,100,20);
  wall5.shapeColor="brown";

  wall6=createSprite(700,40,20,100);
  wall6.shapeColor="brown";

  wall7=createSprite(1005,170,875,20);
  wall7.shapeColor="brown";

  wall8=createSprite(1430,90,20,50);
  wall8.shapeColor="brown";

  wall9=createSprite(490,160,20,350);
  wall9.shapeColor="brown";

  wall10=createSprite(950,540,20,80);
  wall10.shapeColor="brown";

  wall11=createSprite(940,500,400,20);
  wall11.shapeColor="brown";

  wall12=createSprite(800,260,20,200);
  wall12.shapeColor="brown";

  wall13=createSprite(900,350,450,20);
  wall13.shapeColor="brown";

  wall14=createSprite(680,425,20,170);
  wall14.shapeColor="brown";

  wall15=createSprite(1115,300,20,130);
  wall15.shapeColor="brown";

  wall16=createSprite(1240,300,20,250);
  wall16.shapeColor="brown";

  wall17=createSprite(1380,400,150,20);
  wall17.shapeColor="brown";

  wall18=createSprite(1180,260,20,200);
  wall18.shapeColor="brown";

  wall19=createSprite(900,60,20,90);
  wall19.shapeColor="brown";

  monster1=createSprite(900,400,20,20);
  monster1.addImage(monster1_Img);
  monster1.scale=0.08;
  monster1.velocityY=-3;
  monster1.velocityX=-3;

  monster2=createSprite(800,60,20,20);
  monster2.addImage(monster2_Img);
  monster2.scale=0.08;
  monster2.velocityY=-3;
  monster2.velocityX=-3;

  monster3=createSprite(1300,500,20,20);
  monster3.addImage(monster3_Img);
  monster3.scale=0.08;
  monster3.velocityX=-3;
  monster3.velocityY=-3;
  

  

  

  parrot=createSprite(995,300,30,30);
  parrot.addImage(parrotImg);
  parrot.scale=0.2;



 


  edges=createEdgeSprites();
}

function draw() {
  background("lightBlue");
  textSize(25);
  text("GO LEFT TO GET TO PARROT",800,150);


 


  if(player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall3)||
  player.isTouching(wall4)||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||
  player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(wall11)||
  player.isTouching(wall12)|player.isTouching(wall13)||player.isTouching(wall14)||player.isTouching(wall15)||player.isTouching(wall16)||
  player.isTouching(wall17)||player.isTouching(wall18)||player.isTouching(wall19)||player.isTouching(monster1)||
  player.isTouching(monster2))
  {
    player.x=40;
    player.y=380;
  }

  player.velocityY=player.velocityY+0.5
  player.collide(barricade1);
  player.collide(barricade2);
  player.collide(barricade3);
  player.collide(edges);

  monster1.bounceOff(wall1);
  monster1.bounceOff(wall2);
  monster1.bounceOff(wall3);
  monster1.bounceOff(wall4);
  monster1.bounceOff(wall5);
  monster1.bounceOff(wall6);
  monster1.bounceOff(wall7);
  monster1.bounceOff(wall8);
  monster1.bounceOff(wall9);
  monster1.bounceOff(wall10);
  monster1.bounceOff(wall11);
  monster1.bounceOff(wall12);
  monster1.bounceOff(wall13);
  monster1.bounceOff(wall14);
  monster1.bounceOff(wall15);
  monster1.bounceOff(wall16);
  monster1.bounceOff(wall17);
  monster1.bounceOff(wall18);
  monster1.bounceOff(wall19);

  monster2.bounceOff(wall1);
  monster2.bounceOff(wall2);
  monster2.bounceOff(wall3);
  monster2.bounceOff(wall4);
  monster2.bounceOff(wall5);
  monster2.bounceOff(wall6);
  monster2.bounceOff(wall7);
  monster2.bounceOff(wall8);
  monster2.bounceOff(wall9);
  monster2.bounceOff(wall10);
  monster2.bounceOff(wall11);
  monster2.bounceOff(wall12);
  monster2.bounceOff(wall13);
  monster2.bounceOff(wall14);
  monster2.bounceOff(wall15);
  monster2.bounceOff(wall16);
  monster2.bounceOff(wall17);
  monster2.bounceOff(wall18);
  monster2.bounceOff(wall19);

  monster3.bounceOff(wall1);
  monster3.bounceOff(wall2);
  monster3.bounceOff(wall3);
  monster3.bounceOff(wall4);
  monster3.bounceOff(wall5);
  monster3.bounceOff(wall6);
  monster3.bounceOff(wall7);
  monster3.bounceOff(wall8);
  monster3.bounceOff(wall9);
  monster3.bounceOff(wall10);
  monster3.bounceOff(wall11);
  monster3.bounceOff(wall12);
  monster3.bounceOff(wall13);
  monster3.bounceOff(wall14);
  monster3.bounceOff(wall15);
  monster3.bounceOff(wall16);
  monster3.bounceOff(wall17);
  monster3.bounceOff(wall18);
  monster3.bounceOff(wall19);

  playerMove();  
  drawSprites();
}

function playerMove(){
  if(keyDown("w")){
    player.y=player.y-5;
  }
  if(keyDown("s")){
    player.y=player.y+5;
  }
  if(keyDown("d")) {
    player.x=player.x+5;
  }
  if(keyDown("a")){
    player.x=player.x-5;
  }
  if(keyDown("SPACE")){
    player.velocityY=player.velocityY-3;
  }
}