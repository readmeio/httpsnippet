const request = require('request');

const jar = request.jar();
<<<<<<< HEAD
jar.setCookie(request.cookie('foo=bar'), 'https://httpbin.org/cookies');
jar.setCookie(request.cookie('bar=baz'), 'https://httpbin.org/cookies');

const options = {method: 'GET', url: 'https://httpbin.org/cookies', jar: jar};
=======
jar.setCookie(request.cookie('foo=bar'), 'http://mockbin.com/har');
jar.setCookie(request.cookie('bar=baz'), 'http://mockbin.com/har');

const options = {method: 'POST', url: 'http://mockbin.com/har', jar: jar};
>>>>>>> upstream/master

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});