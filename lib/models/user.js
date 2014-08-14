'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Types.ObjectId
  , Address = require('./schemas/address')
  , Phone = require('./schemas/phone')
  , Bcrypt = require('bcrypt')
  , SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  password: {type: String },
  active: { type: Boolean, default: true },

  addresses: [Address],
  phones: [Phone],

  roles: {
    admin: { type: Boolean, default: false },
    outreach: { type: Boolean, default: false },
    volunteer: { type: Boolean, default: false }
  },

  organization: { type: ObjectId, ref: 'Organization'},
  administrator: { type: Boolean, default: false }
});

UserSchema.pre('save', function (next) {
  var self = this;
  if (!self.isModified('password')) return next();
  Bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    Bcrypt.hash(self.password, salt, function (err, hash) {
      if (err) return next(err);
      self.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  Bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = Mongoose.model('User', UserSchema);