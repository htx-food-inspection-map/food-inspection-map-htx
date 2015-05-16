var _ = require('lodash');
var Backbone = require('backbone');

var SortComponent = Backbone.View.extend({

	el: '#sort',

	template: _.template(require('./templates/sort.html')),

	render: function(data) {
		this.el.innerHTML = this.template(data);
	}
});

module.exports = SortComponent;