const fs = require('fs');
const request = require('request');

const options = {
  method: 'POST',
  url: 'https://httpbin.org/anything',
  headers: {'content-type': 'multipart/form-data; boundary=---011000010111000001101001'},
  formData: {
    foo: {
<<<<<<< HEAD
      value: fs.createReadStream('src/fixtures/files/hello.txt'),
      options: {filename: 'src/fixtures/files/hello.txt', contentType: 'text/plain'}
=======
      value: fs.createReadStream('hello.txt'),
      options: {filename: 'hello.txt', contentType: 'text/plain'}
>>>>>>> upstream/master
    },
    bar: 'Bonjour le monde'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});