class Foodtype{
    constructor(){
   // createSprite(x,y,10,30);
   this.food = 0;
    }

    draw(){
  //  drawSprites();
    this.feedbutton = createButton("feed drago");
    this.addstockbutton = createButton("add stock");
    this.feedbutton.position(500,100);
    this.addstockbutton.position(600,100);

    }
     


        createbottle(){
        var x,y;    
        x = 80,y = 300;
      
        if(stock > 0){
        for(var i = 0;i < stock;i++){
        if(i%10===0){
        x = 80;
        y += 50;
        
        
        }  
      
        imageMode(CENTER);
        image(milkIMG,x,y,50,50);  
        x += 30;

        }
    }
        }

        changeState(state,value){
        state = value;
        }

        garden(){
        
        }

        bedroom(){
        
        }

        livingroom(){
        
        }

        washroom(){
        
        }
      }