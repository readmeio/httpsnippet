const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');
const formData = new FormData();

<<<<<<< HEAD:__tests__/__fixtures__/output/node/fetch/multipart-data.js
formData.append('foo', fs.createReadStream('__tests__/__fixtures__/files/hello.txt'));
formData.append('bar', 'Bonjour le monde');

const url = 'https://httpbin.org/anything';
const options = {method: 'POST'};
=======
formData.append('foo', fs.createReadStream('hello.txt'));
formData.append('bar', 'Bonjour le monde');

let url = 'http://mockbin.com/har';

let options = {method: 'POST'};
>>>>>>> upstream/master:src/targets/node/fetch/fixtures/multipart-data.js

options.body = formData;

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));