/*
	Write a function that replaces non breaking white-spaces in
a text with &nbsp;
 */

function remplaceBlanks(aString) {

	return aString.replace(new RegExp(" ", "g"), "&nbsp;");
}

var s = "Hola, soy un string con espacios";

var d = document.getElementById("otro");
d.innerHTML = remplaceBlanks(s);