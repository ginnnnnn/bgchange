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
     // Math.floor(x) get anything x ==  int;exp 9.02 ==9 , -8.77 == 8 , Math.random() get value bt 0-1 
     // Math.random() * 16 == 0. xx  --- 15.9999, Math.floor(Math.random() * 16) get 0 -15
     // color = # + 6 times random  value from letters[i], string =#1 ==#1F === #1F4 ...
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
 // body.style.background == "linear-gradient(to riight, "+ first color "value" + ", " + second color"value"+")";
 // exp. "linear-gradient(to right, #0FA12F, +#000FFF)"; 
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
