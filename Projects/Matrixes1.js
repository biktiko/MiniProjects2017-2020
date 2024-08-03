
var n = 8;
var p = 8;
var side=120;
var matrix = [];

for(var y=0; y<n; y++){
    matrix[y]=[];
    for(var x=0; x<p; x++){
        // if(x<8-y){
        //     matrix[y][x]=1;      //եռանկյունի
        // }
        if(x%2==y%2){
            matrix[y][x]=1;      //chess
        }                          
        else{
            matrix[y][x]=0;
        }
       
    }
}

function setup() {

    createCanvas(matrix[0].length * side, matrix.length * side);
    background("white");
    //noStroke();
    frameRate(30);
}
function draw() {

    for(var y=0; y<matrix.length; y++){
        for(var x=0; x<matrix[y].length; x++){
       
                //fill(random(0,255), random(0,255), random(0,255));
                if(matrix[y][x]==1){
                    fill("black");
                }
               else{
                    fill("white");
                }
          
            rect(x* side,y*side,side, side);
        }
    }
}
