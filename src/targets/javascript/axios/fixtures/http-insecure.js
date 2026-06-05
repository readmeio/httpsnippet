import axios from 'axios';

const options = {method: 'GET', url: 'http://httpbin.org/anything'};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}