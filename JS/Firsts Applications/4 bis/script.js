/*
	Create a Web page displaying a
list of products. For each product,
when the mouse is hold over it
show a tooltip with additional info.
 */

function toolTip (text, element, event) {

	var tool = document.createElement("DIV");
	tool.setAttribute("class", "tool-tip");
	tool.textContent = text;
	tool.style["display"] = "block";
	tool.style["left"] = "20px";
	tool.style["top"] = event.clientY;
	tool.style["left"] = event.clientX + 20 + "px"; //Not perfect.. but
	element.parentNode.appendChild(tool);
}

function clearToolTip(element) {
	element.parentNode.removeChild(document.getElementsByClassName("tool-tip")[0]); //Mmmm... ugly way
}