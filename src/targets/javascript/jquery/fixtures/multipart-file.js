const form = new FormData();
<<<<<<< HEAD
form.append('foo', 'src/fixtures/files/hello.txt');
=======
form.append('foo', 'test/fixtures/files/hello.txt');
>>>>>>> upstream/master

const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  method: 'POST',
  headers: {},
  processData: false,
  contentType: false,
  mimeType: 'multipart/form-data',
  data: form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});