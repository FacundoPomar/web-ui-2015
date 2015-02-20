/*
Write a script that finds the max and min number from a
sequence of numbers
 */
var sequence = [89, 4, 5, 2, -13, -14, 55, 22, 100, 23, 12];
var max;
var min;

for (var i = 0; i < sequence.length; i++) {
	if ((min === undefined) || (sequence[i] <= min)) {
		min = sequence[i];
	}
	if ((max === undefined) || (sequence[i] >= max)) {
		max = sequence[i];
	}
}
console.log("max", max);
console.log("min", min);