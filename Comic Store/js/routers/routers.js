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
		this.navigate("./", {pushState: true});
		app.homeView.render();
	},

	news: function () {
		this.navigate("/news/", {pushState: true});
		app.newsView.render();
	},

	genres: function () {
		this.navigate("/genres/", {pushState: true});
		app.genresView.render();
	},

	editions: function () {
		this.navigate("/editions/", {pushState: true});
		app.editionsView.render();
	},

	characters: function () {
		this.navigate("/characters/", {pushState: true});
		app.charactersView.render();
	},

	profile: function (query) {
		this.navigate("/user/" + query, {pushState: true});
		app.userView = new app.UserProfileView();
		app.userView.render(query);
	}
});