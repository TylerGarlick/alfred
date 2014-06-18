'use strict';
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;


var TrainingKindSchema = new Schema({
  name: { type: String, unique: true, required: true  },
  parent: { type: ObjectId, ref: 'TrainingKind' },
  active: { type: Boolean, default: true }
});


module.exports = Mongoose.model('TrainingKind', TrainingKindSchema);