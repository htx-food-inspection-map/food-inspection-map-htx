var _ = require('lodash');
var Backbone = require('backbone');

var FilterComponent = Backbone.View.extend({

	el: '#filter',

	template: _.template(require('./templates/filter.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
	}
});

module.exports = FilterComponent;