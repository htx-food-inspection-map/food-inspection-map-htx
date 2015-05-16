var Backbone = require('backbone');
var HomeView = require('./pages/home.js');

var Router = Backbone.Router.extend({

	initialize: function() {
		this.home = new HomeView();
		Backbone.history.start()
	},

	routes: {
		'': 'home'
	},

	home: function() {
		this.home.render();
	}
});

module.exports = Router;