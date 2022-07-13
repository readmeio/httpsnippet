<<<<<<< HEAD:__tests__/__fixtures__/output/node/native/custom-method.js
const http = require("https");

const options = {
  "method": "PROPFIND",
  "hostname": "httpbin.org",
  "port": null,
  "path": "/anything",
  "headers": {}
=======
const http = require('http');

const options = {
  method: 'PROPFIND',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
  headers: {}
>>>>>>> upstream/master:src/targets/node/native/fixtures/custom-method.js
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