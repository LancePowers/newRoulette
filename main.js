
//Function to get and verify users input
var chips = 100;
//bet input goes here.

//in: two object variables process: compare the variables out: boolean for win
function winCheck(slotVal,boardVal){
  if (slotVal === boardVal){
    return true;
  } else {
    return false;
  }
}

//in: nothing. process: create an array of spot values with odds out: the new whel array
function wheelSpots(){
  var wheel = createWheel("");
  for (var i = 0; i < wheel.length; i++) {
    wheel[i].odds = 35;
  }
  return wheel;
}

//for loops to create different spots
function createBoard(){
  var board = wheelSpots();
  for (var i = 0; i < 36; i++) {
    var number = board[i].num;
    var color = board[i].color;
    addSpot(number,color,i);
  }
}
createBoard();
