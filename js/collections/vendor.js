var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');

var VendorModel = require('../models/vendor');

var VendorCollection = Backbone.Collection.extend({

	model: VendorModel,

	fetch: function() {
		var x = $.Deferred()
		setTimeout(function() {
			x.resolve(require('../../meta_w_flags.json'));
		}, 1000)
		return x;
	},

	parse: function(data) {
		console.log(data)
		return data;
	}
});

module.exports = VendorCollection;