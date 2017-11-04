const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
  routes: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['token']
    }
  }
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    const data = {};
    reply(data);
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
