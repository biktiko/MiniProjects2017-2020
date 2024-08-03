var side = 10;
var socket;

function setup() {
    frameRate(0);
    socket = io.connect();
    socket.on("get matrix", function(mtx){
        noLoop();
        matrix = mtx;
        //console.log(matrix);
        createCanvas(matrix[0].length * side, matrix.length * side);

        socket.on ("redraw", function(mtx){
        
            noLoop();
            matrix=mtx;
           
        });
         socket.on('Text', function (Stat) {
             stat = Stat;
      });
    })

    
    
   
    background('#acacac');
   
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                // if (WeatherR == 0) {
                //     fill("grey");
                // }
                // else {
                //     fill("white")
                // }
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
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            //WeatherR = Math.round((weather / 100)) % 2;

            // for(var i in stat){
            //     fill(0, 0, 0);
            //     textSize(20);
            //     text(i + ":"+ " "+ stat[i], 520, margin)
            //     margin+=40;
            // }
            // margin = 40;
        }
    }

}





