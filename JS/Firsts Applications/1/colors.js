/*
	Create an HTML page containing a table. Write a script to color the table wors in alternating colors.
 */


function alternateColors(id) {

	var trs = document.getElementById(id).getElementsByTagName("tr");
	var colors = ["#F7F7F7", "#E3F0F8"]
	for (var i = 1; i < trs.length; i++) {
		trs[i].style["background"] = colors[i%2];
	}

}

tableWithColor("magic-table");