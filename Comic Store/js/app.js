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

app.killZombieView = function (view) {
	if (app.lastContentView) {
		console.log("la cierro");
		app.lastContentView.close();
	}
	app.lastContentView = view;
}

//Global Event handler
app.events = _.extend({}, Backbone.Events);

//Session Manager
app.session = JSON.parse(localStorage.getItem("session"));

//Collections
app.Users = new app.UserCollection();
app.Comics = new app.ComicCollection();
app.SampleComics = new app.SampleComicCollection();
app.SampleBorrowComics = app.SampleComics;

//Views
app.SlideComicsView = new app.SlideComicView();
app.loginView = new app.LoginView({model: new app.Button({text: "Login", type: "btn-info"})});
app.registerView = new app.RegisterView();
app.newsView = new app.NewsView();
app.homeView = new app.HomeView();
app.genresView = new app.GenresView();
app.editionsView = new app.EditionsView();
app.charactersView = new app.CharactersView();
app.adminView = new app.AdminView();
app.sidebarView = new app.SidebarView()
app.searchView = new app.SearchView()
app.genericComicsGridView = new app.GenericComicGridView({el: $("#popular-comics"), models: app.SampleComics, imageDots: "."});
app.sidebarComicOptions = new app.SidebarEspacialButtonsView({el: $("#sidebar-extra-options")});
new app.AdminButtonView();

//Routing
app.router = new app.Router();

Backbone.history.start({pushState: true, root: "/Comic%20Store/"});
app.router.home();


