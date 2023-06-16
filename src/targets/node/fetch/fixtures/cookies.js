const fetch = require('node-fetch');

<<<<<<< HEAD
const url = 'https://httpbin.org/cookies';
const options = {method: 'GET', headers: {cookie: 'foo=bar; bar=baz'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
=======
const url = 'http://mockbin.com/har';
const options = {method: 'POST', headers: {cookie: 'foo=bar; bar=baz'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
