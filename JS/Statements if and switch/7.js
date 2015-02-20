/*
Write a script that converts a number in the range
[0...999] to a text corresponding to its English
pronunciation. Examples:

0  "Zero"

273  "Two hundred seventy three"

400  "Four hundred"

501  "Five hundred and one"

711  "Seven hundred and eleven"
 */

/*harder without an array or functinos :P */

var a = 0;
var result;
if ((a >= 0) && (a <= 999)) {
	switch (Math.floor(a/100)) {
		case 0: 
				result = "";
				break;
		case 1:
				result = "one hundred and";
				break;
		case 2: 
				result = "two hundred and";
				break;
		case 3:
				result = "three hundred and";
				break;
		case 4:
				result = "four hundred and";
				break;
		case 5:
				result = "five hundred and";
				break;
		case 6:
				result = "six hundred and";
				break;
		case 7:
				result = "seven hundred and";
				break;
		case 8:
				result = "eight hundred and";
				break;
		case 9:
				result = "nine hundred and";
				break;
		default:
				result = "";
	}

	if ((a%100) <= 9) {
		switch (a%100) {
		case 0: 
				/* If 100, it's necesary slice the ' and' but if zero, no*/
				if (result) {
					result = result.slice(0, result.length-4);
				} else {
					result = "zero";
				}
				break;
		case 1:
				result += " one";
				break;
		case 2: 
				result += " two";
				break;
		case 3:
				result += " three";
				break;
		case 4:
				result += " four";
				break;
		case 5:
				result += " five";
				break;
		case 6:
				result += " six";
				break;
		case 7:
				result += " seven";
				break;
		case 8:
				result += " eight";
				break;
		case 9:
				result += " nine";
				break;
		default:
				result += "";
		}	
	} else if ((a%100) <= 19) {
		switch (a%100) {
			case 10:
					result += " ten";
					break;
			case 11:
					result += " eleven";
					break;
			case 12:
					result += " twelve";
					break;
			case 13:
					result += " thirteen";
					break;
			case 14:
					result += " fourteen";
					break;
			case 15:
					result += " fiveteen";
					break;
			case 16:
					result += " sixteen";
					break;
			case 17:
					result += " seventeen";
					break;
			case 18:
					result += " eighteen";
					break;
			case 19:
					result += " nineteen";
					break;
			default: 
					result += ""
		}
	} else {
		switch (Math.floor(a/10)%10) {
			case 2: 
					result += " twenty";
					break;	
			case 3:
					result += " thirty";
					break;
			case 4:
					result += " forty";
					break;
			case 5:
					result += " fivty";
					break;
			case 6:
					result += " sixty";
					break;
			case 7:
					result += " seventy";
					break;
			case 8:
					result += " eighty";
					break;
			case 9:
					result += " ninety";
					break;
			default:
					result += "";
		}
		switch (a%10) {
			case 1:
				result += "-one";
				break;
			case 2: 
					result += "-two";
					break;
			case 3:
					result += "-three";
					break;
			case 4:
					result += "-four";
					break;
			case 5:
					result += "-five";
					break;
			case 6:
					result += "-six";
					break;
			case 7:
					result += "-seven";
					break;
			case 8:
					result += "-eight";
					break;
			case 9:
					result += "-nine";
					break;
			default:
					result += "";
		}
	}
	console.log(result);
} else {
	console.log("Not a valid number. Please enter a number between 0 and 999");
}