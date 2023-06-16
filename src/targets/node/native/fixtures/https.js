const http = require('https');

const options = {
<<<<<<<< HEAD:src/targets/node/native/fixtures/custom-method.js
  method: 'PROPFIND',
  hostname: 'httpbin.org',
  port: null,
  path: '/anything',
========
  method: 'GET',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
>>>>>>>> upstream/master:src/targets/node/native/fixtures/https.js
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