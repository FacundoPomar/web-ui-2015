/*
	Write a program that finds the most frequent number in an
array. Example:

{4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3}  4 (5 times)
 */

//Way: Using a Object to save in his properties the numbers like strings.
//
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var result = new Object();
var max;
var maxElem;


for (var i = 0; i < arr.length; i++) {
	if (result[arr[i].toString()]) {
		result[arr[i].toString()]++;
	} else {
		result[arr[i].toString()] = 1;
	}
}

for (var val in result) {
	if ((result[val] > max) || (max === undefined)) {
		max = result[val];
		maxElem = val;
	}
}

console.log("Element: " + maxElem);
console.log("Ocurrences: " + max);