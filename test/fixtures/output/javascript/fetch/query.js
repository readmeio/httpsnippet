const options = {method: 'GET', headers: {}};

fetch('http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value', options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
