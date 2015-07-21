document.getElementById('spin').addEventListener('click',function(){spin(1600)});
document.getElementById('reset').addEventListener('click',function(){spin(-1600)});

function spin(deg){
  var wheel = document.getElementById('wheel');
  var degrees = deg;
  var rotation = "rotate(" + degrees + "deg)";
  wheel.style.webkitTransform = rotation;
}


