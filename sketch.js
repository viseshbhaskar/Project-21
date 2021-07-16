var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music, musicSound;

function preload(){
    musicSound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(715,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    
    ball.velocityX = 5;
    ball.velocityY = 6;

  
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
    if(block1.isTouching(ball)) {
        ball.bounceOff(block1);
        ball.shapeColor = "blue";
        musicSound.play();
    }
    
    if(block2.isTouching(ball)) {
        ball.bounceOff(block2);
        ball.shapeColor = "orange";
        musicSound.play();
    }
    
    if(block3.isTouching(ball)) {
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = "red";
        musicSound.stop();
    }
    
    if(block4.isTouching(ball)) {
        ball.bounceOff(block4);
        ball.shapeColor = "green";
        musicSound.play();
    }
    
    drawSprites();
}