<<<<<<< HEAD:__tests__/__fixtures__/output/node/native/application-json.js
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "httpbin.org",
  "port": null,
  "path": "/anything",
  "headers": {
    "content-type": "application/json"
=======
const http = require('http');

const options = {
  method: 'POST',
  hostname: 'mockbin.com',
  port: null,
  path: '/har',
  headers: {
    'content-type': 'application/json'
>>>>>>> upstream/master:src/targets/node/native/fixtures/application-json.js
  }
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

req.write(JSON.stringify({
  number: 1,
  string: 'f"oo',
  arr: [1, 2, 3],
  nested: {a: 'b'},
  arr_mix: [1, 'a', {arr_mix_nested: {}}],
  boolean: false
}));
req.end();