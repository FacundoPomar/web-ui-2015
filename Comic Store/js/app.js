var app = app || {};

app.localSave = function (key, col) {
	console.log("va a guardar", JSON.stringify(col.toJSON()));
	localStorage.setItem(key, JSON.stringify(col.toJSON()));
}
app.localLoad = function (key, col, constructor) {
	var data = localStorage.getItem(key);
	if (data) {
		//console.log(data)
		data = JSON.parse(data);
		//Use map function....
		for (var i = 0; i < data.length; i++) {
			col.add(new constructor(data[i]));
		}
	}
}

app.Users = new app.UserCollection();
app.Comics = new app.ComicCollection();

app.events = _.extend({}, Backbone.Events);
app.session = JSON.parse(localStorage.getItem("session"));

new app.LoginView({model: new app.Button({text: "login", type: "btn-info"})});


var a = new app.Comic();
a.set("name", "El ataque de los simios");
new app.ComicView({model: a});
