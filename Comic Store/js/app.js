var app = app || {};

app.events = _.extend({}, Backbone.Events);


new app.LoginView({model: new app.Button({text: "login", type: "btn-info"})});

app.Users.fetch();

app.Comics.fetch();


var a = new app.Comic();
a.set("name", "El ataque de los simios");
new app.ComicView({model: a});