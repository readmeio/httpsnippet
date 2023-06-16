import axios from 'axios';

const form = new FormData();
form.append('foo', 'bar');

const options = {
  method: 'POST',
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  headers: {'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'},
  data: '[form]'
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
