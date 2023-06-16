<<<<<<< HEAD
=======
const url = 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value';
>>>>>>> upstream/master
const options = {
  method: 'POST',
  headers: {
    cookie: 'foo=bar; bar=baz',
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({foo: 'bar'})
};

<<<<<<< HEAD
fetch('https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value', options)
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
