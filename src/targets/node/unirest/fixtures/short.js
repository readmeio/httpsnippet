const unirest = require('unirest');

<<<<<<< HEAD:__tests__/__fixtures__/output/node/unirest/short.js
const req = unirest("GET", "https://httpbin.org/anything");
=======
const req = unirest('GET', 'http://mockbin.com/har');
>>>>>>> upstream/master:src/targets/node/unirest/fixtures/short.js

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});