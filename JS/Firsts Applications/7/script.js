/*
	Implement a drop-down menu in JavaScript

•

Use list for the main menu blocks

•

Use hidden <div> elements (display:none;
position:absolute; top:30px)

•

Use JavaScript and onmouseover and onmouseout
event to change display: none/block
 */

function hasClass(e,c){
    return e&&(e instanceof HTMLElement)&&!!((' '+e.className+' ').indexOf(' '+c+' ')+1);
}

function toggleMenu (element, display) {

	var childs = element.childNodes;
	for (var i = 0; i < childs.length; i++) {
		if (hasClass(childs[i], "dropdown-menu")) {
			childs[i].style["display"] = display;
		}
	}
}