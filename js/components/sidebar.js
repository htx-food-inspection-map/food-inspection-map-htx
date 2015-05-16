var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	initialize: function(elSelector) {
		this.elSelector = elSelector;
	},

	template: _.template(require('./templates/sidebar.html')),

	render: function(data) {
		document.querySelector(this.elSelector).innerHTML = this.template(data);
	}

});

module.exports = SidebarComponent;