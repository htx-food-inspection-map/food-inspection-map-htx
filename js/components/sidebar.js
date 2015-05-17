var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar",

	template: _.template(require('./templates/sidebar.html')),

	initialize: function() {
		this.showing = false;
		this.vendor = {}
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

	render: function(data) {
		if (!_.isEmpty(data)) {
			this.vendor = _.clone(data)
			this.showing = true;
		}
		if (_.isEmpty(this.vendor)) return;
		this.el.className = 'container ' + this.getProps().className;
		this.el.innerHTML = this.template({props: this.getProps(), vendor: this.vendor});
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
