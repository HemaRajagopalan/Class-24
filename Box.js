class Box{
    constructor(x,y,width,height){
        var option={
            restitution:1.0,
            friction:1.9,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
     rotate(angle);
        fill("white");
        strokeWeight(4);
        stroke("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}