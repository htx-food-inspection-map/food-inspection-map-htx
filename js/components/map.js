var _ = require('lodash')
var Backbone = require('backbone')
var L = require('leaflet');

L.Icon.Default.imagePath = 'img/leaflet'

var MapComponent = Backbone.View.extend({

	el: "#map",

	initialize: function(data) {
		this._map = L.map(this.el).setView([29.762778, -95.383056], 11);
		this._data = data;
	},

	render: function() {
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this._map);

		// algorithm for paring down

		// L.Marker([this._data[0].lat, this._data[1].lng]).addTo(this._map)

		_.forEach(this._data.slice(0, 100), function(val) {
			L.marker([val.lat, val.lng]).addTo(this._map)
		}.bind(this))
	}
})

module.exports = MapComponent;