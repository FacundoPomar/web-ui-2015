/*
	Write a script that parses an URL address given in the
format:

[protocol]://[server]/[resource]

and extracts from it the [protocol], [server] and
[resource] elements. Return the elements in a JSON
object.
For example from the URL http://www.devbg.org/
forum/index.php the following information should be
extracted:

{protocol: "http",
server: "www.devbg.org",

resource: "/forum/index.php"}


 */

function jsonUrl(url) {
	/*
		This function don't work on a incorrect url format.
	 */
	var json = {protocol: "", server: "", resource: ""};

	url = url.split("://");
	
	json.protocol = url[0];

	url = url[1].split("/");

	json.server =  url[0];

	//Split() errase the /, so it's necesary add / in the join and at the beginning of the string
	json.resource = "/" + url.slice(1, url.length).join("/");

	return json;
}

console.log(jsonUrl("http://www.google.com/tu/vieja/lala.php?id='chuchu'"));