/*
	Write a program that extracts from a given text all
palindromes, e.g. "ABBA", "lamal", "exe".
 */

function getPalindromes(str) {

	var result = [];
	var strList = str.toLowerCase().split(" ");
	for (var i = 0; i < strList.length; i++) {
		if (strList[i] === strList[i].split("").reverse().join("")) {
			result.push(strList[i]);
		}
	}
	return result;
}
var a = "Hola, soy un texto que podría contener palindromes como Ana or exe";
console.log(getPalindromes(a));