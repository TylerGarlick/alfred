'use strict';
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;

var TrainingRoleSchema = new Schema({
  organization: { type: ObjectId, ref: 'Organization', required: true },
  training: { type: ObjectId, ref: 'Training', required: true },
  occurredAt: { type: Date, default: new Date() },
  attendees: [
    {
      firstName: { type: String, required: true  },
      lastName: { type: String, required: true }
    }
  ]
});

module.exports = Mongoose.model('TrainingRole', TrainingRoleSchema);