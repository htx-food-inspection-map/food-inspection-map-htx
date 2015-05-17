var $ = require('jquery');
var Backbone = require('backbone');

var VendorModel = Backbone.Model.extend({

	parse: function(data) {
		for (var key in data) {
			if (data[key] === '0' || data[key] === '1') {
				data[key] = !!(+data[key]);
			}
		}

		return data;
	},

	_fetch: function(id) {
		$.get('/accounts/' + id).then(function(data) {
			console.log(data)
		})
	}
});

module.exports = VendorModel;