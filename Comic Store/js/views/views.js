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

	//Global Container <div id="login-box"></div>

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
			app.events.trigger("login:logout");
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
						//Trigger login event for RevisterView
						app.events.trigger("login:login");
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


app.RegisterView = Backbone.View.extend({

	el: $("#register-box"),

	button: '<div class="btn btn-sm btn-success" id="btn-register" data-toggle="modal" data-target="#registerModal">Register</div>',

	events: {
		"click #register-enter": "register"
	},

	initialize: function () {
		this.listenTo(app.events, "login:login", this.onLogin);
		this.listenTo(app.events, "login:logout", this.onLogout);
		this.render();
	},

	render: function () {
		this.$el.append($(this.button).hide());
		this.$el.append($("#registerModalTemplate").html());
		if (!app.session) {
			this.show();
		}
	},

	show: function () {
		$("#btn-register").fadeIn();
	},

	hide: function () {
		$("#btn-register").fadeOut();	
	},

	onLogin: function () {
		this.hide();
	},

	onLogout: function () {
		this.show();
	},

	register: function (){
		var data = {
			user: $("#reg-username").val(),
			name: $("#reg-name").val(),
			pass: $("#reg-pass").val(),
			repass: $("#reg-repass").val()
			
		}
		if (this.validate(data)) {
			app.Users.create({id: data.user, username: data.user, pass: data.pass, name: data.name});
			app.Users.save();
			this.clearForm();
			$("#registerModal").modal("hide");
		}
	},

	validate: function (data) {
		for (var prop in data) {
			if (!data[prop]) {
				this.errorMsg(prop + " field empty");
				return false;
			}
		}
		if (data.pass !== data.repass) {
			this.errorMsg("passwords don't match")
			return false;
		}
		var exist = app.Users.find(function(model) { return model.get('username') == data.user; });
		if (exist) {
			this.errorMsg("the user already exist - try again")
			return false;
		} else {
			return true;
		}

	},

	errorMsg: function (msg) {
		if ($("#alert-reg").length) {
			$("#alert-reg").remove();
		}
		$("<div></div>")
		.addClass("alert alert-danger")
		.html(msg)
		.attr("id", "alert-reg")
		.hide()
		.prependTo($("#register-modal-body"))
		.slideDown();
	},

	clearForm: function () {
		$("#alert-reg").remove();
		$("#reg-username").val(""),
		$("#reg-name").val(""),
		$("#reg-pass").val(""),
		$("#reg-repass").val("")
	}

});

app.SlideComicModelView = Backbone.View.extend({


	slideClass: "slider",
	template: Handlebars.compile('<img src="{{ img }}" alt="{{ name }}" title="{{ name }}" />'),

	events: {
		"click": "onClickk" //Open comic at click
	},

	render: function () {
		this.$el.html(this.template( this.model.attributes)).addClass(this.slideClass);
		return this;
	},

	onClickk: function () {
		console.log("He touch me !")
	}
});

app.SlideComicView = Backbone.View.extend({

	//Global Container <div class="slide-box"></div>

	el: $(".slide-box"),

	initialize: function () {
		this.listenTo(app.events, "comics:onPopulate", this.addAll);
		this.render();
	},

	render: function () {
		if (app.SlideComics.length) {
			this.addAll();
		}
		
		return this;
	},

	startSlide: function () {
		$('.slide-box').bxSlider({
			slideWidth: 150,
			minSlides: 2,
			maxSlides: 5,
			randomStart: true,
			infiniteLoop: true,
			slideMargin: 20,
			speed: 1500,
			auto: true,
			autoStart: true,
			autoHover: true,
			moveSlides: 2
		});
	},

	addOne: function( comic ) {
		var view = new app.SlideComicModelView({ model: comic });
		this.$el.append( view.render().el );
	},

	addAll: function() {
		this.$el.html('');
		app.SlideComics.each(function (comic) {app.SlideComicsView.addOne(comic)});
		this.startSlide();
	}
});

app.NewsView = Backbone.View.extend({

	el: $("#content"),

	render: function () {
		this.$el.html("Hola, soy una noticia");
		return this;
	}
});

app.GamesView = Backbone.View.extend({

	el: $("#content"),

	render: function () {
		this.$el.html("Hola, soy un juego");
		return this;
	}
});

app.HomeView = Backbone.View.extend({

	el: $("#content"),

	render: function () {
		this.$el.html("Hola, soy home");
		return this;
	}
});