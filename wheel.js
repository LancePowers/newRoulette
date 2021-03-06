//in: position in array. process: creates an array of objects for slots on the wheel. out: wheel object at given position (or whole wheel if in = "").

//Wheel as object function Wheel(){}
function createWheel(position) {
    var red = 'red';
    var black = 'black';
    var green = 'green';

    var wheel = [
        {
            num: 1,
            color: red
        },
        {
            num: 2,
            color: black
        },
        {
            num: 3,
            color: red
        },
        {
            num: 4,
            color: black
        },
        {
            num: 5,
            color: red
        },
        {
            num: 6,
            color: black
        },
        {
            num: 7,
            color: red
        },
        {
            num: 8,
            color: black
        },
        {
            num: 9,
            color: red
        },
        {
            num: 10,
            color: black
        },
        {
            num: 11,
            color: black
        },
        {
            num: 12,
            color: red
        },
        {
            num: 13,
            color: black
        },
        {
            num: 14,
            color: red
        },
        {
            num: 15,
            color: black
        },
        {
            num: 16,
            color: red
        },
        {
            num: 17,
            color: black
        },
        {
            num: 18,
            color: red
        },
        {
            num: 19,
            color: red
        },
        {
            num: 20,
            color: black
        },
        {
            num: 21,
            color: red
        },
        {
            num: 22,
            color: black
        },
        {
            num: 23,
            color: red
        },
        {
            num: 24,
            color: black
        },
        {
            num: 25,
            color: red
        },
        {
            num: 26,
            color: black
        },
        {
            num: 27,
            color: red
        },
        {
            num: 28,
            color: black
        },
        {
            num: 29,
            color: black
        },
        {
            num: 30,
            color: red
        },
        {
            num: 31,
            color: black
        },
        {
            num: 32,
            color: red
        },
        {
            num: 33,
            color: black
        },
        {
            num: 34,
            color: red
        },
        {
            num: 35,
            color: black
        },
        {
            num: 36,
            color: red
        },
        {
            num: '0',
            color: green
        },
        {
            num: '00',
            color: green
        }
  ];
    if (position === "") {
        return wheel;
    } else {
        return wheel[position];
    }
}

//in: nothing. process: choose a random wheel slot. out: return the wheel object

//refactor to include '0' and '00'
function spin() {
    rand = Math.floor(Math.random() * 38);
    var position = createWheel(rand);
    return position;
}

//in: array from create wheel (num, color) Process: call individual functions to fill out info required to win. out: object with stored win/lose criteria


// -------------------------- //
// THIS IS IN THE DOM.JS FILE //
// -------------------------- //

// function assignDegrees() {
//     var wheelPosition = [];
//     var wheelOrder = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, '00', 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];
//     var localIncrement = 0;
//     for (var i = 0; i < wheelOrder.length; i++) {
//         var test = "";
//         wheelPosition.push({
//             order: wheelOrder[i],
//             increment: localIncrement
//         });
//         localIncrement += (360 / 38);
//     }
//     console.log(wheelPosition);
//     return wheelPosition;
// }
//
// function findDegrees(num) {
//     var tempPositionArray = assignDegrees();
//     for (var i = 0; i < tempPositionArray.length; i++) {
//         if (tempPositionArray[i].order === num) {
//             return tempPositionArray[i].increment;
//         }
//     }
// }
