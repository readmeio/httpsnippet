const fs = require('fs');
const request = require('request');

const options = {
  method: 'POST',
  url: 'https://httpbin.org/anything',
  headers: {'content-type': 'multipart/form-data; boundary=---011000010111000001101001'},
  formData: {
    foo: {
<<<<<<< HEAD:__tests__/__fixtures__/output/node/request/multipart-data.js
      value: fs.createReadStream('__tests__/__fixtures__/files/hello.txt'),
      options: {filename: '__tests__/__fixtures__/files/hello.txt', contentType: 'text/plain'}
=======
      value: fs.createReadStream('hello.txt'),
      options: {filename: 'hello.txt', contentType: 'text/plain'}
>>>>>>> upstream/master:src/targets/node/request/fixtures/multipart-data.js
    },
    bar: 'Bonjour le monde'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});