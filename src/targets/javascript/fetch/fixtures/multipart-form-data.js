<<<<<<< HEAD
=======
const url = 'http://mockbin.com/har';
>>>>>>> upstream/master
const form = new FormData();
form.append('foo', 'bar');

const options = {method: 'POST'};

options.body = form;

<<<<<<< HEAD
fetch('https://httpbin.org/anything', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
=======
try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
