import axios from 'axios';

const options = {
  method: 'POST',
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
  headers: {'Content-Type': 'multipart/form-data'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
=======
  url: 'http://mockbin.com/har',
  headers: {'Content-Type': 'multipart/form-data'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
