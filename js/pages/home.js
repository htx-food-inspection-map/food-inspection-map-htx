var _ = require('lodash');
var Backbone = require('backbone');
var L = require('leaflet')

var HomeView = Backbone.View.extend({

	el: '#app',

	template: _.template(require('./templates/home.html')),

	render: function(data) {
		var map = L.map(this.el).setView([51.505, -0.09], 13);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	}
});

module.exports = HomeView;