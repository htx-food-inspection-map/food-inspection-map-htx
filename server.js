var path = require('path');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(express.static(path.join(__dirname + '/dist')));

app.get('/accounts/:id', function(req, res) {
	MongoClient.connect(process.env.MONGO_URL || require('./mongoConfig.js'), function(err, db) {
		if (err) console.log(err)

		var accounts = db.collection('accounts')

		accounts.findOne({
			id: req.params.id
		}, function(err, doc) {
			if (err) console.log(err)
			res.send(doc);
		})

	})

})

app.listen(process.env.PORT || '3000', function() {
	console.log('server up yo')
});