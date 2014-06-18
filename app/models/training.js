'use strict';
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;

var TrainingSchema = new Schema({
  user: { type: ObjectId, ref: 'User', required: true },

  kind: { type: ObjectId, ref: 'TrainingKind', required: true  },
  category: { type: String, enum: ['Educational', 'Professional'], default: 'Educational', required: true },
  startDate: {type: Date, required: true  },
  endDate: { type: Date, required: true  },

  notes: { type: String }

});

module.exports = Mongoose.model('Training', TrainingSchema);