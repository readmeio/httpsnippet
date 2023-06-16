import axios from 'axios';

const options = {
<<<<<<< HEAD
  method: 'GET',
  url: 'https://httpbin.org/cookies',
  headers: {cookie: 'foo=bar; bar=baz'}
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
  method: 'POST',
  url: 'http://mockbin.com/har',
  headers: {cookie: 'foo=bar; bar=baz'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
