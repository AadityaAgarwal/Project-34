class Box{

    constructor(x,y){

        this.obj= Bodies.rectangle(x,y,50,50,{isStatic: false, density: 1});
        World.add(world,this.obj);
    }

    display(){
        fill("white");
        strokeWeight(1);
        stroke("green");
        rect(this.obj.position.x,this.obj.position.y,50,50);
    }
}