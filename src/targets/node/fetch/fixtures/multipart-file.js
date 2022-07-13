const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');
const formData = new FormData();

formData.append('foo', fs.createReadStream('__tests__/__fixtures__/files/hello.txt'));

<<<<<<< HEAD:__tests__/__fixtures__/output/node/fetch/multipart-file.js
const url = 'https://httpbin.org/anything';
const options = {method: 'POST'};
=======
let url = 'http://mockbin.com/har';

let options = {method: 'POST'};
>>>>>>> upstream/master:src/targets/node/fetch/fixtures/multipart-file.js

options.body = formData;

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));