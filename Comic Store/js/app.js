var app = app || {};


app.events = _.extend({}, Backbone.Events);
app.session = JSON.parse(localStorage.getItem("session"));

var vi = new app.LoginView({model: new app.Button({text: "login", type: "btn-info"})});




var a = new app.Comic();
a.set("name", "El ataque de los simios");
new app.ComicView({model: a});


$("#login-enter").click (function () {
	app.events.trigger("login:loginenter");
});

$("#btn-logout").click (function () {
	console.log("click");
	app.events.trigger("login:logout");
});

