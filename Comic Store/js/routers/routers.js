var app = app || {};

app.Router = Backbone.Router.extend({
	
	routes: {
		"": "home",
		"(/)": "home",
		"home(/)": "home",
		"news(/)": "news",
		"games(/)": "games"
	},

	home: function () {
		this.navigate("/home/", {pushState: true});
		app.homeView.render();
	},

	news: function () {
		this.navigate("/news/", {pushState: true});
		app.newsView.render();
	},

	games: function () {
		this.navigate("/games/", {pushState: true});
		app.gamesView.render();
	}
});