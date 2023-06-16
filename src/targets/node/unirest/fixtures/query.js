const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('GET', 'https://httpbin.org/anything');
=======
const req = unirest('GET', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.query({
  foo: [
    'bar',
    'baz'
  ],
  baz: 'abc',
  key: 'value'
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});