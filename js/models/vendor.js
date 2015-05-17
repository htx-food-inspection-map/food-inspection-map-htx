var Backbone = require('backbone');

var VendorModel = Backbone.Model.extend({

	parse: function(data) {
		console.log(data)
		for (var key in data) {
			if (data[key] === "0" || data[key] === "1") {
				data[key] = +data[key];
			}
		}
	}
});

module.exports = VendorModel;