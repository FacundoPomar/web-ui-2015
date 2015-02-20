/*
	Write a JavaScript function that replaces in a HTML
document given as string all the tags

<a href="…">…</a> with corresponding tags

[URL=…]…/URL]. Sample HTML fragment:

<p>Please visit <a href="http://academy.telerik.
com">our site</a> to choose a training course. Also
visit <a href="www.devbg.org">our forum</a> to
discuss the courses.</p>

<p>Please visit [URL=http://academy.telerik. com]
our site[/URL] to choose a training course. Also
visit [URL=www.devbg.org]our forum[/URL] to discuss
the courses.</p>
 */

function remplaceA(str) {

	var reg = /<a href="([^"]+)">([\s\S]*?)<\/a>/g; //ANDA MEDIO MEDIO
	//El reg no es muy flexible, si hay algún espacio de más entre a y href, deja de andar.
	return str.replace(reg, '[URL=$1]$2[/URL]');
}

var a = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

console.log(remplaceA(a));