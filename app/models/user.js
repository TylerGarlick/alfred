'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;

var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true },
  password: {type: String },
  active: { type: Boolean, default: true },

  organization: { type: ObjectId, ref: 'Organization'},
  administrator: { type: Boolean, default: false }
});

module.exports = Mongoose.model('User', UserSchema);