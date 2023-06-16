const FormData = require('form-data');
const fetch = require('node-fetch');
<<<<<<< HEAD
const formData = new FormData();

formData.append('foo', 'bar');

const url = 'https://httpbin.org/anything';
const options = {method: 'POST'};

options.body = formData;

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
=======

const formData = new FormData();
formData.append('foo', 'bar');

const url = 'http://mockbin.com/har';
const options = {method: 'POST'};
options.body = formData;

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
