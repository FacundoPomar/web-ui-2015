var app = app || {};

var ComicCollection = Backbone.Collection.extend({
	model: app.Comic,

	localStorage: new Backbone.LocalStorage('comics-collection')

});

app.Comics = new ComicCollection();