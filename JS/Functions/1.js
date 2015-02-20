/*
	Write a function that returns the last digit of given
integer as an English word. Examples: 512  "two",
1024  "four", 12309  "nine"
 */

function lastDigit(int) {
	"use strinc"
	var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	return words[int%10];
}

console.log(lastDigit(3423));