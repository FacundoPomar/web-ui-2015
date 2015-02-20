/*
	Write a JavaScript function reverses string and returns it
Example: "sample"  "elpmas".
 */

function reverseString(aString) {
	return aString.split("").reverse().join("");
}

console.log(reverseString("hola"));