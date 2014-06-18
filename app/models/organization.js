'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;

var OrganizationSchema = new Schema({
  name: { type: String, unique: true, required: true },
  active: { type: Boolean, default: true },

  users: [
    {
      type: ObjectId,
      ref: 'User'
    }
  ],

  settings: {
    shelter: {
      totalBeds: { type: Number, min: 0, default: 0 }
    }
  }

});

module.exports = Mongoose.model('Organization', OrganizationSchema);