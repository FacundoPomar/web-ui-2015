/*
	Write a function that returns the index of the first
element in array that is bigger than its neighbors, or -1,
if there’s no such element.

•

Use the function from the previous exercise.
 */
function biggerThatNeighbors(anArray, aPosition) {

	if (anArray[aPosition]) {
		//If the position+-/1 exist, must by lee that int at position
		//Otherwise, return false;
		if (anArray[aPosition - 1]) { 
			if (anArray[aPosition] <= anArray[aPosition - 1]) {
				return false;
			}
		}
		if (anArray[aPosition + 1]) {
			if (anArray[aPosition] <= anArray[aPosition + 1]) {
				return false;
			}
		}
		return true;
	}
	return false;


}

function firstBiggerThatNeighbors(anArray) {

	var exist = -1;
	for (var i = 0; i < anArray.length; i++) {
		if (biggerThatNeighbors(anArray, i)) {
			exist = i;
			break;
		}
	}
	return exist;
}

/* Testing */

var arr = [1, 4, 7, 6, 6, 10, 2, 2, 2];

console.log(firstBiggerThatNeighbors(arr));