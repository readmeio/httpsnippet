const FormData = require('form-data');
const fetch = require('node-fetch');
const formData = new FormData();

formData.append('foo', 'bar');

<<<<<<< HEAD:__tests__/__fixtures__/output/node/fetch/multipart-form-data.js
const url = 'https://httpbin.org/anything';
const options = {method: 'POST'};
=======
let url = 'http://mockbin.com/har';

let options = {method: 'POST'};
>>>>>>> upstream/master:src/targets/node/fetch/fixtures/multipart-form-data.js

options.body = formData;

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));