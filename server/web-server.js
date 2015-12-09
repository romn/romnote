var config = require('config');
var expressApplication = require('./express-application');
var serverService = require(config.get('webServer.scheme') === 'https' ? 'https': 'http');

var webServer;

webServer = serverService.createServer(expressApplication);
webServer.listen(config.get('webServer.port'));
webServer.on('error', onError);
webServer.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = webServer.address();
  var bind = (typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port);
  console.log('Listening on ' + bind);
}

module.exports = webServer;
