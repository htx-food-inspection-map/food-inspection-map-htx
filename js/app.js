'use strict'

var HomeView = require('./pages/home.js');
var VendorCollection = require('./collections/vendor.js');

window.onload = app;

function app() {
	var vendors = new VendorCollection();
	var home = new HomeView({collection: vendors});

	home.collection.fetch().then(function() {
		home.render();
	});
}