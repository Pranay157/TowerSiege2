class Block {
    constructor(x,y,width,height)
    {
        var options={
            restitution:1
            
        }
        this.Visiblity=255;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed<3)
        {

        
        var pos=this.body.position;
        rectMode(CENTER)
        stroke("red")
        rect(pos.x,pos.y,this.width,this.height)
        }
        else{
            World.remove(world,this.body)
            push();
            this.Visiblity=this.Visiblity-5;
            pop();
        }
    }
}