/*
Write a script that finds the greatest of given 5
variables.
 */
var a = parseInt(prompt("ENter a number"));
var b = parseInt(prompt("ENter a number"));
var c = parseInt(prompt("ENter a number"));
var d = parseInt(prompt("ENter a number"));
var e = parseInt(prompt("ENter a number"));

if (!(isNaN(a)) && !(isNaN(b)) && !(isNaN(c)) && !(isNaN(d)) && !(isNaN(e))) {
	if ((a > b) && (a > c) && (a > d) && (a > e)) {
		console.log(a +" is the greatest number");
	} else if ((b > a) && (b > c) && (b > d) && (b > e)) {
		console.log(b + "is the greatest number");
	} else if ((c > a) && (c > b) && (c > d) && (c > e)) {
		console.log(c + " is the greatest number");
	} else if ((d > b) && (d > a) && (d > c) && (d > e)) {
		console.log(d + " is the greatest number");
	} else if ((e > b) && (e > a) && (e > c) && (e > d)) {
		console.log(e + " is the greatest number");
	}
} else {
	console.log("some value is't a valid value");
}