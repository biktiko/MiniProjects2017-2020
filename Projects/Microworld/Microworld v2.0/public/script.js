var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var matrix = [];
var humanArr = [];
var buildingArr = [];
var k = 1;
var energy = 100;
var mUY;
var mUX;
var side = 10;

alert("Press w, a, s and d for move. Eat all human. Open the console, for see you energy.");

var l = 74;
console.log("100 energy");
document.onkeypress = function(event){
    k = event.key
    player.move()
}





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


for (var i = 1; i < 96; i++) {                   //41
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 1;
 
}
for (var i = 1; i < 76; i++) {                   //31
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 2;
   
}
for (var i = 1; i < 56; i++) {                    //31
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 3;
    
}

for (var i = 1; i < 36; i++) {                    //3
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 4;
    
}
 


 var UY = getRandInt(10, l-1);
 var UX = getRandInt(10, l-1);

var player = new Player(UY, UX)



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
             else if (matrix[y][x] == 4) {
                var human = new Human(x, y, 4)
                humanArr.push(human);
            }
           
           

        }
    }
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
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(179, 134, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    

    matrix[UY][UX]=5;

   
    for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in grassEaterArr) {

            grassEaterArr[i].eat();
        }
         for (var i in predatorArr) {

            predatorArr[i].eat();
        }
       
        for (var i in humanArr) {

            humanArr[i].eat();
            
        }

}


    
        





    



