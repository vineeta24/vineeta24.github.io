var form = document.querySelector("form");
var input = document.querySelectorAll("input, select");
form.addEventListener("change", function(e) {
  var s = "";
  var cs = "";
  
  var gradientStyle = document.querySelector('input[name="gradient"]:checked').value;
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  var deg = document.getElementById('deg').value;

  s = gradientStyle + '(' + deg + 'deg, ' + color1 + ', ' + color2 + ')';
  cs = 'background: ' + s;

  document.getElementById('myGradient').style.background = s;
  document.getElementById('background').value = s;
  document.getElementById("cssCode").innerHTML = cs;
});