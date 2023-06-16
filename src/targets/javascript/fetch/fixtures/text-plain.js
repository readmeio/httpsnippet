<<<<<<< HEAD
const options = {method: 'POST', headers: {'content-type': 'text/plain'}, body: 'Hello World'};

fetch('https://httpbin.org/anything', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
=======
const url = 'http://mockbin.com/har';
const options = {method: 'POST', headers: {'content-type': 'text/plain'}, body: 'Hello World'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
