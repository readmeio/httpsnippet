const fetch = require('node-fetch');

<<<<<<< HEAD:__tests__/__fixtures__/output/node/fetch/multipart-form-data-no-params.js
const url = 'https://httpbin.org/anything';
const options = {method: 'POST', headers: {'Content-Type': 'multipart/form-data'}};
=======
let url = 'http://mockbin.com/har';

let options = {method: 'POST', headers: {'Content-Type': 'multipart/form-data'}};
>>>>>>> upstream/master:src/targets/node/fetch/fixtures/multipart-form-data-no-params.js

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));