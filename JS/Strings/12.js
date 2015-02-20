/*
	Write a function that creates a HTML UL using a template
for every HTML LI. The source of the list should an array
of elements. Replace all placeholders marked with –{…}–
with the value of the corresponding property of the object.
Example:

<div data-type="template" id="list-item">

<strong>-{name}-</strong> <span>-{age}-</span>

/div>

var people = [{name: "Peter", age: 14},…];

var tmpl = document.getElementById("list-item").innerHtml;

var peopleList = generateList(people,template);

//peopleList = "<ul><li><strong>Peter</strong> <span>14</
span></li><li>…</li>…</ul>"
 */

function generateList (people, template) {
	
	var result = "<ul>";
	for (var w in people) {
		var temp = "<li>" + template + "</li>";
		for (var data in people[w]) {
			var regex = new RegExp("-{" + data + "}-", "g");
			temp = temp.replace(regex, people[w][data]);
		}
		result += temp;
	}
	return result + "</ul>";
}





var people = [{name: "Peter", age: 14}, {name: "facundo", age: 20, lala: "6"}];

var template = document.getElementById("list-item").innerHTML;

var peopleList = generateList(people,template);

document.getElementById("list-item").innerHTML = peopleList;