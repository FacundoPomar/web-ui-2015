/*
Sort 3 real values in descending order using nested if
statements.
 */
var a = 1;
var b = 2;
var c = 100;

if (a < b) {
	if  (a < c) {
		if (b < c) {
			console.log(c + " " + b + " " + a);
		} else {
			console.log(b + " " + c + " " + a);
		}
	} else {
		console.log(b + " " + a + " " + c);
	}
} else if (c < b) {
	console.log(a + " " + b + " " + c);
} else if (c < a) {
	console.log(a + " " + c + " " + b);
} else {
	console.log(c + " " + a + " " + b);
}