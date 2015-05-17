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

		this._sort = new SortComponent(this._sortData);
		this._sort.render();

		this._filter = new FilterComponent(this._filterData);
		this._filter.render();

		this._sidebar = new SidebarComponent();
		this._sidebar.render();


		// Events
		this.listenTo(this._map, 'select:vendor', this._showVendor);
	},

	_showVendor: function(vendorId) {
		var activeVendor = _.findWhere(this.collection.models, {id: vendorId})
		if (!activeVendor._fetched) activeVendor._fetch(vendorId).then(function() {
			activeVendor._fetched = true;
			console.log(activeVendor.attributes)
			this._sidebar.render(activeVendor.attributes);
		}.bind(this))
		else this._sidebar.render(activeVendor.attributes);
	},

	_getMapData: function() {
		return _.map(this.collection.models, function(val) {
			var newVal = _.pick(val.attributes, ['lat', 'lng', 'bugs', 'rats', 'score', 'slime', 'status', 'id']);
			return newVal;
		});
	},
});

module.exports = HomeView;