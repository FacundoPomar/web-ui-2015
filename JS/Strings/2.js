/*
	Write a JavaScript function to check if in a given
expression the brackets are put correctly.

Example of correct expression: ((a+b)/5-d).

Example of incorrect expression: )(a+b)).
 
This don't test correct logic in the expresion.
 */

function correctBrackets(aString) {

	var openBra = 0;
	for(var i = 0; i < aString.length; i++) {
		if (aString[i] === "(") {
			openBra++;
		} else if (aString[i] === ")") {
			openBra--;
		}
	}
	if (openBra != 0) {
		return false;
	}
	return true;
}

/* Testing */

var a = "a*(4+2)"; //True

console.log("Test: " + a);
console.log(correctBrackets(a));

var a = "a*(4+2)("; //False

console.log("Test: " + a);
console.log(correctBrackets(a));

var a = ")a*(4+2)"; //False

console.log("Test: " + a);
console.log(correctBrackets(a));

var a = "(a)*(4+2)+(3/(14*99+(2-55)))"; //True 

console.log("Test: " + a);
console.log(correctBrackets(a));

var a = "(a)*(4+2)+(3/(14*99+(2-55))))"; //False

console.log("Test: " + a);
console.log(correctBrackets(a));