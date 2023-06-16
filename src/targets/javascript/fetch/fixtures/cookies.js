<<<<<<< HEAD
const options = {method: 'GET', headers: {cookie: 'foo=bar; bar=baz'}};

fetch('https://httpbin.org/cookies', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
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
