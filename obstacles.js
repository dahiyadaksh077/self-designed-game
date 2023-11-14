class obstacles{
    constructor(x,y,w,h,){
        let options = {
            isStatic: true
          };
    
     this.body = Bodies.rectangle(x,y,w,h,options);

     World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,200,30)
      }
}