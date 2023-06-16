<<<<<<< HEAD
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://httpbin.org/anything',
=======
const axios = require('axios').default;

const options = {
  method: 'POST',
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  headers: {'content-type': 'text/plain'},
  data: 'Hello World'
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
