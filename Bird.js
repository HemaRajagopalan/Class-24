class Bird{
    constructor(x,y){
        var option={
            restitution:0.5,
            friction:1.0,
            density:1.5
        }
        this.body=Bodies.rectangle(x,y,70,70,option);
        this.width=70;
        this.height=70;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
     rotate(angle);
        fill("red");
        strokeWeight(4);
        stroke("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}