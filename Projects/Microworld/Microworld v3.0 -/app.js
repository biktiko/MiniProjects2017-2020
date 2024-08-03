var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
var messages = [];

var grassArr = [];
var grassLifeArr = [0, 0];
var grassEaterArr = [];
var grassEaterLifeArr = [0, 0];
var predatorArr = [];
var predatorLifeArr = [0, 0];
var humanArr= [];
var humanLifeArr=[];
var matrix = [];
var UFOArr = [];

var matrix = require('./modules/matrix');
//var LivingCreature = require("./modules/class-livingcreature");
var Grass = require("./modules/class-grass");
var GrassEater = require("./modules/class-grasseater");
var Predator = require("./modules/class-predator");
var Human = require("./modules/class-human");
var UFO = require("./modules/class-human");

//var Player = require("./modules/class-player");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('public/index.html');
});

server.listen(3000);


var frameCount = 8;
var drawTime = 1000 / frameCount;

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            
            var gr = new Grass(x, y, 1)
            grassArr.push(gr);

        }
        else if (matrix[y][x] == 2) {
            var gre = new GrassEater(x, y, 2)
            grassEaterArr.push(gre);

        }
        else if (matrix[y][x] == 3) {
            
            var pr =new Predator(x, y, 3)
            predatorArr.push(pr);

        }
        else if (matrix[y][x] == 4) {
            var hum = new Human(x, y, 4)
            humanArr.push(hum);
        }

        else if (matrix[y][x] == 6) {
      
            var ufo = new UFO(x, y, 6)
            UFOArr.push(ufo);
        }
    }
}

// grassLifeArr[0]      += grassArr.length;
// grassEaterLifeArr[0] += grassEaterArr.length;
// predatorLifeArr[0]   += predatorArr.length;
// humanLifeArr[0]      += humanArr.length;


io.on('connection', function (socket) {
    socket.emit("get matrix", matrix);

    var interval = setInterval(function () {
        for (var i in grassArr) {
            grassArr[i].mul(matrix, grassArr);
            // if (WeatherR == 0) {
            //     grassArr[i].mul();
            // }
        }

        for (var i in grassEaterArr) {
            
            grassEaterArr[i].eat(matrix, grassEaterArr, grassArr);

            
        }
        for (var i in predatorArr) {
            predatorArr[i].eat(matrix, predatorArr, grassEaterArr);
            // if (WeatherR == 0) {
            //     predatorArr[i].eat();
            // }
        }

        for (var i in humanArr) {
            humanArr[i].eat(matrix, humanArr, predatorArr);
        }

        for (var i in UFOArr) {
            UFOArr[i].eat(matrix, UFOArr);
        }
        socket.emit("redraw", matrix);
    }, drawTime);
});

//KitWhale