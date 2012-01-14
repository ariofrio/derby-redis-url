var url = require('url');

module.exports.fromURL = function(redis_url) {
  var parsed = url.parse(redis_url || process.env.REDIS_URL || 'redis://localhost:6379');
  var parsedAuth = (parsed.auth || '').split(':');

  var redisOptions = {'host': parsed.hostname, 'port': parsed.port};

  var db, password;
  if(db = parsedAuth[0]) {
    redisOptions['db'] = db;
  }
  if(password = parsedAuth[1]) {
    redisOptions['password'] = password;
  }
  return redisOptions;
};