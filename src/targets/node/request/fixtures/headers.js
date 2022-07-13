const request = require('request');

const options = {
  method: 'GET',
<<<<<<< HEAD:__tests__/__fixtures__/output/node/request/headers.js
  url: 'https://httpbin.org/headers',
  headers: {accept: 'text/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
=======
  url: 'http://mockbin.com/har',
  headers: {accept: 'application/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
>>>>>>> upstream/master:src/targets/node/request/fixtures/headers.js
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});