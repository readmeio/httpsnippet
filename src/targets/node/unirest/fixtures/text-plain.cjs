const unirest = require('unirest');

const req = unirest('POST', 'https://httpbin.org/anything');

req.headers({
  'content-type': 'text/plain'
});

req.send('Hello World');

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});