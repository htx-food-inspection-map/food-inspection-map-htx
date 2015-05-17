var _ = require('lodash');
var Backbone = require('backbone');

var SidebarComponent = Backbone.View.extend({

	el: "#sidebar",

	template: _.template(require('./templates/sidebar.html')),

	initialize: function() {
		this.showing = true;
	},

	render: function(data) {
		this.el.innerHTML = this.template(data);
	},

	events: {
		"click #toggle-sidebar": "slideSidebar"
	},

	slideSidebar: function() {

		this.showing = !this.showing;
		console.log(this.$el.outerWidth())
		if(this.showing){
			this.$el.css("right", 0);
			this.$el.find("#toggle-sidebar").html("HIDE");
		}
		else{
			this.$el.css("right", -1 * this.$el.outerWidth());
			this.$el.find("#toggle-sidebar").html("SHOW");
		}

	}

});

module.exports = SidebarComponent;