var pencil, reset;
var save;
var database;
var drawWatch;
var artWork = [];
var dotWork = [];
function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight)
    pencil = new Pencil();
    reset = new Reset();

    var strokeRef = database.ref('stroke');
    strokeRef.on("value", drawShape);

    var dotRef = database.ref('dot')
    dotRef.on("value", dot)
}

function draw(){
    frameRate(120);
    reset.display();
}

mouseDragged = () =>{
    pencil.curve();

}

function mouseReleased(){
    pencil.penUp();
}
mousePressed = () =>{
    pencil.dot();
    dotWork.push()
    
}

drawShape = (data) =>{
    beginShape();
    strokeWeight(2)
    stroke("red");
    strokeWeight(4);
    noFill();
    var strokeVal = data.val();
    if(strokeVal !== undefined){
        for( var i=0; i<strokeVal.length;i++){
            vertex(strokeVal[i][0], strokeVal[i][1]);
        }
    }
    endShape();
}

dot = (data) => {
        strokeWeight(4);
        stroke("red");
        noFill();
        ellipseMode(CENTER);
        var dotVal = data.val();
        ellipse(dotVal[0],dotVal[1],1,1)
    }


// mousePressed = () =>{
//     console.log(mouseX + ", " + mouseY);
// }