class DrawWatch {
    constructor(){

    }
       
    display(){
        beginShape();
        strokeWeight(2)
        // curve(displayWidth/2,displayHeight/2,displayWidth/2+100,displayHeight/2,displayWidth/2+100,displayHeight/4,displayWidth/2,displayHeight/4)
        stroke("red");
        strokeWeight(4);
        noFill();

        
        strokeRef.on("value", function(data){
           var strokeVal = data.val();
           if(strokeVal !== undefined){
                for( var i=0; i<strokeVal.length;i++){
                    vertex(strokeVal[i][0], strokeVal[i][1]);
                }
            };
        })
        endShape();

    }

       
}

