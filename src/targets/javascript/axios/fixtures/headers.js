import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {
    accept: 'application/json',
    'x-foo': 'Bar',
    'x-bar': 'Foo',
    'quoted-value': '"quoted" \'string\''
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}