
//Function to get and verify users input
var chips = 100;
var bet;


//in: position in array. process: creates an array of objects for slots on the wheel. out: wheel object at given position.
function createWheel(position){
  var red = "red";
  var black = "black";
  var wheel = [
    {num: 0, color: green, odds: 35},
    {num: 00, color: green, odds: 35},
    {num: 1, color: red, odds: 35},
    {num: 2, color: black, odds: 35},
    {num: 3, color: red, odds: 35},
    {num: 4, color: black, odds: 35},
    {num: 5, color: red, odds: 35},
    {num: 6, color: black, odds: 35},
    {num: 7, color: red, odds: 35},
    {num: 8, color: black, odds: 35},
    {num: 9, color: red, odds: 35},
    {num: 10, color: black, odds: 35},
    {num: 11, color: black, odds: 35},
    {num: 12, color: red, odds: 35},
    {num: 13, color: black, odds: 35},
    {num: 14, color: red, odds: 35},
    {num: 15, color: black, odds: 35},
    {num: 16, color: red, odds: 35},
    {num: 17, color: black, odds: 35},
    {num: 18, color: red, odds: 35},
    {num: 19, color: red, odds: 35},
    {num: 20, color: black, odds: 35},
    {num: 21, color: red, odds: 35},
    {num: 22, color: black, odds: 35},
    {num: 23, color: red, odds: 35},
    {num: 24, color: black, odds: 35},
    {num: 25, color: red, odds: 35},
    {num: 26, color: black, odds: 35},
    {num: 27, color: red, odds: 35},
    {num: 28, color: black, odds: 35},
    {num: 29, color: black, odds: 35},
    {num: 30, color: red, odds: 35},
    {num: 31, color: black, odds: 35},
    {num: 32, color: red, odds: 35},
    {num: 33, color: black, odds: 35},
    {num: 34, color: red, odds: 35},
    {num: 35, color: black, odds: 35},
    {num: 36, color: red, odds: 35}
  ];
  return wheel[position];
}

//in: nothing. process: choose a random wheel slot. out: return the wheel object
function spin(){
  var rand = Math.floor(Math.random() * 38);
  var slot = createWheel(rand);
  return slot;
}

