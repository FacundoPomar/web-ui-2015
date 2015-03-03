var app = app || {};

app.Comic = Backbone.Model.extend({
	defaults: {
		urlRoot: "/comic",
		id: "",
		name: "",
		description: "",
		release: "",
		img: ""
	}
});

app.User = Backbone.Model.extend({
	defaults: {
		id: "",
		username: "",
		name: "",
		pass: "",
	}
});