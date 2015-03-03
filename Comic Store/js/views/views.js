var app = app || {};

app.ComicView = Backbone.View.extend({

	el: ".jumbotron h1",

	oneTemplate: Handlebars.compile("{{ name }}"),

	initialize: function () {
		this.listenTo(this.model, "change", this.render)
		this.render();
	},

	render: function () {
		this.$el.html( this.oneTemplate( this.model.attributes));
		return this;
	}

});

app.LoginView = Backbone.View.extend({

	el: "#btn-login",
	container: "#page-title",

	template: Handlebars.compile('<div class="btn {{ size }} {{ type }}" id="btn-login" data-toggle="modal" data-target="#loginModal">{{ text }}</div>'),

	initialize: function () {
		//console.log($(this.container));
		this.el = $("#btn-login");
		this.render();
		this.listenTo(app.events, "login:logout", this.logout);
		this.listenTo(app.events, "login:login", this.login);

	},

	events: {
		"click #btn-login": "openModal"
	},

	render: function () {
		$(this.container).append( this.template( this.model.attributes))
	},

	logout: function () {
		$(this.$el.selector).fadeIn();
	},

	login: function () {
		$(this.$el.selector).fadeOut();
	},

	openModal: function () {
		console.log("open modal");
	}


});