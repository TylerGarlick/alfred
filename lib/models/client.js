'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;


var ClientSchema = new Schema({

  createdAt: { type: Date, default: new Date(), required: true }
});

module.exports = Mongoose.model('Client', ClientSchema);