var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar",

	template: _.template(require('./templates/sidebar.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
	},

	events: {
		"click #button": "slideSidebar"
	},

	handleClick: function() {
		//animation here
	}

});

module.exports = SidebarComponent;