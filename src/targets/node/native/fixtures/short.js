const http = require('https');

const options = {
<<<<<<< HEAD:__tests__/__fixtures__/output/node/native/short.js
  "method": "GET",
  "hostname": "httpbin.org",
  "port": null,
  "path": "/anything",
  "headers": {}
=======
  method: 'GET',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
  headers: {}
>>>>>>> upstream/master:src/targets/node/native/fixtures/https.js
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