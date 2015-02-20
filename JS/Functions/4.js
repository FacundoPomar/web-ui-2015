/*
	Write a function to count the number of divs on the web
page
 */

function countTag(tag) {
	return document.getElementsByTagName(tag).length;
};

console.log(countTag("div"));

