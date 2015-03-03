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

	loginTemplate: Handlebars.compile('<div class="btn {{ size }} {{ type }}" id="btn-login" data-toggle="modal" data-target="#loginModal">{{ text }}</div>'),

	initialize: function () {
		//console.log($(this.container));
		this.el = $("#btn-login");
		this.render();
		this.listenTo(app.events, "login:logout", this.logout);
		this.listenTo(app.events, "login:login", this.login);
		this.listenTo(app.events, "login:loginenter", this.checkLogin);

	},

	render: function () {
		if (app.session) {
			this.showName();
			$(this.container).append('<div class="btn btn-sm btn-alert" id="btn-logout">Logout</div>');
		} else {
			$(this.container).append( this.loginTemplate( this.model.attributes));
		}
	},

	logout: function () {
		$("#user-name").fadeOut().remove();
		$(this.$el.selector).fadeIn();
	},

	login: function () {
		$(this.$el.selector).fadeOut();
	},

	checkLogin: function () {
		var user = $("#username").val();
		var pass = $("#pass").val();
		if (user) {
			if (pass) {
				var userr = app.Users.find(function(model) { return model.get('username') == user; });
				if (userr && (userr.get("pass") === pass)) {
					app.session = {id:userr.get("id"), name:userr.get("name")};
					localStorage.setItem("session", JSON.stringify(app.session));
					this.loginMsg("Login Like: " + user, "success", true, [$("username"), $("pass")]);
					this.login();
					this.showName();
				} else {
					this.loginMsg("UserName or Password incorrect", "danger");
				}
			} else {
				this.loginMsg("Pass Empty", "danger");
			}
		} else {
			this.loginMsg("User Empty", "danger");
		}
	},

	loginMsg: function (msg, type, correct, inputs) {
		if ($("#alert-login").length) {
			$("#alert-login").remove();
		}
			$("<div></div>")
			.addClass("alert alert-" + type)
			.html(msg)
			.attr("id", "alert-login")
			.hide()
			.prependTo(
				$("#login-modal-body"))
			.slideDown();
		
		if (correct) {
			setTimeout(function () { 
				_.map(inputs, function (elem) {
					elem.val("");
				});
				$("#loginModal").modal("hide");
				
			}, 1000);
		}
	},

	showName: function () {
		$("<small></small>").attr("id", "user-name").html("Hello " + app.session.name).hide().appendTo($(this.container)).fadeIn();
	}


});