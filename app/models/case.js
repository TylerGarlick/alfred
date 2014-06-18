'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId;


var CaseSchema = new Schema({
  clients: [
    {
      type: ObjectId,
      ref: 'Client'
    }
  ]
});

module.exports = Mongoose.model('Case', CaseSchema);