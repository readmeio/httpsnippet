<<<<<<< HEAD
=======
const url = 'http://mockbin.com/har';
>>>>>>> upstream/master
const options = {
  method: 'POST',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({foo: 'bar', hello: 'world'})
};

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
