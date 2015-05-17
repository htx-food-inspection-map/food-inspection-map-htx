var _ = require('lodash')
var Backbone = require('backbone')
var L = require('leaflet');

var hoverIconHtml = require('./hoverIcons')
var hoverIcon = L.divIcon({className: 'div-marker', html: hoverIconHtml})

var MapComponent = Backbone.View.extend({

	el: "#map",

	initialize: function(data) {
		this._map = L.map(this.el).setView([29.762778, -95.383056], 11);
		this._data = data;
	},

	triggerVendorEvent: function(vendorData) {
		var view = this;

		return function (mapEvent) {
			view.trigger('select:vender', vendorData.id);
		}
	},

	render: function() {
		L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
			attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
			subdomains: '1234',
			mapID: 'newest',
			app_id: 'Y8m9dK2brESDPGJPdrvs',
			app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
			base: 'base',
			maxZoom: 20
		}).addTo(this._map);

		// algorithm for paring down

		_.forEach(this._data.slice(0, 100), function(val) {
			var vendor = L.marker([val.lat, val.lng]).addTo(this._map);
			vendor.on('click', this.triggerVendorEvent(val));
		}.bind(this))

	},

	_hoverDetail: function(e) {

	}
})

module.exports = MapComponent;