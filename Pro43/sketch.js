var main, backgroundImage, lava, coin, gameover
var mainSprite, backgroundImageSprite, coinSprite, gameoverSprite

function preload(){
  coin = loadImage("coin.png");
  gameover = loadImage("Game over.png");
  main = loadImage("character.png");
  backgroundImage = loadImage("background.jpg");
  //How do I load sounds here
}

function setup() {
  createCanvas(800,400);
  coinSprite = createSprite(400, 200, 50, 50);
  coinSprite.addAnimation("coin", coin)
  lavaSprite = createSprite(400, 200, 50, 50);
  lavaSprite.addAnimation("lava", lava)
  mainSprite = createSprite(400, 200, 50, 50);
  mainSprite.addAnimation("main", main)
  backgroundImageSprite = createSprite(400, 200, 50, 50);
  backgroundImageSprite.addAnimation("background", backgroundImage)
  gameoverSprite = createSprite(400, 200, 50, 50);
  gameoverSprite.addAnimation("gameover", gameover)
}

function draw() {
  main.velocityX=5
  main.velocityY=5
  background(255,255,255); 
  if(keyDown("space")){
    main.velocityY = -12
  }
  main.velocityY = main.velocityY+0.8;
  drawSprites();
}