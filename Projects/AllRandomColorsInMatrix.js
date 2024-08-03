
var n = 100;
var p = 100;
var side=8;
var matrix = [];

for(var y=0; y<n; y++){
    matrix[y]=[];
    for(var x=0; x<p; x++){
       matrix[y][x]=1;
    }
}

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("white");
    noStroke();
    frameRate(30);
}
function draw() {

    for(var y=0; y<matrix.length; y++){
        for(var x=0; x<matrix[y].length; x++){
       
                fill(random(0,255), random(0,255), random(0,255));
            
          
            rect(x* side,y*side,side, side);
        }
    }
}
