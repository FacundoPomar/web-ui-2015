/*
	Write a JavaScript function that finds how many times
a substring is contained in a given text (perform case
insensitive search).

Example: The target substring is "in". The text is as
follows:

We are living in an yellow submarine. We don't
have anything else. Inside the submarine is very
tight. So we are drinking all the day. We will
move out of it in 5 days.

The result is: 9.
 */

function containString(aString, aSubstring) {

	aString = aString.split(" ");
	aSubstring = aSubstring.toLowerCase();
	var cantMatch = 0;

	for(var i = 0; i < aString.length; i++) {
		/*if (aString[i].toLowerCase().indexOf(aSubstring, -1) != -1) {
			console.log(aString[i]);
			cantMatch++;
		}*/
		if (aString[i].length >= aSubstring.length) {
			var aux =  aString[i].toLowerCase();
			var reg = new RegExp(aSubstring, "g"); //Can't put string in match function. Convert string into regexp
			var cant = (aux.match(reg) || []).length;
			cantMatch += cant;
		}
	}
	return cantMatch;
}

/* Testing */

var s = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."

console.log(containString(s, "llow"));