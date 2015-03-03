var app = app || {};

(function () {
var session = JSON.parse(localStorage.getItem("session"));
if (session) {
	app.session = session;
}
})();

app.events = _.extend({}, Backbone.Events);


var vi = new app.LoginView({model: new app.Button({text: "login", type: "btn-info"})});


$("#login-enter").click (function () {
	app.events.trigger("login:loginenter");
});


var a = new app.Comic();
a.set("name", "El ataque de los simios");
new app.ComicView({model: a});

