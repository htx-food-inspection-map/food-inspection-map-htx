var Backbone = require('backbone');

var Router = Backbone.Router.extend({

	initialize: function() {
		Backbone.history.start();
	},

	routes: {
		'*path': 'home'
	},

});

module.exports = Router;