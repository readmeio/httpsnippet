import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://httpbin.org/anything',
  params: {
    startTime: '2019-06-13T19%3A08%3A25.455Z',
    endTime: '2015-09-15T14%3A00%3A12-04%3A00'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));