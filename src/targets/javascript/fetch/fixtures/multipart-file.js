<<<<<<< HEAD
const form = new FormData();
form.append('foo', 'src/fixtures/files/hello.txt');
=======
const url = 'http://mockbin.com/har';
const form = new FormData();
form.append('foo', 'test/fixtures/files/hello.txt');
>>>>>>> upstream/master

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
