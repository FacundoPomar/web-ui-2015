function scrollContent(element, velocity, parentHeight) {

	/*
		Having a height of 200px in the modal , the scrool will need to restart at offSetTop == offsetHeight - parentHeight. I think so...
		*/
		
		setInterval(function() {
			if ((element.offsetTop*-1 + parentHeight) >= element.offsetHeight) {
				element.style["top"] = 0;
			} else {
				element.style["top"] = element.offsetTop - velocity + "px";
			}
		}, 200);
	}

	var element = document.getElementById("modal-container");

	scrollContent(element, 5, element.parentNode.parentNode.offsetHeight);