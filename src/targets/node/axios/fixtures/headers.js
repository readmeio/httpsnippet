<<<<<<< HEAD
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {accept: 'application/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
=======
const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'http://mockbin.com/har',
  headers: {
    accept: 'application/json',
    'x-foo': 'Bar',
    'quoted-value': '"quoted" \'string\''
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
