var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gin");
var crazy = document.getElementById("crazy");



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    	}

  return color;
}

function bgchange() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+")";

	 css.textContent = body.style.background + ";";

}

function change(){
	var color3 =getRandomColor();
	var color4 =getRandomColor();
	getRandomColor() ;getRandomColor() ;
	body.style.background =
	"linear-gradient(to right, "
	+ color3
	+ ", "
	+ color4
	+")";
	css.textContent = body.style.background + ";";	
}

crazy.addEventListener("click", change);

color1.addEventListener("input", bgchange);

color2.addEventListener("input", function(){bgchange();})
