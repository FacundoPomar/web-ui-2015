 /*
 	Hecho con Ana Müller
  */

 function __extractTags(tag, struct) {

 	if (struct.nodeName === "#text") {

 		if (struct.parentElement.nodeName.toLowerCase() == "upcase" ) 
 			struct.nodeValue = struct.nodeValue.toUpperCase();
 		else if (struct.parentElement.nodeName.toLowerCase() == "mixcase" ) {

 			var text = struct.nodeValue;
 			var mixtext = "";
 			for (var i=0; i<text.length;i++){
 				var random = Math.round(Math.random());
 				if (random) 
 					mixtext += text[i].toUpperCase();
 				else
 					mixtext += text[i].toLowerCase();
 			}
 			struct.nodeValue = mixtext;
 		}
 		else if (struct.parentElement.nodeName.toLowerCase() =="lowcase"){
 			struc.nodeValue = struct.nodeValue.toLowerCase();
 		}




 	//console.log("Found struc string: ", struct);
 } else {
                //nodeName it
                for (var i = 0; i < struct.childNodes.length; i++) {
                	__extractTags(tag, struct.childNodes[i]);
                }
                
            }
        }

function setStyleTags(block) {

	if (typeof(block) === "string") {
		var elements = document.getElementsByClassName(block);
		if (!elements) {
			elements = document.getElementsByTagName(block);
		}
		if (elements) {
			for (var i = 0; i < elements.length; i++) {
				__extractTags(elements[i].nodeName.toLowerCase(), elements[i]);
			}
        } else { //If the block element is not a class or tag, is an id
        	elements = document.getElementById(block);
        	__extractTags(elements.nodeName.toLowerCase(), elements);
        }
    }
}

setStyleTags("container");