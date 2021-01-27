class Log{
    constructor(x,y,height,angle){
        var option={
            restitution:0.8,
            friction:1.9,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,20,height,option);
        this.width=20;
        this.height=height;
        Body.setAngle(this.body,angle);
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