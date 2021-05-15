class Form{
   constructor(){
       this.title = createElement('h2');
       
       this.back = createButton('Back');
       this.back.hide();
       this.start = createButton('Start');
      
   }

   display(){
       this.title.position(450,-50);
       this.title.html("IF RUNNER");
       this.title.style('fontSize','70px');
       this.title.style('color','orange');

        this.back.position(800,550);
        this.back.style('background','violet');
      
       this.start.position(600,400);
       this.start.style('background',rgb(200,20,20));
       this.start.style('width','70px');
       this.start.style('height','20px');

       this.start.mousePressed(()=>{
           this.title.hide();
          
           this.start.hide();
           score = 0;
           c.setVelocityYEach(2);
           b.setVelocityYEach(10);
           player.velocityY = -5;
           gameState = 1;
           player.visible = true;
           player.shapeColor = this.v;
       })

       this.back.mousePressed(()=>{
           this.back.hide();
           this.title.show();
           this.start.show();
           background(123.231,244);
           b.destroyEach();
           c.destroyEach();
           player.visible = false;
           gameState = 0;
          
       })
   }
    
}