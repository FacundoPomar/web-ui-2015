/*
	Write a function that reverses the digits of given decimal
number. Example: 256  652
 */

function reverse(int) {
	return parseInt(int.toString().split("").reverse().join(""))
}

console.log(reverse(123456));