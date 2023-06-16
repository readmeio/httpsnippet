import axios from 'axios';

const options = {
  method: 'POST',
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  headers: {'content-type': 'application/json'},
  data: {foo: null}
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
