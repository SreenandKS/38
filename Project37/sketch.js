var form,c,b;
var player,gameState=0,score=0;

function preload(){
  img = loadImage("background.webp");
  coinImg  = loadImage("coin.png");
  playerImg = loadImage("player1.png");
  playerAni = loadAnimation("player1.png","player2.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  canvas = createCanvas(500,500);
  form = new Form();
  player = createSprite(250,450,50,50);
  player.addImage(playerImg);
  player.scale = 0.25;
  player.setCollider("rectangle",0,0,275,800);
  player.velocityY = -5;
  player.visible = false;

  c = createGroup();
  b = createGroup();
}

function draw(){
  
  if(gameState===0){
    background(123,231,244);

  }

  

    var rand = random(0,500);

    
    if(gameState===1){
      image(img,0,-height*160,width,height*200);
      // image(track,0,-displayHeight*4,displayWidth, displayHeight*5);
     console.log(player.y);
      camera1();
      if(keyDown(LEFT_ARROW)){
        player.x -= 5;
      }
     
      if(keyDown(RIGHT_ARROW)){
        player.x += 5;
      }
      else{
        player.addImage(playerImg);
      }
    
      if(frameCount%50===0){
        var coin = createSprite(rand,player.y-300,20,20);
        coin.shapeColor = "red";
        coin.velocityY = 2;
        coin.addImage(coinImg);
        coin.scale = 0.15;
        coin.lifetime = 250;
        c.add(coin);
      }
      if(frameCount%125===0){
        var bomb = createSprite(rand,player.y-300,20,20);
        bomb.velocityY = 10;
        bomb.addImage(bombImg);
        bomb.scale = 0.15;
        bomb.lifetime = 50;
        b.add(bomb);
      }

     for(var i=0; i<c.length;i++){
      if(c.get(i).isTouching(player)){
        c.get(i).destroy();
        score++;
      }
     }

     for(var i=0; i<b.length;i++){
      if(b.get(i).isTouching(player)){
       
        gameState = 2;
      }
     }
     if(gameState===2){
       player.velocityY = 0;
       if(keyDown(LEFT_ARROW)){
        player.x += 0;
      }
     
      if(keyDown(RIGHT_ARROW)){
        player.x += 0;
      }
      c.setVelocityYEach(0);
      b.setVelocityYEach(0);
      c.setLifetimeEach(-1);
      b.setLifetimeEach(-1);

      form.back.show();
      }
    }

    form.display();
    drawSprites();
if(gameState!==0){
    textSize(20);
    fill(rgb(244,19,160));
    text("SCORE : " + score,10,player.y-200);
}
}

function camera1(){
  camera.position.x = width/2;
  camera.position.y = player.y;
}

