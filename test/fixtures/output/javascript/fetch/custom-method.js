const options = {method: 'PROPFIND', headers: {}};

fetch('http://mockbin.com/har', options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
