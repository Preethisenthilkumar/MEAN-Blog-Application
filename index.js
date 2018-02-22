const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err) {
		console.log('could not connect' , err);
	}else {
		console.log(config.secret);
		console.log('connected to database: '+ config.db);
	}
});

app.get('*', (req, res) => {
  res.send('Hello world');
});

app.listen(8080, () => {
	console.log('Lis on 8080');
});

