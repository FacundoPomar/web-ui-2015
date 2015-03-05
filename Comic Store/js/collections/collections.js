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
	lasId: "",

	initialize: function () {
		this.lastId = 0;
		this.fetch();
		app.localLoad("users", this, app.User);
		this.save();
		
	},

	save: function () {
		app.localSave("users", this);
	}




});



