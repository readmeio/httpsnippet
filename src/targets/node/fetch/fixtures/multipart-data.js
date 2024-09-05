import fs from 'fs';

const formData = new FormData();
formData.append('foo', await fs.openAsBlob('src/fixtures/files/hello.txt'));
formData.append('bar', 'Bonjour le monde');

const url = 'https://httpbin.org/anything';
const options = {method: 'POST', body: formData};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));