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

	render: function(data) {
		this.el.innerHTML = this.template(data);

		this._map = new MapComponent(this._getMapData());
		this._map.render();

		this._sort = new SortComponent(this._sortData);
		this._sort.render();

		this._filter = new FilterComponent(this._filterData);
		this._filter.render();

		this._getSidebarData();
		this._sidebar = new SidebarComponent(this._sidebarData);
		this._sidebar.render();
	},

	_getMapData: function() {
		return _.map(this.collection.models, function(val) {
			var newVal = _.pick(val.attributes, ['lat', 'lng', 'bugs', 'rats', 'score', 'slime', 'status', 'id']);
			return newVal;
		});
	},

	_getSidebarData: function() {
		return {};
	}
});

module.exports = HomeView;