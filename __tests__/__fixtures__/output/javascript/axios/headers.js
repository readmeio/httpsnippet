import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {accept: 'text/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});