const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

const encodedParams = new URLSearchParams();
encodedParams.set('foo', 'bar');
encodedParams.set('hello', 'world');

<<<<<<< HEAD
const url = 'https://httpbin.org/anything';
=======
const url = 'http://mockbin.com/har';
>>>>>>> upstream/master
const options = {
  method: 'POST',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  body: encodedParams
};

<<<<<<< HEAD
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
=======
try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
