var $ = require('jquery');
var Backbone = require('backbone');

var VendorModel = require('../models/vendor');

var VendorCollection = Backbone.Collection.extend({

	model: VendorModel,

	url: './meta.json',

	_fetch: function() {
		// get additional data
	}
});

module.exports = VendorCollection;