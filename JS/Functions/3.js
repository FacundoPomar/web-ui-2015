/*
	Write a function that finds all the occurrences of word in
a text

The search can case sensitive or case insensitive

Use function overloading
 */

function occurences(text, word, sensitive) {
	/*
		If sensitive it's not provided, the function will search
		with case-sensitive deactivated.
	*/
	var cant = 0; // number of occurrences

	if (!sensitive) {
		text = text.toLowerCase();
		word = word.toLowerCase();
	}

	text = text.split(" ");

	for (var i = 0; i < text.length; i++) {
		if (text[i] === word) {
			cant++
		}
	}

	return cant;

}

console.log(occurences("La casa sombria del lago, la casa lago hola", "Casa"))