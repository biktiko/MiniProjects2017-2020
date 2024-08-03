var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var matrix = [];
var l = 40;
var side = 20;

function getRandInt(min, max) {
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a;
}

for (var y = 0; y < l; y++) {
    matrix[y] = [];
    for (var x = 0; x < l; x++) {
        matrix[y][x] = 0;
    }
}


// matrix[20][20]=0;
// matrix[10][30]=0;
// matrix[40][50]=0;
// matrix[60][80]=0;
// matrix[15][25]=0;
// matrix[25][15]=1;
// matrix[10][40]=1;
// matrix[25][25]=1;
// matrix[18][22]=1;
// matrix[24][16]=1;
// matrix[15][60]=2;
// matrix[32][48]=2;
// matrix[18][53]=2;
// matrix[53][26]=2;
// matrix[35][45]=2;
// matrix[16][23]=3;
// matrix[48][32]=3;
// matrix[80][20]=3;
// matrix[25][20]=3;
// matrix[60][70]=3;


for (var i = 1; i < 41; i++) {
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 1;
 
}
for (var i = 1; i < 31; i++) {
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 2;
   
}
for (var i = 1; i < 31; i++) {
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 3;
    
}





function setup() {
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grasseater = new GrassEater(x, y, 2)
                grassEaterArr.push(grasseater);
            }
              else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3)
                predatorArr.push(predator);
            }


        }
    }
    //console.log(grassArr);                                
}





function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                ellipse(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                ellipse(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in grassEaterArr) {

            grassEaterArr[i].eat();
        }
         for (var i in predatorArr) {

            predatorArr[i].eat();
        }

}


    
        





    



