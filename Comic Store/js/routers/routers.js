var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		"": "home",
		"/": "home",
		"home(/)": "home",
		"news(/)": "news",
		"genres(/)": "genres",
		"editions(/)": "editions",
		"characters(/)": "characters",
		"user/:query": "profile"
	},

	home: function () {
		app.sidebarComicOptions.clear() // Terror
		this.navigate("./", {pushState: true});
		if (!app.homeView) {
			app.homeView = new app.HomeView();
		}
		app.homeView.render();
		console.log("home");
	},

	news: function () {
		app.sidebarComicOptions.clear() // Terror
		this.navigate("/news/", {pushState: true});
		if (!app.newsView) {
			app.newsView = new app.NewsView();
		}
		app.newsView.render();
	},

	genres: function () {
		app.sidebarComicOptions.clear() // Terror
		this.navigate("/genres/", {pushState: true});
		if (!app.genresView) {
			app.genresView = new app.GenresView();
		}
		app.genresView.render();
	},

	editions: function () {
		app.sidebarComicOptions.clear() // Terror
		this.navigate("/editions/", {pushState: true});
		if (!app.editionsView) {
			app.editionsView = new app.EditionsView();
		}
		app.editionsView.render();
	},

	characters: function () {
		app.sidebarComicOptions.clear() // Terror
		this.navigate("/characters/", {pushState: true});
		if (!app.characterView) {
			app.charactersView = new app.CharactersView();
		}
		app.charactersView.render(app.charactersView);
	},

	profile: function () {
		app.sidebarComicOptions.clear() // Terror
		if (app.session) {
			this.navigate("/user/" + app.session.id, {pushState: true});
			app.profileView = new app.ProfileView({model: app.Users.get(app.session.id)});
			app.profileView.render();
		}
	},

	admin: function () {
		app.sidebarComicOptions.clear() // Terror
		if (app.session) {
			if (!app.adminView) {
			app.adminView = new app.AdminView();
			}
			app.adminView.render();
		}
	},

	search: function () {
		app.sidebarComicOptions.clear();
		this.navigate("/search/", {pushState: true});
		if (!app.searchView) {
			app.searchView = new app.SearchView();
		}
		app.searchView.render();
	}
});