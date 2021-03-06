var _ = require('lodash')
var Backbone = require('backbone')
var L = require('leaflet');

var hoverIconTemplate = _.template(require('./templates/hoverIcon.html'));
var grades = ['A','B','C','D','F'];

var MapComponent = Backbone.View.extend({

	el: "#map",

	initialize: function(data) {
		this._data = data;
		this._markers = {};

		this._map = L.map(this.el).setView([29.762778, -95.383056], 11);

		L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
			attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
			subdomains: '1234',
			mapID: 'newest',
			app_id: 'Y8m9dK2brESDPGJPdrvs',
			app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
			base: 'base',
			maxZoom: 20
		}).addTo(this._map);
	},

	triggerVendorEvent: function(vendorData) {
		var view = this;

		return function (mapEvent) {
			var active = view.el.querySelector('.active');
			if(active){
				active.classList.remove('active');				
			}

			this._icon.childNodes[0].classList.add('active');
			view.trigger('select:vendor', vendorData.id);
		}
	},

	render: function() {
		_.forEach(this._data.slice(0, 100), function(val) {

			var badgeData = _.pick(val, 'rats', 'bugs', 'slime');
			var grade = grades[val.score + 1];

			var hoverIcon = L.divIcon({className: 'div-marker', html: hoverIconTemplate({badges: badgeData, grade: grade, status: val.status, name: val.name})})

			var vendor = L.marker([val.lat, val.lng], {icon: hoverIcon}).addTo(this._map);

			vendor.on('click', this.triggerVendorEvent(val));
			this._markers[val.id] = vendor;
		}.bind(this))

	}
})

module.exports = MapComponent;