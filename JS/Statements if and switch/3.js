/*
Write a script that finds the biggest of three integers
using nested if statements.
 */
var a = 6;
var b = 30;
var c = 33;
if (a > b) {
	if (a > c) {
		console.log("a is the biggest number");
	} else {
		console.log("c is the biggets number");
	}
} else if (b > c) {
	console.log("b is the biggest");
} else {
	console.log("c is he biggets number");
}