class Umbrella{
    constructor(x,y){
       this.body=Bodies.circle(x,y,50,{isStatic:true});
       this.image=loadImage("images/WalkingFrame/walking_1.png");
       this.batmanimg=loadImage("images/bat/Bestman-01.png");
       World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        imageMode(CENTER);
        if(frameCount>=170){
            image(this.batmanimg,pos.x,pos.y+80,150,230);
        }
       else
        image(this.image,pos.x,pos.y+70,300,300);
    }
}