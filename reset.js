class Reset {
    constructor(){
        this.button = createButton('Reset')
    }

    display(){
        this.button.position(753, 25);
        this.button.mousePressed(function(){
            beginShape();
            strokeWeight(15)
            stroke(255);
            
            noFill();
            
            for(var i=0; i<artWork.length;i++){
                var path = artWork[i];
                for(var a=0; a<path.length; a++){
                    var erase = path[a]
                    vertex(path[a][0], path[a][1])
                }
            }
             endShape();

             strokeWeight(4);
             stroke(255);
             noFill();
             ellipseMode(CENTER);
            for(var d=0; d<dotWork.length;d++){
                var dot = dotWork[d];
                
                ellipse(dot[0],dot[1],2,2)
            }

           
            
        })
    }

    
}