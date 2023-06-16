
var gameState = 0

var bueiro, bueiroSujo, bueiroimg,bueiroSujoimg,feio,feioimg;

var rua,ruaimg;

var carro,carroimg;

var bater

var proximo,proximoimg;

var rain, raingroup, rained;

var poca_anim1,poca_anim1,poca;

var score;

var p1,p2,p1img,p2img,p3;

var ac1,ac2,ac3,rio;

var trilho,carrinho,reciclar,trilhoimg,cimg,rimg




function preload(){

  rained = loadImage("blue.png");

  poca_anim1 = loadAnimation("água 1.jpg","agua 2.jpg","agua 3.jpg",);
  poca_anim2 = loadAnimation("agua 4.jpg", "agua 5.jpg", "agua 6.jpg","agua 7.jpg");
  bueiroimg = loadImage("bueiro.png");
  bueiroSujoimg = loadImage("pngegg.png");
  ruaimg = loadImage("pngegg1.png");
  carroimg = loadImage("carro.png");
 proximoimg = loadImage("pngwing.com.png");
 p1img = loadImage("sim.png");
 p2img = loadImage("não.png");
 feioimg = loadImage("feio.png");
  trilhoimg = loadImage("trilho.png")
  cimg = loadImage("carrinho.png")
  rimg = loadImage("reciclar.png")
}

function setup() {
  createCanvas(600, 600);
  
  
feio= createSprite(550,550,10,10)
feio.addImage(feioimg)
feio.scale = 0.15
feio.visible = false

carrinho = createSprite(50,420,10,10)
carrinho.addImage(cimg)
carrinho.scale = 0.2
carrinho.depth = 50
carrinho.visible = false

trilho = createSprite(300,470,10,10)
trilho.addImage(trilhoimg)
trilho.scale = 0.3
trilho.depth = 1
trilho.visible= false

bater = createSprite(500,400,10,10);
bater.visible = false;

proximo = createSprite(450,250,250,250);
 proximo.addImage("vai",proximoimg);
 proximo.scale = 0.01 
 proximo.visible = false
poca = createSprite(300,700,1000,0);
  poca.scale = 2;
  poca.addAnimation("kapa",poca_anim1); 

  reciclar = createSprite(500,380,10,10)
  reciclar.addImage(rimg)
  reciclar.scale = 0.25
  reciclar.visible = false



bueiro = createSprite(35,581,100,100);
  bueiro.addImage("bueiro",bueiroimg);
  bueiro.scale = 0.1
  bueiro.depth = 100
bueiroSujo = createSprite(35,581,100,100);
  bueiroSujo.addImage("bueirosujosss",bueiroSujoimg);
  bueiroSujo.scale = 0.1
  bueiroSujo.depth = 110
  
rua = createSprite(300,400,10,100);
 rua.addImage("rururururu",ruaimg);
 rua.depth = 0,1
 rua.scale = 0.2
 
carro = createSprite(250,450,10,10);
  carro.addImage("caro",carroimg);
  carro.scale = 0.3
  carro.depth = 0.2

  p1 = createSprite(50,540,10,10);
  p1.addImage(p1img);
  p1.scale = 0.1;
  p1.depth = 10
  p1.visible = false
  
  p2 = createSprite(550,540,10,10);
  p2.addImage(p1img);
  p2.scale = 0.1;
  p2.depth = 1
  p2.visible = false
  p3 = createSprite(0,540,10,10)
  p3.addImage(p2img)
  p3.depth = 1
  p3.scale = 0.1
 p3.visible = false

 ac1 = createSprite(250,-10,10,10)
 ac1.addImage(rained);
 ac1.visible =false;

 ac2 = createSprite(250,75,10,10);
 ac2.addImage(rained);
 ac2.visible = false;

 ac3 = createSprite(250,35,10,10);
 ac3.addImage(rained);
 ac3.visible = false;
  
// crie grupos de obstaculos e nuvens 
raingroup = [];

console.log("Olá" + 5);

score = 0;
}

function draw() {
  background(180);
 

  //gerar obstáculos no chão
  if(gameState === 0 ){
  Raining();
  raingroup.forEach(gota => {
    if(gota.isTouching(poca)){
   gota.destroy();
   poca.y = poca.y -2;
  poca.visible = true;
  bueiro.visible = true;
  bueiroSujo.visible=true;
  rua.visible=true;
  carro.visible=true
  
    }
   });
   if(poca.isTouching(bater)){
    gameState = 1;
   } 
}

if(gameState == 1){

proximo.visible = true;

if(mousePressedOver(proximo)){

  gameState = gameState + 1;
}



}

if(gameState == 2){

bueiroSujo.visible=false;
bueiroSujo.y = 35;
bueiroSujo.x = 250;
proximo.visible = false;
Raining();
raingroup.forEach(gota => {
  if(gota.isTouching(poca)){
 gota.destroy();
 poca.y=poca.y+1
}});



proximo.visible = false

if(keyDown("SPACE")){

gameState = gameState + 1;

}


}

if (gameState == 4){
  background(0)
  poca.visible = false
  bueiro.visible = false 
  bueiroSujo.visible=false ;
  rua.visible=false ;
  carro.visible=false
  p1.visible = true
  p1.velocityX = 5
  p2.visible = true;
  p3.visible = true;
  p3.velocityX = 5;
 
  

bueiroSujo.visible = true;
bueiroSujo.scale = 0.2


if(p1.isTouching(bueiroSujo)){
bueiroSujo.velocityX = 5;
ac1.velocityX = 5
ac2.velocityX = 5
ac3.velocityX = 5

}
if(bueiroSujo.x == 540){

  gameState = gameState +1
  p1.velocityX = 0;
  p2.velocityX = 0;
  p3.velocityX = 0;
  bueiroSujo.velocityX =0
  ac1.velocityX = 0
  ac2.velocityX = 0
  ac3.velocityX = 0
  bueiroSujo.visible = false
  feio.visible = true;
  ac1.visible = false
  ac2.visible = false
  ac3. visible = false
  feio.depth = 12;
}

}
if (gameState == 3){
 
  poca.visible = false
  bueiro.visible = false 
 
  rua.visible=false ;
  carro.visible=false

bueiroSujo.velocityY = 3;
bueiroSujo.visible = true;

ac1.visible = true;
ac1.velocityY=3;
ac1.scale = 0.4
ac1.depth = 1

ac2.velocityY = 3;
ac2.visible=true;
ac2.scale = 0.4
ac2.depth = 1

ac3.velocityY = 3;
ac3.visible=true;
ac3.scale = 0.4
ac3.depth = 1

p1.visible = true

p2.visible = true

p3.visible = true

bueiroSujo.scale = 0.2

if(bueiroSujo.y >= 550){

gameState = gameState + 1;
bueiroSujo.velocityY = 0;
bueiroSujo.setCollider('circle',0,0,100)
ac1.x = 200
ac1.y = 570
ac2.x = 250
ac2.y = 570
ac3.x = 300
ac3.y = 570
ac1.velocityY = 0
ac3.velocityY = 0
ac2.velocityY = 0


}





}
drawSprites();
if(gameState == 5){


if(keyDown("SPACE")){

gameState = gameState + 1;
feio.x = 50
feio.y = 380;
reciclar.visible = true
p1.visible = false
p2.visible = false
p3.visible = false 
carrinho.visible = true
trilho.visible = true
carrinho.velocityX = 2
feio.velocityX = 2
}
  
    
  }
 if(gameState == 6){

    if(carrinho.x == 500 ){
        carrinho.velocityX = 0
        feio.velocityX = 0
        gameState = gameState +1

    }


 }
  
 if(gameState == 7){

 if(keyDown("SPACE")){

carrinho.velocityX = 2
feio.visible = false

 }

 if(carrinho.x == 700){
  gameState = gameState + 1
  ac1.y = 250
ac1.x = 10
ac1.velocityX = 3
ac2.y = 250
ac2.x = 60
ac2.velocityX = 3
ac3.y = 250
ac3.x = 110
ac3.velocityX = 3
 

 }
 }

 if(gameState == 8){

  carrinho.visible = false
  trilho.visible = false
  reciclar.visible = false
  poca.scale = 2
  poca.visible = true
  poca.y = 550
  ac1.visible = true
  ac2.visible = true
  ac3.visible = true

  if(ac1.x >= 250){
ac1.velocityX = 0
ac1.velocityY = 3


  }
  if(ac2.x >= 250){
    ac2.velocityX = 0
    ac2.velocityY = 3
    
    
      }
      if(ac3.x >= 250){
        ac3.velocityX = 0
        ac3.velocityY = 3
        
        
          }
 }

}





function Raining() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 5 === 0) {
     rain = createSprite(100,0,40,10);
    rain.x = Math.round(random(10,600));

   
    rain.scale = 0.05;
    rain.velocityY = 10;
    
    rain.addImage("rain1",rained);
    
    raingroup.push(rain);
   
    
    
    
    
    //atribua tempo de vida à variável
    
    
    //ajustar a profundidade
   
    
    //adicionando nuvens ao grupo
   
  }
  
}