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
		this.collection.fetch()
		this.mapData = this._getMapData()
		this.sidebarData = this._getSidebarData()
	},

	render: function(data) {
		this.el.innerHTML = this.template(data);

		this.map = new MapComponent(this.mapData);
		this.map.render();

		this.sortBox = new SortComponent(this.sortData);
		this.sortBox.render();

		this.filterBox = new FilterComponent(this.filterData);
		this.filterBox.render();

		this.sidebar = new SidebarComponent(this.sidebarData);
		this.sidebar.render();
	},

	handleFilter: function() {
		// change collection

		this.map.render();
	},

	_getMapData: function() {
		console.log(this.collection);
		return {};
	},

	_getSidebarData: function() {
		return {};
	}
});

module.exports = HomeView;