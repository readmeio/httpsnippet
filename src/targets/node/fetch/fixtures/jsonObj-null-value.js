const fetch = require('node-fetch');

<<<<<<< HEAD
const url = 'https://httpbin.org/anything';
const options = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({foo: null})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
=======
const url = 'http://mockbin.com/har';
const options = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: '{"foo":null}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
