import axios from 'axios';

const form = new FormData();
<<<<<<< HEAD
form.append('foo', 'src/fixtures/files/hello.txt');

const options = {
  method: 'POST',
  url: 'https://httpbin.org/anything',
=======
form.append('foo', 'test/fixtures/files/hello.txt');

const options = {
  method: 'POST',
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  headers: {'content-type': 'multipart/form-data; boundary=---011000010111000001101001'},
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
