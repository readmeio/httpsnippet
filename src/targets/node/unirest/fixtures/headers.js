const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('GET', 'https://httpbin.org/headers');
=======
const req = unirest('GET', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.headers({
  accept: 'application/json',
  'x-foo': 'Bar',
<<<<<<< HEAD
  'x-bar': 'Foo'
=======
  'quoted-value': '"quoted" \'string\''
>>>>>>> upstream/master
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});