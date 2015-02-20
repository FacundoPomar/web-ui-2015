/*
	Write a script that finds the maximal increasing sequence
in an array. Example:
{3, 2, 3, 4, 2, 2, 4}  {2, 3, 4}.

NOTE: Not necesary in increases of one ?
ar.slice(0) for clone the arr
 */

var seq = [3, 2, 3, 4, 2, 7, 4, 5, 6, 7, 1]; //original sequence
var maximal = []; //Maximal sequence
var act = []; //Actual sequence.

act.push(seq[0]);
maximal = act.slice(0);
for (var i = 1; i <= seq.length; i++) {
	if (seq[i] > act[act.length - 1]) {
		act.push(seq[i]);
	} else if (act.length > maximal.length) {
		maximal = act.slice(0); //Clone the array like python :)
		act = [];
	} else {
		act = [seq[i]];
	}
}
console.log(maximal);