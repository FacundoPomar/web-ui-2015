/*
	Write a script that finds the maximal sequence of equal
elements in an array.

Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.
 */
var max = 0; // Max number of the same sequence.
var maxElem;
var actual = 0; //cant of numbers in the actual sequence.
var actualElem;

var arr = [2, 2, 1, 1, 1, 5, 5];

actualElem = arr[0];
actual++;
for (var i = 1; i <= arr.length; i++) {
	
	if (arr[i] != actualElem) {
		if (actual >= max) {
			max = actual;
			maxElem = actualElem;
		}
		actual = 1;
	} else {
		actual++;
	}
	actualElem = arr[i];
}
console.log(maxElem, "cant: " + max);