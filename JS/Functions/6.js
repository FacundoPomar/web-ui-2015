/*
	Write a function that checks if the element at given
position in given array of integers is bigger than its two
neighbors (when such exist).
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

/*var arr = [1, 3, 5, 6, 3, 7, 2, 5, 7, 2, 8];

//Testing

for (var i = 0; i < arr.length + 1; i++) {
	console.log(i);
	console.log(biggerThatNeighbors(arr, i));
}*/