
///////////////////////////////////////////// Grasseater //////////////////////////////////////////////////////////////

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 100;
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
            this.hearth--;
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
            if(this.energy>150)
            {
                this.energy = 150;
            }
            this.multiply++;

            if (this.multiply > 14) {
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

