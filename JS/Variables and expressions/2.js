var a = 50;
/*Write a boolean expression that checks for given
integer if it can be divided (without remainder) by 7
and 5 in the same time.*/
if ((!(a%5)) && (!(a%7))) {
	console.log("This number can by divided by 5 and 7 whitout remainder");
} else {
	console.log("Can't by divided without remainder by 5 and 7");
}