function Slot(spot) {
    // if(this.num !== Number)
    this.chips = [];
    this.num = spot.num;
    this.color = spot.color;
    this.elem = spot.elem
    this.row = rowCalc(spot.num);
    this.twelves = twelvesCalc(spot.num);
    this.half = halfCalc(spot.num);
    this.polarity = polarityCalc(spot.num);
}


// Set board slot to accept and track chips 
Slot.prototype.droppable = function () {
    var id = '#' + this.num + '-spot';
    var self = this;
    $(id).droppable({
        drop: function (event, ui) {
            self.chips.push(ui.draggable.attr('id'));
            console.log(self.num + " " + self.chips)
        },
        out: function (event, ui) {
            var position = self.chips.indexOf(ui.draggable.attr('id'));
            self.chips.splice(position, 1);
            console.log(self.num + " " + self.chips)
        }
    })
};


Slot.prototype.chipsOut = function (multiplier) {
    var chips = this.chips.reduce(function (prev, curr) {
        return prev + curr
    });
    console.log(chips)
    while (chips > 0) {
        if (chips >= 1000) {
            new Chip('yellow', 1000);
            chips -= 1000;
        } else if (chips >= 100) {
            new Chip('black', 100);
            chips -= 100;
        } else if (chips >= 25) {
            new Chip('green', 25);
            chips -= 25;
        } else if (chips >= 5) {
            new Chip('red', 5);
            chips -= 5;
        }
    }
};

Slot.prototype.chipsIn = function () {
    for (var i = 0; i < this.chips.length; i++) {
        $('#' + this.chips[i]).remove();
    }
    this.chips = [];
};


//in: slot number. process: find which row the number is in. out: row 1,2, or 3

function rowCalc(num) {
    var row = num;
    while (row > 3) {
        row -= 3;
    }
    return row;
}

//in: slot number. Process: find which group of 12 Out: bottom(1) middle (2) or top (3)
function twelvesCalc(num) {
    if (num < 13) {
        return 1;
    } else if (num < 25) {
        return 2;
    } else return 3;
}

//in: slot number. process: check to see which half the number falls in bottom (1) top (2)
function halfCalc(num) {
    if (num < 19) {
        return 1;
    } else {
        return 2;
    }
}

//in: slot number. process: check to see if the # is even or odd. out: even or odd
function polarityCalc(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}