/*
	Write a function that formats a string using placeholders:

var str = stringFormat("Hello {0}!","Peter");

//str = "Hello Peter!";
*/


function stringFormat(str, toRemplace) {
	
	
	for (var i = 1; i < arguments.length; i++) {
		var regex = "\\{"+(i-1)+"\\}";
		str = str.replace(new RegExp(regex, "g"), arguments[i]);
	}

	return str;
}

var text = "Hello {0}! My Last Name is {1}, you forgot it ? Again, my last name is: {1},  a third parameter like {2} or {3} and {4}. It's infinite the amount of parameters that this functions can remplace like {5} or {6}. Maybe, if the parameter don't exist like {99}, the code will break it ? I don't think so.";
console.log(stringFormat(text,"Peter", "Pomar", "dog", "cat", "fence", "brown", "another think"))


function Casa () {
	this.direccion = "algun lugar";
	function setDireccion (dir) {
		this.direccion = dir;
	}
	this.getDireccion = function  () {
		return this.direccion();
	}
}