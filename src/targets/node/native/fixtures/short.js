<<<<<<< HEAD
const http = require('https');

const options = {
  method: 'GET',
  hostname: 'httpbin.org',
  port: null,
  path: '/anything',
=======
const http = require('http');

const options = {
  method: 'GET',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
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