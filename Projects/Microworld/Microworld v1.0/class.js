class Grass {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions =
            [[this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];

    }


    chooseCell(character) {
        var found = []

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }





    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 10 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}

///////////////////////////////////////////// Grasseater //////////////////////////////////////////////////////////////

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 40;
        this.multiply = 0;
        this.index = index;

    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        var NewCell = this.chooseCell(0);

        var RandomNewCell = random(NewCell);
        if (RandomNewCell) {
            var x = RandomNewCell[0];
            var y = RandomNewCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy--;
            if (this.energy < 1) {
                this.die();
                matrix[y][x] = 0;
            }
        }
    }

    eat() {
        var FindCords = this.chooseCell(1);
        var randGrassEat = random(FindCords)
        if (randGrassEat) {
            var y = randGrassEat[1];
            var x = randGrassEat[0];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;


            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            this.energy++;
            if(this.energy>30)
            {
                this.energy = 30;
            }
            this.multiply++;

            if (this.multiply > 4) {
                this.mul();

            }

        }
        else {
            this.move();
        }
    }


    die() {
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }

    }

    mul() {

        var newCell0 = this.chooseCell(0);
        var newCell1 = this.chooseCell(1);
        var randomCell = random(newCell0.concat(newCell1));
        if (randomCell) {

            var newGrassEater = new GrassEater(randomCell[0], randomCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[randomCell[1]][randomCell[0]] = 2;
            this.multiply = 0;

        }
    }

}

////////////////////////////////////////////// Predator ////////////////////////////////////////////////////////////////

class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 120;
        this.index = index;
        this.multiply = 0;

    }
    getNewCoor() {
        this.direct = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character1, character2) {
        this.getNewCoor();
        var found = [];
        for (var i in this.direct) {
            var x = this.direct[i][0];
            var y = this.direct[i][1];
            if (y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.direct[i])
                }
            }
        }
        return found;
    }

    chooseCell2(character) {
        this.getNewCoor();
        var found = [];
        for (var i in this.direct) {
            var x = this.direct[i][0];
            var y = this.direct[i][1];
            if (y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length) {
                if (matrix[y][x] == character) {
                    found.push(this.direct[i])
                }
            }
        }
        return found;
    }








    die() {

        matrix[this.y][this.x] = 0;

        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
            }
        }
    }

    move() {
        var newCel = this.chooseCell(0, 1);
        var randCel = random(newCel);
        if (randCel) {
            var x = randCel[0];
            var y = randCel[1];
            if (matrix[y][x] == 0) {
                matrix[this.y][this.x] = 0;
            }
            else if (matrix[y][x] == 1) {
                matrix[this.y][this.x] = 1;
            }

            matrix[y][x] = 3;


            this.x = x;
            this.y = y;
            this.energy--;

        }
        if (this.energy < 1) {
            this.die();
        }
    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.index;
            var predator = new Predator(newX, newY, this.index);
            predatorArr.push(predator);
            this.multiply = 0;
        }
    }




    eat() {
        var gishatich = this.chooseCell2(2);
        var randgishatich = random(gishatich);
        if (randgishatich) {
            var x = randgishatich[0];
            var y = randgishatich[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;
            this.energy = this.energy + 5;
            if(this.energy>240)
            {
                this.energy = 240;
            }

            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }
            // for (var i in grassArr) {
            //     if (x == grassArr[i].x && y == grassArr[i].y) {
            //         grassArr.splice(i, 1);
            //     }
            // }

            if (this.multiply > 5) {
                this.mul();

            }


        }

        else {
            this.move();

        }
    }
}

////////////////////////////////////////////// Human ////////////////////////////////////////////////////////////////

class Human {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 120;
        this.index = index;
        this.multiply = 0;

}

       getNewCoor() {
        this.direct = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }


chooseCell(character1, character2) {
        this.getNewCoor();
        var found = [];
        for (var i in this.direct) {
            var x = this.direct[i][0];
            var y = this.direct[i][1];
            if (y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.direct[i])
                }
            }
        }
        return found;
    }




}
