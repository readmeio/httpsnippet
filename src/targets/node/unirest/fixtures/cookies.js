const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('GET', 'https://httpbin.org/cookies');

const CookieJar = unirest.jar();
CookieJar.add('foo=bar', 'https://httpbin.org/cookies');
CookieJar.add('bar=baz', 'https://httpbin.org/cookies');
=======
const req = unirest('POST', 'http://mockbin.com/har');

const CookieJar = unirest.jar();
CookieJar.add('foo=bar', 'http://mockbin.com/har');
CookieJar.add('bar=baz', 'http://mockbin.com/har');
>>>>>>> upstream/master
req.jar(CookieJar);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});