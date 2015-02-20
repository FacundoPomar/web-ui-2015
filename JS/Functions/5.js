/*
	Write a function that counts how many times given
number appears in given array. Write a test function to
check if the function is working correctly.
 */

function occurencesOf(anArray, aNumber) {

	var amount = 0;
	for (var i = 0; i < anArray.length; i++) {
		if (anArray[i] === aNumber) {
			amount++;
		}
	}
	return amount;
}