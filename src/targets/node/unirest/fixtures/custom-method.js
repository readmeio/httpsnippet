const unirest = require('unirest');

<<<<<<< HEAD:__tests__/__fixtures__/output/node/unirest/custom-method.js
const req = unirest("PROPFIND", "https://httpbin.org/anything");
=======
const req = unirest('GET', 'https://mockbin.com/har');
>>>>>>> upstream/master:src/targets/node/unirest/fixtures/https.js

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});