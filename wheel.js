//in: position in array. process: creates an array of objects for slots on the wheel. out: wheel object at given position (or whole wheel if in = "").
function createWheel(position){
  var red = 'red';
  var black = 'black';
  var green = 'green';

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
    {num: 36, color: red},
    {num: '0', color: green},
    {num: '00', color: green}
  ];
  if (position === ""){
    return wheel;
  } else {
  return wheel[position];
  }
}

//in: nothing. process: choose a random wheel slot. out: return the wheel object
function spin(){
  rand = Math.floor(Math.random() * 38);
  var position = createWheel(rand);
  return position;
}

//in: array from create wheel (num, color) Process: call individual functions to fill out info required to win. out: object with stored win/lose criteria
function Slot(slot){
  this.num = slot.num;
  this.color = slot.color;
  this.row = rowCalc(slot.num);
  this.twelves = twelvesCalc(slot.num);
  this.half = halfCalc(slot.num);
  this.polarity = polarityCalc(slot.num);
}

//in: slot number. process: find which row the number is in. out: row 1,2, or 3
function rowCalc(num){
  var row = num;
  while (row>3){
    row -= 3;
  }
  return row;
}

//in: slot number. Process: find which group of 12 Out: bottom(1) middle (2) or top (3)
function twelvesCalc(num){
  if (num<13) {
    return 1;
  } else if(num<25) {
    return 2;
  } else return 3;
}

//in: slot number. process: check to see which half the number falls in bottom (1) top (2)
function halfCalc(num){
  if(num < 19){
    return 1;
  }else{
    return 2;
  }
}

//in: slot number. process: check to see if the # is even or odd. out: even or odd
function polarityCalc(num){
  if(num%2===0){
    return "even";
  } else {
    return "odd";
  }
}











