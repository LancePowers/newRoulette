document.getElementById('spin').addEventListener('click',function(){spin(1600);});
document.getElementById('reset').addEventListener('click',function(){spin(-1600);});

function spinAction(deg){
  var wheel = document.getElementById('wheel');
  var degrees = deg;
  var rotation = "rotate(" + degrees + "deg)";
  wheel.style.webkitTransform = rotation;
}

//need to change
function addSpot(number,color, id, container){
  var board = document.getElementById('wheel-bet');
  var spot = document.createElement('div');
  spot.id = number;
  spot.style.background = color;
  spot.innerHTML = number;
  spot.className = 'wheel-bet';
  board.appendChild(spot);
}

