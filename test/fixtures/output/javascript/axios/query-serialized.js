import axios from "axios";

const options = {
  method: 'GET',
  url: 'http://mockbin.com/har',
  params: {
    startTime: '2019-06-13T19%3A08%3A25.455Z',
    endTime: '2015-09-15T14%3A00%3A12-04%3A00'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
