/*
	Write a function for extracting all email addresses
from given text. All substrings that match the format
<identifier>@<host>…<domain> should be recognized
as emails. Return the emails as array of strings.
 */

function getEmails(str) {

	var reg = /\b([^\s]+@[^\s]+)\b/g;
	return str.match(reg)

}

var text = "hola hola lala@ds.com alsa chuchu@sadsad.net";
console.log(getEmails(text));