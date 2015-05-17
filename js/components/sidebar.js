var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar-container",

	template: _.template(require('./templates/sidebar.html')),

	initialize: function() {
		this.showing = true;
	},

	render: function(data) {
		this.el.innerHTML = this.template(data);
	},

	events: {
		"click #toggle-sidebar": "toggleSidebar"
	},

	toggleSidebar: function() {

		this.showing = !this.showing;

		if(this.showing){
			this.$el.find("#sidebar").css("right", 0)
			this.$el.find("#toggle-sidebar").html("HIDE")
		}
		else{
			this.$el.find("#sidebar").css("right", -400)
			this.$el.find("#toggle-sidebar").html("SHOW")
		}
	}

});

module.exports = SidebarComponent;