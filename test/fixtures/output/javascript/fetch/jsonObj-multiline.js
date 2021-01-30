const options = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: '{"foo":"bar"}'
};

fetch('http://mockbin.com/har', options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
