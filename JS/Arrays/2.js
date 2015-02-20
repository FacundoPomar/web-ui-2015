/*
	Write a script that compares two char arrays
lexicographically (letter by letter).
 */

var arr1 = ["j", "f", "o", "d", "A", "O", "r", "i"];
var arr2 = ["p", "D", "i", "a", "B", "i", "d"];

/* if the arrays haven't the same length, use like index the shortest array */
var n;
if (arr1.length < arr2.length) {
	n = arr1.length;
} else {
	n = arr2.length;
}

for (var i = 0; i < n; i++) {
	if (arr1[i] < arr2[i]) {
		console.log(arr1[i] + " is smaller that " + arr2[i]);
	} else {
		console.log(arr2[i] + " is smaller that " + arr1[i]);
	}
}