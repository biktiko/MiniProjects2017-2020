var l = 74;
var matrix = [];

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

for (var i = 1; i < 101; i++) {                   
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 1;

}
for (var i = 1; i < 71; i++) {                   
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 2;
}
for (var i = 1; i < 61; i++) {                    
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 3;
}
for (var i = 1; i < 36; i++) {                    
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 4;
}
for (var i = 1; i < 11; i++) {                    
    matrix[getRandInt(10, l-1)][getRandInt(10, l-1)] = 6;
}

module.exports = matrix;