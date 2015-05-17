var _ = require('lodash')
var Backbone = require('backbone')
var L = require('leaflet');
L.Icon.Default.imagePath = 'img/leaflet'

var MapComponent = Backbone.View.extend({

	el: "#map",

	render: function() {
		if(!this.map) this.map = L.map(document.querySelector('#map')).setView([29.762778, -95.383056], 13);

		L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
			attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
			subdomains: '1234',
			mapID: 'newest',
			app_id: 'Y8m9dK2brESDPGJPdrvs',
			app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
			base: 'base',
			maxZoom: 20
		}).addTo(this.map);
	}
})

module.exports = MapComponent;