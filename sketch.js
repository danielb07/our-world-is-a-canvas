var pencil;

function setup(){
    createCanvas(displayWidth,displayHeight)
    pencil = new Pencil();
}

function draw(){
    frameRate(120);
}

 
function mouseDragged(){
    pencil.display();
}

function mouseReleased(){
    pencil.penUp();
}