const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('POST', 'https://httpbin.org/anything');
=======
const req = unirest('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.headers({
  'Content-Type': 'multipart/form-data'
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});