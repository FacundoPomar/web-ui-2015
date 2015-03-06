var app = app || {};

app.localSave = function (key, col) {
	localStorage.setItem(key, JSON.stringify(col.toJSON()));
}
app.localLoad = function (key, col) {
	var data = localStorage.getItem(key);
	if (data) {
		data = JSON.parse(data);
		//Use map function....
		for (var i = 0; i < data.length; i++) {
			col.create(data[i]);
		}
	}
}

app.events = _.extend({}, Backbone.Events);
app.session = JSON.parse(localStorage.getItem("session"));

app.Users = new app.UserCollection();
app.Comics = new app.ComicCollection();

console.log("cargue la pagina");


app.loginView = new app.LoginView({model: new app.Button({text: "login", type: "btn-info"})});
app.registerView = new app.RegisterView();

app.SlideComics = new app.SlideComicCollection(); //PUt together in function like app.slideStart()
app.SlideComicsView = new app.SlideComicView();

app.newsView = new app.NewsView();
app.gamesView = new app.GamesView();
app.homeView = new app.HomeView();


app.router = new app.Router();

Backbone.history.start({pushState: true, root: "/Comic%20Store/"})
