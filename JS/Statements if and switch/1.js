/*
Write an if statement that examines two integer
variables and exchanges their values if the first one is
greater than the second one.
 */
var a = 12;
var b = 11;
if (a > b) {
	var aux = b;
	b = a;
	a = aux;
}
console.log("a: " + a);
console.log("b: " + b);