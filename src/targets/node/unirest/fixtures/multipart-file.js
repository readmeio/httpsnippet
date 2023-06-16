const fs = require('fs');
const unirest = require('unirest');

<<<<<<< HEAD
const req = unirest('POST', 'https://httpbin.org/anything');
=======
const req = unirest('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master

req.headers({
  'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
});

req.multipart([
  {
<<<<<<< HEAD
    body: fs.createReadStream('src/fixtures/files/hello.txt'),
=======
    body: fs.createReadStream('test/fixtures/files/hello.txt'),
>>>>>>> upstream/master
    'content-type': 'text/plain'
  }
]);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});