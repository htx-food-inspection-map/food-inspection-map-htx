var _ = require('lodash')
var Backbone = require('backbone')
var L = require('leaflet');
L.Icon.Default.imagePath = 'img/leaflet'

var MapComponent = Backbone.View.extend({

	el: "#map",

	render: function() {
		if(!this.map) this.map = L.map(document.querySelector('#map')).setView([29.762778, -95.383056], 11);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);
	}
})

module.exports = MapComponent;