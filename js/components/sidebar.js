var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar",

	template: _.template(require('./templates/sidebar.html')),

	initialize: function() {
		this.showing = false;
		this.vendor = {};
	},

	getProps: function() {
		var props;

		if(this.showing){
			props = {
				className: 'open-sidebar',
				label: 'Hide'
			};
		} else {
			props = {
				className: 'close-sidebar',
				label: 'Show'
			};
		}

		return props;
	},

	update: function(data) {
		if(!_.isEmpty(data)){
			this.showing = true;
			this.vendor = _.clone(data);
		}
	},

	render: function(data) {
		this.update(data);
		this.el.innerHTML = this.template({props: this.getProps(), vendor: this.vendor});

		this.el.className = 'container ' + this.getProps().className;
	},

	events: {
		"click #toggle-sidebar": "slideSidebar"
	},

	slideSidebar: function() {

		this.showing = !this.showing;

		this.render();

	}

});

module.exports = SidebarComponent;