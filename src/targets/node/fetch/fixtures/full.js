const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

const encodedParams = new URLSearchParams();
encodedParams.set('foo', 'bar');

<<<<<<< HEAD
const url = 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value';
=======
const url = 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value';
>>>>>>> upstream/master
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
    cookie: 'foo=bar; bar=baz'
  },
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
