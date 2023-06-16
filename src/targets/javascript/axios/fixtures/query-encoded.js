import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://httpbin.org/anything',
  params: {
    startTime: '2019-06-13T19%3A08%3A25.455Z',
    endTime: '2015-09-15T14%3A00%3A12-04%3A00'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}