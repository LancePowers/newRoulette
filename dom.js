document.getElementById('spin').addEventListener('click',function(){spin(1600)});
document.getElementById('reset').addEventListener('click',function(){spin(-1600)});

function spin(deg){
  var wheel = document.getElementById('wheel');
  var degrees = deg;
  var rotation = "rotate(" + degrees + "deg)";
  wheel.style.webkitTransform = rotation;
}
function addSpot(number,color, id){
  var board = document.getElementById('board');
  var spot = document.createElement('div');
  spot.style.background = color;
  spot.innerHTML = number;
  spot.className = 'spot';
  board.appendChild(spot);
}

