function allText() {
	return document.getElementsByTagName("html")[0].textContent.replace(/\s+/g, ' ');
}

console.log(allText());