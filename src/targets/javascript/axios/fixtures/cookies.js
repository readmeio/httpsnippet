import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://httpbin.org/cookies',
  headers: {cookie: 'foo=bar; bar=baz'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}