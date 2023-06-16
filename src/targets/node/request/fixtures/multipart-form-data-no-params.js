const request = require('request');

const options = {
<<<<<<< HEAD
  method: 'POST',
  url: 'https://httpbin.org/anything',
  headers: {'Content-Type': 'multipart/form-data'}
=======
<<<<<<<< HEAD:src/targets/node/request/fixtures/headers.js
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {accept: 'application/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
========
  method: 'POST',
  url: 'http://mockbin.com/har',
  headers: {'Content-Type': 'multipart/form-data'}
>>>>>>>> upstream/master:src/targets/node/request/fixtures/multipart-form-data-no-params.js
>>>>>>> upstream/master
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});