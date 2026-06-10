import axios from 'axios';

const options = {method: 'PROPFIND', url: 'https://httpbin.org/anything'};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}