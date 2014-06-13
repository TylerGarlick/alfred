'use strict';
var Hapi = require('hapi');

var port = process.env.PORT || 3000;
var server = new Hapi.Server(port, { cors: true, files: { relativeTo: __dirname } });

server.route([
  { method: 'GET', path: '/{path*}', handler: { directory: { path: './public', listing: true } } }
]);

server.pack.register([
  { plugin: require('lout') },
  { plugin: require('good'),
    options: {
      subscribers: {
        'console': ['ops', 'request', 'log', 'error'],
        'http://localhost/logs': ['log'],
        '/tmp/logs/': ['request', 'log']
      }
    }
  }
], function () {
  server.start(function () {
    console.log('Server started at: ' + server.info.uri);
  });
});
