var _ = require('lodash');
var Backbone = require('backbone');
var L = require('leaflet');

var MapComponent = require('../components/map.js');
var SidebarComponent = require('../components/sidebar.js');

var HomeView = Backbone.View.extend({

	initialize: function() {
		this.map = new MapComponent('#map-container');
		this.sidebar = new SidebarComponent('#sidebar-container');
	},

	el: '#app',

	template: _.template(require('./templates/home.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
		this.map.render();
		this.sidebar.render();
	}
});

module.exports = HomeView;