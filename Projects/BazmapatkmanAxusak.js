
var n = prompt("a");
var p = prompt("b");
var side=120;
var matrix = [];
parseInt(n);
parseInt(p);
for(var y=0; y<n+1; y++){
    matrix[y]=[];
    for(var x=0; x<p+1; x++){
            matrix[y][x]=0;
        }
}
console.log(matrix);

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("white");
    frameRate(30);
}

function draw(){
    textSize(48);
    for(var y=0; y<matrix.length; y++){
        for(var x=0; x<matrix[y].length; x++){
       
            if((x==0 || y==0)){ 
                strokeWeight(8);  
            }
            else{
                strokeWeight(1);
            }
                
            rect(x* side,y*side,side, side);
            
            if(x==0 && y==0){

                text("*", x*side+40, y*side+75);
                
            }
            else if(x==0){
                text(y, x*side+40, y*side+75);
                
            }
            else if(y==0){
                text(x, x*side+40, y*side+75);
               
            }
            else{
                text(y*x,x*side, y*side+75);
            }

        }
    }
}
