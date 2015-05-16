var _ = require('lodash');
var Backbone = require('backbone');
var leaflet = require('leaflet');

var SortComponent = require('./sort');
var FilterComponent = require('./filter')

var MapComponent = Backbone.View.extend({

	el: '#map-container',

	template: _.template(require('./templates/map.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
		this.sort = new SortComponent();
		this.sort.render();
		this.filter = new FilterComponent();
		this.filter.render();

		var map = L.map(document.querySelector('#map')).setView([51.505, -0.09], 13);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	}
});

module.exports = MapComponent;