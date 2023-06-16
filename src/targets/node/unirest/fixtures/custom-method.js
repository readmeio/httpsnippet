const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('PROPFIND', 'https://httpbin.org/anything');
=======
const req = unirest('PROPFIND', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});