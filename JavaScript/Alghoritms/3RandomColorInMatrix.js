
var n = 50;
var p = 60;
var side=10;
var matrix = [];

for(var y=0; y<n; y++){
    matrix[y]=[];
    for(var x=0; x<p; x++){
       matrix[y][x]=Math.floor(Math.random() * 3);
    }
}

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("white");
    noStroke();
    frameRate(27);
}
function draw() {

    for(var y=0; y<matrix.length; y++){
        for(var x=0; x<matrix[y].length; x++){
            if(matrix[y][x]==0){
                fill("orange");
                
            }
            if(matrix[y][x]==1){
                fill("blue");
             
            }
            if(matrix[y][x]==2){
                fill("red");
                
            }
            rect(x* side,y*side,side, side);
        }
    }
}
