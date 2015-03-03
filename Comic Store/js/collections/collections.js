var app = app || {};

var ComicCollection = Backbone.Collection.extend({
	model: app.Comic,
	url: './json/comics.json'

    //localStorage: new Backbone.LocalStorage('comics-collection')
});

var UserCollection = Backbone.Collection.extend({

	model: app.User,
	url: "./json/users.json"

});

app.Users = new UserCollection();
app.Comics = new ComicCollection();
app.Comics.set('localStorage', new Backbone.LocalStorage('comics-collection'))

app.Users.fetch();

app.Comics.fetch();



