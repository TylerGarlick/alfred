'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;


var SessionSchema = new Schema({

});

module.exports = Mongoose.model('Session', SessionSchema);
