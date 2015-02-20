/*
Write an expression that checks if given positive
integer number n (n ≤ 100) is prime. E.g. 37 is
prime.

without functions...
 */
var a = 39;
var prime = true;
if (a === 1) {
	console.log("It's not prime");
} else {
	for (var i = 2; i < a; i++) {
		if (!(a%i)) {
			console.log("not prime");
			prime = false;
			break;
		}
	}
	if (prime) {
		console.log("it's prime");
	}
}
