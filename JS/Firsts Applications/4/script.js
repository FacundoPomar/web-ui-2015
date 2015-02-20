var container = document.getElementById("wrapper");

var colors = ["#f1c40f", "#e74c3c", "#2c3e50", "#2ecc71", "#34495e", "#d35400", "#7f8c8d", "#ecf0f1", "#2c3e50", "#c0392b", "#8e44ad"]

for (var i = 0; i < 20; i++) {
	var temp = document.createElement("DIV");
	temp.style["position"] = "absolute";
	temp.style["top"] = Math.floor(Math.random()*60) + "%";
	temp.style["left"] = Math.floor(Math.random()*60) + "%";
	temp.style["width"] = Math.floor(Math.random()*40) + "%";
	temp.style["height"] = Math.floor(Math.random()*40) + "%";
	temp.style["border-radius"] = Math.floor(Math.random()*100) + "%";
	temp.style["background"] = colors[Math.floor(Math.random()*10)];
	temp.style["-webkit-box-shadow"] = Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + colors[Math.floor(Math.random()*10)];
	temp.style["-moz-box-shadow"] = Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + colors[Math.floor(Math.random()*10)];
	temp.style["box-shadow"] = Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + Math.floor(Math.random()*10) + "px " + colors[Math.floor(Math.random()*10)];

	container.appendChild(temp);
}