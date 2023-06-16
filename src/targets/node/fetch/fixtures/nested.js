const fetch = require('node-fetch');

<<<<<<< HEAD
const url = 'https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value';
const options = {method: 'GET'};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
=======
const url = 'http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
