const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('POST', 'https://httpbin.org/anything');
=======
const req = unirest('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.headers({
  'content-type': 'application/json'
});

req.type('json');
req.send({
  foo: null
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});