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
		/*this.listenTo(this, "change", this.onChangeModel);
		this.listenTo(this, "add", this.onAddModel);
		this.listenTo(this, "remove", this.onRemoveModel);*/
		app.localLoad("users", this, app.User);
		this.save();
		
	},

	/*onAddModel: function () {
		app.localSave("users", this);
	},

	onChangeModel: function () {
		app.localSave("users", this);
	},

	onRemoveModel: function () {
		app.localSave("users", this);
	}*/

	save: function () {
		app.localSave("users", this);
	}




});

//app.Users = new app.UserCollection({local: false});
//app.Users.set('localStorage', new Backbone.LocalStorage('users-collection'))
//app.Comics = new app.ComicCollection({local: false});

//app.Comics.set('localStorage', new Backbone.LocalStorage('comics-collection'))


//app.Users.fetch();

//app.Comics.fetch();



