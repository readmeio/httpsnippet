<<<<<<< HEAD
const http = require('https');

const options = {
<<<<<<<< HEAD:src/targets/node/native/fixtures/custom-method.js
  method: 'PROPFIND',
=======
const http = require('http');

const options = {
<<<<<<<< HEAD:src/targets/node/native/fixtures/http-insecure.js
  method: 'GET',
>>>>>>> upstream/master
  hostname: 'httpbin.org',
  port: null,
  path: '/anything',
========
<<<<<<< HEAD
  method: 'GET',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
>>>>>>>> upstream/master:src/targets/node/native/fixtures/https.js
=======
  method: 'PROPFIND',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
>>>>>>>> upstream/master:src/targets/node/native/fixtures/custom-method.js
>>>>>>> upstream/master
  headers: {}
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();