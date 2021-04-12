
var cat
var catimage
var catrun
var cathappy
var garden
var bg_image
var mouse
var mouse_image
var mouserun
var mousehappy
function preload() {
    //load the images here
catimage=loadImage("cat1.png")
catrun=loadAnimation("cat2.png","cat3.png")
cathappy=loadImage("cat4.png")
bg_image=loadImage("garden.png")
mouse_image=loadImage("mouse1.png")
mouserun=loadAnimation("mouse2.png","mouse3.png")
mousehappy=loadImage("mouse4.png")
}

function setup(){
    createCanvas(680,400);
    //create tom and jerry sprites here
    
    garden=createSprite(340,200,38,38)
    garden.addImage("garden",bg_image)
    garden.scale=0.7
   cat=createSprite(500,340,20,100)
   cat.addAnimation("cat",catimage)
   cat.scale=0.1
   mouse=createSprite(200,340,10,40)
   mouse.scale=0.1
    mouse.addImage("mouse",mouse_image)
    mouse.addAnimation("mouserun",mouserun)
    mouse.addImage("mousehappy",mousehappy)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    console.log(cat.width)
    
      
      
    if(cat.x-mouse.x<cat.width/2-mouse.width/2&&cat.velocityX===-5){
        
        cat.velocityX=0
        cat.addAnimation("cathappy",cathappy)
        cat.changeAnimation("cathappy",cathappy)
        cat.x=300
        mouse.changeImage("mousehappy",mousehappy)
        }


    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
 cat.velocityX=-5
 cat.addAnimation("catrun",catrun)
 cat.changeAnimation("catrun",catrun)
 mouse.changeAnimation("mouserun",mouserun)
 }

}
