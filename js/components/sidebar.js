var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar",

	template: _.template(require('./templates/sidebar.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
	},

	events: {
		"click #toggle-sidebar": "slideSidebar"
	},

	slideSidebar: function() {

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