var bg, bgImage;
var soldier, soldierImg;
var ground;
var helicopter, helicopterImg;
var terrorist, terroristImg;
var grenade, grenadeImg, grenadeBlastImg;
var shield, shieldImg;

//function preload to load images
function preload(){

bgImage = loadImage("background.jpg");
helicopterImg = loadImage("helicopter.png");
grenadeImg = loadImage("grenade.png");
grenadeBlastImg = loadImage("blast.png");
shieldImg = loadImage("shield.png");

}

// function setup to create sprites
function setup(){
    createCanvas(displayWidth, displayHeight-100);
    
    bg = createSprite(0, 0, displayWidth, displayHeight);
    bg.addImage(bgImage);
    bg.y=bg.width/2+150;
    bg.x=bg.width+900;
    bg.scale = 5;

    soldier = createSprite(200,700,40,200);

    ground = createSprite(1000,930,2000,40);
    ground.visible=false;

    helicopter = createSprite(100,200,20,20);
    helicopter.addImage(helicopterImg);
    helicopter.velocityX=10;
    helicopter.lifetime= 200;

}

//function draw to add features 
function draw(){
    background(0);
    console.log(bg.x);
    if(keyDown("space")&& soldier.y >= 100) {
        soldier.velocityY = -10;
      }
      soldier.velocityY = soldier.velocityY + 0.8
      soldier.collide(ground);
    
      if(helicopter.x<300){
        soldier.x= helicopter.x;
        soldier.y= helicopter.y;
      }

      if(helicopter.x>=300){
        soldier.x=soldier.x;
        soldier.y=soldier.y;
        
      }

      if(keyDown(RIGHT_ARROW)){
        bg.x=bg.x-8;
      }

      if(keyDown(LEFT_ARROW)){
        bg.x=bg.x+8;
      }
      if(bg.x<350){
        bg.x=bg.width*2+200; 
    }

    if (bg.x % 150 === 0){
      terrorist = createSprite(2000,800,20,100);
      //terrorist.addImage(terroristImg);
      terrorist.velocityX = -15;
      terrorist.scale = 2;
      terrorist.lifetime = 250;
      console.log(terrorist.x);
     }

      if (bg.x % 250 === 0){
        grenade = createSprite(300,10,40,40);
        grenade.addImage(grenadeImg);
        grenade.scale=0.3;
        grenade.velocityY = 10;

        if(grenade.isTouching(ground)){
          grenade.addImage(grenadeBlastImg);
          grenade.collide(ground);
          grenade.visible=false;
        }
       }
       
      


       if(keyWentDown('s')){
         shield = createSprite(soldier.x, soldier.y-120,70,10);
         shield.addImage(shieldImg);
         shield.scale=0.4;
         grenade.collide(shield);
       }

       if(keyWentUp('s')){
          shield.visible=false;
       }

       /*if(grenade.isTouching(shield)){
          grenade.addImage(grenadeBlastImg);
          grenade.visble=false;
       }*/

    drawSprites();
    textSize(25);
    fill("yellow");
    text("press RIGHT ARROW to move",50,50);
    text("press S to save from grenade",50,100);

}

