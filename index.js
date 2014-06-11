'use strict';
var Hapi = require('hapi');

var port = process.env.PORT || 3000;
var server = new Hapi.Server(port, { files: { relativeTo: __dirname } });

server.route([
  { method: 'GET', path: '/{path*}', handler: { directory: { path: './public', listing: true } } }
]);

server.start();