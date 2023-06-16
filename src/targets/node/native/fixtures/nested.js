<<<<<<< HEAD
const http = require('https');

const options = {
  method: 'GET',
  hostname: 'httpbin.org',
  port: null,
  path: '/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value',
=======
const http = require('http');

const options = {
  method: 'GET',
  hostname: 'mockbin.com',
  port: null,
  path: '/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value',
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