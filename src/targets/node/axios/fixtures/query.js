<<<<<<< HEAD
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value'
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
  params: {foo: ['bar', 'baz'], baz: 'abc', key: 'value'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
