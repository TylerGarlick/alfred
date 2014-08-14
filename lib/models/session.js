'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId
  , Moment = require('moment');


var SessionSchema = new Schema({
  user: { type: ObjectId, ref: 'user', required: true },
  expiresAt: { type: Date, default: Moment().add('days', 1), required: true }
});

module.exports = Mongoose.model('Session', SessionSchema);
