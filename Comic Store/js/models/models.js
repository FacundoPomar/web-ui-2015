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
		urlRoot: "/user",
		id: "",
		username: "",
		name: "",
		pass: ""
	}
});

app.Button = Backbone.Model.extend({

	defaults: {
		text: "aButton",
		type: "btn-info",
		size: "btn-sm"
	}
});