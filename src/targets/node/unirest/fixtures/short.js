const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('GET', 'https://httpbin.org/anything');
=======
<<<<<<<< HEAD:src/targets/node/unirest/fixtures/http-insecure.js
const req = unirest('GET', 'http://httpbin.org/anything');
========
const req = unirest('GET', 'http://mockbin.com/har');
>>>>>>>> upstream/master:src/targets/node/unirest/fixtures/short.js
>>>>>>> upstream/master

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});