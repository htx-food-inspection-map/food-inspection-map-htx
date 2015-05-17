var _ = require('lodash');
var Backbone = require('backbone');
var L = require('leaflet');

var SidebarComponent = require('../components/sidebar.js');
var SortComponent = require('../components/sort');
var FilterComponent = require('../components/filter');
var MapComponent = require('../components/map');

var HomeView = Backbone.View.extend({

	el: '#app',

	template: _.template(require('./templates/home.html')),

	initialize: function() {
		this._activeVendorId = false;
	},

	render: function(data) {
		this.el.innerHTML = this.template(data);

		this._map = new MapComponent(this._getMapData());
		this._map.render();

		this._sidebar = new SidebarComponent();
		this._sidebar.render();


		// Events
		this.listenTo(this._map, 'select:vendor', this._showVendor);
	},

	_showVendor: function(vendorId) {
		var activeVendor = _.findWhere(this.collection.models, {id: vendorId})
		if (!activeVendor._fetched) activeVendor._fetch(vendorId).then(function() {
			activeVendor.set('_fetched', true);
			this._sidebar.render(activeVendor.attributes);
		}.bind(this))
		else this._sidebar.render(activeVendor.attributes);
	},

	_getMapData: function(data) {
		if (!data) data = this.collection.models;
		return _.map(data, function(val) {
			var newVal = _.pick(val.attributes, ['lat', 'lng', 'bugs', 'rats', 'score', 'slime', 'status', 'id', 'name']);
			return newVal;
		});
	},
});

module.exports = HomeView;