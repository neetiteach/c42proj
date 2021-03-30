class Drop{
    constructor(x,y){
      this.body=Bodies.circle(x,y,5,{friction:0.001,restituion:0.1,isStatic:false});
      this.r=5;
      World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height)});
        }
     
    }
    display(){
      var pos=this.body.position;
      //var ang=this.body.body.angle;
      //push();
      
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x,pos.y,this.r);
    }
}