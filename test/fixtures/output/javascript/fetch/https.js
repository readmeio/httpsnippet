const options = {method: 'GET', headers: {}};

fetch('https://mockbin.com/har', options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
