var striker1 , striker2,goal,field,ball

var goalkeeper1,goalkeeper2

var goalImage,goalkeeperImage,strikerImage


function preload(){
    goalImage=loadImage('goal.png');

    strikerImage=loadImage('Striker.PNG');


}


function setup(){
    canvas = createCanvas(displayWidth-20, displayHeight-30); 

    goal1 = createSprite(displayWidth-150,displayHeight/2,30,160);
    goal1.addImage(goalImage);
    goal1.scale = 0.1
    goal2 = createSprite(30,displayHeight/2,30,160);
    

    striker1 = createSprite(displayWidth/2-100,displayHeight/2,20,20);
    

    striker2 = createSprite(displayWidth/2+100,displayHeight/2,20,20);
    striker2.addImage(strikerImage)
    striker2.scale = 0.4

    ball = createSprite(dislayWidth/2,displayHeight/2,5,5)
    ball.velocityX = Math.round(random(-10,-4));
    ball.velocityY = Math.round(random(-10,10));
   
    goalkeeper1 = createSprite(300,displayHeight/2,20,20);

    goalkeeper2 = createSprite(displayWidth-300,displayHeight/2,20,20)
}



function draw(){
    background(0,255,0);
     
   if(keyDown("left")){
    striker2.x = striker2.x-10 
   }

   if(keyDown("right")){
       striker2.x= striker2.x+10
   }

   if(keyDown("C")){

   }
    

    drawSprites();
}