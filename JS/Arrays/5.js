/*
	Sorting an array means to arrange its elements in
	increasing order. Write a script to sort an array. Use
	the "selection sort" algorithm: Find the smallest element,
	move it at the first position, find the smallest from the rest,
	move it at the second position, etc.
	Hint: Use a second array
 */

var arr = [2, 5, 8, 3, 2, 6, 34, 23, 66]; //Main array
var result = []; //auxiliar array
var min;

while (arr.length) {
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] < min) || (min === undefined)) {
			min = arr[i];
		}
	}
	arr.splice(arr.indexOf(min), 1); //Deleteing the element of arr
	result.push(min);
	min = undefined;
}
arr = result;
console.log(arr);
