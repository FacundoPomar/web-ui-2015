/*
Select all of the div elements that have a class
of "module".*/

$(".module")



/*Come up with three selectors that you could use to
get the third item in the #myList unordered list*/

$("#myList li:nth-child(3)")

//or

$("#myList li:eq(2)")

//or

$("#myList li:nth-of-type(3)")

/*
Select the label for the search input using an attribute
selector
 */

$("[for='q']")

/*
Count hidden elements on the page
(hint: .length)
 */

$("*:hidden").length //14

/*
Count the image elements that have an alt attribute
 */

$("img[alt]").length

/*
Select all of the odd table rows in the table body
 */

$("#fruits tbody tr:odd")

/*
	Select all of the image elements on the page

•

Log each image's alt attribute
 */

$("img").each (function () {
	console.log($(this).attr("alt"));
})

/*
•

Select the search input text box, then traverse up to
the form and add a class to the form.
 */

$("#search [name=q]").prependTo($("#search").addClass("lala")) //The mother of all optimizations (?)

/*
Select the list item inside #myList that has a class
of "current"

•

Remove that class from it

•

Add a class of "current" to the next list item
 */

$("#myList .current").removeClass("current").next().addClass("current")

/*
Select the select element inside #specials

•

Traverse your way to the submit button.
 */


HACER -- Preguntado

/*
Select the first list item in the #slideshow element

•

Add the class "current" to it, and then add a class
of "disabled" to its sibling elements
 */

$("#slideshow li:first-child").addClass("current").nextAll().addClass("disabled")


/*
	Add five new list items to the end of the unordered list
#myList
 */


for (var i = 0; i < 5; i++) {
	$("#myList").append($("<li></li>").text("Elem " + i));	
}

/*
Remove the odd list items
 */

$("#myList li:odd").remove();

/*
Add another h2 and another paragraph to the last
div.module
 */

$("div .module:last-of-type").append(
					$("<h2></h2>").text("Soy un Titulo H2"),
					$("<p></p>").text("Soy un párrafo párrafo párrafo párrafo párrafo párrafo párrafo párrafo")
					);

/*
	Add another option to the select element

•

Give the option the value "Wednesday"
 */


$("#specials select[name='day']").append(
										$("<option></option>").attr({value:'wednesday'}).text("wednesday")
	)

/*
	Add a new div.module to the page after the last one

•

Put a copy of one of the existing images inside of it
 */

 $("<div></div>").addClass("module").append( 
 	$("img").first().clone() 
 	).insertAfter($("div .module:last-of-type"));


