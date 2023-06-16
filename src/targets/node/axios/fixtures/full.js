<<<<<<< HEAD
const axios = require('axios');
=======
const axios = require('axios').default;
>>>>>>> upstream/master
const { URLSearchParams } = require('url');

const encodedParams = new URLSearchParams();
encodedParams.set('foo', 'bar');

const options = {
  method: 'POST',
<<<<<<< HEAD
  url: 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value',
=======
  url: 'http://mockbin.com/har',
  params: {foo: ['bar', 'baz'], baz: 'abc', key: 'value'},
>>>>>>> upstream/master
  headers: {
    cookie: 'foo=bar; bar=baz',
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: encodedParams,
};

<<<<<<< HEAD
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
=======
try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
