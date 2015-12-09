var config = require('config');
var mongoose = require('mongoose');

var dbConf = config.get('database');
//var databaseUrl = dbConf.scheme + '://' + dbConf.user + ':' + dbConf.password + '@' + dbConf.host + ':' + dbConf.port + '/' + dbConf.name;
var databaseUrl = dbConf.scheme + '://' + dbConf.host + ':' + dbConf.port + '/' + dbConf.name;

mongoose.connect(databaseUrl);
mongoose.connection.on('error', console.error.bind(console.error, 'Connection to ' + databaseUrl + ' error'));
mongoose.connection.once('open', console.log.bind(console.log, 'Connection to ' + databaseUrl + ' set up'));
