//0-empty, 1-white, 2-black, 3-green

let matrix = [];
let piece = [];
let greens = [];
let yellow = [];
let diepiecce = [];
let turn = 1;
let turn2 = 0;
let direct = 1;
let whiteC = 0;
let blackC = 0;
let hit = false;
let hithim = true;
let hitagain1 = false;
let hitagain2 = false;


for (var y = 0; y < 8; y++) {               //matrix creation
    matrix[y] = [];
    for (var x = 0; x < 8; x++)  matrix[y][x] = 0;
}

function arrClear(array) {
    for (var i = 0; i < array.length; i++) array[i] = [];
    return array;
}

function borderClear() {
    for (var y = 0; y < 8; y++) {            //clear green blocks
        for (var x = 0; x < 8; x++) {
            if (matrix[y][x] == 3 || matrix[y][x] == 4) matrix[y][x] = 0;
        }
    }
}

function setup() {
    createCanvas(1250, 960);

    for (var y = 0; y < matrix.length; y++) {                           //board creation and pieces adding
        for (var x = 0; x < matrix[y].length; x++) {
            if (x % 2 != y % 2) {
                if (y < 3) matrix[y][x] = 1;
                else if (y > 4) matrix[y][x] = 2;
            }
        }
    }
    frameRate(30);
}

function draw() {

    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (x % 2 != y % 2) fill(89, 45, 0);
            else fill("white");

            if (matrix[y][x] == 3) fill("green");
            if (matrix[y][x] == 4) fill("yellow");


            rect(x * 120, y * 120, 120, 120);

            if (matrix[y][x] == 1) {
                fill("white");
                ellipse(x * 120 + 60, y * 120 + 55, 80, 80);
            }
            if (matrix[y][x] == 2) {
                fill("black");
                ellipse(x * 120 + 60, y * 120 + 55, 80, 80);
            }
        }
    }

    if (turn2 % 2 == 0) fill("white");
    else fill("black");


    ellipse(1075, 100, 80, 80);
    fill("blue");
    textSize(29);

    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (matrix[y][x] == 1) whiteC++;
            if (matrix[y][x] == 2) blackC++;
        }
    }

    text(whiteC + " : " + blackC, 1032, 180);

    whiteC = 0;
    blackC = 0;
}

function mousePressed() {
    arrClear(greens);
    arrClear(yellow);
    borderClear();

    if (mouseX < 961 && mouseY < 961) {      //mouse coordinates
        a = Math.ceil(mouseY / 120) - 1;
        b = Math.ceil(mouseX / 120) - 1;

        if (matrix[a][b] == turn2 % 2 + 1) {
            piece[0] = a;
            piece[1] = b;

            borderClear();
        }
    }

    for (var i = 0; i < 2; i++) {
        if ((matrix[piece[0] + turn][piece[1] + direct] != turn2 % 2 + 1 || matrix[piece[0] - turn][piece[1] + direct] != turn2 % 2 + 1) && matrix[piece[0] + turn][piece[1] + direct] != 0) {
            if (matrix[piece[0] + 2 * turn][piece[1] + 2 * direct] == 0) {
                diepiecce[i] = [];
                diepiecce[i][0] = piece[0] + turn;
                diepiecce[i][1] = piece[1] + direct;
                yellow[i] = [];
                yellow[i][0] = piece[0] + 2 * turn;
                yellow[i][1] = piece[1] + 2 * direct;
                matrix[yellow[i][0]][yellow[i][1]] = 4;
            }
        }

        if (!hit) {
            for (var y = 0; y < 8; y++) {
                for (var x = 0; x < 8; x++) {
                    if (matrix[y][x] == 4) hithim = false;
                }
            }

            if (hithim) {
                if (matrix[piece[0] + turn][piece[1] + direct] == 0) {
                    matrix[piece[0] + turn][piece[1] + direct] = 3;
                    greens[i] = [];
                    greens[i][0] = piece[0] + turn;
                    greens[i][1] = piece[1] + direct;
                    for (var y = 0; y < 8; y++) {
                        for (var x = 0; x < 8; x++) {
                            if (matrix[y][x] == 4) {
                                arrClear(greens);
                                matrix[piece[0] + turn][piece[1] + direct] = 0;
                            }
                        }
                    }
                }
            }
        }

        if (direct == 1) direct = -1;
        else direct = 1

    }

    if ((greens[0][0] == a && greens[0][1] == b) || (greens[1][0] == a && greens[1][1] == b)) {
        borderClear();
        matrix[piece[0]][piece[1]] = 0;
        matrix[a][b] = turn2 % 2 + 1;        //move

        if (turn == 1) {
            turn = -1;
            turn2++;
        }
        else {
            turn = 1;
            turn2++;
        }
    }

    for (var i = 0; i < 2; i++) {
        if (yellow[i][0] == a && yellow[i][1] == b) {
            borderClear();
            arrClear(greens);
            arrClear(yellow);

            matrix[piece[0]][piece[1]] = 0;
            matrix[diepiecce[i][0]][diepiecce[i][1]] = 0;

            matrix[a][b] = turn2 % 2 + 1;
            hithim = true;        //move
            arrClear(diepiecce);

            if (matrix[a + turn][b + 1] != turn2 % 2 + 1 && matrix[a + turn][b + 1] != 0) {
                if (matrix[a + 2 * turn][b + 2] == 0) hitagain1 = true;
                else hitagain1 = false;
            }
            else hitagain1 = false;

            if (matrix[a + turn][b - 1] != turn2 % 2 + 1 && matrix[a + turn][b - 1] != 0) {
                if (matrix[a + 2 * turn][b - 2] == 0) hitagain2 = true;
                else hitagain1 = false;
            }
            else hitagain2 = false;

            if (!hitagain1 && !hitagain2) {
                if (turn == 1) {
                    turn = -1;
                    turn2++;
                }
                else {
                    turn = 1;
                    turn2++;
                }
            }
        }
    }
}
