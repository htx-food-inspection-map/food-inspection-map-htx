var $ = require('jquery');
var Backbone = require('backbone');

var VendorModel = Backbone.Model.extend({

	initialize: function() {
		this._fetched = false;
	},

	parse: function(data) {
		for (var key in data) {
			if (data[key] === '0' || data[key] === '1') {
				data[key] = !!(+data[key]);
			}
		}

		return data;
	},

	_fetch: function() {
		return $.get('/accounts/' + this.get('id')).then(function(data) {
			this.set(data);
		}.bind(this));
	}
});

module.exports = VendorModel;