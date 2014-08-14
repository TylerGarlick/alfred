'use strict';

var Joi = require('joi');


module.exports.post = {
  method: 'POST',
  path: '/v1/sessions',
  handler: function (request, reply) {
    console.log(request);
    reply('Hello World');
  },

  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
      }
    }
  }
};