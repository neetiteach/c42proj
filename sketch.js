const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;

var thunder1,thunder2,thunder3,fcount,thunder,batimg;
var boy1;
var drp=[];
var maxdrop=200,no,fcnt;

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    batimg=loadAnimation("images/bat/bat1.png","images/bat/bat2.png","images/bat/bat3.png","images/bat/bat4.png","images/bat/bat5.png","images/bat/bat6.png")
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   engine=Engine.create();
   world=engine.world;

   boy1=new Umbrella(width/2,height/2+150);
   for(var i=0;i<200;i++){
      drp.push(new Drop(random(0,width),random(0,height)))
   }
 
    Engine.run(engine);
    
}

function draw(){
   background(0);
   imageMode(CENTER);
   
   console.log(fcnt);
   if(frameCount<50){
   textSize(20);
   fill("yellow");
   text("Move Man with left arrow n right arrow key",20,40);
   }
  //image(man1,400,400);
  no = Math.round(random(1,4));
    if(frameCount%80===0){
        fcount=frameCount;
       
       
           // thunderCreatedFrame=frameCount;
            thunder = createSprite(random(10,width-100), random(10,30), 10, 10);
            switch(no){
                case 1: thunder.addImage(thunder1);
                break;
                case 2: thunder.addImage(thunder2);
                break; 
                case 3: thunder.addImage(thunder3);
                break;
                case 4: thunder.addImage(thunder4);
                break;
                default: break;
            }
            thunder.scale = random(0.3,0.6)
        
        }
      
     if(frameCount%100===0){
        var bat=createSprite(random(0,width-60),random(0,50));
        bat.addAnimation("batflying",batimg);
        bat.velocityX=random(-4,4);
        bat.velocityY=random(-4,4);
        bat.scale=0.4;
     }

   if(frameCount===fcount+70){
   
        thunder.destroy();
    }
  boy1.display();
  for(var i=0;i<200;i++){
     drp[i].display();
     drp[i].update();
  }
  
  drawSprites();
} 

function keyPressed(){
   console.log(keyCode);
   if (keyCode===37){
     console.log("here")
      Matter.Body.setPosition(boy1.body,{x:boy1.body.position.x-10,y:boy1.body.position.y})
   }
   if (keyCode===39){
      Matter.Body.setPosition(boy1.body,{x:boy1.body.position.x+10,y:boy1.body.position.y})
   }
   
}

