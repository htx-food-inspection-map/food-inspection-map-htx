var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');

var VendorModel = require('../models/vendor');

var VendorCollection = Backbone.Collection.extend({

	model: VendorModel,

	url: './meta.json'
});

module.exports = VendorCollection;