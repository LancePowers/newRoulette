document.getElementById('spin').addEventListener('click', function () {
    spinAction(1);
});

var counter = 0,
    spinIndex = 0,
    counter = 0,
    newDegrees = 0,
    degrees = 0;


// direction is a janky fix
function spinAction(direction) {
    counter++;
    // var testNum = parseInt(prompt("what number would you like to test?"));

    // determines what number the ball will land on
    var testNum = Math.floor(Math.random() * 38);
    console.log('the ball should land on: ' + testNum);
    /**
     * makes the spinner stop in random position
     * should have not effect where ball lands
     */
    // randLocation = Math.floor(Math.random() * 360);
    randLocation = 0;
    /**
     * "degrees +=" fixes spin issue
     * ball no longer rotates to correct position
     */
    degrees += randLocation + 1440 - findDegrees(testNum);
    /**
     * determines how the ball will move along spinner
     */
    var ballRotatation = "rotate(" + (randLocation - (1440 * counter)) + "deg)";
    ball.style.webkitTransform = ballRotatation;
    console.log('The ball is rotating ' + ballRotatation + ' degrees');
    /**
     * determines the degrees in which the spinner will rotate
     */
    var wheelRotation = "rotate(" + (direction * degrees) + "deg)";
    wheel.style.webkitTransform = wheelRotation;
    // newDegrees = degrees;
    // console.log(newDegrees);

}


function addSpot(number, color) {
    var board = document.getElementById('wheel-bet');
    var elem = createElement(number, color)
    var spot = new Slot({
        num: number,
        color: color,
        elem: elem
    })
    board.appendChild(spot.elem);
    spot.droppable();
}

function createElement(number, color) {
    var elem = document.createElement("div");
    elem.innerHTML = number;
    elem.id = number + '-spot';
    elem.style.background = color;
    elem.className = 'wheel-bet';
    return elem;
}

function findDegrees(num) {
    console.log('starting value of spin index = ' + spinIndex);
    var newIndex;
    var wheelOrder = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];
    if (wheelOrder.indexOf(num) < spinIndex) {
        newIndex = wheelOrder.length - spinIndex + wheelOrder.indexOf(num);
        console.log('newIndex: ' + newIndex + ' = wheelOrder.indexOf(num) ' + wheelOrder.indexOf(num) + '- spinIndex: ' + spinIndex);
        spinIndex = wheelOrder.indexOf(num);
    } else {
        newIndex = wheelOrder.indexOf(num) - spinIndex;
        console.log('newIndex: ' + newIndex + ' = wheelOrder.indexOf(num) ' + wheelOrder.indexOf(num) + '- spinIndex: ' + spinIndex);
        spinIndex = wheelOrder.indexOf(num);
    }
    // spinIndex = newIndex;
    console.log('spin index = ' + spinIndex);
    return newIndex * (360 / 38);
}