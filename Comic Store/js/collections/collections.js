var app = app || {};

app.ComicCollection = Backbone.Collection.extend({
	model: app.Comic,
	url: './json/comics.json',

	initialize: function () {
		this.fetch();
	}

});

app.UserCollection = Backbone.Collection.extend({

	model: app.User,
	url: "./json/users.json",

	initialize: function () {
		this.fetch({
			success: function () {
				app.localLoad("users", app.Users);
				app.Users.save();
			}

		});
	},

	save: function () {
		app.localSave("users", this);
	}

});



