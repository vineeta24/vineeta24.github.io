var form = document.querySelector("form");
var input = document.querySelectorAll("input, select");
form.addEventListener("change", function(e) {
  var s = "";
  var cs = "";
  for (var i = 0; i < input.length; i++) {
    s += input[i].name + ":" + input[i].value + ";";
    cs += input[i].name + ": " + input[i].value + ";<br/>";
  }

  document.getElementById("myBtn").setAttribute("style", s);
  var myBtn = document.getElementById("myBtn");
  //document.getElementById("app").innerHTML = cs;
  console.log(cs)
  document.getElementById("cssCode").innerHTML = cs;
});