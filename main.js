//commit made by Crystal O'Mara
//Function to get and verify users input
function input() {
  var userInput = prompt ("Pick a number 1-36");
  while ((userInput > 36) ||(userInput < 0)) {
    userInput = prompt ("Sorry that's not a number 1-36. Try again");
  }
  return userInput;
}
// function to return spot number and color as an array
function randomSpin(){
var red = "red";
var black = "black";
var wheel = [
  {num: 1, color: red},
  {num: 2, color: black},
  {num: 3, color: red},
  {num: 4, color: black},
  {num: 5, color: red},
  {num: 6, color: black},
  {num: 7, color: red},
  {num: 8, color: black},
  {num: 9, color: red},
  {num: 10, color: black},
  {num: 11, color: black},
  {num: 12, color: red},
  {num: 13, color: black},
  {num: 14, color: red},
  {num: 15, color: black},
  {num: 16, color: red},
  {num: 17, color: black},
  {num: 18, color: red},
  {num: 19, color: red},
  {num: 20, color: black},
  {num: 21, color: red},
  {num: 22, color: black},
  {num: 23, color: red},
  {num: 24, color: black},
  {num: 25, color: red},
  {num: 26, color: black},
  {num: 27, color: red},
  {num: 28, color: black},
  {num: 29, color: black},
  {num: 30, color: red},
  {num: 31, color: black},
  {num: 32, color: red},
  {num: 33, color: black},
  {num: 34, color: red},
  {num: 35, color: black},
  {num: 36, color: red}
];
function spin(){
  var spot = Math.floor(Math.random() * wheel.length);

  return spot;
}
var spot = spin();
var num = wheel[spot-1].num;
var color = wheel[spot-1].color;
return [num, color];
}


var input = input();
console.log(input);
var result = randomSpin()[0];
console.log(result);

if (input === result.toString()) {
  alert("Win!");
} else {
  console.log(input, result);
  alert("Lose");
}
