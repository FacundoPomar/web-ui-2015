/*
Write a script that shows the sign (+ or -) of the product
of three real numbers without calculating it. Use a
sequence of if statements.
 */
var a = -10;
var b = 55;
var c = -20;
var cantNegative = 0;

if (a < 0) {
	cantNegative++;
}
if (b < 0) {
	cantNegative++;
}
if (c < 0) {
	cantNegative++;
}
if (!(cantNegative%2)) {
	console.log("+");
} else {
	console.log("-");
}
