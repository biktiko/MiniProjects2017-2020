var LivingCreature = require("./class-livingcreature");

module.exports =  class UFO extends LivingCreature {

    constructor(x, y, index){
        super(x, y, index);
        this.energy = 100;
    }

    chooseCell(character, matrix) {
        this.getNewCoor();
        return super.chooseCell(character, matrix);
    }

    eat(matrix, UFOArr) {
        var FindCords = this.chooseCell(5, matrix);
        var randPlayerEat = this.random(FindCords)
        
        if(randPlayerEat){
            alert("you lose, UFO eat you");
        }
        else{
            this.move(matrix);
        }
    }

    move(matrix) {

        var NewCell = this.chooseCell2(0, 1, martix);
        var RandomNewCell = this.random(NewCell);

        if (RandomNewCell) {
            var x = RandomNewCell[0];
            var y = RandomNewCell[1];
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }
    }




    chooseCell2(character1, character2, matrix) {
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
    };

}

