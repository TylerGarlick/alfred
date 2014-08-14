'use strict';

var Mongoose = require('mongoose')
  , NConf = require('nconf').argv().env().file({ file: 'lib/config/settings.json' });

var url = NConf.get('db');

Mongoose.connect(url);
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('Connected to mongoose at: ' + url);
});

module.exports = db;