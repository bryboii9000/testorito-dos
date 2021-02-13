class Stone{
    constructor(x,y,r){
        var options = {
        isStatic:false,
        restitution : 0,
        density : 1.2,
        friction : 1
      }
      this.y = y
      this.x = x
      this.r = r
      this.image = loadImage("images/stone.png")
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);   
      World.add(world, this.body);
     
    }
    display(){
      
        var  paperpos = this.body.position
  
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
      };
    };

