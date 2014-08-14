'use strict';

var Sessions = require('../controllers/sessions');

module.exports.setup = function (server) {

  // Sessions
  server.route(Sessions.post);


  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: { directory: { path: './public', listing: true } }
  });

};
