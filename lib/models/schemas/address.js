'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;


module.exports = new Schema({

  name: { type: String, required: true, default: 'Home' },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },

  county: {type: String },

  geo: {
    longitude: { type: Number },
    latitude: { type: Number }
  },

  isSafe: { type: Boolean, default: false }

});