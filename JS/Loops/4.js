/*
	Write a script that finds the lexicographically smallest and
	largest property in document, window and navigator
	objects
 */

var elems = [document, window, navigator];
var min;
var max;

for (var i = 0;  i < elems.length; i++) {
	console.log("lexicographically smallest and largest in: " + elems[i].toString().split(" ")[1].slice(0, -1));

	for (var w in elems[i]) {
		if ((w < min) || (min === undefined)) {
			min =  w;
		}
		if ((w > max) || (max === undefined)) {
			max = w;
		}
	}
	console.log("Smallest property: " + min);
	console.log("Largest property: " + max);
	min = max = undefined;
}