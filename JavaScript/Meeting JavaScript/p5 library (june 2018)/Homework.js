var side = 80;

function setup() {
    createCanvas(640, 640);
    background('#acacac');

}

function RandomMatrix(m, n) {  //2-րդ դասի վերջին խնդիրը
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            matrix[y][x] = Math.round(Math.random());
        }
    }
    return matrix;

}

function xndir1(m, n) {               //սրանք արդեն 3 դասին են
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            if (y == x) {
                matrix[y][x] = 1;
            }
            else {
                matrix[y][x] = 0;
            }
        }
    }
    return matrix;

}


function xndir2(m, n) {
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            if (y + x == n-1) {
                matrix[y][x] = 1;
            }
            else {
                matrix[y][x] = 0;
            }
        }
    }
    return matrix;

}


function xndir3(m, n) {
    
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            if (y<=(n-1)-x) {
                matrix[y][x] = 1;
            }
            else {
                matrix[y][x] = 0;
            }
           
        }
    }
    return matrix;

}


function xndir4(m, n) {                        //շախմատը
    
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            if ((x+y)%2==0) {
                matrix[y][x] = 1;
            }
            else {
                matrix[y][x] = 0;
            }
           
        }
    }
    return matrix;

}


function xndir5(m, n) {                            //բազ. աղյուսակը
    
    var matrix = []
    for (y = 0; y < m; y++) {

        matrix[y] = [];

        for (x = 0; x < n; x++) {
            if(x+y==0)
                {
                     matrix[y][x] = 0;
                }
            else if(x==0)
                {
                     matrix[y][x] = y;
                }
             else if(y==0)
                {
                     matrix[y][x] = x;
                }
                
            else
                {
                     matrix[y][x] = x*y;
                }
                    
                
          
           
        }
    }
    return matrix;

}


function draw() {                                     //առաջին draw

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else
                fill("white");
            rect(x * side, y * side, side, side);

        }
    }

}


/*function draw() {                                        //երկրորդ draw

    for (var y = 0; y <matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
           
                fill("gray");
                rect(x * side+side, y * side+side, side, side);
                fill("black")
                rectMode(CENTER);
                textSize(20);
                text(matrix[y][x], x*side+side,y*side+side );
            
           

        }
    }

}*/
var matrix = xndir3(8, 8);               //ֆունկցիայի կանչ



