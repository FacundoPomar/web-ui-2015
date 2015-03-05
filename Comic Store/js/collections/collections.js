var app = app || {};

app.ComicCollection = Backbone.Collection.extend({
	model: app.Comic,
	url: './json/comics.json',

	initialize: function () {
		this.fetch({
			success: function () {
				app.events.trigger("comics:onFetch");
			}
		});
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

app.SlideComicCollection = Backbone.Collection.extend({
	
	model: app.Comic,
	cantSamples: 9,
	
	initialize: function () {
		this.listenTo(app.events, "comics:onFetch", this.populate);
	},
	
	populate: function () {
		for (var i = 0; i < this.cantSamples; i++) {
			var comic = app.Comics.sample();
			if ( !this.get( comic.get("id"))) {
				this.add(comic);
			}
		}
		app.events.trigger("comics:onPopulate");
	}
});

