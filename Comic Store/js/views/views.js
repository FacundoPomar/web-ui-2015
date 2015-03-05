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

	el: $("#login-box"),
	//Use external templates ?
	logoutBtnTemplate: Handlebars.compile('<div class="btn {{ size }} {{ type }}" id="btn-logout">Logout</div>'),
	
	loginBtnTemplate: Handlebars.compile('<div class="btn {{ size }} {{ type }}" id="btn-login" data-toggle="modal" data-target="#loginModal">{{ text }}</div>'),
	
	nameTemplate: Handlebars.compile('<small id="user-name">Hello {{ name }} !</small>'),

	events: {
		"click #btn-logout": "logout",
		"click #login-enter": "login"
	},

	initialize: function () {

		this.$el.append( $(this.logoutBtnTemplate( this.model.attributes)).hide());
		this.$el.append( $(this.loginBtnTemplate( this.model.attributes)).hide());
		this.$el.append( $("#modal-template").html());
		
		if (app.session) {
			$("#btn-logout").fadeIn();
			this.$el.append( $(this.nameTemplate( {name: app.session.name})));
		} else {
			this.$el.append( $(this.nameTemplate( {name: ""})).hide());
			$("#btn-login").fadeIn();
		}
	},

	logout: function () {
		if (app.session) {
			app.session = undefined;
			localStorage.removeItem("session");
			$("#btn-logout").hide();
			$("#btn-login").fadeIn();
			$("#user-name").fadeOut();
		}
	},

	login: function () {
		if (!app.session) {
			var user = $("#username").val();
			var pass = $("#pass").val();
			if (user) {
				if (pass) {
					var userr = app.Users.find(function(model) { return model.get('username') == user; });
					if (userr && (userr.get("pass") === pass)) {
						app.session = {id:userr.get("id"), name:userr.get("name")};
						localStorage.setItem("session", JSON.stringify(app.session));
						
						$("#btn-login").fadeOut();
						$("#btn-logout").fadeIn();
						$("#user-name").html( this.nameTemplate({name: app.session.name})).fadeIn();
						$("#loginModal").modal("hide");
						this.emptyForm();
					} else {
						this.loginMsg("UserName or Password incorrect", "danger");
					}
				} else {
					this.loginMsg("Pass Empty", "danger");
				}
			} else {
				this.loginMsg("User Empty", "danger");
			}
		}
		
	},

	loginMsg: function (msg, type) {
		if ($("#alert-login").length) {
			$("#alert-login").remove();
		}
		$("<div></div>")
		.addClass("alert alert-" + type)
		.html(msg)
		.attr("id", "alert-login")
		.hide()
		.prependTo($("#login-modal-body"))
		.slideDown();
	},

	emptyForm: function () {
		$("#alert-login").remove();
		$("#username").val("");
		$("#pass").val("")
	}
});