var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(790,600,400,50);
    surface1.shapeColor= "red";
    
    surface2= createSprite(500,600,200,50);
    surface2.shapeColor= "green";

    surface3= createSprite(300,600,200,50);
    surface3.shapeColor= "blue";

    surface4= createSprite(100,600,200,50);
    surface4.shapeColor= "yellow";
//create box sprite and give velocity

box= createSprite(random(20,750),50,50,50);
box.shapeColor="white";
box.velocityX=2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    if (box.x < 800) {
        box.velocityX = 3;
      }
      if (box.x > 595) {
        box.velocityX = -3;
      }
      if (box.y < 800) {
        box.velocityY = 3;
      }
      if (box.y > 595) {
        box.velocityY = -3;
      }
    

if(surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColor="red";

 }
 if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="green";
    
     }
     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="blue";
        
         }
         if(surface4.isTouching(box) && box.bounceOff(surface4)){
            box.shapeColor="yellow";
            
             }
 //add condition to check if box touching surface and make it box

 drawSprites();

}
