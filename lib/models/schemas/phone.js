'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;


module.exports = new Schema({
  type: { type: String, enum: ['Home', 'Office', 'Mobile', 'Fax', 'Other'], default: 'Home'},
  phoneNumber: { type: String, require: true },
  isSafe: { type: Boolean, default: true }
});
