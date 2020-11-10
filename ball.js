class ball{
    constructor(x,y,radius){
       var option={
           isStatic:false,
           density:.8,
          frition:.5


       }
       this.body=Bodies.circle(x,y,radius,option)
       this.radius=radius
       this.Image=loadImage("paper.png")

       World.add(world, this.body);
    }

    display(){
        ellipseMode(RADIUS)
     //  ellipse(this.body.position.x,this.body.position.y,this.radius)
        image(this.Image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}