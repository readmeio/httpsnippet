const unirest = require('unirest');

const req = unirest('POST', 'https://httpbin.org/anything');

req.headers({
  'content-type': 'application/json'
});

req.type('json');
req.send({
  foo: 'bar'
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});