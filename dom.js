document.getElementById('spin').addEventListener('click', function () {
    spinAction(1);
});
document.getElementById('reset').addEventListener('click', function () {
    spinAction(-1);
});

var newDegrees = 0,
    degrees = 0;


// direction is a janky fix
function spinAction(direction) {
    // var testNum = parseInt(prompt("what number would you like to test?"));
    var testNum = Math.floor(Math.random() * 38);
    console.log(testNum);
    randLocation = Math.floor(Math.random() * 360);
    console.log(randLocation);
    /**
     * "degrees +=" fixes spin issue
     * ball no longer rotates to correct position
     */
    degrees += randLocation + 1440 - findDegrees(testNum);
    console.log(degrees);
    newDegrees = degrees;

    ball.style.webkitTransform = "rotate(" + (randLocation - 1440) + "deg)";
    var rotation = "rotate(" + (direction * degrees) + "deg)";
    wheel.style.webkitTransform = rotation;
    console.log(wheel.style.webkitTransform);
}

//need to change
function addSpot(number, color, id, container) {
    var board = document.getElementById('wheel-bet');
    var spot = document.createElement('div');
    spot.id = number;
    spot.style.background = color;
    spot.innerHTML = number;
    spot.className = 'wheel-bet';
    board.appendChild(spot);
}

// function assignDegrees() {
//     var wheelPosition = [];
//     var wheelOrder = [2, 14, 35, 23, 4, 16, 33, 21, 6, 18, 31, 19, 8, 12, 29, 25, 10, 27, "00", 1, 13, 36, 24, 3, 15, 34, 22, 5, 17, 32, 20, 7, 11, 30, 26, 9, 28, 0];
//     var localIncrement = 0;
//     for (var i = 0; i < wheelOrder.length; i++) {
//         var test = "";
//         wheelPosition.push({
//             order: wheelOrder[i],
//             increment: localIncrement
//         });
//         // degree incrementation for each number on the roulette wheel
//         localIncrement += (360 / 38);
//     }
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

function assignDegrees() {
    var wheelPosition = [];
    // 37 is taking the place of 00, since 00 cannot be represented as a number
    var wheelOrder = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];
    var localIncrement = 0;
    for (var i = 0; i < wheelOrder.length; i++) {
        // var test = "";
        wheelPosition.push({
            order: wheelOrder[i],
            increment: localIncrement
        });
        // degree incrementation for each number on the roulette wheel
        localIncrement += (360 / 38);
    }
    console.log(wheelPosition);
    return wheelPosition;
}

function findDegrees(num) {
    var tempPositionArray = assignDegrees();
    for (var i = 0; i < tempPositionArray.length; i++) {
        if (tempPositionArray[i].order === num) {
            return tempPositionArray[i].increment;
        }
    }
}
