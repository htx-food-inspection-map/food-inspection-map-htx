var Backbone = require('backbone');

var HomeView = require('./pages/home.js');
var VendorCollection = require('./collections/vendor.js');

var Router = Backbone.Router.extend({

	initialize: function() {
		this.vendors = new VendorCollection();
		this.home = new HomeView({collection: this.vendors})
		Backbone.history.start();
	},

	routes: {
		'*path': 'home'
	},

	home: function() {
		this.vendors.fetch().then(this.home.render.bind(this.home));
	}
});

module.exports = Router;