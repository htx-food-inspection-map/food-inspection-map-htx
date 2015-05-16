var _ = require('lodash');
var Backbone = require('backbone');
var L = require('leaflet');

var MapComponent = require('../components/map.js');
var SidebarComponent = require('../components/sidebar.js');

var HomeView = Backbone.View.extend({

	el: '#app',

	template: _.template(require('./templates/home.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
		this.map = new MapComponent('#map-container');
		this.map.render();
		this.sidebar = new SidebarComponent();
		this.sidebar.render();
	}
});

module.exports = HomeView;