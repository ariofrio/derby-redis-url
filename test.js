var assert = require('assert');
var redis = require('./index');

if(!process.env.REDIS_URL) {
  assert.deepEqual(redis.fromURL(), {port: 6379, host: 'localhost'});
} else {
  console.warn("could not test default value because of environmental variable REDIS_URL");
}
assert.deepEqual(redis.fromURL("redis://redistogo:12345ff@one.redistogo.com:9876/"), {port: 9876, host: 'one.redistogo.com', password: '12345ff', db: 'redistogo'});
